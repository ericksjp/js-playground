# zip the source code for the lambda function
data "archive_file" "js_message_lambda_zip" {
    type = "zip"
    source_dir = "${path.module}/js/dist"
    output_path = "${path.module}/.terraform/src.zip"
    depends_on = [ null_resource.npm_build ]
}

# create a role for lambda execution
resource "aws_iam_role" "lambda_exec" {
    name = "js-lambda-role"
    assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
            {
                Action = "sts:AssumeRole"
                Effect = "Allow"
                Principal = {
                    Service = "lambda.amazonaws.com"
                },
                Sid: ""
            }
        ]
    })
}

# attach to the previvous role defined policy / add a lambda execution policy
resource "aws_iam_role_policy_attachment" "lambda_exec" {
    role       = aws_iam_role.lambda_exec.name
    policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# attach to the previvous role defined policy / add a bucket acess policy
resource "aws_iam_role_policy_attachment" "message_lambda_role_policy_attachment" {
    role       = aws_iam_role.lambda_exec.name
    policy_arn = aws_iam_policy.messages_bucket_access_lambda_policy.arn
}

# define lambda function
resource "aws_lambda_function" "js_message_lambda" {
    function_name = "js-message-lambda"
    role          = aws_iam_role.lambda_exec.arn
    handler       = "HandleMessage.handler"
    runtime       = "nodejs22.x"
    filename      = data.archive_file.js_message_lambda_zip.output_path
    source_code_hash = data.archive_file.js_message_lambda_zip.output_base64sha256
    environment {
        variables = {
            MESSAGES_BUCKET = aws_s3_bucket.messages_bucket.id
        }
    }
}

// run npm build when the npm_install is triggered
resource "null_resource" "npm_build" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    working_dir = "${path.module}/js"
    command = "npm run build"
  }

  depends_on = [ null_resource.npm_install ]
}

// run npm install when the package.json is altered
resource "null_resource" "npm_install" {
  triggers = {
    shell_hash = sha256(file("${path.module}/js/package.json"))
  }

  provisioner "local-exec" {
    working_dir = "${path.module}/js"
    command = "npm install"
  }
}

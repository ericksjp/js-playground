# create a acess policy to the bucket
resource "aws_iam_policy" "messages_bucket_access_lambda_policy" {
  name = "messages_bucket_access_lambda_policy"
  policy = jsonencode({
    Version : "2012-10-17",
    Statement : [
      {
        Action : [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject"
        ],
        Effect : "Allow",
        Resource = [
          "${aws_s3_bucket.messages_bucket.arn}/",
          "${aws_s3_bucket.messages_bucket.arn}/*"
        ]
      }
    ]
  })
}

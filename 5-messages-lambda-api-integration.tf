# integrate the gateway to the lambda function
resource "aws_apigatewayv2_integration" "messages_integration" {
  api_id = aws_apigatewayv2_api.messages_api.id // gateway
  integration_type = "AWS_PROXY" // gateway will act as a proxy
  integration_uri = aws_lambda_function.js_message_lambda.invoke_arn // lambda
  integration_method = "POST"
}

# get route
resource "aws_apigatewayv2_route" "get_messages_route" {
  api_id = aws_apigatewayv2_integration.messages_integration.id
  route_key = "GET /messages"
  target = "integrations/${aws_apigatewayv2_integration.messages_integration.id}"
}

# post route
resource "aws_apigatewayv2_route" "post_messages_route" {
  api_id = aws_apigatewayv2_integration.messages_integration.id
  route_key = "POST /messages"
  target = "integrations/${aws_apigatewayv2_integration.messages_integration.id}"
}

# permission for api gateway to invoke lambda
resource "aws_lambda_permission" "messages_api_lambda_permission" {
  statement_id = "AllowExecutionFromAPIGateway"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.js_message_lambda.function_name
  principal = "apigateway.amazonaws.com"
  source_arn = "${aws_apigatewayv2_api.messages_api.execution_arn}/*/*"
}

# output the api endpoint
output "messages_api_endpoint" {
  value = aws_apigatewayv2_api.messages_api.api_endpoint
}

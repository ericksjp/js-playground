# create a gateway
resource "aws_apigatewayv2_api" "messages_api" {
    name = "messages-api"
    protocol_type = "HTTP"
}

# create a stage thing
resource "aws_apigatewayv2_stage" "dev_stage" {
    api_id = aws_apigatewayv2_api.messages_api.id

    name = "dev"
    auto_deploy = true
}

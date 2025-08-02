terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.92"
    }
    random = {
        source = "hashicorp/random"
        version = "3.5.1"
    }
    archive = {
      source = "hashicorp/archive"
      version = "2.7.1"
    }
    null = {
      source = "hashicorp/null"
      version = "3.2.4"
    }
  }

  required_version = ">= 1.2"
}

provider "aws" {
    region = "us-east-2"
}

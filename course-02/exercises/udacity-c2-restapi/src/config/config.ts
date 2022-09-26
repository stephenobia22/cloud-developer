export const config = {
  "dev": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "postgres.cxe2zm2d2gai.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "steveudagram"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}

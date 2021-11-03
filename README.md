# lambda-integration-typescript

## Enviroment

```
$ aws --version
aws-cli/2.2.5 Python/3.8.8 Darwin/20.4.0 exe/x86_64 prompt/off

@ sam --version
SAM CLI, version 1.21.1

$ node -v
12.22.1

$  volta  -v
1.0.2
```

## Get Started

Create S3 Bucket on the us-east-1 region.
Rename `yarn deploy` 's `--s3-bucket` argument on the `template.yml`.

```
$ yarn build
$ yarn dev
```

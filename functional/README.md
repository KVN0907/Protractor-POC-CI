# VCC E2E Front end Test Repo.

Run e2e testing on frontend from this repo. No build is required.

Test target URL: https://app-dev.supplierpayments.com

## Installation Pre-requisites

You'll need Python (2.7 or 3.6 should work fine), and pip.  You will need the iam-docker-run python package installed, which is used to launch the application in Docker using your application's IAM role, in development from your laptop.

```shell
pip install iam-docker-run
```

## Usage - Docker Build

Build - Develop:

```shell
docker build -t vcc/frontend-e2e-vcc -f Dockerfile .
```

## Usage - Run Integration Test Mode

Run e2e Tests:

```shell
iam-docker-run --image vcc/frontend-e2e-vcc --aws-role-name bt-role-vcc-frontend-e2e-task --profile default   
```
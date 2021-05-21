#! /bin/bash

gcloud config configurations activate xtracts

rm -rf out/ &
gsutil -m rm gs://trx-web-static/** &
npm run build:export &&
gsutil -m cp -r out/* gs://trx-web-static

#!/bin/bash
 
token=$(curl -H "Content-Type: application/json" -X POST --data @"cloud_auth.json" https://xray.cloud.xpand-it.com/api/v1/authenticate| tr -d '"')
curl -H "Content-Type: application/json" -X GET -H "Authorization: Bearer $token" "https://xray.cloud.xpand-it.com/api/v1/export/cucumber?keys=$1" -o features.zip
 
rm -rf cypress/integration/featureFiles/*.feature
unzip -o features.zip -d cypress/integration/featureFiles
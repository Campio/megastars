#!/bin/sh
SCRIPT_PATH=$(cd "$(dirname "$0")"; pwd);
cd ${SCRIPT_PATH}/../
echo "coping files"
rsync -r ./scripts ./dist/
rsync ./package.json ./yarn.lock ./dist/

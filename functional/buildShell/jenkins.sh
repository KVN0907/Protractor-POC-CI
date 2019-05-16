#!/usr/bin/bash
#set -e

echo "=== Starting app"



npm test
if [ $? -eq 0 ]; then
 echo "=== See Protractor E2E Tests In Report"
    pwd
    dir
    echo "=== listing out contents of /app/reports/htmlReports"
    ls /app/reports/htmlReports
    echo "=== copying /reports/htmlReports to /finalresults"
	cd reports
	cp -R htmlReports /finalresults
	cp -a screenshots/. /finalresults/screenshots
    exit 0
elif [ $? -eq 1 ]
then
    echo "=== See Protractor E2E Tests In Report"
    pwd
    dir
    echo "=== listing out contents of /app/reports/htmlReports"
    ls /app/reports/htmlReports
    echo "=== copying /reports/htmlReports to /finalresults"
	cd reports
	cp -R htmlReports /finalresults
	cp -a screenshots/. /finalresults/screenshots
	exit 1
fi
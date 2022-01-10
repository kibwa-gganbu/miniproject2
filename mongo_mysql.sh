#!/bin/bash
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin

mongo < find_avg.sql

mongoexport -d test -c parking_avg -f floor,date,hour,avg_num --type=csv -o /Users/seonil/Desktop/workspace/miniproject2/parking.csv

db='mysql --local_infile=1 -u root -pQlalf679498 --database=gongju'
cat import_mysql.sql | $db

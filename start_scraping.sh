#!/bin/bash
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin

python3 /Users/seonil/Desktop/workspace/miniproject2/parking_scraper.py

mongoimport -d test -c gongju --headerline --type csv /Users/seonil/Desktop/workspace/miniproject2/gongju.csv


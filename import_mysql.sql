load data local infile '/data/gongju/parking.csv'
/*load data local infile '/data/gongju/past_11_12_data.csv'*/
into table parking
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

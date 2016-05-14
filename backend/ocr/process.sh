#!/bin/bash

for file in samples/*
do
	FILENAME=$(python split.py "$file")
	echo $FILENAME
	perl contrast_test.perl "$file" "$FILENAME"
	perl COG_calculator.perl "$FILENAME" >> results.txt
done

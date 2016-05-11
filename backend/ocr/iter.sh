#!/bin/bash

for file in ./hwsamples/*
do
	perl COG_calculator.perl "$file" >> results.txt
done

#!/bin/bash

for file in ./hwsamples/*
do
	FILENAME = python split.py
	perl COG_calculator.perl "$file" "$FILENAME"
done

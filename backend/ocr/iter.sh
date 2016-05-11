#!/bin/bash

for file in ./hwsample/*
do
	perl COG_calculator.perl "$file" >> results.txt

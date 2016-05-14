#!/usr/bin/perl
use warnings;
use strict;
use Image::Magick;
use Data::Dumper;
my $img = Image::Magick->new();
my $x = $img->Read($ARGV[0]);

push(@$img, $img->[0]->Clone());
$img->SigmoidalContrast(contrast => 3, 'mid-point' => 100);

$img->[1]->Write('output.png');

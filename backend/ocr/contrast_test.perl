#!/usr/bin/perl
use warnings;
use strict;
use Image::Magick;
use Data::Dumper;
my $img = Image::Magick->new();
my $x = $img->Read($ARGV[0]);

my $img_mono = $img->Clone();
$img_mono->Set(monochrome=>'True');
$img_mono->Write($ARGV[1]);

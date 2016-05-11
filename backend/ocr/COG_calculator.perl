#!/usr/bin/perl
use warnings;
use strict;
use Image::Magick;
use Data::Dumper;

my $Image = Image::Magick->new;
my $x = $Image->Read($ARGV[0]);
warn "$x" if "$x";

my $max_x = $Image->Get('columns');
my $max_y = $Image->Get('rows');

my $sum_x = 0;
my $sum_y = 0;
my $n_black = 0;

for (my $x = 0; $x < $max_x; $x++) {
	for (my $y = 0; $y < $max_y; $y++) {
		my @pixels = $Image->GetPixel(x=>$x,y=>$y);
		if ($pixels[0] == 1 && $pixels[1] == 1 && $pixels[2] == 1) {
			$sum_x += $x;
			$sum_y += $y;
			$n_black += 1;
		}
	}
}

my $cog_x = $sum_x/$n_black; # COG x coord
my $cog_y = $sum_y/$n_black; # COG y coord
my $quadrant = 0;

printf "File: %s\n", $ARGV[0];
printf "COG: %f,%f\n", $sum_x/$n_black, $sum_y/$n_black;

# quadrant detection

# if x <= max_x / 2 then it's in the left half
# if y <= max_y / 2 then it's in the top half

if ($cog_x > $max_x/2) { # right half
	if ($cog_y <= $max_y/2) { # top half 
		$quadrant = 1;		
	}
	else {
		$quadrant = 4;
	}
}

if ($cog_x <= $max_x/2) { # left half
	if ($cog_y <= $max_y/2) {
		$quadrant = 2;
	}
	else {
		$quadrant = 3;
	}
}


printf "Quadrant: %i\n", $quadrant;
printf "---";

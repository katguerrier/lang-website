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

my $min_fd_x = 0;
my $min_fd_y = 0;
my $max_fd_x = 0;
my $max_fd_y = 0;

for (my $x = 0; $x < $max_x; $x++) {
	for (my $y = 0; $y < $max_y; $y++) {
		my @pixels = $Image->GetPixel(x=>$x,y=>$y);
		if ($pixels[0] == 0 && $pixels[1] == 0 && $pixels[2] == 0) {
			$sum_x += $x;
			$sum_y += $y;
			$n_black += 1;

			if ($x > $max_fd_x) {
				$max_fd_x = $x;
			}
			if ($y > $max_fd_y) {
				$max_fd_y = $y;
			}

			if (($min_fd_x == 0 && $x != 0) || ($min_fd_x != 0 && $min_fd_x > $x)) {
				$min_fd_x = $x;
			}
			if (($min_fd_y == 0 && $y != 0) || ($min_fd_y != 0 && $min_fd_y > $y)) {
				$min_fd_y = $y;			
			}
		}
	}
}

my $cog_x = ($sum_x/$n_black) - $min_fd_x; # COG x coord, adjusted
my $cog_y = ($sum_y/$n_black) - $min_fd_y; # COG y coord
my $quadrant = 0;

printf "File: %s\n", $ARGV[0];
printf "COG: %.2f,%.2f\n", $cog_x, $cog_y;

# quadrant detection
my $len_x = $max_fd_x - $min_fd_x;
my $len_y = $max_fd_y - $min_fd_y;
printf "Length of X, length of Y: %.2f, %.2f\n", $len_x, $len_y;

if ($cog_x > $len_x/2) { # right half
	if ($cog_y <= $len_y/2) { # top half 
		$quadrant = 1;		
	}
	else {
		$quadrant = 4;
	}
}

if ($cog_x <= $len_x/2) { # left half
	if ($cog_y <= $len_y/2) {
		$quadrant = 2;
	}
	else {
		$quadrant = 3;
	}
}


printf "Quadrant: %i\n", $quadrant;
printf "Coords of bbox: (%.2f, %.2f); (%.2f, %.2f); (%.2f, %.2f); (%.2f, %.2f)\n" , $min_fd_x, $min_fd_y, $max_fd_x, $min_fd_y, $min_fd_x, $max_fd_y, $max_fd_x, $max_fd_y;
printf "---\n";

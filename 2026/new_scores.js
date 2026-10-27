"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var cdzScores = [  93.70, 114.20, 147.15, 111.40, 170.05, 115.50, 101.05 ];  // CeeDeez Nutz (Harrision) 
var pdbScores = [ 158.40, 137.30, 116.70, 114.95, 113.40, 105.45, 125.20 ];  // Please Don't be a Burden (Ross)
var cocScores = [ 157.30, 109.35, 144.20, 136.60, 147.85,  77.35, 123.00 ];  // Coco Browns (Andy)
var sodScores = [ 127.55,  86.90, 101.75, 100.45, 148.85, 110.10, 128.80 ];  // Steve-on Diggs (Reek) / Oh this is hard
var pymScores = [ 147.55, 146.95, 147.75, 119.90, 137.45, 103.80, 147.10 ];  // You got a Purdy Mouth (Matt) / Lean Green

var iceScores = [ 178.85, 118.75, 111.80, 125.25, 114.70, 137.30, 106.25 ];  // Iceotopes (John) / Its even harder
var porScores = [ 123.80, 120.50, 138.10, 148.95, 109.15,  95.65, 126.35 ];  // Pork  / I blame devin (Noah)
var nixScores = [  78.00, 111.75, 117.10,  88.70, 110.50,  83.00, 137.50 ];  // Nix UR Hopes (Steve M)
var bydScores = [  84.45, 127.45, 122.00, 181.25, 172.15, 106.50, 107.75 ];  // Bring out your dead (Daniel) / Steve is my worst nightmare
var fatScores = [ 156.70, 131.20, 127.75, 129.60, 156.10, 151.95, 132.45 ];  // Phat Bastards (Steve C) / Down goes Frazier


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var cdzPlayoffs = 0;  // CeeDeez Nutz (Harrision)
var pdbPlayoffs = 0;  // Please Don't be a Burden (Ross)
var cocPlayoffs = 0;  // Coco Browns (Andy)
var sodPlayoffs = 0;  // Steve-on Diggs (Reek)
var pymPlayoffs = 0;  // You Got a Purdy Mouth (Matt)

var icePlayoffs = 0;  // Iceotopes (John)
var porPlayoffs = 0;  // I Blame Devin / Porkchops (Noah)
var nixPlayoffs = 0;  // Nix UR Hopes (Steve M)
var bydPlayoffs = 0;  // Bring Out Your Dead (Daniel)
var fatPlayoffs = 0;  // Phat Bastards (Steve C)

// Weekly blah blah blah text...

var week0_txt = "Welcome to the 2026 Phantom League.";

var week1_txt = "And we're off on another exciting season of the PFL league. Was a pretty high scoring week, " +
                "well at least for most of us. Perhaps the most surprising good score was for the Phat " +
                "Bastards, fresh off that stellar 'F' draft grade. But don't despair about that, as according " +
                "to Yahoo, the Phat are now predicted to go winless the rest of the way, having got their one " +
                "win, ending the hopes of the Nix for a perfect season, of a predicted 1-13 season under " +
                "their belt.<br><br>Noahs use of a designiated drafter has them blaming Devin and going back to the drawing board " +
                "as they failed to melt the ice leading to a comfortable Topes win. Also, apparently there's " +
                "a shortage of dead people and seedy nuts as the two played to the weeks lowest two scores, " +
                "which allowed the Ceedeez to crack their way past the Dead.<br><br>Seems like a Burden was " +
                "dropped on the Diggies (is steve-on diggs something like press-on nails, pretty on the " +
                "outside, but prone to break?).The last matchup brought us big-boy fantasy ball, with " +
                "the highest scoring game of the week, but with Coco showing his opponent that you need more "  +
                "than just a pretty mouth!<br><br>";

var week2_txt = "In Italy. Five teams won, five teams lost. Yada Yada.<br><br>";

var week3_txt = "In Italy. Five teams won, five teams lost.<br><br>";

var week4_txt = "In Italy. Five teams won, five teams lost.<br><br>";

var week5_txt = "In Italy. Five teams won, five teams lost.<br><br>";
	    
var week6_txt = "In Maryland. Come on gang, It's just too easy is running away with it!<br><br>";

var week7_txt = "Well it took the high score of the week (that and the Fats two TEs thinking National Tight End Day meant" +
                "they had the day off) to do it but down goes Frazier (aka Bastards)! " +
                "That narrows down the standings a bit as the top 3 teams all went down!<br><br> ";

var week8_txt = "";

var week9_txt = "";

var week10_txt = "";

var week11_txt = "";

var week12_txt = "";

var week13_txt = "";

var week14_txt = "";

var week15_txt = "";


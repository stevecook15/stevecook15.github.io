"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var cdzScores = [  93.70 ];  // CeeDeez Nutz (Harrision) bel
var pdbScores = [ 158.40 ];  // Please Don't be a Burden (Ross)
var cocScores = [ 157.30 ];  // Coco Browns (Andy)
var sodScores = [ 127.55 ];  // Steve-on Diggs (Reek)
var pymScores = [ 147.55 ];  // You got a Purdy Mouth (Matt) aka Django Achane'd 

var iceScores = [ 178.85 ];  // Iceotopes (John)
var porScores = [ 123.80 ];  // Back the Drawing Board  / I blame devin (Noah)
var nixScores = [  78.00 ];  // Nix UR Hopes (Steve M)
var bydScores = [  84.45 ];  // Bring out your dead (Daniel)
var fatScores = [ 156.70 ];  // Phat Bastards (Steve C)


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
var porPlayoffs = 0;  // Back the Drawing Board / I Blame Devin / Porkchops (Noah)
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

var week2_txt = "";

var week3_txt = "";

var week4_txt = "";

var week5_txt = "";
	    
var week6_txt = "";

var week7_txt = "";

var week8_txt = "";

var week9_txt = "";

var week10_txt = "";

var week11_txt = "";

var week12_txt = "";

var week13_txt = "";

var week14_txt = "";

var week15_txt = "";


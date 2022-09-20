"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var cocScores = [ 131.00, 123.65 ];  // Coco Browns (Andy)
var fatScores = [ 132.40, 153.40 ];  // Fat Bastards (Steve)
var preScores = [ 148.55, 108.55 ];  // Predators (Joe)
var rolScores = [ 102.85, 189.50 ];  // Roll Tide (Daniel)
var seaScores = [ 100.35, 119.35 ];  // Seamen (Adam)

var iceScores = [ 113.75, 128.15 ];  // Iceotopes (John)
var jabScores = [ 142.85, 157.45 ];  // Najee By Nature  (Matt)
var belScores = [ 110.85, 126.30 ];  // Discount Belicheck (Harrision)
var porScores = [ 134.05,  85.70 ];  // Porkchops (Noah)
var tenScores = [ 142.90, 140.70 ];  // Tenacious Anus (Jacob)


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var cocPlayoffs = 0;  // Coco Browns (Andy)
var fatPlayoffs = 0;  // Fat Bastards (Steve)
var prePlayoffs = 0;  // Predators (Joe)
var rolPlayoffs = 0;  // Roll Tide (Daniel)
var seaPlayoffs = 0;  // Seamen (Adam)

var icePlayoffs = 0;  // Iceotopes (John)
var jabPlayoffs = 0;  // Najee By Nature  (Matt)
var belPlayoffs = 0;  // Discount Belicheck (Harrision)
var porPlayoffs = 0;  // Porkchops (Noah)
var tenPlayoffs = 0;  // Tenacious Anus (Jacob)


// Weekly blah blah blah text...

var week0_txt = "Welcome to the 2022 Phantom League.";

var week1_txt = "Welcome once again to the exciting PFL league for the 2022 season.  While we know you're all looking forward " +
                "to pulling down the venerable PFL Championship this year, sadly none of you will, as the Fat have a guaranteed " +
                "lock on that (at least on <i><b>this</b></i> web site. Don't care what that damn Yahoo site says..., what do they know anyway?) " +
                "Good luck to you all in securing second place! <br><br>Najee, Predators amd Anus all scored in the 140's and had comfortable wins, " +
		          "but the other two week 1 winners (Fat and Ice) had probably ended up pulling out (what remains of) their hair by the end of " +
                "the Hawks/Broncos game (Go Hawks!) as the both pulled out close wins with the Bastards cussing the PPR rule the whole way... " +
                "1 yard RB dumpoffs worth 1.1 pts??? Really?? Grumble, grumble, grumble...";

var week2_txt = "So apparently the secret to high scoring in the PFL is to not check your lineup and leave two open spots... and just Roll with " +
                "it scoring 189 points? Bastards! The Fat beat their projected score by 25 and still lose by 36? Or another way of looking " +
                "at it, two of the Tides players outscored the entire Chops lineup (and if your loser pool pick had the Pork being the " +
                "first team to not break a 100 for the year, you're a winner, winner, chicken dinner). The Bellys weren't complaining " +
                "though as their sad effort still chopped up a win against their bro!<br><br>Speaking of sad efforts, the Browns outdid " +
                "the Bellys by winning while scoring even less than the Bellys, taking out the Tators (who might be a little too dependent " +
                "on the Vikings). The remaining two matchups actually featured winning teams with good scores, Najee naturally beating " +
                "the Seaboys, and the Anus beat the Topes who lost despite their top 3 players scoring 83 points (which just has to Hurts!).<br>";


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


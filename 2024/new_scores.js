"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var iceScores = [ 103.25, 149.85, 173.30, 131.50 ];  // Iceotopes (John)
var belScores = [ 132.60, 131.30, 129.65, 108.90 ];  // Thats What Shaheed Said (Harrision) Discount Belicheck
var porScores = [ 160.70, 121.90, 108.35, 154.85 ];  // Porkchops (Noah)
var preScores = [ 113.10, 126.60, 102.95, 102.00 ];  // Predators (Joe) Arrested Development
var broScores = [ 105.30, 117.90, 143.05, 144.15 ];  // The Brotha's (Reek/Ross)

var cocScores = [ 118.40,  94.15, 102.35,  81.00 ];  // Coco Browns (Andy)
var fatScores = [ 117.30, 154.15, 146.25, 130.00 ];  // Phat Bastards (Steve C)
var nixScores = [  86.85, 124.45, 122.75, 122.00 ];  // Nix UR Hopes (Steve)
var aoaScores = [ 112.25,  87.55, 142.25, 101.65 ];  // The Age of APukalypse (Matt)
var wbdScores = [ 133.05, 111.95,  88.70, 126.30 ];  // Weapons of Bass Destruction (Daniel)


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var icePlayoffs = 0;  // Iceotopes (John)
var belPlayoffs = 0;  // Discount Belicheck (Harrision) TWSS
var porPlayoffs = 0;  // Porkchops (Noah)
var prePlayoffs = 0;  // Predators (Joe) Arrested Development
var broPlayoffs = 0;  // The Brotha's (Reek/Ross)

var cocPlayoffs = 0;  // Coco Browns (Andy)
var fatPlayoffs = 0;  // Phat Bastards (Steve)
var nixPlayoffs = 0;  // Nix UR Hopes (Steve)
var aoaPlayoffs = 0;  // Age Of APukalypse  (Matt)
var wbdPlayoffs = 0;  // Weapons of Bass Destruction (Daniel)


// Weekly blah blah blah text...

var week0_txt = "Welcome to the 2024 Phantom League.";

var week1_txt = "Well, week one is in the books and we've got five happy teams and five unhappy teams. Happiest of all " +
                "is the Porkys who set the high water mark, scoring close to 30 more points than everyone else.  The " +
                "unhappiest team is either the Porks opponent (Weapons of Tadpole Destruction) who had the second " +
                "highest score of the week and still lost, or the Nix No Hopes, where apparently Bo Nix sucks in both " +
                "real and fantasy football, leading to being the only team to not break 100 pts, losing to the very " +
                "beatable effort put up by the Flat Bastards.<br>";

var week2_txt = "Ya know, some weeks the matchups/results just don't create compelling witty repartee, that or the " +
                "humble narrator has writers block. The Topes put up the second highest score of the week, which unlike "+
                "last weeks result for the WBDs, led to a Ice win freezing the Puke solid. The Phat had the high score " +
                "for the week, outscoring the Brownies at almost every position battle to easily take home a win. " +
                "Nix apparently does have hope (when he plays Mahommes and not Nix at least), beating the WBDs. "+
                "The Porks stayed undefeated with a close win over the Bro's. And in the last matchup, She Sheds " +
                "three players in Monday nights game scored just enough points to overtake the Arrested with 3 " +
                "minutes left in the game, keeping both owners on their toes till the very end.<br>";

var week3_txt = "Well the Ice wasn't messing around this week, putting the undefeated Porkchops into the freezer " +
                "while roaring to the high score for the year, which also leads to the Ice to now owning the league " +
                "high average.  Good week for the Topes all in all. Another team having a pretty good week was the " +
                "Phat, being the bastards that they are, using the weeks second highest score to take out the undefeated " +
                "SheSaid, leaving the Phat as the last remaining undefeated team.<br><br>" +
                "On the other end of the spectrum two of the winless teams also had a good week, with the Bro's " +
                "stomping the ArrDevs, and in a battle where one of them was going to win, the Pukes left no " +
                "doubts, destroying the Weaponless Bath Construction, who now are the only winless team. Good " +
                "things there's a lot of season to go still.<br><br>And oh yeah, the Nix beat the Coco. Ho hum.<br>";


var week4_txt = "And then there were none. The last winless team finally pulled out some fish weapons and " +
                "arrested the development of their opponent. Symmetrically, the last undefeated team fell " +
                "Phlat in their attempt to melt the Topiarys (but oh so close going down to the last " +
                "possession of MNF!). Now just two games separates first from last.`<br><br>For the second " +
                "time in four weeks the Chops porked their way to the high score of the week (we won't " +
                "talk about the other two weeks) prematurely aging the Apukes. The UR said, uh uh to the " +
                "Sheheed Shells, nixing the their hopes.<br><br>And in the final matchup the Male Siblings " +
                "of the same mother stomped the brown out of the Cocos, now just the White Chocos...<br>"; 

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

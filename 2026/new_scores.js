"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var cdzScores = [  93.70, 114.20, 147.15, 111.40, 170.05, 115.50, 101.05, 114.65, 133.50, 145.45,  87.05 ];  // CeeDeez Nutz (Harrision) 
var pdbScores = [ 158.40, 137.30, 116.70, 114.95, 113.40, 105.45, 125.20, 134.05, 128.50, 131.00, 132.20 ];  // Please Don't be a Burden (Ross)
var cocScores = [ 157.30, 109.35, 144.20, 136.60, 147.85,  77.35, 123.00, 100.70, 124.55, 123.05, 113.30 ];  // Coco Browns (Andy)
var sodScores = [ 127.55,  86.90, 101.75, 100.45, 148.85, 110.10, 128.80, 149.00, 125.00, 137.55,  94.20 ];  // Face Sitting SoDiggs (Reek) / Oh this is hard
var pymScores = [ 147.55, 146.95, 147.75, 119.90, 137.45, 103.80, 147.10, 148.35, 104.30, 151.05, 141.35 ];  // You got a Purdy Mouth (Matt) / Gibbs you up

var iceScores = [ 178.85, 118.75, 111.80, 125.25, 114.70, 137.30, 106.25, 114.65, 130.85, 159.65, 158.85 ];  // Iceotopes (John) / Its even harder, Justin
var porScores = [ 123.80, 120.50, 138.10, 148.95, 109.15,  95.65, 126.35, 148.35, 154.30, 132.20, 155.10 ];  // Pork  / I blame devin (Noah)
var nixScores = [  78.00, 111.75, 117.10,  88.70, 110.50,  83.00, 137.50,  90.80, 127.75, 159.35, 120.60 ];  // Nix UR Hopes (Steve M)
var bydScores = [  84.45, 127.45, 122.00, 181.25, 172.15, 106.50, 107.75, 134.65, 122.80,  92.75.  88.95 ];  // Bring out your dead (Daniel) / Steve is my worst nightmare
var fatScores = [ 156.70, 131.20, 127.75, 129.60, 156.10, 151.95, 132.45, 109.25, 121.75, 120.30, 105.15 ];  // Phat Bastards (Steve C) / Rearraning deck chairs


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

var week8_txt = "Things are tightening up! Steve's worst nightmare (the Phat) apparently doesn't seem to be scaring them anymore " +
                "(wasn't that in Monsters Inc somewhere?) as they took down the deck hands easily. That would allow the Nutz to " +
                "move into a tie for first if their kicker can get a single point in the last 2.5 quarters monday night! Oops, no " +
                "such outcome as they ended up tied with the Even Harder leaving them in 2nd, atop their division.<br><br>" +
                "Blame Devin nixxed their opponent and Gibbs You shredded the Coconuts to move within a game of first place. And " +
                "then there's the Its a hard Burden matchup of that wasn't that hard as the Hard's opponent wasn't any kind " +
                "of burden at all.<br><br>";

var week9_txt = "The phat king is dead. Long live the seedy King. In the battle of the top two records it was nuts to think the fat " +
                "wasn't just melting down and circling the drain! The Gibbs did Gibbs themselves up, scoring 30 points under their " +
                "projection and we'll give Devin credit for icing their foe.<br><br>But we can blame Devin for being a burden to " +
                "opponent even though they asked nicely, moving the red hot blamers into a virtual tie with the drainers. The worst should " +
                "now be having nightmares about milk chocolate as the lost a close one. Lastly, apparently it is just this hard " +
                "as their hopes were nixxed!<br><br>So it's all a close jumble now. All ten teams are in the playoff hunt, and there's " +
                "five teams within a game of the new first place CeeDee Nutz and five teams within a game of last. Wow! And the previously " +
                "lordy Phat are left wondering if a 6-8 record will make the playoffs.<br><br>"

var week10_txt = "With only one matchup undecided Monday night the nations eyes turned to the epic matchup between the Coco Nots " +
                 "and the Unglorious Bastards who have been circling the drain for 4 weeks now. The Cocos trailed by 16 points " +
                 "but had one of the finest NFL running backs ever in the mighty D Henry against the 0-8 winless LA Chargers. " +
                 "Outcome not in doubt right? Yep, no problem, 10 yds rushing, 10 yds receiving and two TDs later the Coco " +
                 "completely flush the Fat down the drain.<br><br>In other news, " +
                 "three out of the four 3-6 teams won (limited by the fact two of the 3-6 teams played each other) and all the top " +
                 "teams lost, closing up the standings even further! Could be a craxy finish! <br><br>";

var week11_txt = "Strangely, for the second week in a row by the time MNF rolled around the only matchup still to be decided once " +
                 "again involved the Bastards. Not that they weren't continuing to circle the drain but watching to see how far " +
				 "into Mondays game would it take for the Nix to end the Batards hope.  Last week the Bastards lasted till the " +
				 "fourth quarter.  This week the pain and suffering settled in early in the second quarter allowing the Fat to " +
				 "head to bed early.   Quick Note: the bastards now have the longest winning streak of the year and tied for the " +
				 "for longest losing streak of the year (which they'll beat next week to concoct a perfect 6 win, 6 loss streak!).<br<br>" +
				 "As for the rest of the Yahoos, Blame Devin and Justin QB both won (over Coco and Dead respectively) to pass the " +
				 "fat into first and second place in the Sofa Squad div.  In the Brew Crew div, the Nutz's penchant for low scoring finally " +
				 "seems to be catching up to them, losing their seciond game in a row (to the Burdens this week) to drop out first, " +
				 "allowing the Gibbons to move into first after the trounced the Facers.<br><br>";

var week12_txt = "";

var week13_txt = "";

var week14_txt = "";

var week15_txt = "";


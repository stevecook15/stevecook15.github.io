"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var porScores = [ 151.00, 146.05 ];  // Porkchops (Noah)
var cocScores = [  81.60, 161.95 ];  // Coco Browns (Andy)
var mhcScores = [ 141.80, 107.95 ];  // Mile High Chubb  (Matt)
var preScores = [ 101.90, 113.15 ];  // Predators (Joe)
var steScores = [ 116.25, 114.55 ];  // Superbowl DB Steve's Team (Steve)

var fatScores = [ 124.05, 134.90 ];  // Phat Bastards (Steve C)
var iceScores = [ 133.60, 133.05 ];  // Iceotopes (John)
var belScores = [  96.50, 118.00 ];  // Discount Belicheck (Harrision)
var wbdScores = [  84.60, 142.00 ];  // Weapons of Bass Destruction (Daniel)
var rekScores = [ 100.80, 102.95 ];  // The Brotha's (Reek/Ross)


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var porPlayoffs = 0;  // Porkchops (Noah)
var cocPlayoffs = 0;  // Coco Browns (Andy)
var mhcPlayoffs = 0;  // Mile High Chub  (Matt)
var prePlayoffs = 0;  // Predators (Joe)
var stePlayoffs = 0;  // Steves Superbowl DB Team (Steve)

var fatPlayoffs = 0;  // Phat Bastards (Steve)
var icePlayoffs = 0;  // Iceotopes (John)
var belPlayoffs = 0;  // Discount Belicheck (Harrision)
var wbdPlayoffs = 0;  // Weapons of Bass Destruction (Daniel)
var rekPlayoffs = 0;  // The Brotha's (Reek/Ross)


// Weekly blah blah blah text...

var week0_txt = "Welcome to the 2023 Phantom League.";

var week1_txt = "And we're off. The cream rises quickly to the top as the draft king Chop's porked out on the Chocolates <i>(this early leader for largest " +
                "margin of victory prize, retail prize value: $0.00, could be hard to beat)</i>. If cream rises then something must settle to the " +
                "bottom of that churn too, as evidenced by several teams spoiled, nay, even rancid efforts.<br><br>Mile High Chubb's QB and defense " +
				    "scored nearly as many points as some teams totals (Coco and WBD, be reassured, we're not naming any names here, just pointing things out), " +
				    "much to the Bastards chagrin, who suffered that always favorite thing: highest score of the week to lose.<br><br>New comer SDBST surprised the Tators " +
				    "in a relatively high(???) affair, well in comparison to the another newcomers Brothers victory, with that awesome just barely 100 pts score, " +
                "over the Weapons of Mass Deflation.<br><br>And in the last, well yeah, okay, kinda dull here, move along, move along, matchup the Ice restocked " +
                "the Bellys inventory from the discount rack to the 'Clearance, Must go, No offer refused' rack.";


var week2_txt = "So, who among you called this one:  the two teams with the (way) lowest scores in week one had the first and third " +
                "highest scores this week (boy, that's really gonna spike their Volatility scores) as <b>WepBaDes</b> and this weeks top " +
                "morsel <b>Coco Brownies</b>, took out the unsuspecting <b>Ice</b> and <b>Preds</b>, who had probably mailed it in " + 
                "thinking they had gimmes!<br><br>The probable best team in the league <b>Pork Rinds</b> went salty on the <b>Bro's</b> " +
                "and <b>Superduper ABC Steve's Fantasy Football Incredibe, No, Really, Just Amazingly Awesome Team</b> snuck by the <b>Six " +
                "Inch High Chubsters</b> in the lowest scoring affair, but hey a wins a win.<br><br>And in the last matchup, the <b>Flat " +
                "Belly</b> affair, both teams had a defense left going into MNF but the Turds had a 17 pt lead going in... and a 17 pt lead " +
                "going out... marking the first time this year the Fats opponents defense didn't score 35 points! Whats that you say? It's only " +
                "week two? Well, then, never mind... <i>but still true</i> :-)<br>";

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

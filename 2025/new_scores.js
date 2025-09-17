"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var iceScores = [ 105.05, 107.20 ];  // Iceotopes (John)
var nixScores = [ 130.40, 114.50 ];  // Nix UR Hopes (Steve M)
var djaScores = [ 103.05, 155.95 ];  // Django Achane'd (Matt)   aoa
var jkrScores = [ 120.80, 103.90 ];  // John's Kryptonite (Reek)
var pmbScores = [ 105.95, 114.50 ];  // Pass me a Brewski (Ross)

var cocScores = [ 118.20, 151.15 ];  // Coco Browns (Andy)
var fatScores = [ 116.90, 101.85 ];  // Phat Bastards (Steve C)
var porScores = [ 129.55, 135.65 ];  // Porkchops (Noah)
var cdzScores = [  93.45, 139.05 ];  // CeeDeez Nutz (Harrision) bel
var wbdScores = [ 111.55, 116.85 ];  // Weapons of Bass Destruction (Daniel)



// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var icePlayoffs = 0;  // Iceotopes (John)
var nixPlayoffs = 0;  // Nix UR Hopes (Steve)
var djaPlayoffs = 0;  // Django Achane'd (Matt)
var jkrPlayoffs = 0;  // The Brotha's (Reek/Ross)  Comeback Miracle
var pmbPlayoffs = 0;  // Predators (Joe) Arrested Development

var cocPlayoffs = 0;  // Coco Browns (Andy)
var fatPlayoffs = 0;  // Phat Bastards (Steve)
var porPlayoffs = 0;  // Porkchops (Noah)
var cdzPlayoffs = 0;  // CeeDeez Nutz (Harrision) TWSSaid
var wbdPlayoffs = 0;  // Weapons of Bass Destruction (Daniel)


// Weekly blah blah blah text...

var week0_txt = "Welcome to the 2025 Phantom League.";

var week1_txt = "Well, week 1 is in the books.  Offenses looked a little shaky with a high score of 130 (congrats to Nix " +
                "for the first weekly high score - Ka-ching!)  The Kyrptos had the  misfortune of being their patsy, going " +
                "down despite having the 3rd highest score of the week. On the other end of the spectrum the Ice slide " +
                "past the DJ Acne's by the weeks slimmest of margins despite having the 3rd lowest score of the week.<br><br>" +
                "In the there's always one category, the Seedy Nuts couldn't break triple digits and were crushed by the " + 
                "Porkbellies for this weeks biggest blowout. In the 'Beverage' matchup, Cocoa was stronger than Brew " +
                "(maybe no one passed them one?). The final matchup was the only one still in question Monday night and " +
                "looked tense after JJ scored a TD for the Destructos, but the Phlat managed to hang on and win a close one.";

var week2_txt = "Wow, a tie!!! Haven't seen that in several years - thats gonna mess up playoff seedings. Well at least the " +
                "Hopes and Brews didn't lose. :-) The Django on the other hand had a bye week, ooops, meant they <i>played</i> " +
                "The Bye Week, needlessly pouring it on with the high score for the week. However " +
                "there was one team that couldn't have even beaten a bye as the Flat Turds were roasted by the Browns, " + 
                "scoring the low for the week.<br><br>And in the other move along, move along, nothing to see here games " +
                "Nuts and Chops both easily topped the Ice and the Bass, respectively.<br>";

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

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var fatScores = [ 170.25 ];
var porScores = [ 148.60 ];
var mikScores = [ 119.60 ];
var cocScores = [ 101.65 ];
var fumScores = [ 107.90 ];
//Fu Minshews

var iceScores = [ 118.60 ];
var preScores = [ 139.25 ];
var belScores = [ 159.45 ];
var rolScores = [ 139.90 ];
var tenScores = [ 139.80 ];


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs = [
        0,  //fatbastards
        0,  //porkchops
        0,  //tenydfight (mike)
        0,  //cocobrown
        0,  //fu minshus

        0,  //iceotopes
        0,  //predators
        0,  //belicheck
        0,  //rolltide
        0   //tenanus
     ];


var week0_txt = "Welcome to the 2020 Phantom League. Which is sure to be different this year with covid! " +
                "And welcome to the newby Andy. Good luck! But not too much luck! Newbies should know their place.<br><br>" +
                "While I'm no Yahoo for projecting the draft, I did project the weekly average for each teams best lineup. " +
                "Eight of the ten teams are basically in a dead heat, with one outlier on both ends:<br><br>" +
                "<font style='myfont'>" +
                "Phat Bastards &nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;118.875<br>" +
                "Porkchops &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;119.1875<br>" +
                "Ten Yard Fight &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;120.375<br>" +
                "Coco Browns&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;121.3125<br>" +
                "The Fu Minshews &nbsp;118.4375<br><br>" +
                "Iceotopes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;114.125<br>" +
                "Predators &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;121.875<br>" +
                "Discount Belicheck &nbsp;119.3125<br>" +
                "Roll Tide &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;119.5625<br>" +
                "Tenacious Anus &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;127.125<br></font>";

var week1_txt = "D+ my derriere!!!! Take that Yahoo!  So, despite having the worst draft rating of the league, in a A- vs D+ matchup, " +
                "the Phat put up the " +
                "high score for the week, and match Yahoos projected win total for the year.  Guess it's 0-13 from here out.<br><br>" +
                "On the better lucky than good end of the spectrum the Ice eke out a win despite the third lowest score of the week - " +
                "guess timing (not location) is everything. Still looks like 1-0 on the scoreboard though.<br><br>" +
                "In the nail-biter section of the league we got the Predatory Anuses battling it out and being tenacious does the " +
                "trick...  the Preds needing a 5 yd Big Ben yd garbage time gain in the end, not a 2 yd loss. Oh so close. <br><br>" +
                "Oh, yeah, in other news... the Ten Yarders didn't put up much of a fight versus the other white meat, " +
                "and the Tide got rolled by last years champ like some discount speed bump. Tide musta been going out.";

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


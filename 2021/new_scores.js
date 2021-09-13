//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var preScores = [ ];  // Predators
var belScores = [ ];  // Discount Belicheck
var tenScores = [ ];  // Tenacious Anus
var cocScores = [ ];  // Coco Browns
var seaScores = [ ];  // Seamen

var iceScores = [ ];  // Iceotopes
var fatScores = [ ];  // Phat Bastards
var porScores = [ ];  // Porkchops
var rolScores = [ ];  // Roll Tide
var pepScores = [ ];  // Fuller go eazy on the Pepsi


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs = [
        0,  //predators
        0,  //belicheck
        0,  //tenanus
        0,  //cocobrown
        0,  //seamen
        
        0,  //iceotops
        0,  //fatbastards
        0,  //porkchops
        0,  //rolltide
        0   //fullpepsi
     ];


var week0_txt = "Welcome to the 2021 Phantom League.  Another year of hope dashed by the realization" +
                "that at least half of us drafted a shitty team... and half have a hope of making the" +
                "playoffs!  But which one is your team?  Only time will tell, unless you believe Yahoos" +
                "rankings in which case the Phat will just mail the check in and go back to watching I" +
                "Love Lucy re-runs.";

var week1_txt = "Welcome to the 2021 Phantom League.  Another year of hope about to be dashed for many of " +
                "by the realization that we drafted a shitty team... or maybe your wildest dreams will be " +
                "fulflled and you'll make the playoffs!  But which one is your team?  Only time will tell, " +
                "unless you believe in Yahoos draft rankings in which case it seems the Phat should just " +
                "mail the check in and go back to watching I Love Lucy re-runs.";

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

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var preScores = [ 133.45, 115.15 ];  // Predators
var belScores = [ 113.45, 90.85 ];  // Discount Belicheck
var tenScores = [ 150.20, 113.15 ];  // Tenacious Anus
var cocScores = [ 143.60, 126.15 ];  // Coco Browns
var seaScores = [ 172.20, 166.30 ];  // Seamen

var iceScores = [ 131.55, 197.80 ];  // Iceotopes
var fatScores = [ 84.80, 107.55 ];  // Phat Bastards
var porScores = [ 158.25, 157.40 ];  // Porkchops
var rolScores = [ 126.55, 115.00 ];  // Roll Tide
var pepScores = [ 119.10, 137.25 ];  // Fuller go eazy on the Pepsi


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

var week1_txt = "Welcome to the 2021 Phantom League.  Another year of PFL. Maybe your wildest dreams " +
                "will be fulflled and you'll make the playoffs and win the league! Or will that hope be " +
                "cruelly dashed by the realization that you drafted a shitty team... ? Which one is your " +
                "team?  Only time will tell, unless you believe in Yahoos draft rankings in which case it " +
                "seems the Phat (who have mastered the art of bad drafting) should just mail in the season " +
                "and go back to watching I Love Lucy re-runs after this weeks effort.<br><br>" +
                "The Fuller wasn't very full but they didn't have to be as they could have benched both their " +
                "RBs and their TE and still beat the Phlat despite already having the 3rd worst score of the " +
                "week. The Ice, Tide, Belis could only watch and wonder why they weren't so lucky...<br>" +
                "In the actually interesting side of the ledger the Preds and Browns had a nail biter going, " +
                "separated by just a half point Monday night with 4 minutes to go before the Cocos pulled away " +
                "with a win!";

var week2_txt = "In early returns, seems like the defending porksters are serious about repeating. Their " +
                "opponent apparently went easy on the <b>Pepsi</b> who fizzled out, discovering what it's like to play a real team this week after " +
                "last weeks bye against the <b>Phlat</b>.  In the way, way to early department, can the <b>Chops</b> " +
                "go undefeated, after winning easily again to take the early lead in their division? But wait, " +
                "who're those <b>Topes</b> characters running up the score on the <b>Tide</b> (wouldn't you love " +
                "to see that in real college ball!). Serious comp for the Porkers? After their opponent " +
                "scored 170 on them last week, the Ice say, ha, I can top that and score a stellar 190 this week " +
                "to probably lock up this years league high bonus! <font color='red'>KaChing!</font><br><br>" +
                "Only one nail biter matchup was left for Monday this week so MNF was a bit of a snoozer for " +
                "most of us PFL wise, with only the <b>Preds</b> vs <b>Anus</b> result in doubt at the start " +
                "of the night... but it seemed like it was just a question of when... not if, for the Preds, " +
                "as the Preds slowly but tenaciously puckered up them Anuses, who probably needed a little more " +
                "fiber, in the end. Don't you love garbage time pts!<br><br>" +
                "And meanwhile in the newly formed Moral Victory FF league, we get the Phlat managing the " +
                "break 100 pts, and not having the low score for the week to now lead the MVFF (BTW after " +
                "this week's thrashing by the <b>Seadudes</b> we're discounting <b>Bellis</b> so much I think " +
                "we'll see them for sale in the clearance section of the freezer " +
                "at <font color='green'><b>Dollar Tree</b></font> this week).  But the Bastards still lost " +
                "badly to the <b>Coco's</b> after they left 45 pts on the bench. <font color='blue'><i>Note to Steve: " +
                "don't overreact to a bad week and bench your best receivers...</i></font> The Coco's weren't " +
                "any great shakes but they didn't have to be, happily gettting their turn to whack " +
                "the Phlat and the automatic win that comes along with that!";

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

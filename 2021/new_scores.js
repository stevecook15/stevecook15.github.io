//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var preScores = [ 133.45, 115.15, 103.35, 136.50 ];  // Predators
var belScores = [ 113.45,  90.85, 121.50, 114.80 ];  // Discount Belicheck
var tenScores = [ 150.20, 113.15, 158.40, 170.15 ];  // Tenacious Anus
var cocScores = [ 143.60, 126.15, 114.00, 144.10 ];  // Coco Browns
var seaScores = [ 172.20, 166.30,  96.00, 134.60 ];  // Seamen

var iceScores = [ 131.55, 197.80, 116.30, 119.80 ];  // Iceotopes
var fatScores = [  84.80, 107.55, 142.55, 127.85 ];  // Phat Bastards
var porScores = [ 158.25, 157.40, 140.80, 142.60 ];  // Porkchops
var rolScores = [ 126.55, 115.00, 163.75, 105.00 ];  // Roll Tide
var pepScores = [ 119.10, 137.25, 159.00,  86.20 ];  // Fuller go eazy on the Pepsi

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
                "opponent apparently went easy on the <b>Pepsi</b> who fizzled out, discovering what it's " +
                "like to play a real team this week after " +
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

var week3_txt = "<i><font color='red'>(AP) Breaking News Bulletin:</font></i> The recently formed Moral Victory " +
                "(MVFF) league announced it was closing it's doors after it's sole team (the <b>Fat Bastards</b>) " +
                "unexpectedly won a game this week. Said it's owner: <i>'We were never " +
                "ever expecting a victory this week, what with our opponent being the red hot " +
                "<b>Iceotopes</b> who scored more points last week than we had all season combined. Needless to say we " +
                "are stunned. Obviously there aren't any more moral victories to be had once you've actually won a " +
                "real victory, so we had to leave the MVFF.</i> The Topes couldn't be reached for comment as they " +
                "were apparently still frozen solid in the meat locker." +
                "<br><br>In related news, the other two PFL teams that had applied to join the MMVF were denied " +
                "admission to the league after also actually winning, the <b>Tide</b>, slowly rolling by the " +
                "<b>Full-of-Themselves</b> who lost despite having the second highest score of the week (don't " +
                "you hate it when that happens?), and the <b>Discounts</b>, who didn't so much roll but kinda belly " +
                "smacked the <b>Prey</b>, leaving the MVFF with zero teams, and leading to it's shutdown. The " +
                "MVFF leqague office announced there would be NO refunds on ticket sales, saying quote <i><b>'stuff it you " +
                " losers'</b></i> unquote. <br><br>Meanwhile, the non-losers side of the PFL bracket took a beating as the " +
                "<b>Pork</b> were chopped by the <b>Anus</b>, and the <b>Seamen</b> did their best Seahawks " +
                "impersonation against the <b>Cocos's</b>, leaving the Browns (??!!!) as the last undefeated team! " +
                "Dolphin fans should begin to worry! Go mighty CBs!";

var week4_txt = "Sphincters were titghening throughout the leqgue this week as 7 of 10 teams couldn't match their " +
                "projected scores. The <b>Tens</b> weren't one of them, apparently having taken their Kaopectate, sliding  " +
                "smoothly to this weeks top score, then using the last of the Roll to wipe the <b>Tide</b> away.  But they " +
                "weren't the only team feeling regular as the <b>Coco's</b> are apparently dropping golden nuggets out " +
                "their, well you know where.... taking down the <b>Chops</b>, who maybe need a little roughage along with " +
                "all that Pork after that butt biter.<br><br>The last of the overachievers this week were the <b>Water Boys</b> " +
                "who didn't really need to do all that well since they were playing the <b>Bass Turds</b> (which legally " +
                "counts as a bye in this league except when the Turds are playing the Topes...), who were just hoping to " +
                "still have the lead in their contest after the first quarter of MNF. Of such little dreams one has when " +
                "living in the Fat camp, but some joy was squeezed out in the end as they lasted four minutes into the 2nd " +
                "quarter before being sent to bed without dinner.<br><br>On the other hand, the <b>Predators</b> ordered " +
                "up the full meal deal, large size that please, devouring the <b>Topes</b> well before Sunday bedtime, " +
                "leaving the Ice to wonder: where the hell did those 197.8 points go anyway. Finally, in the someone's " +
                "got to win it because it on the schedule matchup, the <b>Bellies</b> got a discounted win when the " +
                "<b>Pepsi</b> went flat due to lack of a tight end, which, gosh, brings us all the way round to "+
                "spinchters again! <i>Editors Note: See how I made that work? Such a clever boy...</i><br><br>" +
                "So, the perfect season watch continues as the Golden Browns remain undefeated, can't believe I'm " +
                "typing that... leaving Dolphin fans everywhere with sleepness nights.  Can it continue?  Go go Cokes! " +
                "As far as the rest of the league goes, the two divisions are strikingly different as the last four " +
                "teams in 'The Ugly' are 8 games under .500 collectively (in 4 weeks!), which amazingly means even a " +
                "1-3 start puts every team in the division within a game of the lead...  All the teams in 'The 'Good, " +
                "The Bad' can only watch the carnage, salivatinfg over the chance to continue hitting the rival " +
                "division with the ugly stick, leading them to petition league officials this week to make all " +
                "remaining PFL weeks inter-divsion games, or at the very least against the Fat!!";
 

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

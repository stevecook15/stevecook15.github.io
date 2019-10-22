//TODO: Add a rolling average plot...

// Create an array of teamNames
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var belScores = [ 117.00, 142.15, 147.70, 103.35, 170.25, 82.05, 115.00 ];
var makScores = [ 181.80, 138.50, 169.40, 154.15, 153.40, 121.60, 97.15 ];
var iceScores = [ 121.75, 126.80, 158.60, 132.35, 125.60, 170.00, 94.65 ];
var rolScores = [ 125.60,  97.10, 139.40, 91.30, 166.40, 160.15, 85.75 ];
var kekScores = [ 102.55, 144.95, 114.05, 72.20, 75.95, 106.95, 94.05 ];

var nubScores = [ 194.30, 157.95, 143.75, 121.45, 133.20, 106.55, 93.60 ];
var kruScores = [ 143.70, 142.30, 155.75, 144.65, 155.95, 130.80, 100.80 ];
var preScores = [ 109.65, 117.85, 138.35, 141.15, 89.70, 146.80, 128.65 ];
var fatScores = [ 146.50,  99.15, 108.05, 135.05, 188.45, 81.70, 139.90 ];
var tenScores = [  85.90, 132.85, 118.10, 99.15, 153.15, 148.25, 143.75 ];


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs = [
        0,  //belicheck
        0,  //retmack
        0,  //iceotopes
        0,  //rolltide
        0,  //kekelove

        0,  //thenubs
        0,  //krusty
        0,  //predators
        0,  //fatbastards
        0   //tenanus
     ];


var week1_txt = "Welcome to the 2019 PFL season.  The week the optimism starts fading... for half of us. Seems " +
                "like the Nubs and Macks (has their name changed again yet? Haven't checked in the last 10 " +
                "minutes) are feeling pretty good.  Seems Keke apparently does not love Noah though... and the " +
                "sphincters are squeezed tight, in need of some prep-h!";

var week2_txt = "A little lower scoring but the Nubs still the top dog with the high score for the second straight " +
                "week, crushing the Krustys hopes. The Bellys are keeping pace with them, staying " +
                "undefeated.  On the all-defeated front the Fat, and Ice continue to stink, falling to " +
                "0-2. So, 2 undefeated and 2 winless, that leaves the middling six still hopeful early in the " +
                "season.";

var week3_txt = "And then there was one... undefeated and totally defeated teams. The Nubs continue nubling along " +
                "with little suspense although for once they didn't have the high score as the Mack returned this " +
                "week. But nubling along can also be said of the Flats, not even coming close to being " +
                "being competitive for the third straight week, losing each week by 30+ points.  The other " +
                "undefeated team got Belly Krushed, while the other winless team Iced their opponent easily to " +
                "get off the schneid.";

var week4_txt = "Well, some times it better to be lucky than good (though being both seems unfair) as the still " +
                "undefeated Nubs were pedestrian this week (121 pts?) and still won by almost 50! Nice job Keke " +
                "Got No Love For Nobody...  even the till now (sorry Ice!) winless Bastards ain't that bad, " +
                "eeking out the closest game of the week by less than 3 pts, leading us to that much anticipated " +
                "matchup of 1-3 Flat vs 1-3 Keke next week. Whee!  Not to be outdone by next weeks 1-3 Roll " +
                "Tide vs 1-3 Tenacious Anus.  The 1-3 Ice are probably left out of the lose-a-fest next week!";

var week5_txt = "Down go Frazier, down goes frazier (I know, a lost reference to our younger owners) as the " +
                "Nubs got discounted! In a bad week for the top two teams even the Macks got Krushed in the " +
                "closest match of the year. Apparently someone put some air in the Bastards tires as they " +
                "seemed well inflated this week with the high score for the week, showing no love for Keke! " +
                "Meanwhile, in the I'm not very good but I'm better than you bowl, the Ice preyed on the " +
                "Preds, and the Tide rolled over the Tentative Anus.";

var week6_txt = "From first to worst, the Flat score 100 points less than last week, handing the Nubs a hard(ly) "+
                "deserved victory (as the only score 104 points themselves). The other two 4-1 teams went down, " +
                "leaving the Nubs in sole posession of first place.  The Krusty Bellys both got Rolled to sub-500 " +
                "Predators. With the Mack getting Iced the standings closed up the battle for playoff spots. " +
                "Speaking about playoffs, the Anus pooped on Keke in the Tank for Tua bowl (does that work for " +
                "the PFL too?) with Keke doing their best Miami Bengals impression.";

var week7_txt = "A pretty low scoring week - lowest high score of the week yet. How's this for roller coaster - Flat " +
                "goes from high score 2 weeks ago, to low score last week to 2nd highest score this week! Never a dull " +
                "moment. Congrats to Keke getting their second win (if winning with less than 100 points counts).  " +
                "And with the Nubs (with an eyebrow raising of a 102 points them selves) and the Bellis going down it seems " +
                "like the battle for the playoffs is tightening up...";

var week8_txt = "";

var week9_txt = "";

var week10_txt = "";

var week11_txt = "";

var week12_txt = "";

var week13_txt = "";

var week14_txt = "";


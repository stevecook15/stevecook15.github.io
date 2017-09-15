
// Record, Division Record
var fatbastardsRec = [ 13, 1, 8, 0 ];   // Steve
var iceaholicsRec  = [ 8, 6, 3, 5 ];   // John
var juicyslipRec   = [ 7, 7, 3, 5 ];   // Tom
var porkchopsRec   = [ 6, 8, 3, 5 ];   // Noah
var redhotRec      = [ 5, 9, 3, 5 ];   // Mike

var tenaciousRec   = [ 10, 4, 7, 1 ];   // Jake
var hawkfanRec     = [ 9, 5, 5, 3 ];   // Katie
var predatorsRec   = [ 5, 9, 4, 4 ];   // Joe
var being12Rec     = [ 5, 9, 3, 5 ];   // Adam
var groupiesRec    = [ 2, 12, 1, 7 ];   // Patty

var pfl_records=[
                fatbastardsRec,
                iceaholicsRec,
                juicyslipRec,
                porkchopsRec,
                redhotRec,
                tenaciousRec,
                hawkfanRec,
                predatorsRec,
                being12Rec,
                groupiesRec
                ];

// Scoring
//
var juicyslip    = [ 160.15, 122.60, 109.60, 154.35, 144.10, 113.85, 133.30, 97.45, 120.65, 104.10, 145.35, 115.15, 108.65, 153.05 ];   // Tom
var oppjuicyslip = [ 127.20, 142.90, 125.25, 139.80, 131.85, 154.95, 123.00, 183.75, 106.75, 134.65, 108.25, 117.65, 148.55, 131.45 ];   // Tom

var porkchops    = [ 152.45, 142.90, 141.80, 177.45, 132.80, 100.40, 106.25, 176.60, 113.50, 110.50, 108.25, 103.10, 88.75, 119.25 ];    // Noah
var oppporkchops = [ 153.70, 122.60, 136.00, 101.05, 132.35, 113.75, 136.25, 123.75, 122.70, 96.50, 145.35, 150.80, 166.35, 144.40 ];    // Noah

var redhot    = [ 153.70, 130.65, 99.90, 150.80, 117.35, 136.00, 123.00, 123.75, 138.65, 117.75, 114.80, 139.65, 125.50, 131.45 ];       // Mike
var oppredhot = [ 152.45, 102.85, 161.40, 151.95, 154.1, 156.40, 133.30, 176.60, 148.05, 115.20, 87.55, 101.60, 196.10, 153.05 ];       // Mike

var fatbastards    = [ 171.80, 129.20, 125.25, 113.80, 151.35, 156.40, 136.25, 126.80, 181.05, 153.65, 150.10, 117.65, 196.10, 144.40 ];  // Steve
var oppfatbastards = [ 153.90, 115.60, 109.60, 127.85, 101.40, 136.00, 106.25, 121.80, 151.60, 134.15, 142.00, 115.15, 125.50, 119.25 ];  // Steve

var iceaholics    = [ 153.90, 102.85, 136.00, 141.75, 185.20, 154.95, 112.40, 121.80, 137.95, 125.20, 87.55, 150.80, 148.55, 141.75 ];   // John
var oppiceaholics = [ 171.80, 130.65, 141.80, 146.30, 142.80, 113.85, 95.75, 126.80, 116.25, 114.25, 114.80, 103.10, 108.65, 141.15 ];   // John


//Div 2
var predators    = [ 161.05, 115.60, 127.60, 139.80, 142.80, 80.10, 159.45, 139.50, 148.05, 96.50, 118.40, 101.60, 124.35, 110.30 ];    // Joe
var opppredators = [ 127.20, 129.20, 115.90, 154.35, 185.20, 80.35, 127.80, 153.10, 138.65, 110.50, 106.30, 139.65, 167.85, 131.05 ];    // Joe

var tenacious    = [ 171.80, 112.25, 161.40, 127.85, 131.85, 80.35, 97.20, 153.10, 122.70, 114.25, 142.00, 139.65, 115.65, 156.60 ];    // Jake
var opptenacious = [ 96.15, 102.40, 99.90, 113.80, 144.10, 80.10, 114.70, 139.50, 113.50, 125.20, 150.10, 119.40, 97.40, 75.70 ];    // Jake

var hawkfan    = [ 96.15, 158.90, 131.95, 151.95, 101.40, 113.75, 127.80, 183.75, 116.25, 134.65, 179.65, 120.50, 167.85, 75.70 ];      // Katie
var opphawkfan = [ 171.80, 145.65, 98.60, 150.80, 151.35, 100.40, 159.45, 97.45, 137.95, 104.10, 125.40, 95.70, 124.35, 156.60 ];      // Katie

var groupies    = [ 127.20, 102.40, 98.60, 101.05, 154.10, 97.85, 95.75, 111.65, 106.75, 134.15, 106.30, 95.70, 97.40, 141.15 ];     // Patty
var oppgroupies = [ 161.05, 112.25, 131.95, 177.45, 117.35, 117.65, 112.40, 101.80, 120.65, 153.65, 118.40, 120.50, 115.65, 141.75 ];     // Patty

var being12    = [ 127.20, 145.65, 115.90, 146.30, 132.35, 117.65, 114.70, 101.80, 151.60, 115.20, 125.40, 119.40, 166.35, 131.05 ];     // Adam
var oppbeing12 = [ 160.15, 158.90, 127.60, 141.75, 132.80, 97.85, 97.20, 111.65, 181.05, 117.75, 179.65, 139.65, 88.75, 110.30 ];     // Adam

var pfl_labels = [
      "Fat Bastards",
      "Iceaholics",
      "Juicy Slip",
      "Porkchops",
      "Red Hot Reactors",
      "Tenacious Anus",
      "Hawk Fanatic",
      "Predators",
      "Being 12 Again",
      "Russells Groupies"
      ];

var pfl_owners = [
      "Steve C",      // Fat Bastards
      "John F",       // Iceaholics
      "Tom R",        // Juicy Slip
      "Noah G",       // Porkchops
      "Mike H",       // Red Hot Reactors
      "Jake H",       // Tenacious Anus
      "Katie",        // Hawk Fanatic
      "Joe M",        // Predators
      "Adam M",       // Being 12 Again
      "Patty"         // Russells Groupies
      ];

var pfl_scores=[
                fatbastards,
                iceaholics,
                juicyslip,
                porkchops,
                redhot,
                tenacious,
                hawkfan,
                predators,
                being12,
                groupies
                ];

var opp_scores=[
                oppfatbastards,
                oppiceaholics,
                oppjuicyslip,
                oppporkchops,
                oppredhot,
                opptenacious,
                opphawkfan,
                opppredators,
                oppbeing12,
                oppgroupies
                ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
              2,   // bastards
              1,   // iceaholics
              4,   // juicyslip
              4,   // porkchops
              4,   // redhot
              2,   // tenacious
              1,   // hawkfan
              4,   // predators
              4,   // being12
              4    // groupies
              ];

var week1_txt = "Well, we're under way and we got some high scores and we got some (very) low scores... " +
                "Seems like Div 1 was the better bunch this week.  The Fat were pretty fat for the team with " +
                "the worst draft don't ya think?";

var week2_txt = "Another week is in the books and looks like NFL teams are getting settled in.  Should be " +
                "able to pick out the good vs bad NFL (and PFL) teams soon. Kind of a wild ride at the moment " +
                "as evidenced by Fanatics low score to high score swing.";

var week3_txt = "Seems like things are clearing up a bit.  Tenacious seems to be class of the league, " +
                "Ice and 12  can't buy a break, the groupies are guppies, Fat is doing it with mirrors, " +
                "and its a crap shoot for the rest of us.";

var week4_txt = "Couple of undefeated and defeated matchups this week, with sadly one less undefeated " +
                "and even more sadly 2 teams still winless! Ice continues to post mid-level numbers and "+
                "still lose.  Tenacious pulled Fats magic curtain aside " +
                "to expose the skinny old fogies filling his roster"; 

var week5_txt = "Well, interesting week.  No more zeros, as both the winless teams won (with the two high " +
                "scores for the week) and the last undefeated team went down too.  Being 12 again " +
                "apparently ain't fun either, going down to defeat by less than half a point.";

var week6_txt = "Well, some teams have all the luck. Anus scores the second lowest score of the year, and still wins " +
                "because their opponent scores the lowest point total of the year (thanks to several drops by " +
                "their tight end)! Even the Groupies were better than these two.";

var week7_txt = "Well, mostly lower scoring this week and quite a bit of closing up of win/loss records.  The 'holics " +
                "are on a big run after a slow start. Fat's lead got fatter... And Groupies are still looking like flounders.";

var week8_txt = "Well, Seattles ineptitude made for an exciting match between Ice and Fat, and costed the Fanatics " +
                " the high score of the year, although they did the Groupies just fine, leading them to their second win.";

var week9_txt = "Seems like the division leaders are looking like comfy Fat Asses, but the battles for the second playoff spot in " +
                "division are wide open. Ice has been pretty hot since a slow start, and the pork seems to spoiling! Being 12 ain't " +
                "what it used to be, losing despite having the 2nd highest score.";

var week10_txt = "Fat keeps on getting fatter and seems a lock up 3 with 4 to go, but it's quite a race for the other playoff spot in divison 1.  Seems " +
                 "like Anus and Hawks are in good positions in their division. But there's still time for every one...";

var week11_txt = "Well, congrats to the Bastards as they lock up their division and probably the #1 seed.  Anus and Fanatic are going to " +
                 "be at it right to the end as they play each other the last week of the season.  And anyone with more than 5 losses at " +
                 "this point are pretty much toast at this point. Maybe next year!";

var week12_txt = "Its getting very interesting for that last playoff spot!  Seems like Tenacious and Hawk are probably in but... " +
                 "Three teams with 6 losses and two more with just 7 battling it out. The fourth spot will probably go down to the last week.";

var week13_txt = "Lots of high scores and blowouts this week.  Anus and the Fantics clinch spots 2 and 3 but the division is still up for " +
                 "grabs. The last spot is still up for grabs but it'd take a miracle for Ice to not to take it.  Fat didn't show any signs of " +
                 "letting up, scoring the season high on top of yet another victory.";

var week14_txt = "And so we end the regular season leaving behind the not quite worthy teams hoping for better next year.  Congrats to Ice, " +
                 "Anus and Fanatics for making the playoffs, and to the Bastards with their almost perfect season (bound to be upset in the playoffs).";


var fat = "Fat Bastards";      var dfat = fat + " *";
var ice = "Iceaholics";        var dice = ice + " *";
var por = "Porkchops";         var dpor = por + " *";
var red = "Red Hot Reactors";  var dred = red + " *";
var ten = "Tenacious Anus";    var dten = ten + " *";
var haw = "Hawk Fanatic";      var dhaw = haw + " *";
var pre = "Predators";         var dpre = pre + " *";
var rus = "Russells Groupies"; var drus = rus + " *";
var jui = "Juicy Slip";        var djui = jui + " *";
var bei = "Being 12 Again";    var dbei = bei + " *";

var week01Teams = new Array(dfat, dice, dpor, dred, dten, dhaw, dpre, drus, jui, bei);
var week01Scores = new Array(171.80, 153.90, 152.45, 153.70, 171.80, 96.15, 161.05, 127.20, 160.15, 127.70);

var week02Teams = new Array(fat, pre, dice, dred, dpor, djui, dbei, dhaw, dten, drus);
var week02Scores = new Array(129.20, 115.60, 102.85, 130.65, 142.90, 122.60, 145.65, 158.90, 112.25, 102.40);

var week03Teams = new Array(dfat, djui, dice, dpor, red, ten, dbei, dred, dhaw, drus);
var week03Scores = new Array(125.25, 109.60, 136.00, 141.80, 99.90, 161.40, 115.90, 127.60, 131.95, 98.60);

var week04Teams = new Array(fat, ten, ice, bei, por, rus, red, haw, jui, pre);
var week04Scores = new Array(113.80, 127.85, 141.75, 146.30, 177.45, 101.05, 150.80, 151.95, 154.35, 139.80);

var week05Teams = new Array(fat, haw, ice, pre, por, bei, red, rus, jui, ten);
var week05Scores = new Array(151.35, 101.4, 185.2, 142.8, 132.8, 132.35, 117.35, 154.1, 144.1, 131.85);

var week06Teams = new Array(dfat, dred, dice, djui, por, haw, dbei, drus, dpre, dten);
var week06Scores = new Array(156.4, 136.0, 154.95, 113.85, 100.4, 113.75, 117.65, 97.85, 80.1, 80.35);

var week07Teams = new Array(dfat, dpor, ice, rus, dred, djui, dbei, dten, dpre, dhaw);
var week07Scores = new Array(136.25, 106.25, 112.40, 95.75, 123.00, 133.30, 114.70, 97.20, 159.45, 127.80);

var week08Teams = new Array(dfat, dice, dpor, dred, jui, haw, dbei, drus, dpre, dten);
var week08Scores = new Array(126.80, 121.80, 176.60, 123.75, 97.45, 183.75, 101.80, 111.65, 139.50, 153.10);

var week09Teams = new Array(fat, bei, ice, haw, por, ten, red, pre, jui, rus);
var week09Scores = new Array(181.05, 151.60, 137.95, 116.25, 113.50, 122.70, 138.65, 148.05, 120.65, 106.75);

var week10Teams = new Array(fat, rus, ice, ten, por, pre, red, bei, jui, haw);
var week10Scores = new Array(153.65, 134.15, 125.20, 114.25, 110.50, 96.50, 117.75, 115.20, 104.10, 134.65);

var week11Teams = new Array(fat, ten, dice, dred, dpor, djui, dbei, dhaw, dpre, drus);
var week11Scores = new Array(150.10, 142.00, 87.55, 114.80, 108.25, 145.35, 125.40, 179.65, 118.40, 106.30);

var week12Teams = new Array(dfat, djui, dice, dpor, red, pre, dbei, dten, dhaw, drus);
var week12Scores = new Array(117.65, 115.15, 150.80, 103.10, 139.65, 101.60, 119.40, 139.65, 120.50, 95.70);

var week13Teams = new Array(dfat, dred, dice, djui, por, bei, dpre, dhaw, dten, drus);
var week13Scores = new Array(196.10, 125.50, 148.55, 108.65, 88.75, 166.35, 124.35, 167.85, 115.65, 97.40);

var week14Teams = new Array(dfat, dpor, ice, rus, dred, djui, dbei, dpre, dten, dhaw);
var week14Scores = new Array(144.40, 119.25, 141.75, 141.15, 131.45, 153.05, 131.05, 110.30, 156.60, 75.70);

var weekly_dates = [ "Thursday, September 5th",  "Thursday, September 12th", "Thursday, September 19th",
                     "Thursday, September 26th", "Thursday, October 3rd",    "Thursday, October 10th", 
                     "Thursday, October 17th",   "October, October 24th",    "Thursday, October 31st", 
                     "Thursday, November 7th",   "Thursday, November 14th",  "Thursday, November 21st", 
                     "Thursday, November 28th",  "Thursday, December 5th" ];

var weekly_teams = [week01Teams, week02Teams, week03Teams, week04Teams, week05Teams, week06Teams, week07Teams,
                    week08Teams, week09Teams, week10Teams, week11Teams, week12Teams, week13Teams, week14Teams ];

var weekly_scores = [week01Scores, week02Scores, week03Scores, week04Scores, week05Scores, week06Scores, week07Scores,
                     week08Scores, week09Scores, week10Scores, week11Scores, week12Scores, week13Scores, week14Scores ];

var weekly_text = [
      week1_txt,  week2_txt,  week3_txt,  week4_txt,
      week5_txt,  week6_txt,  week7_txt,  week8_txt,
      week9_txt,  week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt
  ];



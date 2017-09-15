
//                  Record, Division Record
var fatbastardsRec = [ 10, 4, 6, 2 ];   // Steve
var frenchtstRec   = [ 8, 6, 4, 4 ];   // Noah
var iceaholicsRec  = [ 7, 7, 5, 3 ];   // John
var krustyRec      = [ 7, 7, 3, 5 ];   // Hunter
var redhotRec      = [ 4, 10, 2, 6 ];   // Mike

var popefoamRec    = [ 9, 5, 4, 4 ];   // Tom
var tenaciousRec   = [ 8, 6, 5, 3 ];   // Jake
var predatorsRec   = [ 7, 7, 5, 3 ];   // Joe
var infirmRec      = [ 6, 8, 4, 4 ];   // Adam
var hawkfanRec     = [ 4, 10, 2, 6 ];   // Katie

var pfl_records=[
      fatbastardsRec,
      frenchtstRec,
      iceaholicsRec,
      krustyRec,
      redhotRec,

      popefoamRec,
      tenaciousRec,
      predatorsRec,
      infirmRec,
      hawkfanRec 
      ];

var pfl_labels = [
      "Fat Bastards",
      "French Toast Mafia",
      "Iceaholics",
      "Krusty Krushers",
      "Red Hot Reactors",

      "Pope of Foam",
      "Tenacious Anus",
      "Predators",
      "The Infirm",
      "Hawk Fanatic"
      ];


// Scoring
//
var fatbastards    = [ 131.05, 110.10, 162.55, 150.30, 137.05, 121.15, 137.00, 153.30, 134.10, 159.90, 124.25, 139.65, 132.15, 151.95 ];  // Steve
var oppfatbastards = [ 109.55, 125.35, 114.80, 98.90, 136.45, 110.50, 84.65, 157.45, 140.75, 89.00, 118.95, 139.95, 120.35, 108.75 ];  // Steve

var frenchtst    = [ 109.55, 117.70, 108.00, 141.85, 166.35, 125.90, 192.75, 157.45, 88.45, 155.70, 148.50, 142.05, 132.20, 132.05 ];    // Noah
var oppfrenchtst = [ 131.05, 107.70, 112.45, 131.85, 127.70, 130.35, 128.75, 153.30, 106.00, 152.40, 122.65, 200.80, 131.00, 170.45 ];    // Noah

var iceaholics    = [ 131.55, 125.35, 112.45, 139.40, 136.45, 118.65, 137.60, 136.65, 141.05, 104.30, 118.95, 200.80, 118.05, 130.55 ];   // John
var oppiceaholics = [ 156.10, 110.10, 108.00, 157.45, 116.10, 112.40, 105.30, 89.25, 160.15, 109.20, 124.25, 142.05, 136.20, 135.00 ];   // John

var krusty    = [ 156.10, 169.45, 99.20, 128.45, 103.55, 110.50, 128.75, 89.25, 85.20, 168.30, 137.55, 122.20, 120.35, 170.45 ];   // Hunter
var oppkrusty = [ 131.55, 105.35, 108.40, 125.35, 154.70, 121.15, 192.75, 136.65, 176.90, 149.05, 82.65, 95.55, 132.15, 132.05 ];   // Hunter

var redhot    = [ 118.85, 107.70, 108.40, 106.40, 112.00, 112.40, 84.65, 126.00, 73.55, 100.55, 122.65, 95.55, 136.20, 108.75 ];       // Mike
var oppredhot = [ 140.10, 117.70, 99.20, 79.90, 103.80, 118.65, 137.00, 150.35, 111.05, 162.45, 148.50, 122.20, 118.05, 151.95 ];       // Mike


//Div 2
var popefoam    = [ 134.50, 84.85, 136.30, 98.90, 154.70, 130.35, 84.60, 150.35, 160.15, 162.45, 80.90, 106.65, 134.45, 138.45 ];     // Tom
var opppopefoam = [ 117.30, 142.50, 134.85, 150.30, 103.55, 125.90, 124.25, 126.00, 141.05, 100.55, 138.75, 123.65, 112.25, 113.05 ];     // Tom

var tenacious    = [ 140.10, 142.50, 113.60, 157.45, 127.70, 188.80, 119.40, 163.90, 176.90, 89.00, 138.75, 116.95, 131.00, 162.60 ];    // Jake
var opptenacious = [ 118.85, 84.85, 119.50, 139.40, 166.35, 127.50, 127.75, 174.05, 85.20, 159.90, 80.90, 114.40, 132.20, 156.55 ];    // Jake

var infirm    = [ 138.35, 105.35, 119.50, 79.90, 116.10, 102.30, 124.25, 90.55, 140.75, 152.40, 141.55, 139.95, 112.25, 156.55 ];     // Adam
var oppinfirm = [ 148.75, 169.45, 113.60, 106.40, 136.45, 88.15, 84.60, 120.40, 134.10, 155.70, 97.75, 139.65, 134.45, 162.60 ];     // Adam

var predators    = [ 148.75, 146.30, 134.85, 131.85, 136.45, 127.50, 105.30, 174.05, 111.05, 149.05, 97.75, 123.65, 160.45, 135.00 ];    // Joe
var opppredators = [ 138.35, 79.85, 136.30, 141.85, 137.05, 188.80, 137.60, 163.90, 73.55, 168.30, 141.55, 106.65, 103.70, 130.55 ];    // Joe

var hawkfan    = [ 117.30, 79.85, 114.80, 125.35, 103.80, 88.15, 127.75, 120.40, 106.00, 109.20, 82.65, 114.40, 103.70, 113.05 ];      // Katie
var opphawkfan = [ 134.50, 146.30, 162.55, 128.45, 112.00, 102.30, 119.40, 90.55, 88.45, 104.30, 137.55, 116.95, 160.45, 138.45 ];      // Katie


var pfl_owners = [
      "Steve C",      // Fat Bastards
      "Noah G",       // French Toast Mafia
      "John F",       // Iceaholics
      "Hunter",       // Krusty Krushers
      "Mike H",       // Red Hot Reactors

      "Tom R",        // Pope of Foam
      "Jake H",       // Tenacious Anus
      "Joe M",        // Predators
      "Adam M",       // The Infirm
      "Katie"         // Hawk Fanatic
      ];

var pfl_scores=[
                fatbastards,
                frenchtst,
                iceaholics,
                krusty,
                redhot,

                popefoam,
                tenacious,
                predators,
                infirm,
                hawkfan
                ];

var opp_scores=[
                oppfatbastards,
                oppfrenchtst,
                oppiceaholics,
                oppkrusty,
                oppredhot,

                opppopefoam,
                opptenacious,
                opppredators,
                oppinfirm,
                opphawkfan
                ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
              2,   // bastards
              1,   // frenchtst
              4,   // iceaholics
              4,   // krusty
              4,   // redhot

              2,   // popefoam
              1,   // tenacious
              4,   // predators
              4,   // infirm
              4    // hawkfan
              ];

var week1_txt = "Well, week ones in the books , too early to predict too much yet but Div 2 grabs the early edge";

var week2_txt = "Boy, there were a lot of blowouts this week! Closest match was 10 pt, three matches won by ~60 pts each!";

var week3_txt = "The last of the unbeatens go down, but still got one beaten...  pretty low scoring week except for one bastard.";

var week4_txt = "Well, in the first full inter-division matchup, Division1 took 4 of 5.  Hawk fan almost won their first game but a meaningless late " +
               "Jimmy Graham touchdown allowed Krusty to pull out the weeks closest match.";

var week5_txt = "Looking like Division 1 is the better of the two divisions, taking 4 of 5 for the second week.  Pretty close in Div 1" +
" though!!!  And back where they belong, Fat's leading the pack, now 17-2 in their last 19 regular season match ups!";

var week6_txt = "Fairly low scoring week except for one statistical outlier.  Gotta feel bad for the Toast getting toasted very late on a late pick6! " +
                 "Course, there's probably four other team owners not feeling too sorry for him this week.";

var week7_txt = "Congrats to the Hawk Fans for breaking through into the win column (more than the real Hawks could do)! And in that " +
                "division they're still in the running. Good timing: The Mafia took out their bitterest opponent with the high score of the year!";

var week8_txt = "Higher scoring this week with 5 teams over 150 pts (offset by the two who couldn't hit triple digits. The Ice " +
                "slid into first in Div 1 despite not being one of the top 5 scores (tiimings everything apparently)";

var week9_txt = "Boy, it's getting more crowded in the middle as the top and the bottom head towards the middle.  Lots of time left for " +
                "most anything to happen!";

var week10_txt = "Last of the big bye weeks made for some interesting results!  The two division leaders are looking good to make the " +
                 "playoffs, and the 5 teams with 6 or more losses have some work to do in the coming weeks! Don't look now, but Fanatics have a 4 game win streak after starting 0-6!";

var week11_txt = "Three weeks to go and no ones locked up a playoff spot or been eliminated, though that could change next week.";

var week12_txt = "Just when it looked lik the leaders would lock things up, the top three teams all lost, closing up the gap for most " +
                 "everyone, though the Reactors and Fanatics bowed out with one to many losses. And who woke up the Ice after a 3 week snooze!";

var week13_txt = "Well, with one week to go only two teams eliminated and only one clinched playoff spot. Several teams need massive " +
                 "miracles though!";

var week14_txt = "And so it ends... many teams had a glimmer of hope heading into the final week but when it was all said and done the top four teams " +
                 "going into the week walked out the four playoff teams. We'll have a new champion as last years champ missed out, though last years " +
                 "best regular season team repeated their Fat feat!";

var ice = "Iceaholics";          var dice = ice + " *";
var fat = "Fat Bastards";        var dfat = fat + " *";
var red = "Red Hot Reactors";    var dred = red + " *";
var frn = "French Toast Mafia";  var dfrn = frn + " *";
var kru = "Krusty Krushers";     var dkru = kru + " *";

var haw = "Hawk Fanatic";        var dhaw = haw + " *";
var ten = "Tenacious Anus";      var dten = ten + " *";
var inf = "The Infirm";          var dinf = inf + " *";
var pof = "Pope of Foam";        var dpof = pof + " *";
var pre = "Predators";           var dpre = pre + " *";

var week01Teams = new Array(dfat, dfrn, dice, dkru, ten, red, dinf, dpre, dhaw, dpof);
var week01Scores = new Array(131.05, 109.55, 131.55, 156.10, 140.10, 118.85, 138.35, 148.75, 117.30, 134.50);

var week02Teams = new Array(dfat, dice, dfrn, dred, dten, dpof, inf, kru, dhaw, dpre);
var week02Scores = new Array(110.10, 125.35, 117.70, 107.70, 142.50, 84.85, 105.35, 169.45, 79.85, 146.30);

var week03Teams = new Array(fat, haw, dice, dfrn, dten, dinf, dkru, dred, dpof, dpre);
var week03Scores = new Array(162.55, 114.80, 112.45, 108.00, 113.60, 119.50, 99.20, 108.40, 136.30, 134.85);

var week04Teams = new Array(fat, pof, ice, ten, frn, pre, inf, red, kru, haw);
var week04Scores = new Array(150.30, 98.90, 139.40, 157.45, 141.85, 131.85, 79.70, 106.40, 128.45, 125.35);

var week05Teams = new Array(fat, pre, ice, inf, frn, ten, kru, pof, haw, red);
var week05Scores = new Array(137.05, 136.45, 136.45, 116.10, 166.35, 127.70, 103.55, 154.70, 103.80, 112.00);

var week06Teams = new Array(dfat, dkru, dice, dred, frn, pof, dten, dpre, dinf, dhaw);
var week06Scores = new Array(121.15, 110.50, 118.65, 112.40, 125.90, 130.35, 188.80, 127.50, 102.30, 88.15);

var week07Teams = new Array(dfat, dred, ice, pre, dfrn, dkru, dten, dhaw, dinf, dpof);
var week07Scores = new Array(137.00, 84.65, 137.60, 105.30, 192.75, 128.75, 119.40, 127.75, 124.25, 84.60);

var week08Teams = new Array(dfat, dfrn, dice, dkru, dten, dpre, dinf, dhaw, pof, red);
var week08Scores = new Array(153.30, 157.45, 136.65, 89.25, 163.90, 174.05, 90.55, 120.40, 150.35, 126.00);

var week09Teams = new Array(fat, inf, ice, pof, frn, haw, ten, kru, pre, red);
var week09Scores = new Array(134.10, 140.75, 141.05, 160.15, 88.45, 106.00, 176.90, 85.20, 111.05, 73.55);

var week10Teams = new Array(fat, ten, ice, haw, frn, inf, kru, pre, pof, red);
var week10Scores = new Array(159.90, 89.00, 104.30, 109.20, 155.70, 152.40, 168.30, 149.05, 162.45, 100.55);

var week11Teams = new Array(dfat, dice, dfrn, dred, dten, dpof, dinf, dpre, kru, haw);
var week11Scores = new Array(124.25, 118.95, 148.50, 122.65, 138.75, 80.90, 141.55, 97.75, 137.55, 82.65);

var week12Teams = new Array(fat, inf, dice, dfrn, dten, dhaw, dkru, dred, dpof, dpre);
var week12Scores = new Array(139.65, 139.95, 200.80, 142.05, 116.95, 114.40, 122.20, 95.55, 106.65, 123.65);

var week13Teams = new Array(dfat, dkru, dice, dred, frn, ten, dinf, dpof, dhaw, dpre);
var week13Scores = new Array(132.15, 120.35, 118.05, 136.20, 132.20, 131.00, 112.25, 134.45, 103.70, 160.45);

var week14Teams = new Array(dfat, dred, ice, pre, dfrn, dkru, dten, dinf, dhaw, dpof);
var week14Scores = new Array(151.95, 108.75, 130.55, 135.00, 132.05, 170.45, 162.60, 156.55, 113.05, 138.45);

var weekly_dates = [ "Thursday, September 4th",  "Thursday, September 11th", "Thursday, September 18th",
                     "Thursday, September 25th", "Thursday, October 2nd",    "Thursday, October 9th", 
                     "Thursday, October 16th",   "Thursday, October 23rd",   "Thursday, October 30th", 
                     "Thursday, November 6th",   "Thursday, November 13th",  "Thursday, November 20th", 
                     "Thursday, November 27th",  "Thursday, December 4th" ];

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



//                  Record, Division Record

var predatorsRec   = [  8,  5,  4, 3 ];   // Joe
var belicheckRec   = [  7,  6,  6, 1 ];   // Harrison
var fatbastardsRec = [  7,  6,  5, 3 ];   // Steve
var cookiemonRec   = [  5,  8,  3, 4 ];   // Noah
var krustyRec      = [  1, 12,  0, 7 ];   // Hunter

var iceotopesRec   = [ 12,  1,  6, 1 ];   // John
var ingloriousRec  = [  9,  4,  5, 3 ];   // Matt
var thenubsRec     = [  6,  7,  2, 5 ];   // Adam
var rolltideRec    = [  6,  7,  3, 4 ];   // Daniel
var tenanusRec     = [  4,  9,  2, 5 ];   // Jake

// Scoring

//Div 1
var predators    = [ 159.10, 127.00, 158.05, 171.70, 194.05, 162.65, 149.95, 149.20, 154.75, 101.35, 130.15, 148.25, 140.95 ]; // Joe
var opppredators = [ 169.25, 133.20, 110.95, 140.20, 131.65, 140.15, 128.40, 114.60, 171.50, 145.25, 133.30, 124.70, 73.30 ]; // Joe

var belicheck    = [ 120.45, 123.60, 117.30, 130.70, 140.40, 157.30, 128.40, 132.25, 129.05, 120.15, 171.30, 121.15, 139.80 ]; // Harrsion
var oppbelicheck = [ 127.45, 83.75, 98.40, 152.40, 141.60, 129.15, 149.95, 116.10, 145.85, 144.70, 139.75, 98.00, 96.05 ]; // Harrsion

var fatbastards    = [ 120.05, 133.20, 130.25, 90.20, 109.30, 129.15, 122.35, 130.20, 113.55, 140.95, 133.30, 103.20, 96.05 ]; // Steve
var oppfatbastards = [ 105.95, 127.00, 113.90, 164.65, 92.25, 157.30, 130.90, 88.45, 127.65, 126.20, 130.15, 122.15, 139.80 ]; // Steve

var cookiemon    = [ 169.25, 83.75, 113.90, 105.95, 157.45, 108.15, 143.85, 114.60, 142.30, 169.25, 139.75, 122.15, 149.35 ]; // Noah
var oppcookiemon = [ 159.10, 123.60, 130.25, 169.55, 193.45, 122.35, 94.95, 149.20, 132.90, 125.90, 171.30, 103.20, 153.50 ]; // Noah

var krusty    = [ 105.95, 122.25, 98.40, 93.95, 117.55, 140.15, 94.95, 88.45, 81.95, 125.55, 128.05, 98.00, 73.30 ]; // Hunter
var oppkrusty = [ 120.05, 133.00, 117.30, 155.80, 127.00, 162.65, 143.85, 130.20, 135.75, 154.10, 124.95, 121.15, 140.95 ]; // Hunter


//Div 2
var iceotopes    = [ 127.45, 167.80, 141.25, 164.65, 193.45, 172.85, 177.05, 170.85, 135.75, 145.25, 90.30, 154.20, 153.50 ]; // John
var oppiceotopes = [ 120.45, 145.70, 118.40, 90.20, 157.45, 124.05, 145.95, 142.25, 81.95, 101.35, 145.62, 136.05, 149.35 ]; // John

var inglorious    = [ 126.60, 157.80, 139.90, 169.55, 131.65, 124.05, 130.90, 142.25, 145.85, 154.10, 179.55, 132.30, 92.25 ]; // Matt
var oppinglorious = [ 112.45, 155.50, 123.10, 105.95, 194.05, 172.85, 122.35, 170.85, 129.05, 122.55, 150.70, 201.95, 87.90 ]; // Matt

var thenubs    = [ 124.40, 145.70, 123.10, 140.20, 127.00, 122.35, 124.00, 116.10, 127.65, 144.70, 145.62, 201.95, 139.75 ]; // Adam
var oppthenubs = [ 163.45, 167.80, 139.90, 171.70, 117.55, 108.15, 154.30, 132.25, 113.55, 120.15, 90.30, 132.30, 147.20 ]; // Adam

var rolltide    = [ 112.45, 133.00, 118.40, 152.40, 92.25, 127.90, 154.30, 159.10, 171.50, 125.90, 150.70, 124.70, 147.20 ]; // Daniel
var opprolltide = [ 126.60, 122.25, 141.25, 130.70, 109.30, 135.75, 124.00, 123.65, 154.75, 169.25, 179.55, 142.25, 139.75 ]; // Daniel

var tenanus    = [ 163.45, 155.50, 110.95, 155.80, 141.60, 135.75, 145.95, 123.65, 132.90, 126.20, 124.95, 136.05, 87.90 ]; // Jake
var opptenanus = [ 124.40, 157.80, 158.05, 93.95, 140.40, 127.90, 177.05, 159.10, 142.30, 140.95, 128.05, 154.20, 92.25 ]; // Jake


var pfl_records=[
      predatorsRec,
      belicheckRec,
      fatbastardsRec,
      cookiemonRec,
      krustyRec,
     
      iceotopesRec,
      ingloriousRec,
      thenubsRec,
      rolltideRec,
      tenanusRec
      ];

var pfl_labels = [
      "Predators",
      "Discount Belicheck",
      "Fat Bastards",
      "Cookie Monsters",
      "Krusty Krushers",

      "Iceotopes",
      "Inglorious Staffords",
      "The Nubs",
      "Roll Tide" ,
      "Tenacious Anus"
      ];

var pfl_owners = [
      "Joe",        // Predators
      "Harrison",   // Belicheck
      "Steve",      // Fat Bastards
      "Noah",       // Cookie Monsters
      "Hunter",     // Krusty Krushers

      "John",       // Iceotopes
      "Matt",       // Inglorious Staffords
      "Adam",       // The Nubs
      "Daniel",     // Roll Tide
      "Jake"        // Tenacious Anus
      ];

var pfl_scores=[
        predators,
        belicheck,
        fatbastards,
        cookiemon,
        krusty,

        iceotopes,
        inglorious,
        thenubs,
        rolltide,
        tenanus
     ];

var opp_scores=[
        opppredators,
        oppbelicheck,
        oppfatbastards,
        oppcookiemon,
        oppkrusty,

        oppiceotopes,
        oppinglorious,
        oppthenubs,
        opprolltide,
        opptenanus
     ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
              1,   // predators
              0,   // belicheck
              0,   // bastards
              4,   // cookiemon
              4,   // krusty

              2,   // iceotopes
              1,   // inglorious
              4,   // thenubs
              4,   // rolltide
              4    // tenanus
             ];

var week1_txt = "Welcome to the 2018 PFL season.  In another shining example of how its better to be lucky than good I present: " +
                "Despite having the third lowest score for the week, the Bastards (despite losing QB and top RB early in games) eek " +
                "out a win, and the Preds, despite having third highest score of the week lose a close one to the top score of the week.";

var week2_txt = "So how do you go from the highest score of week to the lowest score of the week (and quite possibly the season)?" +
                "Wow! Too bad they didn't start Patrick Mahomes... And for the second straight week the 3rd highest score goes " +
                "down to defeat, causing a fair amount of sphincter tighenting I'm sure...  The Bastards meanwhile are " +
                " contemplating changing their name to the Michael Thomas Fan Fest!";

var week3_txt = "Much lower scores this week, though much appreciated by the teams starting with a B in their name (Bellis and Bastards). " +
                "All the 2-0 teams won again, but only one of the 0-2 teams showed up as the Preds not only win but get the high score for the " +
                "week and second score in the 150s in 2 weeks - does that now make them one of the favs despite being 1-2? How about this - 7 teams " +
                "have a better year high score than the Fat but they're 3-0 - thats some damn good smoke and mirrors!";

var week4_txt = "Down to two undefeated teams and two defeated teams... good balance I guess. Four 2-2 teams who's seasons could go either way. " +
                "Rumor has it that Division 2 is submitting a petition that all four playoff teams come from their division as Division 1 are a " +
                "bunch of goons... (except nmaybe the predators who are just unlucky) - all the other four would have the lowest averages if " +
                "they were in Division 2 :-(";

var week5_txt = "And then there was one (sounds like a movie plot) - one undefeated, one unfeated, and one unbelievably lucky bastard of a team! " +
                "How often does the 2nd lowest score of the week win? The Ice are the solitary top dog (though the Pred certainly have to have " +
                "them and the Fat worried...).  The battle of the bottom dwellers ensured at least one of them would have a win and the nubs " +
                "finally broke through - is there no stopping them now? Time to rename the KKs to Krusty Krushed?";

var week6_txt = "Now that we've separated the haves (ice, pred) from the nots (the rest of us) it's all about jockeying for the wild cards, " +
                "which almost assuredly will come from Division 2. That means a long season for most of Divison 1... In an example of " +
                "kismet, the Fat's suffered some bad luck (hard to believe I know) - despite scoring 11 points over their season average, they " +
                "lost as the Belli's scored their high score for the season!";

var week7_txt = "Seems like the Ice could be on their way to the first undefeated season - no ones even coming close to beating him. They " +
                "could have scored 20 less points and still beat every team. On the other end of the spectrum, krusty is just being crushed. " +
                "And looks like we've seen the end of the smoke and mirrors strategy as the Fat drop from division leaders to currently out " +
                "of the playoffs, with the Pred obviously the class of the division.";

var week8_txt = "Its getting pretty crowded in the middle for the two wild cards. Seems like the top and bottom are fairly set but there's five " +
                "teams within a game of each other! Remember that total points will decide any tied records so the Anus and Staffords have an " +
                "advantage there at this point. The amazing ice have the high score for the week for basically the fourth week in a row and " +
                "fifth in 8 weeks - wow!";

var week9_txt = "The best record vs the worst record, outcomes gotta be predictble right, well yes... ice beat the krust despite their second " +
                "worst score of the year. The Fats luck has definitely run out when the Div 2 last place (but still favored) Nubs take them " +
                "out easily. Hard to see a playoff path for them at this point. The cookie monsters woke up finally and munched some anus " +
                "(hmmm hope they enjoyed that!). As for every one else: lots of jockeying for playoff spots.";

var week10_txt = "To no ones surprise the Ice clinched a playoff spot and the Krustys clinched an early vacation. Amazing the Fat are back on " +
                 "top in their division thanks to their high score of the year, marking the first time they've scored more than the league " +
                 "average (read that again: the average!), a whopping 140 pts! Wheee! And we've also got a couple of cookies with nubbs that " +
                 "are making a late charge! Do they have enough season left?";

var week11_txt = "Down goes Fraiser, down goes Fraiser (probably lost on you youngsters) - the ice has melted! Long live the Nubs! " +
                 "And for the second shocker of the week: the Krustys krushed the Butts for their first win with a big Monday comeback! " +
                 "The Nubs are on a roll, can they make it all the way back, now only one loss back from the last playoff spot? Course, " +
                 "thats true of almost half the league as three other teams are biting at the Predators heels after the Fat lucked out yet " +
                 "another victory to open up a game lead in their division.";

var week12_txt = "Things are getting interesting in Div 1.  With the Cookies beating the Turds, one game separates the top three teams and " + 
                 "they all play each other in the next two weeks! Gonna go down to the wire...  Sadly, the Anus become the second team " +
                 "eliminated, while the Topes clinch their division and the number one seed, leaving seven teams still within reach of the " +
                 "last three spots. Competitive or mediocre? Except for the hot Nubs - setting the high score for the year and winners of four " +
                 "straight to get right into the thick of things!";

var week13_txt = "One week to go and one playoff spot left.  Will it be Fat or Belly?  With the Belly just throttling the Fat this week, you'd " +
                 "have to guess it'd be the Bellis but they have to beat the division leading Preds (tough) or have the Fat lose to the Staffs " +
                 "(not so tough). So congrats ahead of time to the Bellis for grabbing the final spot in the last week! Also congrats to Staffs " +
                 " and Preds for clinching a spot and condolences to the rest who had the lifelong dream of making the PFL playoffs dashed :-(";

var week14_txt = "";

// dxxx means division game 

var fat = "Fat Bastards";         var dfat = fat + " *";
var pre = "Predators";            var dpre = pre + " *";
var bel = "Discount Belichecks";  var dbel = bel + " *";
var com = "Cookie Monsters";      var dcom = com + " *";
var kru = "Krusty Krushers";      var dkru = kru + " *";

var ice = "Iceotopes";            var dice = ice + " *";
var ing = "Inglorious Staffords"; var ding = ing + " *";
var rol = "Roll Tide";            var drol = rol + " *";
var ten = "Tenacious Anus";       var dten = ten + " *";
var nub = "The Nubs";             var dnub = nub + " *";

var sfat = fatbastards;
var spre = predators;
var sbel = belicheck;
var scom = cookiemon;
var skru = krusty;

var sice = iceotopes;
var sing = inglorious;
var srol = rolltide;
var sten = tenanus;
var snub = thenubs;

//var fatOpp[] = { skru[0], spre[1], scom[2], sice[3], srol[4], sbel[5], sing[6], skru[7], snub[8], sten[9], spre[10], scom[11], sbel[12], sing[13] };

 
var week01Teams = new Array(dfat, dkru, ice, bel, dcom, dpre, drol, ding, dten, dnub);
var week01Scores = new Array(sfat[0], skru[0], sice[0], sbel[0], scom[0], spre[0], srol[0], sing[0], sten[0], snub[0]);

var week02Teams = new Array(dfat, dpre, dice, dnub, dcom, dbel, rol, kru, dten, ding); 
var week02Scores = new Array(sfat[1], spre[1], sice[1], snub[1], scom[1], sbel[1], srol[1], skru[1], sten[1], sing[1]);

var week03Teams = new Array(dfat, dcom, dice, drol, pre, ten, dkru, dbel, dnub, ding);
var week03Scores = new Array(sfat[2], scom[2], sice[2], srol[2], spre[2], sten[2], skru[2], sbel[2], snub[2], sing[2]);

var week04Teams = new Array(fat, ice, com, ing, nub, pre, kru, ten, bel, rol);
var week04Scores = new Array(sfat[3], sice[3], scom[3], sing[3], snub[3], spre[3], skru[3], sten[3], sbel[3], srol[3]);

var week05Teams = new Array(fat, rol, ice, com, ing, pre, kru, nub, bel, ten);
var week05Scores = new Array(sfat[4], srol[4], sice[4], scom[4], sing[4], spre[4], skru[4], snub[4], sbel[4], sten[4]);

var week06Teams = new Array(dfat, dbel, dice, ding, com, nub, dpre, dkru, drol, dten);
var week06Scores = new Array(sfat[5], sbel[5], sice[5], sing[5], scom[5], snub[5], spre[5], skru[5], srol[5], sten[5]);

var week07Teams = new Array(fat, ing, dice, dten, dcom, dkru, dpre, dbel, drol, dten);
var week07Scores = new Array(sfat[6], sing[6], sice[6], sten[6], scom[6], skru[6], spre[6], sbel[6], srol[6], sten[6]);

var week08Teams = new Array(dfat, dkru, dice, ding, dcom, dpre, bel, nub, drol, dten);
var week08Scores = new Array(sfat[7], skru[7], sice[7], sing[7], scom[7], spre[7], sbel[7], snub[7], srol[7], sten[7]);

var week09Teams = new Array(fat, nub, ice, kru, com, ten, rol, pre, bel, ing);
var week09Scores = new Array(sfat[8], snub[8], sice[8], skru[8], scom[8], sten[8], srol[8], spre[8], sbel[8], sing[8]);

var week10Teams = new Array(fat, ten, ice, pre, com, rol, kru, ing, bel, nub);
var week10Scores = new Array(sfat[9], sten[9], sice[9], spre[9], scom[9], srol[9], skru[9], sing[9], sbel[9], snub[9]);

var week11Teams = new Array(dfat, dpre, dice, dnub, dcom, dbel, kru, ten, drol, ding);
var week11Scores = new Array(sfat[10], spre[10], sice[10], snub[10], scom[10], sbel[10], skru[10], sten[10], srol[10], sing[10]);

var week12Teams = new Array(dfat, dcom, dice, dten, rol, pre, dkru, dbel, ding, dnub);
var week12Scores = new Array(sfat[11], scom[11], sice[11], sten[11], srol[11], spre[11], skru[11], sbel[11], sing[11], snub[11]);

var week13Teams = new Array(dfat, dbel, ice, com, dkru, dpre, drol, dnub, dten, ding);
var week13Scores = new Array(sfat[12], sbel[12], sice[12], scom[12], skru[12], spre[12], srol[12], snub[12], sten[12], sing[12]);

var week14Teams = new Array(fat, ing, dice, drol, dcom, dkru, dpre, dbel, dten, dnub);
var week14Scores = new Array(sfat[13], sing[13], sice[13], srol[13], scom[13], skru[13], spre[13], sbel[13], sten[13], snub[13]);

var weekly_dates = [ "Thursday, September 6th",  "Thursday, September 13th", "Thursday, September 20th",
                     "Thursday, September 27th", "Thursday, October 4th",    "Thursday, October 11th", 
                     "Thursday, October 18th",   "Thursday, October 25th",   "Thursday, November 1st", 
                     "Thursday, November 8th",   "Thursday, November 15th",  "Thursday, November 22rd", 
                     "Thursday, November 29th",  "Thursday, December 6th" ];

var weekly_teams = [ week01Teams, week02Teams, week03Teams, week04Teams, week05Teams, week06Teams, week07Teams,
                     week08Teams, week09Teams, week10Teams, week11Teams, week12Teams, week13Teams, week14Teams ];

var weekly_scores = [ week01Scores, week02Scores, week03Scores, week04Scores, week05Scores, week06Scores, week07Scores,
                      week08Scores, week09Scores, week10Scores, week11Scores, week12Scores, week13Scores, week14Scores ];

var weekly_text = [
      week1_txt,   week2_txt,   week3_txt,   week4_txt,
      week5_txt,   week6_txt,   week7_txt,   week8_txt,
      week9_txt,   week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt
  ];



//                  Record, Division Record

var predatorsRec   = [ 10, 4,  6, 3 ];   // Joe
var popefoamRec    = [ 10, 4,  6, 3 ];   // Tom
var porkchopsRec   = [ 5, 9,  4, 5 ];   // Noah
var fanaticsRec    = [ 3, 10,  1, 8 ];   // Katie

var iceotopesRec   = [ 10, 4,  7, 2 ];   // John
var fatbastardsRec = [ 7, 7,  5, 4 ];   // Steve
var belicheckRec   = [ 7, 7,  4, 5 ];   // Harrison
var krustyRec      = [ 4, 10,  2, 7 ];   // Hunter

var pfl_records=[
      predatorsRec,
      popefoamRec,
      porkchopsRec,
      fanaticsRec,

      iceotopesRec,
      fatbastardsRec,
      belicheckRec,
      krustyRec
      ];

var pfl_labels = [
      "Predators",
      "Pope of Foam",
      "Porkchops",
      "Fanatics12",

      "Iceotopes",
      "Fat Bastards",
      "Discount Belicheck",
      "Krusty Krushers"
      ];


// Scoring

//Div 1

var predators    = [ 170.80, 150.15, 175.95, 196.25, 173.50, 172.05, 167.45, 125.75, 169.20, 158.40, 131.10, 180.15, 131.55, 118.75 ];  // Joe
var opppredators = [ 146.55, 144.60, 172.55, 155.25, 160.95, 111.50, 162.80, 131.45, 123.70, 157.20, 148.40, 149.05, 140.65, 174.70 ];  // Joe

var popeoffoam    = [ 163.30, 130.60, 172.55, 111.50, 166.00, 118.95, 161.45, 131.45, 141.60, 142.50, 143.10, 153.35, 140.65, 152.75 ];  // Tom
var opppopeoffoam = [ 130.55, 121.85, 175.95, 152.10, 160.85, 132.20, 149.70, 125.75, 145.15, 134.50, 113.90, 121.95, 131.55, 105.45 ];  // Tom

var porkchops    = [ 130.55, 144.60, 187.70, 112.95, 150.50, 132.20, 162.80, 163.65, 125.00, 175.55, 113.90, 149.05, 205.55, 119.70 ];  // Noah
var oppporkchops = [ 163.30, 150.15, 137.40, 116.10, 165.15, 118.95, 167.45, 113.05, 165.40, 126.75, 143.10, 180.15, 139.45, 131.60 ];  // Noah

var fanatics    = [ 146.55, 121.85, 137.40, 146.45, 127.90, 111.50, 149.70, 113.05, 152.05, 148.35, 148.40, 121.95, 139.45, 119.80 ];   // Katie
var oppfanatics = [ 170.80, 130.60, 187.70, 191.75,  85.70, 172.05, 161.45, 163.65, 126.25, 205.95, 131.10, 153.35, 205.55, 145.35 ];   // Katie

//Div 2
var iceotopes    = [ 167.95, 191.90, 135.30, 155.25, 160.85, 176.70, 189.60, 137.05, 165.40, 205.95, 191.80, 169.90, 157.25, 174.70 ];  // John
var oppiceotopes = [ 135.20, 161.00, 143.75, 196.25, 166.00, 144.40, 94.25, 188.35, 125.00, 148.35, 116.00, 153.00, 126.80, 118.75 ];  // John

var fatbastards    = [ 154.0, 176.15, 143.75, 152.10, 165.15, 182.30, 138.65, 188.35, 126.25, 157.20, 155.35, 157.65, 126.80, 105.45 ];  // Steve
var oppfatbastards = [ 163.8, 183.95, 135.30, 111.50, 150.50, 144.15, 148.30, 137.05, 152.05, 158.40, 108.40, 122.50, 157.25, 152.75 ];  // Steve

var belicheck    = [ 135.20, 183.95, 130.45, 191.75, 160.95, 144.40, 148.30, 172.15, 145.15, 126.75, 116.00, 122.50, 130.70, 145.35 ];  // Harrsion
var oppbelicheck = [ 167.95, 176.15,  97.60, 146.45, 173.50, 176.70, 138.65, 140.55, 141.60, 175.55, 191.80, 157.65, 154.75, 119.80 ];  // Harrsion

var krusty    = [ 163.80, 161.00,  97.60, 116.10,  85.70, 144.15, 94.25, 140.55, 123.70, 134.50, 108.40, 153.00, 154.75, 131.60 ];   // Hunter
var oppkrusty = [ 154.00, 191.90, 130.45, 112.95, 127.90, 182.30, 189.60, 172.15, 169.20, 142.50, 155.35, 169.90, 130.70, 119.70 ];   // Hunter


var pfl_owners = [
      "Joe M",        // Predators
      "Tom R",        // Pope of Foam
      "Noah G",       // Porkchops
      "Katie",        // Fanatics12

      "John F",       // Iceaholics
      "Steve C",      // Fat Bastards
      "Harrison G",   // Belicheck
      "Hunter"        // Krusty Krushers
      ];

var pfl_scores=[
                predators,
                popeoffoam,
                porkchops,
                fanatics,

                iceotopes,
                fatbastards,
                belicheck,
                krusty
               ];

var opp_scores=[
                opppredators,
                opppopeoffoam,
                oppporkchops,
                oppfanatics,

                oppiceotopes,
                oppfatbastards,
                oppbelicheck,
                oppkrusty
               ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
              2,   // predators
              1,   // popefoam
              4,   // porkchops
              4,   // fanatics

              2,   // iceotopes
              1,   // bastards
              4,   // belicheck
              4    // krusty
             ];

var week1_txt = "Welcome to the 2016 PFL season. Most of you are probably as deluded as to your chances as Donald Trump is but good luck to ya... Four of us got off to a good start, and can dream a little longer. The Flat are done for obviously as they couldn't even beat a crusty team that didn't even play all their players.";

var week2_txt = "Ah, the highs and the lows, with the high score for year and the low score for the year - course it's only the 2nd week but... Tips for beating the Bastards: play any 31+ yr old running back on your roster - they'll average 33 pts a game, the Fat losing despite the leagues 3rd highest score of the year.";

var week3_txt = "After 3 weeks only 1 undefeated and 1 defeated left!  And what will probably be the lowest score of the year by the Krushed!  The Ice didn't have a 31+ yr old running back so predicatbly lost to the Bastards, though Julio Jones did his best post-retirement preview which didn't help either.";

var week4_txt = "Can anyone stop the Bellys? Not if he keeps scoring 190+ points!  Unless he runs up against some predators!!  So who else is hoping for Julio and Antonio retire?  With bye weeks coming up maybe someone can take them down. And I guess that there was some under-achieving in that crushed chops snooze affair probably doesn't need mentioning.";

var week5_txt = "Last of the defeateds no more, with an assist from the Krusties.  But no ones stopping the Pred... yet. It only feels like they've locked up their division already but there's a lot of weeks left still. Much tighter in the other vision as all four teams are within one game of each other. Mediocrity or four even teams?";

var week6_txt = "The Fat haven't lost in four weeks, now have the 2nd best record, and yet haven't gained a single game on the Preds, whos continue their rampage. Week 11 could be be the big showdown. Most every one else is win one, lose one - just hoping to hold on to a playoff spot. :-)";

var week7_txt = "Predators roll on, could they have the first undefeated season in PFL history?  They're halfway there! The Bastards bow officially hate Matt Forte who is now averaging 31 pts against the Fat, 9 pts against his owners five  other five opponnets. Nice tight battle there in Divison 2 though ain't it.";

var week8_txt = "Down goes Frazier, down goes Frazier (not that half of us are too young to get this reference).  Congratulations to the Pope for foaming up the Pred!!! Theres hope for us all, except maybe the Fanatics :-(";

var week9_txt = "Interesting activity fantasy football - after having the high score last week the Fat lose to a 1-7 Fanatics team that has their high score for the year and didn't even fill three bye spots. The 12 about to start an epic comeback? The Fat plays the 8-1 Pred next week, gotta figure the Bastards are the favorite don't ya after this week?";

var week10_txt = "Well, while not mathematically eliminated, no team with a losing record has ever made the PFL playoffs, and thats where two of us are now at! Tough road ahead for them. Congrats to the Ice for breaking the 200 barrier. And in the Pork Belly matchup, pointing out how its better to be chops than some discount cut...";

var week11_txt = "Once is a fluke, but two losses, well maybe the pred are now prey? And to the Fanatics? Karma after the Preds win last week vs the Fat last week and Fans beating up the Fats the week before!  And sadly we have our first eliminated team as the krustys are now officially crushed!  Does that mean he gets first pick in the draft next year?";

var week12_txt = "Not much drama this week. The favorites all won, three by 30+ pts, closest by 16. But two more teams now drop by the wayside. Maybe next year for Fanatics and Chops.  And congrats to the Rators for clinching the first playoff spot, leaving three spots for four other teams - which one will miss out? Probably won't know till week 14 I suspect!";

var week13_txt = "I would think the Chops are thinking where's that been all season... not better late than never huh. So we're down to the last week and theres one last spot for the grabbing. Congrats to Pred, Pope and Ice on making the playoffs.  The Bastards seem likely barring a disaster but the Bellys got hope still. As for the rest, well maybe next year.";

var week14_txt = "We've come to the end and four of us are still standing. As for the others, there's a participation ribbon waiting for you!  The hottest team in the league (not usually associated with ice) wins the regular season trophy, worth.... nada!  They'll match up against the coldest team in the leauge as the fat's congealed and gone rancid. And congrats to defending two time champ Popes making it yet again and the Predators too. Good luck!";

// dxxx means division game 

var pof = "Pope of Foam";        var dpof = pof + " *";
var pre = "Predators";           var dpre = pre + " *";
var por = "Porkchops";           var dpor = por + " *";
var fan = "Fanatics12";          var dfan = fan + " *";

var fat = "Fat Bastards";        var dfat = fat + " *";
var ice = "Iceaholics";          var dice = ice + " *";
var kru = "Krusty Krushers";     var dkru = kru + " *";
var bel = "Discount Belichecks"; var dbel = bel + " *";

var sfat = fatbastards;
var sice = iceotopes;
var skru = krusty;
var sbel = belicheck;

var spof = popeoffoam;
var spre = predators;
var spor = porkchops;
var sfan = fanatics;

var week01Teams = new Array(dfat, dkru, dice, dbel, dfan, dpre, dpor, dpof);
var week01Scores = new Array(sfat[0], skru[0], sice[0], sbel[0], sfan[0], spre[0], spor[0], spof[0]);

var week02Teams = new Array(dfat, dbel, dice, dkru, dfan, dpof, dpor, dpre); 
var week02Scores = new Array(sfat[1], sbel[1], sice[1], skru[1], sfan[1], spof[1], spor[1], spre[1]);

var week03Teams = new Array(dfat, dice, dfan, dpor, dpof, dpre, dkru, dbel);
var week03Scores = new Array(sfat[2], sice[2], sfan[2], spor[2], spof[2], spre[2], skru[2], sbel[2]);

var week04Teams = new Array(fat, pof, ice, pre, fan, bel, por, kru);
var week04Scores = new Array(sfat[3], spof[3], sice[3], spre[3], sfan[3], sbel[3], spor[3], skru[3]);

var week05Teams = new Array(fat, por, ice, pof, fan, kru, pre, bel);
var week05Scores = new Array(sfat[4], spor[4], sice[4], spof[4], sfan[4], skru[4], spre[4], sbel[4]);

var week06Teams = new Array(dfat, dkru, dice, dbel, dfan, dpre, dpor, dpof);
var week06Scores = new Array(sfat[5], skru[5], sice[5], sbel[5], sfan[5], spre[5], spor[5], spof[5]);

var week07Teams = new Array(dfat, dbel, dice, dkru, dfan, dpof, dpor, dpre);
var week07Scores = new Array(sfat[6], sbel[6], sice[6], skru[6], sfan[6], spof[6], spor[6], spre[6]);

var week08Teams = new Array(dfat, dice, dfan, dpor, dpof, dpre, dkru, dbel);
var week08Scores = new Array(sfat[7], sice[7], sfan[7], spor[7], spof[7], spre[7], skru[7], sbel[7]);

var week09Teams = new Array(fat, fan, ice, por, pof, bel, pre, kru);
var week09Scores = new Array(sfat[8], sfan[8], sice[8], spor[8], spof[8], sbel[8], spre[8], skru[8]);

var week10Teams = new Array(fat, pre, ice, fan, por, bel, pof, kru);
var week10Scores = new Array(sfat[9], spre[9], sice[9], sfan[9], spor[9], sbel[9], spof[9], skru[9]);

var week11Teams = new Array(dfat, dkru, dice, dbel, dfan, dpre, dpor, dpof);
var week11Scores = new Array(sfat[10], skru[10], sice[10], sbel[10], sfan[10], spre[10], spor[10], spof[10]);

var week12Teams = new Array(dfat, dbel, dice, dkru, dfan, dpof, dpor, dpre);
var week12Scores = new Array(sfat[11], sbel[11], sice[11], skru[11], sfan[11], spof[11], spor[11], spre[11]);

var week13Teams = new Array(dfat, dice, dfan, dpor, dpof, dpre, dkru, dbel);
var week13Scores = new Array(sfat[12], sice[12], sfan[12], spor[12], spof[12], spre[12], skru[12], sbel[12]);

var week14Teams = new Array(fat, pof, ice, pre, fan, bel, por, kru);
var week14Scores = new Array(sfat[13], spof[13], sice[13], spre[13], sfan[13], sbel[13], spor[13], skru[13]);

var weekly_dates = [ "Thursday, September 8th",  "Thursday, September 15th", "Thursday, September 22th",
                     "Thursday, September 29th", "Thursday, October 6th",    "Thursday, October 13th", 
                     "Thursday, October 20th",    "Thursday, October 30th",   "Thursday, November 3th", 
                     "Thursday, November 10th",   "Thursday, November 17th",  "Thursday, November 24th", 
                     "Thursday, December 1st",    "Thursday, December 8th" ];

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


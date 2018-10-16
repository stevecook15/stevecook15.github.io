
//                  Record, Division Record

var fatbastardsRec = [ 4, 2,  3, 1 ];   // Steve
var predatorsRec   = [ 4, 2,  1, 2 ];   // Joe
var belicheckRec   = [ 3, 3,  3, 0 ];   // Harrison
var cookiemonRec   = [ 1, 5,  1, 2 ];   // Noah
var krustyRec      = [ 0, 6,  0, 4 ];   // Hunter

var iceotopesRec   = [ 6, 0,  3, 0 ];   // John
var ingloriousRec  = [ 4, 2,  3, 1 ];   // Matt
var tenanusRec     = [ 4, 2,  2, 1 ];   // Jake
var rolltideRec    = [ 2, 4,  0, 3 ];   // Daniel
var thenubsRec     = [ 2, 4,  0, 3 ];   // Adam

// Scoring

//Div 1
var fatbastards    = [ 120.05, 133.20, 130.25, 90.20, 109.30, 129.15 ]; // Steve
var oppfatbastards = [ 105.95, 127.00, 113.90, 164.65, 92.25, 157.30 ]; // Steve

var predators    = [ 159.10, 127.00, 158.05, 171.70, 194.05, 162.65 ]; // Joe
var opppredators = [ 169.25, 133.20, 110.95, 140.20, 131.65, 140.15 ]; // Joe

var belicheck    = [ 120.45, 123.60, 117.30, 130.70, 140.40, 157.30 ]; // Harrsion
var oppbelicheck = [ 127.45, 83.75, 98.40, 152.40, 141.60, 129.15 ]; // Harrsion

var cookiemon    = [ 169.25, 83.75, 113.90, 105.95, 157.45, 108.15 ]; // Noah
var oppcookiemon = [ 159.10, 123.60, 130.25, 169.55, 193.45, 122.35 ]; // Noah

var krusty    = [ 105.95, 122.25, 98.40, 93.95, 117.55, 140.15 ]; // Hunter
var oppkrusty = [ 120.05, 133.00, 117.30, 155.80, 127.00, 162.65 ]; // Hunter


//Div 2
var inglorious    = [ 126.60, 157.80, 139.90, 169.55, 131.65, 124.05 ]; // Matt
var oppinglorious = [ 112.45, 155.50, 123.10, 105.95, 194.05, 172.85 ]; // Matt

var iceotopes    = [ 127.45, 167.80, 141.25, 164.65, 193.45, 172.85 ]; // John
var oppiceotopes = [ 120.45, 145.70, 118.40, 90.20, 157.45, 124.05 ]; // John

var tenanus    = [ 163.45, 155.50, 110.95, 155.80, 141.60, 135.75 ]; // Jake
var opptenanus = [ 124.40, 157.80, 158.05, 93.95, 140.40, 127.90 ]; // Jake

var rolltide    = [ 112.45, 133.00, 118.40, 152.40, 92.25, 127.90 ]; // Daniel
var opprolltide = [ 126.60, 122.25, 141.25, 130.70, 109.30, 135.75 ]; // Daniel

var thenubs    = [ 124.40, 145.70, 123.10, 140.20, 127.00, 122.35 ]; // Adam
var oppthenubs = [ 163.45, 167.80, 139.90, 171.70, 117.55, 108.15 ]; // Adam


var pfl_records=[
      fatbastardsRec,
      predatorsRec,
      belicheckRec,
      cookiemonRec,
      krustyRec,
     
      iceotopesRec,
      ingloriousRec,
      tenanusRec,
      rolltideRec,
      thenubsRec
      ];

var pfl_labels = [
      "Fat Bastards",
      "Predators",
      "Discount Belicheck",
      "Cookie Monsters",
      "Krusty Krushers",

      "Iceotopes",
      "Inglorious Staffords",
      "Tenacious Anus",
      "Roll Tide" ,
      "The Nubs"
      ];

var pfl_owners = [
      "Steve",      // Fat Bastards
      "Joe",        // Predators
      "Harrison",   // Belicheck
      "Noah",       // Cookie Monsters
      "Hunter",     // Krusty Krushers

      "John",       // Iceotopes
      "Matt",       // Inglorious Staffords
      "Jake",       // Tenacious Anus
      "Daniel",     // Roll Tide
      "Adam"        // The Nubs
      ];

var pfl_scores=[
        fatbastards,
        predators,
        belicheck,
        cookiemon,
        krusty,

        iceotopes,
        inglorious,
        tenanus,
        rolltide,
        thenubs
     ];

var opp_scores=[
        oppfatbastards,
        opppredators,
        oppbelicheck,
        oppcookiemon,
        oppkrusty,

        oppiceotopes,
        oppinglorious,
        opptenanus,
        opprolltide,
        oppthenubs
     ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
              0,   // bastards
              0,   // belicheck
              0,   // cookiemon
              0,   // predators
              0,   // krusty

              0,   // iceotopes
              0,   // inglorious
              0,   // tenanus
              0,   // rolltide
              0    // thenubs
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
                "bunch of goons... (except nmaybe the predators who are just unlucky) - all the other four would have the lowest averages if they " +
                "were in Division 2 :-(";

var week5_txt = "And then there was one (sounds like a movie plot) - one undefeated, one unfeated, and one unbelievably lucky bastard of a team! " +
                "How often does the 2nd lowest score of the week win? The Ice are the solitary top dog (though the Pred certainly have to have " +
                "them and the Fat worried...).  The battle of the bottom dwellers ensured at least one of them would have a win and the nubs " +
                "finally broke through - is there no stopping them now? Time to rename the KKs to Krusty Krushed?";

var week6_txt = "Now that we've separated the haves (ice, pred) from the nots (the rest of us) it's all about jockeying for the wild cards, " +
                "which almost assuredly will come from Division 2. That means a long season for most of Divison 1... In an example of " +
                "kismet, the Fat's suffered some bad luck (hard to believe I know) - despite scoring 11 points over their season average, they " +
                "lost as the Belli's scored their high score for the season!";

var week7_txt = "";

var week8_txt = "";

var week9_txt = "";

var week10_txt = "";

var week11_txt = "";

var week12_txt = "";

var week13_txt = "";

var week14_txt = "";

// dxxx means division game 

var fat = "Fat Bastards";         var dfat = fat + " *";
var pre = "Predators";            var dpre = pre + " *";
var bel = "Discount Belichecks";  var dbel = bel + " *";
var com = "Cookie Monsters";      var dcom = com + " *";
var kru = "Krusty Krushers";      var dkru = kru + " *";

var ice = "Iceotopes";            var dice = ice + " *";
var ing = "Inglorious Staffords"; var ding = ing + " *";
var ten = "Tenacious Anus";       var dten = ten + " *";
var rol = "Roll Tide";            var drol = rol + " *";
var nub = "The Nubs";             var dnub = nub + " *";

var sfat = fatbastards;
var spre = predators;
var sbel = belicheck;
var scom = cookiemon;
var skru = krusty;

var sice = iceotopes;
var sing = inglorious;
var sten = tenanus;
var srol = rolltide;
var snub = thenubs;

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


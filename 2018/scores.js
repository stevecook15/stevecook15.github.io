
//                  Record, Division Record

var fatbastardsRec = [ 3, 0,  3, 0 ];   // Steve
var belicheckRec   = [ 2, 1,  2, 0 ];   // Harrison
var cookiemonRec   = [ 1, 2,  1, 2 ];   // Noah
var predatorsRec   = [ 1, 2,  0, 2 ];   // Joe
var krustyRec      = [ 0, 3,  0, 3 ];   // Hunter

var ingloriousRec  = [ 3, 0,  3, 0 ];   // Matt
var iceotopesRec   = [ 3, 0,  2, 0 ];   // John
var tenanusRec     = [ 1, 2,  1, 1 ];   // Jake
var rolltideRec    = [ 1, 2,  0, 2 ];   // Daniel
var thenubsRec     = [ 0, 3,  0, 3 ];   // Adam

// Scoring

//Div 1
var fatbastards    = [ 120.05, 133.20, 130.25 ]; // Steve
var oppfatbastards = [ 105.95, 127.00, 113.90 ]; // Steve

var cookiemon    = [ 169.25, 83.75, 113.90 ]; // Noah
var oppcookiemon = [ 159.10, 123.60, 130.25 ]; // Noah

var predators    = [ 159.10, 127.00, 158.05 ]; // Joe
var opppredators = [ 169.25, 133.20, 110.95 ]; // Joe

var krusty    = [ 105.95, 122.25, 98.40 ]; // Hunter
var oppkrusty = [ 120.05, 133.00, 117.30 ]; // Hunter

var belicheck    = [ 120.45, 123.60, 117.30 ]; // Harrsion
var oppbelicheck = [ 127.45, 83.75, 98.40 ]; // Harrsion


//Div 2
var iceotopes    = [ 127.45, 167.80, 141.25 ]; // John
var oppiceotopes = [ 120.45, 145.70, 118.40 ]; // John

var rolltide    = [ 112.45, 133.00, 118.40 ]; // Daniel
var opprolltide = [ 126.60, 122.25, 141.25 ]; // Daniel

var tenanus    = [ 163.45, 155.50, 110.95 ]; // Jake
var opptenanus = [ 124.40, 157.80, 158.05 ]; // Jake

var thenubs    = [ 124.40, 145.70, 123.10 ]; // Adam
var oppthenubs = [ 163.45, 167.80, 139.90 ]; // Adam

var inglorious    = [ 126.60, 157.80, 139.90 ]; // Matt
var oppinglorious = [ 112.45, 155.50, 123.10 ]; // Matt



var pfl_records=[
      fatbastardsRec,
      belicheckRec,
      cookiemonRec,
      predatorsRec,
      krustyRec,
     
      ingloriousRec,
      iceotopesRec,
      tenanusRec,
      rolltideRec,
      thenubsRec
      ];

var pfl_labels = [
      "Fat Bastards",
      "Discount Belicheck",
      "Cookie Monsters",
      "Predators",
      "Krusty Krushers",

      "Inglorious Staffords", //Matt
      "Iceotopes",
      "Tenacious Anus",
      "Roll Tide" ,
      "The Nubs"   // Adam
      ];

var pfl_owners = [
      "Steve",      // Fat Bastards
      "Harrison",   // Belicheck
      "Noah",       // Cookie Monsters
      "Joe",        // Predators
      "Hunter",     // Krusty Krushers

      "Matt",       // Inglorious Staffords
      "John",       // Iceotopes
      "Jake",       // Tenacious Anus
      "Daniel",     // Roll Tide
      "Adam"        // The Nubs
      ];

var pfl_scores=[
        fatbastards,
        belicheck,
        cookiemon,
        predators,
        krusty,

        inglorious,
        iceotopes,
        tenanus,
        rolltide,
        thenubs
     ];

var opp_scores=[
        oppfatbastards,
        oppbelicheck,
        oppcookiemon,
        opppredators,
        oppkrusty,

        oppinglorious ,
        oppiceotopes,
        opptenanus,
        opprolltide ,
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

              0,   // inglorious
              0,   // iceotopes
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

// dxxx means division game 

var fat = "Fat Bastards";         var dfat = fat + " *";
var com = "Cookie Monsters";      var dcom = com + " *";
var pre = "Predators";            var dpre = pre + " *";
var kru = "Krusty Krushers";      var dkru = kru + " *";
var bel = "Discount Belichecks";  var dbel = bel + " *";

var ice = "Iceotopes";            var dice = ice + " *";
var rol = "Roll Tide";            var drol = rol + " *";
var ten = "Tenacious Anus";       var dten = ten + " *";
var nub = "The Nubs";             var dnub = nub + " *";
var ing = "Inglorious Staffords"; var ding = ing + " *";

var sfat = fatbastards;
var scom = cookiemon;
var spre = predators;
var skru = krusty;
var sbel = belicheck;

var sice = iceotopes;
var srol = rolltide;
var sten = tenanus;
var snub = thenubs;
var sing = inglorious;

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


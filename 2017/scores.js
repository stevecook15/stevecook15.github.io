
//                  Record, Division Record

var fatbastardsRec = [ 0, 1,  0, 1 ];   // Steve
var belicheckRec   = [ 1, 0,  1, 0 ];   // Harrison
var predatorsRec   = [ 1, 0,  1, 0 ];   // Joe
var cookiemonRec   = [ 0, 1,  0, 1 ];   // Noah

var iceotopesRec   = [ 0, 1,  0, 1 ];   // John
var tenanusRec     = [ 1, 0,  1, 0 ];   // Jake
var rolltideRec    = [ 0, 1,  0, 1 ];   // Daniel
var krustyRec      = [ 1, 0,  1, 0 ];   // Hunter

var pfl_records=[
      belicheckRec,
      predatorsRec,
      cookiemonRec,
      fatbastardsRec,

      krustyRec,
      tenanusRec,
      iceotopesRec,
      rolltideRec
      ];

var pfl_labels = [
      "Discount Belicheck",
      "Predators",
      "Cookie Monsters",
      "Fat Bastards",

      "Krusty Krushers",
      "Tenacious Anus",
      "Iceotopes",
      "Roll Tide"
      ];


// Scoring

//Div 1
var fatbastards    = [ 124.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Steve
var oppfatbastards = [ 131.45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Steve

var belicheck    = [ 131.45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Harrsion
var oppbelicheck = [ 124.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Harrsion

var predators    = [ 150.80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Joe
var opppredators = [ 141.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Joe

var cookiemon    = [ 141.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Noah
var oppcookiemon = [ 150.80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Noah

//Div 2
var iceotopes    = [ 117.95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // John
var oppiceotopes = [ 131.65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // John

var tenanus    = [ 131.65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Jake
var opptenanus = [ 117.95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];  // Jake

var rolltide    = [ 111.40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];   // Daniel
var opprolltide = [ 154.50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];   // Daniel

var krusty    = [ 154.50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];   // Hunter
var oppkrusty = [ 111.40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];   // Hunter


var pfl_owners = [
      "Harrison",   // Belicheck
      "Joe",        // Predators
      "Noah",       // Cookie Monsters
      "Steve",      // Fat Bastards

      "Hunter",     // Krusty Krushers
      "Jake",       // Tenacious Anus
      "John",       // Iceaholics
      "Daniel"      // Roll Tide
      ];

var pfl_scores=[
                belicheck,
                predators,
                cookiemon,
                fatbastards,

                krusty,
                tenanus,
                iceotopes,
                rolltide
               ];

var opp_scores=[
                oppbelicheck,
                opppredators,
                oppcookiemon,
                oppfatbastards,

                oppkrusty,
                opptenanus,
                oppiceotopes,
                opprolltide
               ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
              0,   // belicheck
              0,   // predators
              0,   // cookiemon
              0,   // bastards

              0,   // krusty
              0,   // tenanus
              0,   // iceotopes
              0    // rolltide
             ];

var week1_txt = "Welcome to the 2017 PFL season. ";

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

// dxxx means division game 

var fat = "Fat Bastards";        var dfat = fat + " *";
var bel = "Discount Belichecks"; var dbel = bel + " *";
var pre = "Predators";           var dpre = pre + " *";
var com = "Cookie Monsters";     var dcom = com + " *";

var ice = "Iceaholics";          var dice = ice + " *";
var ten = "Tenacious Anus";      var dten = ten + " *";
var rol = "Roll Tide";           var drol = rol + " *";
var kru = "Krusty Krushers";     var dkru = kru + " *";

var sfat = fatbastards;
var sbel = belicheck;
var spre = predators;
var scom = cookiemon;

var sice = iceotopes;
var sten = tenanus;
var srol = rolltide;
var skru = krusty;

var week01Teams = new Array(dfat, dbel, dice, dten, dcom, dpre, drol, dkru);
var week01Scores = new Array(sfat[0], sbel[0], sice[0], sten[0], scom[0], spre[0], srol[0], skru[0]);

var week02Teams = new Array(dfat, dpre, dice, dkru, dcom, dbel, drol, dten); 
var week02Scores = new Array(sfat[1], spre[1], sice[1], skru[1], scom[1], sbel[1], srol[1], sten[1]);

var week03Teams = new Array(dfat, dcom, dice, drol, dpre, dbel, dkru, dten);
var week03Scores = new Array(sfat[2], scom[2], sice[2], srol[2], spre[2], sbel[2], skru[2], sten[2]);

var week04Teams = new Array(fat, ten, ice, bel, com, kru, rol, pre);
var week04Scores = new Array(sfat[3], sten[3], sice[3], sbel[3], scom[3], skru[3], srol[3], spre[3]);

var week05Teams = new Array(fat, kru, ice, pre, com, rol, bel, ten);
var week05Scores = new Array(sfat[4], skru[4], sice[4], spre[4], scom[4], srol[4], sbel[4], sten[4]);

var week06Teams = new Array(dfat, dbel, dice, dten, dcom, dpre, drol, dkru);
var week06Scores = new Array(sfat[5], skru[5], sice[5], sbel[5], srol[5], spre[5], scom[5], sten[5]);

var week07Teams = new Array(dfat, dpre, dice, dkru, dcom, dbel, drol, dten);
var week07Scores = new Array(sfat[6], spre[6], sice[6], skru[6], scom[6], sbel[6], srol[6], sten[6]);

var week08Teams = new Array(dfat, dcom, dice, drol, dpre, dbel, dkru, dten);
var week08Scores = new Array(sfat[7], scom[7], sice[7], srol[7], spre[7], sbel[7], skru[7], sten[7]);

var week09Teams = new Array(fat, rol, ice, com, pre, ten, kru, bel);
var week09Scores = new Array(sfat[8], srol[8], sice[8], scom[8], spre[8], sten[8], skru[8], sbel[8]);

var week10Teams = new Array(fat, ice, com, ten, rol, bel, pre, kru);
var week10Scores = new Array(sfat[9], sice[9], scom[9], sten[9], srol[9], sbel[9], spre[9], skru[9]);

var week11Teams = new Array(dfat, dbel, dice, dten, dcom, dpre, drol, dkru);
var week11Scores = new Array(sfat[10], sbel[10], sice[10], sten[10], scom[10], spre[10], srol[10], skru[10]);

var week12Teams = new Array(dfat, dpre, dice, dkru, dcom, dbel, drol, dten);
var week12Scores = new Array(sfat[11], spre[11], sice[11], skru[11], scom[11], sbel[11], srol[11], sten[11]);

var week13Teams = new Array(dfat, dcom, dice, drol, dpre, dbel, dkru, dten);
var week13Scores = new Array(sfat[12], scom[12], sice[12], srol[12], spre[12], sbel[12], skru[12], sten[12]);

var week14Teams = new Array(fat, ten, ice, bel, com, kru, rol, pre);
var week14Scores = new Array(sfat[13], sten[13], sice[13], sbel[13], scom[13], skru[13], srol[13], spre[13]);

var weekly_dates = [ "Thursday, September 7th",  "Thursday, September 14th", "Thursday, September 21st",
                     "Thursday, September 28th", "Thursday, October 5th",    "Thursday, October 12th", 
                     "Thursday, October 19th",   "Thursday, October 26th",   "Thursday, November 2nd", 
                     "Thursday, November 9th",   "Thursday, November 16th",  "Thursday, November 23rd", 
                     "Thursday, November 30th",  "Thursday, December 7th" ];

var weekly_teams = [week01Teams, week02Teams, week03Teams, week04Teams, week05Teams, week06Teams, week07Teams,
                    week08Teams, week09Teams, week10Teams, week11Teams, week12Teams, week13Teams, week14Teams ];

var weekly_scores = [week01Scores, week02Scores, week03Scores, week04Scores, week05Scores, week06Scores, week07Scores,
                     week08Scores, week09Scores, week10Scores, week11Scores, week12Scores, week13Scores, week14Scores ];

var weekly_text = [
      week1_txt,   week2_txt,   week3_txt,   week4_txt,
      week5_txt,   week6_txt,   week7_txt,   week8_txt,
      week9_txt,   week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt
  ];


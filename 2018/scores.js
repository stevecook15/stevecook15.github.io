
//                  Record, Division Record

var fatbastardsRec = [ 0, 0,  0, 0 ];   // Steve
var cookiemonRec   = [ 0, 0,  0, 0 ];   // Noah
var predatorsRec   = [ 0, 0,  0, 0 ];   // Joe
var krustyRec      = [ 0, 0,  0, 0 ];   // Hunter
var belicheckRec   = [ 0, 0,  0, 0 ];   // Harrison

var iceotopesRec   = [ 0, 0,  0, 0 ];   // John
var rolltideRec    = [ 0, 0,  0, 0 ];   // Daniel
var tenanusRec     = [ 0, 0,  0, 0 ];   // Jake
var thenubsRec     = [ 0, 0,  0, 0 ];   // Adam
var ingloriousRec  = [ 0, 0,  0, 0 ];   // Matt

var pfl_records=[
      fatbastardsRec,
      cookiemonRec,
      predatorsRec,
      krustyRec,
      belicheckRec,
     
      iceotopesRec,
      rolltideRec,
      tenanusRec,
      thenubsRec,
      ingloriousRec
      ];

var pfl_labels = [
      "Fat Bastards",
      "Cookie Monsters",
      "Predators",
      "Krusty Krushers",
      "Discount Belicheck",

      "Iceotopes",
      "Roll Tide",
      "Tenacious Anus",
      "The Nubs",  // Adam
      "Inglorious Staffords" //Matt
      ];


// Scoring

//Div 1
var fatbastards    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Steve
var oppfatbastards = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Steve

var cookiemon    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Noah
var oppcookiemon = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Noah

var predators    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Joe
var opppredators = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Joe

var krusty    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Hunter
var oppkrusty = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Hunter

var belicheck    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Harrsion
var oppbelicheck = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Harrsion


//Div 2
var iceotopes    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // John
var oppiceotopes = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // John

var rolltide    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Daniel
var opprolltide = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Daniel

var tenanus    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Jake
var opptenanus = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Jake

var thenubs    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Adam
var oppthenubs = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Adam

var inglorious    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]; // Matt
var oppinglorious = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]; // Matt



var pfl_owners = [
      "Steve",      // Fat Bastards
      "Joe",        // Predators
      "Noah",       // Cookie Monsters
      "Hunter",     // Krusty Krushers
      "Harrison",   // Belicheck

      "John",       // Iceaholics
      "Daniel",     // Roll Tide
      "Jake",       // Tenacious Anus
      "Adam",       // The Nubs
      "Matt"        // Inglorious Staffords
      ];

var pfl_scores=[
        fatbastards,
        cookiemon,
        predators,
        krusty,
        belicheck,

        iceotopes,
        rolltide,
        tenanus,
        thenubs,
        inglorious
     ];

var opp_scores=[
        oppfatbastards,
        oppcookiemon,
        opppredators,
        oppkrusty,
        oppbelicheck,

        opptenanus,
        oppiceotopes,
        opprolltide,
        oppthenubs,
        oppinglorious 
     ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
              0,   // bastards
              0,   // cookiemon
              0,   // predators
              0,   // krusty
              0,   // belicheck

              0,   // tenanus
              0,   // iceotopes
              0,   // rolltide
              0,   // thenubs
              0    // inglorious
             ];

var week1_txt = "Welcome to the 2018 PFL season.  ";

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

var fat = "Fat Bastards";         var dfat = fat + " *";
var com = "Cookie Monsters";      var dcom = com + " *";
var pre = "Predators";            var dpre = pre + " *";
var kru = "Krusty Krushers";      var dkru = kru + " *";
var bel = "Discount Belichecks";  var dbel = bel + " *";

var ice = "Iceaholics";           var dice = ice + " *";
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

var week01Teams = new Array(dfat, dbel, dice, dten, dcom, dpre, drol, dkru, ding, dnub);
var week01Scores = new Array(sfat[0], sbel[0], sice[0], sten[0], scom[0], spre[0], srol[0], skru[0], snub[0], sing[0]);

var week02Teams = new Array(dfat, dpre, dice, dkru, dcom, dbel, drol, dten, ding, dnub); 
var week02Scores = new Array(sfat[1], spre[1], sice[1], skru[1], scom[1], sbel[1], srol[1], sten[1], snub[1], sing[1]);

var week03Teams = new Array(dfat, dcom, dice, drol, dpre, dbel, dkru, dten, ding, dnub);
var week03Scores = new Array(sfat[2], scom[2], sice[2], srol[2], spre[2], sbel[2], skru[2], sten[2], snub[2], sing[2]);

var week04Teams = new Array(fat, ten, ice, bel, com, kru, rol, pre, ding, dnub);
var week04Scores = new Array(sfat[3], sten[3], sice[3], sbel[3], scom[3], skru[3], srol[3], spre[3], snub[3], sing[3]);

var week05Teams = new Array(fat, kru, ice, pre, com, rol, bel, ten, ding, dnub);
var week05Scores = new Array(sfat[4], skru[4], sice[4], spre[4], scom[4], srol[4], sbel[4], sten[4], snub[4], sing[4]);

var week06Teams = new Array(dfat, dbel, dice, dten, dcom, dpre, drol, dkru, ding, dnub);
var week06Scores = new Array(sfat[5], sbel[5], sice[5], sten[5], scom[5], spre[5], srol[5], skru[5], snub[5], sing[5]);

var week07Teams = new Array(dfat, dpre, dice, dkru, dcom, dbel, drol, dten, ding, dnub);
var week07Scores = new Array(sfat[6], spre[6], sice[6], skru[6], scom[6], sbel[6], srol[6], sten[6], snub[6], sing[6]);

var week08Teams = new Array(dfat, dcom, dice, drol, dpre, dbel, dkru, dten, ding, dnub);
var week08Scores = new Array(sfat[7], scom[7], sice[7], srol[7], spre[7], sbel[7], skru[7], sten[7], snub[7], sing[7]);

var week09Teams = new Array(fat, rol, ice, com, pre, ten, kru, bel, ding, dnub);
var week09Scores = new Array(sfat[8], srol[8], sice[8], scom[8], spre[8], sten[8], skru[8], sbel[8], snub[8], sing[8]);

var week10Teams = new Array(fat, ice, com, ten, rol, bel, pre, kru, ding, dnub);
var week10Scores = new Array(sfat[9], sice[9], scom[9], sten[9], srol[9], sbel[9], spre[9], skru[9], snub[9], sing[9]);

var week11Teams = new Array(dfat, dbel, dice, dten, dcom, dpre, drol, dkru, ding, dnub);
var week11Scores = new Array(sfat[10], sbel[10], sice[10], sten[10], scom[10], spre[10], srol[10], skru[10], snub[10], sing[10]);

var week12Teams = new Array(dfat, dpre, dice, dkru, dcom, dbel, drol, dten, ding, dnub);
var week12Scores = new Array(sfat[11], spre[11], sice[11], skru[11], scom[11], sbel[11], srol[11], sten[11], snub[11], sing[11]);

var week13Teams = new Array(dfat, dcom, dice, drol, dpre, dbel, dkru, dten, ding, dnub);
var week13Scores = new Array(sfat[12], scom[12], sice[12], srol[12], spre[12], sbel[12], skru[12], sten[12], snub[12], sing[12]);

var week14Teams = new Array(fat, ten, ice, bel, com, kru, rol, pre, ding, dnub);
var week14Scores = new Array(sfat[13], sten[13], sice[13], sbel[13], scom[13], skru[13], srol[13], spre[13], snub[13], sing[13]);

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



//                  Record, Division Record

var iceotopesRec   = [ 0, 0,  0, 0 ];   // John
var ingloriousRec  = [ 0, 0,  0, 0 ];   // Matt
var rolltideRec    = [ 0, 0,  0, 0 ];   // Daniel
var kekeloveRec    = [ 0, 0,  0, 0 ];   // Noah Keke do you love me
var belicheckRec   = [ 0, 0,  0, 0 ];   // Harrison

var predatorsRec   = [ 0, 0,  0, 0 ];   // Joe
var fatbastardsRec = [ 0, 0,  0, 0 ];   // Steve
var thenubsRec     = [ 0, 0,  0, 0 ];   // Adam
var tenanusRec     = [ 0, 0,  0, 0 ];   // Jake
var krustyRec      = [ 0, 0,  0, 0 ];   // Hunter



var pfl_records=[
      iceotopesRec,
      ingloriousRec,
      rolltideRec,
      kekeloveRec,
      belicheckRec,

      predatorsRec,      
      fatbastardsRec,
      thenubsRec,
      tenanusRec,
      krustyRec
      ];

var pfl_labels = [
      "Iceotopes",
      "Inglorious Staffords", //Matt
      "Roll Tide",
      "Keke do you love me",  // Noah
      "Discount Belicheck",
      
      "Predators",      
      "Fat Bastards",
      "The Nubs",  // Adam      
      "Tenacious Anus",
      "Krusty Krushers"
      ];


// Scoring

//Div 1
var iceotopes    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // John
var oppiceotopes = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // John

var inglorious    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]; // Matt
var oppinglorious = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]; // Matt

var rolltide    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Daniel
var opprolltide = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Daniel

var kekelove    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Noah
var oppkekelove = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Noah

var belicheck    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Harrsion
var oppbelicheck = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Harrsion

//Div 2

var predators    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Joe
var opppredators = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Joe

var fatbastards    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Steve
var oppfatbastards = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Steve

var thenubs    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Adam
var oppthenubs = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Adam

var tenanus    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Jake
var opptenanus = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];  // Jake

var krusty    = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Hunter
var oppkrusty = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];   // Hunter



var pfl_owners = [
      "John",       // Iceotopes
      "Matt",       // Inglorious Staffords
      "Daniel",     // Roll Tide
      "Noah",       // Cookie Monsters
      "Harrison",   // Belicheck
      
      "Joe",        // Predators
      "Steve",      // Fat Bastards
      "Adam",       // The Nubs     
      "Jake",       // Tenacious Anus
      "Hunter"      // Krusty Krushers
      ];

var pfl_scores=[
        iceotopes,
        inglorious,
        rolltide,
        kekelove,
        belicheck,
        
        predators,
        fatbastards,
        thenubs,
        tenanus,        
        krusty
     ];

var opp_scores=[
        oppiceotopes,
        oppinglorious,
        opprolltide,
        oppkekelove,
        oppbelicheck,
        
        opppredators,
        oppfatbastards,
        oppthenubs,
        opptenanus,        
        oppkrusty
     ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
        0,  //iceotopes,
        0,  //inglorious,
        0,  //rolltide,
        0,  //kekelove,
        0,  //belicheck,
        
        0,  //predators,
        0,  //fatbastards,
        0,  //thenubs,
        0,  //tenanus,        
        0   //krusty
     ];

var week1_txt = "Welcome to the 2019 PFL season.  ";

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
var ice = "Iceotopes";            var dice = ice + " *";
var ing = "Inglorious Staffords"; var ding = ing + " *";
var rol = "Roll Tide";            var drol = rol + " *";
var kek = "Keke do you love me";  var dkek = kek + " *";
var bel = "Discount Belichecks";  var dbel = bel + " *";

var pre = "Predators";            var dpre = pre + " *";
var fat = "Fat Bastards";         var dfat = fat + " *";
var nub = "The Nubs";             var dnub = nub + " *";
var ten = "Tenacious Anus";       var dten = ten + " *";
var kru = "Krusty Krushers";      var dkru = kru + " *";

var sice = iceotopes;
var sing = inglorious;
var srol = rolltide;
var skek = kekelove;
var sbel = belicheck;

var spre = predators;
var sfat = fatbastards;
var snub = thenubs;
var sten = tenanus;
var skru = krusty;

var week01Teams = new Array(fat, ing, dice, drol, dkek, dbel, dpre, dnub, dkru, dten);
var week01Scores = new Array(sfat[0], sing[0], sice[0], srol[0], skek[0], sbel[0], spre[0], snub[0], skru[0], sten[0]);

var week02Teams = new Array(dfat, dten, dice, dbel, dkek, ding, pre, rol, dkru, dnub); 
var week02Scores = new Array(sfat[1], sten[1], sice[1], sbel[1], skek[1], sing[1], spre[1], srol[1], skru[1], snub[1]);

var week03Teams = new Array(dfat, dkek, dice, drol, pre, ten, dkru, dbel, dnub, ding);
var week03Scores = new Array(sfat[2], skek[2], sice[2], srol[2], spre[2], sten[2], skru[2], sbel[2], snub[2], sing[2]);

var week04Teams = new Array(fat, ice, kek, ing, nub, pre, kru, ten, bel, rol);
var week04Scores = new Array(sfat[3], sice[3], skek[3], sing[3], snub[3], spre[3], skru[3], sten[3], sbel[3], srol[3]);

var week05Teams = new Array(fat, rol, ice, kek, ing, pre, kru, nub, bel, ten);
var week05Scores = new Array(sfat[4], srol[4], sice[4], skek[4], sing[4], spre[4], skru[4], snub[4], sbel[4], sten[4]);

var week06Teams = new Array(dfat, dbel, dice, ding, kek, nub, dpre, dkru, drol, dten);
var week06Scores = new Array(sfat[5], sbel[5], sice[5], sing[5], skek[5], snub[5], spre[5], skru[5], srol[5], sten[5]);

var week07Teams = new Array(fat, ing, dice, dten, dkek, dkru, dpre, dbel, drol, dten);
var week07Scores = new Array(sfat[6], sing[6], sice[6], sten[6], skek[6], skru[6], spre[6], sbel[6], srol[6], sten[6]);

var week08Teams = new Array(dfat, dkru, dice, ding, dkek, dpre, bel, nub, drol, dten);
var week08Scores = new Array(sfat[7], skru[7], sice[7], sing[7], skek[7], spre[7], sbel[7], snub[7], srol[7], sten[7]);

var week09Teams = new Array(fat, nub, ice, kru, kek, ten, rol, pre, bel, ing);
var week09Scores = new Array(sfat[8], snub[8], sice[8], skru[8], skek[8], sten[8], srol[8], spre[8], sbel[8], sing[8]);

var week10Teams = new Array(fat, ten, ice, pre, kek, rol, kru, ing, bel, nub);
var week10Scores = new Array(sfat[9], sten[9], sice[9], spre[9], skek[9], srol[9], skru[9], sing[9], sbel[9], snub[9]);

var week11Teams = new Array(dfat, dpre, dice, dnub, dkek, dbel, kru, ten, drol, ding);
var week11Scores = new Array(sfat[10], spre[10], sice[10], snub[10], skek[10], sbel[10], skru[10], sten[10], srol[10], sing[10]);

var week12Teams = new Array(dfat, dkek, dice, dten, rol, pre, dkru, dbel, ding, dnub);
var week12Scores = new Array(sfat[11], skek[11], sice[11], sten[11], srol[11], spre[11], skru[11], sbel[11], sing[11], snub[11]);

var week13Teams = new Array(dfat, dbel, ice, kek, dkru, dpre, drol, dnub, dten, ding);
var week13Scores = new Array(sfat[12], sbel[12], sice[12], skek[12], skru[12], spre[12], srol[12], snub[12], sten[12], sing[12]);

var week14Teams = new Array(fat, ing, dice, drol, dkek, dkru, dpre, dbel, dten, dnub);
var week14Scores = new Array(sfat[13], sing[13], sice[13], srol[13], skek[13], skru[13], spre[13], sbel[13], sten[13], snub[13]);

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


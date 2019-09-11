// Scoring

//Div 1
var iceotopes    = [ 121.75 ];
var oppiceotopes = [ 125.60 ];

var retmack    = [ 181.80 ];
var oppretmack = [ 146.50 ];

var rolltide    = [ 125.60 ];
var opprolltide = [ 121.75 ];

var kekelove    = [ 102.55 ];
var oppkekelove = [ 117.00 ];

var belicheck    = [ 117.00 ];
var oppbelicheck = [ 102.55 ];

//Div 2

var predators    = [ 109.65 ];
var opppredators = [ 194.30 ];

var fatbastards    = [ 146.50 ];
var oppfatbastards = [ 181.80 ];

var thenubs    = [ 194.30 ];
var oppthenubs = [ 109.65 ];

var tenanus    = [ 85.90 ];
var opptenanus = [ 143.70 ];

var krusty    = [ 143.70 ];
var oppkrusty = [ 85.90 ];


//                  Record, Division Record

var rolltideRec    = [ 1, 0,  1, 0 ];   // Daniel
var retmackRec     = [ 1, 0,  0, 0 ];   // Matt  / Return of the Mack
var belicheckRec   = [ 1, 0,  1, 0 ];   // Harrison
var iceotopesRec   = [ 0, 1,  0, 1 ];   // John
var kekeloveRec    = [ 0, 1,  0, 1 ];   // Noah Keke do you love me

var thenubsRec     = [ 1, 0,  1, 0 ];   // Adam
var krustyRec      = [ 1, 0,  1, 0 ];   // Hunter
var fatbastardsRec = [ 0, 1,  0, 0 ];   // Steve
var predatorsRec   = [ 0, 1,  0, 1 ];   // Joe
var tenanusRec     = [ 0, 1,  0, 1 ];   // Jake


var pfl_records = [
      rolltideRec,
      retmackRec,
      belicheckRec,
      iceotopesRec,
      kekeloveRec,

      thenubsRec,
      krustyRec,
      fatbastardsRec,
      predatorsRec,
      tenanusRec
   ];

var pfl_labels = [
      "Roll Tide",
      "Return of the Mack",   //Inglorious Staffords Matt
      "Discount Belicheck",
      "Iceotopes",
      "Keke do you love me",  // Noah
      
      "The Nubs",  // Adam      
      "Krusty Krushers",
      "Fat Bastards",
      "Predators",      
      "Tenacious Anus"
   ];

var pfl_owners = [
      "Daniel",     // Roll Tide
      "Matt",       // Inglorious Staffords / Return of the Mack
      "Harrison",   // Belicheck
      "John",       // Iceotopes
      "Noah",       // Cookie Monsters / Keke
      
      "Adam",       // The Nubs     
      "Hunter",     // Krusty Krushers
      "Steve",      // Fat Bastards
      "Joe",        // Predators
      "Jake"        // Tenacious Anus
   ];


var pfl_scores=[
        rolltide,
        retmack,
        belicheck,
        iceotopes,
        kekelove,
        
        thenubs,
        krusty,
        fatbastards,
        predators,
        tenanus        
   ];

var opp_scores=[
        opprolltide,
        oppretmack,
        oppbelicheck,
        oppiceotopes,
        oppkekelove,
        
        oppthenubs,
        oppkrusty,
        oppfatbastards,
        opppredators,
        opptenanus        
     ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs = [
        0,  //rolltide
        0,  //retmack
        0,  //belicheck
        0,  //iceotopes
        0,  //kekelove
        
        0,  //thenubs
        0,  //krusty
        0,  //fatbastards
        0,  //predators
        0   //tenanus        
     ];

var week1_txt = "Welcome to the 2019 PFL season.  The week the optimism starts fading... for half of us. Seems " +
                "like the Nubs and Macks (has their name changed again yet? Haven't checked in the last 10 " +
                "minutes) are feeling pretty good.  Seems Keke apparently does not love Noah though... and the " +
                "sphincters are squeezed tight, in need of some prep-h!"; 

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
var sing = retmack;
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

var week03Teams = new Array(dfat, dpre, dice, dkek, kru, bel, drol, ding, dten, dnub);
var week03Scores = new Array(sfat[2], spre[2], sice[2], skek[2], skru[2], sbel[2], srol[2], sing[2], sten[2], snub[2]);

var week04Teams = new Array(fat, ice, kek, nub, pre, ing, kru, rol, bel, ten);
var week04Scores = new Array(sfat[3], sice[3], skek[3], snub[3], spre[3], sing[3], skru[3], srol[3], sbel[3], sten[3]);

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



//                  Record, Division Record

var predatorsRec   = [ 7, 2,  4, 2 ];   // Joe
var cookiemonRec   = [ 6, 3,  4, 2 ];   // Noah
var belicheckRec   = [ 4, 5,  3, 3 ];   // Harrison
var fatbastardsRec = [ 3, 6,  1, 5 ];   // Steve

var tenanusRec     = [ 6, 3,  5, 1 ];   // Jake
var krustyRec      = [ 5, 4,  3, 3 ];   // Hunter - Screwed By Rodgers
var iceotopesRec   = [ 4, 5,  3, 3 ];   // John
var rolltideRec    = [ 1, 8,  1, 5 ];   // Daniel

var pfl_records=[
      predatorsRec,
      cookiemonRec,
      belicheckRec,
      fatbastardsRec,

      tenanusRec,
      krustyRec,
      iceotopesRec,
      rolltideRec
      ];

var pfl_labels = [
      "Predators",
      "Cookie Monsters",
      "Discount Belicheck",
      "Fat Bastards",

      "Tenacious Anus",
      "Screwed By Rodgers",
      "Iceotopes",
      "Roll Tide"
      ];


// Scoring

//Div 1
var fatbastards    = [ 124.05, 157.85, 114.80, 164.65, 142.65, 154.70, 139.65, 130.85, 119.10 ];  // Steve
var oppfatbastards = [ 131.45, 168.85, 187.80, 157.05, 151.60, 135.90, 154.60, 188.20, 117.60 ];  // Steve

var belicheck    = [ 131.45, 127.05, 166.35, 131.80, 139.60, 135.90, 126.80, 144.10, 87.10 ];  // Harrsion
var oppbelicheck = [ 124.05, 110.50, 142.70, 105.85, 157.45, 154.70, 161.90, 174.85, 144.60 ];  // Harrsion

var predators    = [ 150.80, 168.80, 142.70, 154.55, 123.25, 130.65, 154.60, 174.85, 164.80 ];  // Joe
var opppredators = [ 141.00, 157.85, 166.35, 129.60, 115.90, 149.20, 139.65, 144.10, 149.70 ];  // Joe

var cookiemon    = [ 141.00, 110.50, 187.80, 162.80, 178.85, 149.20, 161.90, 188.20, 131.60 ];  // Noah
var oppcookiemon = [ 150.80, 127.05, 114.80, 135.65, 129.55, 130.65, 126.80, 130.85, 160.20 ];  // Noah

//Div 2
var iceotopes    = [ 117.95, 113.15, 148.45, 105.85, 115.90, 122.30, 135.20, 123.95, 160.20 ];  // John
var oppiceotopes = [ 131.65, 123.65, 106.85, 131.80, 123.25, 201.85, 100.10, 115.80, 131.60 ];  // John

var tenanus    = [ 131.65, 143.45, 148.45, 157.05, 157.45, 201.85, 181.30, 157.75, 149.70 ];  // Jake
var opptenanus = [ 117.95, 118.75, 151.40, 164.65, 139.60, 122.30, 130.95, 146.55, 164.80 ];  // Jake

var rolltide    = [ 111.40, 118.75, 106.85, 129.60, 129.55, 114.55, 130.95, 115.80, 117.60 ];   // Daniel
var opprolltide = [ 154.50, 143.45, 148.45, 154.55, 178.85, 112.15, 181.30, 123.95, 119.10 ];   // Daniel

var krusty    = [ 154.50, 123.65, 151.40, 135.65, 151.60, 112.15, 100.10, 146.55, 144.60 ];   // Hunter Screwed
var oppkrusty = [ 111.40, 113.15, 148.45, 162.80, 142.65, 114.55, 135.20, 157.75, 87.10 ];   // Hunter


var pfl_owners = [
      "Joe",        // Predators
      "Noah",       // Cookie Monsters
      "Harrison",   // Belicheck
      "Steve",      // Fat Bastards

      "Jake",       // Tenacious Anus
      "Hunter",     // Krusty Krushers
      "John",       // Iceaholics
      "Daniel"      // Roll Tide
      ];

var pfl_scores=[
        predators,
        cookiemon,
        belicheck,
        fatbastards,

        tenanus,
        krusty,
        iceotopes,
        rolltide
     ];

var opp_scores=[
        opppredators,
        oppcookiemon,
        oppbelicheck,
        oppfatbastards,

        opptenanus,
        oppkrusty,
        oppiceotopes,
        opprolltide
     ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
              0,   // predators
              0,   // cookiemon
              0,   // belicheck
              0,   // bastards

              0,   // tenanus
              0,   // krusty
              0,   // iceotopes
              0    // rolltide
             ];

var week1_txt = "Welcome to the 2017 PFL season. For one brief moment we all had the same chance to reach the pinnacle of PFL football, but then the games are played.  Some are sitting on the top of the world while others are beginning to suspect the cause is lost!  Or maybe it was just one week...";

var week2_txt = "It seems we're quickly setting up the haves vs have-nots as half the league is undefeated and half winless. At the very least the top 4 have a meaningful advantage for the 4 playoff spots. Some bad luck can make it worse too - the Fat would have beat anyother team other than the one they played.";

var week3_txt = "The Cookie Mons go from lowest score to highest score in one week! Just in time to face the Bastards, who for the second week in a row faced the highest scoring team, although that had nothing to do with their blowout loss.  Three of the four matchups were lobsided as only the Krushed Anus matchup kept us watching into Monday night.  Nicely balanced standings though, not that the Tide and Fat appreciate it!";

var week4_txt = "Down to 1 undeafted and 1 defeated. Apparently the cookies don't like to be krushed and the tide is still out. The fat squeaked out their first win despite losing two RBs, guess the anuses weren't tenacious enough.  And the bellys remain the only undefeated team despite the 3rd lowest score of the weeek thanks to the topes being ice cold.";

var week5_txt = "Well, the last undefeated team went belly up but the tide is still rolling over getting doughed by the monsters.  The fats boiling though as DeAndre Hopkins gets 3 TDs on just 4 receptions to krush the bastards.  What kind of defense is that? The Predators play some D though, beating the topes with the lowest winning score of the year - the two lowest winning scores of the year have been against the ice - are the topes unlucky or just bad?";

var week6_txt = "OK, who hemorrhoided the Anus? Topes must feel like an a-- bomb went off! Whew!  At the other end (pun intended) the Tide hardly rolled to their first victory (thanks Aaron) but they'll take it. Things got a little closer in the PMFB division as the Bastards inexplicibly won and everyone else is tied. Now there's five of the eight teams tied with the leagues best record."

var week7_txt = "Another week where the good teams won and the bad teams lost, no suspense, no upsets, sigh...";

var week8_txt = "At this point there's virtually 3 spots locked up for the playoffs as all 3 have a 2 game lead and no sign that any of the rest of us can challenge them.  Two teams are basically out of it already as even if they won out they still probably couldn't catch the top 3, leaving just 1 spot between the remaining 5 teams! Good battle among the middle 3 for the last spot though as they're all within 1 win of that4th spot.";

var week9_txt = "Guess if you're Tenacious enough, the sphincter will hold up and lead you to the top.  On the other hand, if the Tides still out you get Flattened! And in this weeks news from the weird the topes take down the highest scoring team in the league! Not to mention that stellar discounted effort the Bellies put in!";

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
var kru = "Screwed by Rodgers";  var dkru = kru + " *";  // Krusty Krushers

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
var week06Scores = new Array(sfat[5], sbel[5], sice[5], sten[5], scom[5], spre[5], srol[5], skru[5]);

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


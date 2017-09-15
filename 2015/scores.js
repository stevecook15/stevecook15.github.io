
//                  Record, Division Record

var popefoamRec    = [ 9, 5,  5, 4 ];   // Tom
var predatorsRec   = [ 6, 8,  5, 4 ];   // Joe
var ewoksRec       = [ 5, 9,  4, 5 ];   // Adam
var belicheckRec   = [ 4, 10, 4, 5 ];   // Harrison

var fatbastardsRec = [ 10, 4, 6, 3 ];   // Steve
var iceaholicsRec  = [  8, 6, 5, 4 ];   // John
var krustyRec      = [  8, 6, 4, 5 ];   // David
var rollTideRec    = [  6, 8, 3, 6 ];   // Noah

var pfl_records=[
      popefoamRec,
      predatorsRec,
      ewoksRec,
      belicheckRec,

      fatbastardsRec,
      iceaholicsRec,
      krustyRec,
      rollTideRec
      ];

var pfl_labels = [
      "Pope of Foam",
      "Predators",
      "Ewoks",
      "Discount Belicheck",

      "Fat Bastards",
      "Iceaholics",
      "Krusty Krushers",
      "Roll Tide"
      ];


// Scoring

//Div 1
var belicheck    = [ 129.25, 146.55, 151.90, 103.65, 95.20, 139.05, 146.75, 161.45, 107.75, 134.55, 114.60, 100.20, 126.35, 118.65 ];   // Harrison
var oppbelicheck = [ 137.50, 152.55, 110.55, 111.10, 143.35, 141.80, 124.35, 157.20, 126.25, 144.80, 87.05, 174.75, 147.70, 142.20 ];  // Harrison

var popeoffoam    = [ 137.50, 133.70, 151.30, 137.70, 142.65, 141.80, 117.15, 145.90, 129.75, 115.90, 87.05, 133.85, 134.90, 152.30 ];  // Tom
var opppopeoffoam = [ 129.25, 144.25, 161.20, 130.85, 136.95, 139.05, 141.15, 109.05, 123.90, 132.95, 114.60, 104.10, 124.10, 126.65 ];  // Tom

var predators    = [ 153.95, 144.25, 110.55, 120.30, 118.75, 146.10, 141.15, 157.20, 150.25, 128.05, 113.20, 104.10, 147.70, 115.80 ];  // Joe
var opppredators = [ 117.55, 133.70, 151.90, 116.00, 128.75, 123.25, 117.15, 161.45, 184.05, 144.95, 120.25, 133.85, 126.35, 132.30 ];  // Joe

var ewoks  = [ 117.55, 152.55, 161.20, 121.15, 155.15, 123.25, 124.35, 109.05, 160.85, 117.45, 120.25, 174.75, 124.10, 80.45 ];     // Adam
var oppewoks  = [ 153.95, 146.55, 151.30, 102.90, 156.65, 146.10, 146.75, 145.90, 162.15, 127.35, 113.20, 100.20, 134.90, 102.70 ];  // Adam

//Div 2
var fatbastards    = [ 153.85, 106.55, 183.15, 111.10, 136.95, 115.15, 146.00, 122.55, 162.15, 144.95, 88.90, 118.90, 152.05, 142.20 ];  // Steve
var oppfatbastards = [ 115.25, 124.25, 182.45, 103.65, 142.65, 159.65, 108.05, 126.05, 160.85, 128.05, 67.25, 115.05, 151.30, 118.65 ];  // Steve

var iceaholics    = [ 156.40, 142.65, 182.45, 116.00, 143.35, 104.60, 185.20, 126.05, 123.90, 127.35, 149.95, 134.35, 151.30, 132.30 ]; // John
var oppiceaholics = [ 129.55, 114.00, 183.15, 120.30, 95.20, 128.00, 113.35, 122.55, 129.75, 117.45, 114.20, 144.60, 152.05, 115.80 ];  // John

var krusty    = [ 129.55, 124.25, 133.90, 102.90, 128.75, 128.00, 108.05, 149.45, 126.25, 132.95, 114.20, 115.05, 159.75, 102.70 ];   // David
var oppkrusty = [ 156.40, 106.55, 151.90, 121.15, 118.75, 104.60, 146.00, 118.50, 107.75, 115.90, 149.95, 118.90, 149.95, 80.45 ];   // David

var rollTide  = [ 115.25, 114.00, 151.90, 130.85, 156.65, 159.65, 113.35, 118.50, 184.05, 144.80, 67.25, 144.60, 149.95, 126.65 ];     // Noah
var opprollTide  = [ 153.85, 142.65, 133.90, 137.70, 155.15, 115.15, 185.20, 149.45, 150.25, 134.55, 88.90, 134.35, 159.75, 152.30 ];  // Noah

var pfl_owners = [
      "Tom R",        // Pope of Foam
      "Joe M",        // Predators
      "Adam M",       // Ewoks
      "Harrison G",   // Belicheck

      "Steve C",      // Fat Bastards
      "John F",       // Iceaholics
      "Hunter",       // Krusty Krushers
      "Noah G"        // Roll Tide
      ];

var pfl_scores=[
                popeoffoam,
                predators,
                ewoks,
                belicheck,

                fatbastards,
                iceaholics,
                krusty,
                rollTide
               ];

var opp_scores=[
                opppopeoffoam,
                opppredators,
                oppewoks,
                oppbelicheck,

                oppfatbastards,
                oppiceaholics,
                oppkrusty,
                opprollTide
               ];

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs=[
              2,   // popefoam
              4,   // predators
              4,   // ewoks
              4,   // belicheck

              2,   // bastards
              1,   // iceaholics
              1,   // krusty
              4    // rolltide
             ];

var week1_txt = "Welcome to the 2015 PFL season. Hope springs eternal and here's hoping you do nearly as well as I do!!!Undefeated for at least a week!  And to think Yahoo predicted 1-13 for me this year?";

var week2_txt = "Another week in the books and the cream is already rising.  If you have some Fat tissue though, it's beginning to curdle and go sour as expected.  Too bad the real Belicheck isn't suffering the same fate! And always love it when Bama goes down...";

var week3_txt = "Wow, some pretty close games there (and 1 rout!!). The Holics thought they had it iced till the " +
                 "Bastards got Fat on em. And the tide rolled in at last krushing Krustys hopes with an even closer win! " +
                 "And every ones within a win of the lead!";

var week4_txt = "Much lower scores this week, with Div 1 mostly stomping up on Div 2.  Looks like the Bastards are still living off their Fat cause it sure aint a good team...";

var week5_txt = "Ok, so this week Div 2 takes 3 of 4 from Div 1...  Tide rolls over the Star Wars bunch by half a point and Ice apparently can stop Belicheck - someone tell the NFL!! Gotta be a bad sign: Eight of nine bastards beat their projection and they still lost!";

var week6_txt = "Well, start the season over in Div 2 - its an eight week season!.  Div 1 is a little more defined but still only one team more than 1 win away from the lead.  Tough loss for the Bellys with 2 meaningless Demarco pts at the end!";

var week7_txt = "Half way through and aint much decided yet as even the Bellys are within 2 of a playoff spot. Lot of blow-outs this week with even the closest match being a 20+ pt beat down and a 72 pointer can of whoop ass - can you say stomp? Must have been low tide...";

var week8_txt = "And once again things tighten up as the Bellys giggling took out the Daters - 8-6 is gonna win a division at this rate!  The Flat Bastartds rang the (Leveon) Bell but are still in a state of shock - Aaron Rodgers, 77 yds? Say What!";

var week9_txt = "Tight as ever in Div 2 with a 3 way tie and the Tide sloshing in only a game out.  Apparently its good to be the Pope though as he's pontificating his way a to the leagues best record.  And Fat wants to thank Ewoks for Dez...";

var week10_txt = "Div 2 point a butt whipping on Div 1 this week going 4-0 with each win by 10+ pts and now has 4 of the top 5 records at this point.  Guess we can Discount the Star Wars Fuzzies at this point as they're doing their best Seahawks imitation dropping 3 games off the playoff pace.";

var week11_txt = "Snooozer!!! Where'd all the points go?  Should be an asterik next to the Turds win... Getting to be desparartion time in Div one as it seems only the div's winner gonna make the playoffs unless someone goes on a roll. And Ice now has the highest pts total and lowest opp points total - someones hogging all the luck!";

var week12_txt = "Well, getting down to the nitty gritty. The Fat's the only one thats clinched a spot and no ones been eliminated but several are on life support. Check out those Div 1 internal div records - too bad they have to play Div 2. Bastards continue to prove it's better to be lucky than good! Ewoks woke up maybe too late in the season but two more wins might do it! The Bellies can be discounted at this point I suspect.";

var week13_txt = "Well, really getting down to it now - more more team eliminated, one more team clinched. Four teams vying for the last two spotsin the last week - thats pretty competitive!";

var week14_txt = "No big surprises this week as the top 4 playoff contenders won by an avg of 20+ pts. And now we're at the end for half of us. The losing half!!  Congrats to the Fat for their third straight regular season title - maybe they can win the playoffs this time. And congrats to the Ice, Krusty and the Foamers for making this far. As for the rest, thanks for playing and better luck next year.";

// dxxx means division game 

var pof = "Pope of Foam";        var dpof = pof + " *";
var pre = "Predators";           var dpre = pre + " *";
var ewo = "Ewoks";               var dewo = ewo + " *";
var bel = "Discount Belichecks"; var dbel = bel + " *";

var fat = "Fat Bastards";        var dfat = fat + " *";
var ice = "Iceaholics";          var dice = ice + " *";
var kru = "Krusty Krushers";     var dkru = kru + " *";
var rol = "Roll Tide";           var drol = rol + " *";

// Array(dfat, dkru, dice, dred, frn, pof, dten, dpre, dinf, dhaw);

var week01Teams = new Array(dfat, drol, dice, dkru, dewo, dpre, dpof, dbel);
var week01Scores = new Array(153.85, 115.25, 156.40, 129.55, 117.55, 153.95, 137.50, 129.25);

var week02Teams = new Array(dfat, dkru, dice, drol, dewo, dbel, dpof, dpre); 
var week02Scores = new Array(106.55, 124.25, 142.65, 114.00, 152.65, 146.55, 133.70, 144.25);

var week03Teams = new Array(dfat, dice, dewo, dpof, drol, dkru, dbel, dpre);
var week03Scores = new Array(183.15, 182.45, 162.20, 151.30, 134.25, 133.90, 151.90, 110.55);

var week04Teams = new Array(fat, bel, ice, pre, ewo, kru, rol, pof);
var week04Scores = new Array(111.10, 103.65, 116.00, 120.30, 121.15, 102.90, 130.85, 137.30);

var week05Teams = new Array(fat, pof, ice, bel, ewo, rol, pre, kru);
var week05Scores = new Array(136.95, 142.65, 143.35, 95.20, 155.15, 156.65, 118.75, 128.75);

var week06Teams = new Array(dfat, drol, dice, dkru, dewo, dpre, dpof, dbel);
var week06Scores = new Array(115.15, 159.65, 104.60, 128.00, 123.25, 146.10, 141.80, 139.05);

var week07Teams = new Array(dfat, dkru, dice, drol, dewo, dbel, dpof, dpre);
var week07Scores = new Array(146.00, 108.05, 185.20, 113.55, 124.35, 146.75, 117.15, 141.15);

var week08Teams = new Array(dfat, dice, dewo, dpof, drol, dkru, dbel, dpre);
var week08Scores = new Array(122.55, 126.05, 109.05, 145.90, 118.50, 149.45, 161.45, 157.20);

var week09Teams = new Array(fat, ewo, ice, pof, rol, pre, bel, kru);
var week09Scores = new Array(162.15, 160.85, 123.90, 129.75, 184.05, 150.25, 107.75, 126.25);

var week10Teams = new Array(fat, pre, ice, ewo, rol, bel, pof, kru);
var week10Scores = new Array(144.95, 128.05, 127.35, 117.45, 144.80, 134.55, 115.90, 132.35);

var week11Teams = new Array(dfat, drol, dice, dkru, dewo, dpre, dpof, dbel);
var week11Scores = new Array(88.90, 67.25, 149.95, 114.20, 120.25, 113.20, 87.05, 114.60);

var week12Teams = new Array(dfat, dkru, dice, drol, dewo, dbel, dpof, dpre);
var week12Scores = new Array(118.90, 115.05, 134.35, 144.60, 174.75, 100.20, 133.85, 104.10);

var week13Teams = new Array(dfat, dice, dewo, dpof, drol, dkru, dbel, dpre);
var week13Scores = new Array(152.05, 151.30, 124.10, 134.90, 149.95, 159.75, 126.35, 147.70);

var week14Teams = new Array(fat, bel, ice, pre, ewo, kru, rol, pof);
var week14Scores = new Array(142.20, 118.65, 132.30, 115.80, 80.45, 102.70, 126.65, 152.30);

var weekly_dates = [ "Thursday, September 10th",  "Thursday, September 17th", "Thursday, September 24th",
                     "Thursday, October 1st",     "Thursday, October 8th",    "Thursday, October 15th", 
                     "Thursday, October 22nd",    "Thursday, October 29th",   "Thursday, November 5th", 
                     "Thursday, November 12th",   "Thursday, November 19th",  "Thursday, November 26th", 
                     "Thursday, December 3rd",    "Thursday, December 10th" ];

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


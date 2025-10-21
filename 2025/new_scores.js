"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var iceScores = [ 105.05, 107.20, 119.90, 169.25, 109.35, 153.15, 139.95 ];  // Iceotopes (John)
var nixScores = [ 130.40, 114.50, 121.55, 170.80, 110.60, 103.30, 112.95 ];  // Nix UR Hopes (Steve M)
var djaScores = [ 103.05, 155.95,  91.85, 103.15, 158.15, 137.15, 175.00 ];  // Django Achane'd (Matt)   aoa
var ybwScores = [ 120.80, 103.90, 126.95, 115.85, 144.85, 127.80,  99.55 ];  // Your Bye Week (Reek)
var pmbScores = [ 105.95, 114.50,  91.20, 121.90, 114.45,  93.10, 106.20 ];  // Pass me a Brewski (Ross)

var cocScores = [ 118.20, 151.15, 140.90,  99.20, 113.50, 127.15,  95.50 ];  // Coco Browns (Andy)
var fatScores = [ 116.90, 101.85, 100.50, 173.70, 137.30, 140.65, 125.50 ];  // Phat Bastards (Steve C)
var porScores = [ 129.55, 135.65, 141.80, 137.75, 125.80, 126.25, 154.60 ];  // Porkchops (Noah)
var cdzScores = [  93.45, 139.05, 159.50, 101.35, 152.30, 123.60, 152.20 ];  // CeeDeez Nutz (Harrision) bel
var wbdScores = [ 111.55, 116.85, 126.45, 121.90, 118.00,  67.00,  85.60 ];  // Weapons of Bass Destruction (Daniel)



// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var icePlayoffs = 0;  // Iceotopes (John)
var nixPlayoffs = 0;  // Nix UR Hopes (Steve)
var djaPlayoffs = 0;  // Django Achane'd (Matt)
var ybwPlayoffs = 0;  // Your Bye Week (Reek)
var pmbPlayoffs = 0;  // Pass Me a Brewski (Ross)

var cocPlayoffs = 0;  // Coco Browns (Andy)
var fatPlayoffs = 0;  // Phat Bastards (Steve)
var porPlayoffs = 0;  // Porkchops (Noah)
var cdzPlayoffs = 0;  // CeeDeez Nutz (Harrision) TWSSaid
var wbdPlayoffs = 0;  // Weapons of Bass Destruction (Daniel)


// Weekly blah blah blah text...

var week0_txt = "Welcome to the 2025 Phantom League.";

var week1_txt = "Well, week 1 is in the books.  Offenses looked a little shaky with a high score of 130 (congrats to Nix " +
                "for the first weekly high score - Ka-ching!)  The Kyrptos had the  misfortune of being their patsy, going " +
                "down despite having the 3rd highest score of the week. On the other end of the spectrum the Ice slide " +
                "past the DJ Acne's by the weeks slimmest of margins despite having the 3rd lowest score of the week.<br><br>" +
                "In the there's always one category, the Seedy Nuts couldn't break triple digits and were crushed by the " + 
                "Porkbellies for this weeks biggest blowout. In the 'Beverage' matchup, Cocoa was stronger than Brew " +
                "(maybe no one passed them one?). The final matchup was the only one still in question Monday night and " +
                "looked tense after JJ scored a TD for the Destructos, but the Phlat managed to hang on and win a close one.";

var week2_txt = "Wow, a tie!!! Haven't seen that in several years - thats gonna mess up playoff seedings. Well at least the " +
                "Hopes and Brews didn't lose. :-) The Django on the other hand had a bye week, ooops, meant they <i>played</i> " +
                "The Bye Week, needlessly pouring it on with the high score for the week. However " +
                "there was one team that couldn't have even beaten a bye as the Flat Turds were roasted by the Browns, " + 
                "scoring the low for the week.<br><br>And in the other move along, move along, nothing to see here games " +
                "Nuts and Chops both easily topped the Ice and the Bass, respectively.<br>";

var week3_txt = "The wheat is beginning to separate from the chaff already. The wheat consists of the Coco, " +
                "Pork and Nuts (sounds like a horrible breakfast cereal) and the Brews, Bastards and Bass being the " +
                "chaff (Hmmmm, they all start with B)! And the rest, well " +
                "they're just glad there's eight teams in the playoffs.<br><br>Speaking of the Coco - Nuts, in the " +
                "highest scoring matchup of the year (spoiler alert: gonna be an unhappy loser here) the Nutz " +
                "held off the Browns.<br><br>In what might be the luckiest win (or unluckiest loss depending on your " +
                "view point) the Bye Week was leading by 0.5 points with 30 seconds to go Monday night. Baltimore " +
                "scored with 29 seconds to go and all the Bass Weapons needed was the extra point to win - but no!!! " +
                "The Ravens go for two and the Bass were destructed! After the first two weeks the Bye probably " +
                "deserved a break but wow, way to get the heart racing!<br><br>Lastly, congrats to the Porksters, " +
                "who are now the sole remaining undefeated team, and had a semi-bye week themselves against the " +
                "Flat Bastards (gonna be a long year for them it seems).<br>";

var week4_txt = "After four weeks we're down to one unbeaten (though not untied) team as Nix UR Pork took out the " +
                "previous undefeated Chops. On the other end of the spectrum we're also down to one winless / beaten " +
                "team as the Brewskis (strangely, the other team with a tie) manage to crack the Nutz for their " +
                "first 'win'.<br><br>As to that last still winless team, the Toy Bass Weapons, they were iced by " +
                "the Topes who scored the new league season high to just rub it in...<br><br>Oops, wait a moment, " +
                "scratch that. The Nix scored big Monday night to eek by the Ice for the new best score!  Oops again, " +
                "the new leaqgue season high was actually set late Sunday night (overtime time on the east coast for " +
                "the Fat, oh yay!) by the previously hapless Bastards having a Bye Week and scoring 60+ more than their " +
                "previous high score.  Wow, who gets a Bye Week next week?<br><br>And oh yeah, the Djanjo held off the " +
                "Cocos in very low scoring affair to muddy up the middle of the standings at 2-2 each.<br>";

var week5_txt = "Alas the last undefeated team and last winless are no more! Not much drama left for the rest of the " +
	        "year I guess. Oh, other than seemingly having the whole rest of the league (well, except for two teams " +
	        "we'll get to later) being one week away, one win away from being in first!<br><br>Bye weeks are kicking in " +
	        "now so there'll be some scoring impacts, though you wouldn't know it from the big boy football matchup " +
	        "the Djbanjo and Nutz put up, with the Acnes taking out the Seedies (who lost despite putting up the " +
	        "second highest score of the week - don't you just hate that, at least when it happens to you).<br><br> But " +
	        "bye weeks surely must be the explanation for the CocoNots eeking out  a win over the previously undefeated Nixons, " +
                "at least they're both hoping thats the reason for the low scores. And Your Bye Week managed to take down " +
	        "the Porkribs even though the Chops didn't have any players on a bye (that may be ominous for the Porks " +
	        "chances over the next 10 weeks or so... The Phat (five players injured or on bye) vs the Topes " +
	        "(three players injured or on bye) strangely ended with the Bastards easily taking out the Ice. Go " +
                "figure.<br><br>And lastly (approprately so) the 9th and 10th place teams matched up (someone's got " +
	        "win right - gosh wouldn't a tie been great), with a low scoring affair. Silver lining time: they both " +
	        "beat their projected scores and would have both beat Coco, Hopes and the Ice. Sadly, though the " +
	        "Bass won, they still find them selves in last place.  Well the season is still young and they only " +
	        "need to move up two places to be in the playoffs!.<br><br>";
         
	    
var week6_txt = "Well, one nail biter and four not so close matchups. The coconuts were all finished headed into MNF " +
                "with only the Chops TE left. But as the Monday night game went on the Porkies kept closing the gap, " +
                "squeaking by the Cocos at the last minute...  Nah, scratch that! Having Ertz hurtz - he needed one " +
                "more catch! THe Chops end up oh so short, just 0.9 points away from PFL glory! The Cocos on the other " +
                "hand take over first place from the Chops in the division.<br><br>On the not so close end of " +
                "the spectrum, the Seedless Nuts only score a middling 124 points but still won by the weeks " +
                "largest margin (57 points) - that must mean, yes you guessed it, the Weapons of their Own Destruction " +
                "posted the (possibly historically so) low score for the year (67 pts! wow!). <br><br>This weeks high " +
                "score goes to the Ice who had Their Bye Week, moving them to the top of their division. The Acne easily " +
                "chugged down the Brewski, keeping pace with the Ice at the top of their division.<br><br>In the last " +
                "matchup on the slate the Bastards nixxed the UR So Hopeless to move to 4-2 (weren't they 1-2 three " +
                "weeks ago?) <br>";
 

var week7_txt = "After an exciting week 7 we have new leaders in the lowest score to win and highest score to " +
                "lose and the high leaque score sweepstakes! The leaque's highest scoring team continues to take " +
	        "it on the short chop side with the Porksters posting 154 points and still losing by 20 to the " +
	        "new high score holder DJ's Acne.<br><br>On the (very) far other end of the spectrum the Coco Nots " +
	        "managed a <i>comfortable</i> win over the Weapons of Not Working despite not breaking 100 pts! " +
	        "In an only marginally better effort Brewsters had their Bye Week despite barely breaking 100 pts. The " +
                "Ice put up a decent score to Nix the UR Hopes hopes to remain in first.<br><br>And lastly we have the " +
	        "CeeDees who were so confident of a victory over the Phlat they didn't even bother starting a QB or a " +
	        "TE.  You can do that whem your two RBs score 73 pts between them. Heck, their RBs and WRs alone would " +
	        "have beaten five other PFL teams. Even their kicker scored 17 points. Sheesh";

var week8_txt = "";

var week9_txt = "";

var week10_txt = "";

var week11_txt = "";

var week12_txt = "";

var week13_txt = "";

var week14_txt = "";

var week15_txt = "";

"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var cocScores = [ 131.00, 123.65, 122.50, 104.85, 134.30, 136.80, 134.45,  76.50, 124.60, 114.85, 118.55, 114.70, 149.35 ];  // Coco Browns (Andy)
var fatScores = [ 132.40, 153.40, 132.85, 166.25, 122.05, 142.10, 136.05, 122.10, 106.20, 151.30, 123.75, 133.80, 161.20 ];  // Phat Bastards (Steve)
var preScores = [ 148.55, 108.55,  94.70, 193.05, 118.50, 116.05, 143.85, 153.80, 154.65, 143.75, 125.45, 130.30, 115.10 ];  // Predators (Joe)
var rolScores = [ 102.85, 189.50, 141.60, 127.20, 123.40, 129.40,  86.10, 113.70, 108.45,  92.20,  98.75, 131.50, 129.15 ];  // Roll Tide (Daniel)
var seaScores = [ 100.35, 119.35, 100.30, 116.25, 126.00,  97.50,  98.70, 184.50, 105.55, 106.70, 112.60, 106.65, 106.70 ];  // Seamen (Adam)

var iceScores = [ 113.75, 128.15,  92.50, 123.70, 136.35,  92.85, 100.65, 151.45, 132.45, 121.30, 115.50, 124.35, 126.70 ];  // Iceotopes (John)
var jabScores = [ 142.85, 157.45, 142.10, 120.15, 181.30, 113.55, 122.45,  95.00, 162.35, 127.30, 133.75, 150.45, 102.95 ];  // Najee By Nature  (Matt)
var belScores = [ 110.85, 126.30, 126.65, 126.10, 125.00,  97.20, 122.45, 157.70, 103.05,  96.30, 128.50, 115.40, 112.75 ];  // Discount Belicheck (Harrision)
var porScores = [ 134.05,  85.70,  94.75,  82.70,  88.80, 107.90, 148.10, 110.65, 124.65, 106.20, 100.45,  98.00,  90.70 ];  // Porkchops (Noah)
var tenScores = [ 142.90, 140.70,  90.55, 149.65, 106.15, 104.35, 105.70, 117.60, 148.90, 125.85, 105.25, 149.05, 143.35 ];  // Tenacious Anus (Jacob)


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var cocPlayoffs = 4;  // Coco Browns (Andy)
var fatPlayoffs = 2;  // Phat Bastards (Steve)
var prePlayoffs = 4;  // Predators (Joe)
var rolPlayoffs = 0;  // Roll Tide (Daniel)
var seaPlayoffs = 4;  // Seamen (Adam)

var icePlayoffs = 0;  // Iceotopes (John)
var jabPlayoffs = 1;  // Najee By Nature  (Matt)
var belPlayoffs = 0;  // Discount Belicheck (Harrision)
var porPlayoffs = 4;  // Porkchops (Noah)
var tenPlayoffs = 0;  // Tenacious Anus (Jacob)


// Weekly blah blah blah text...

var week0_txt = "Welcome to the 2022 Phantom League.";

var week1_txt = "Welcome once again to the exciting PFL league for the 2022 season.  While we know you're all looking forward to " +
                "pulling down the venerable PFL Championship this year, sadly none of you will, as the Phat have a guaranteed lock on" +
                "that (at least on <i><b>this</b></i> web site. Don't care what that damn Yahoo site says..., what do they know anyway?) " +
                "Good luck to you all in securing second place! <br><br>Najee, Predators amd Anus all scored in the 140's and had comfortable wins, " +
		          "but the other two week 1 winners (Phat and Ice) had probably ended up pulling out (what remains of) their hair by the end of " +
                "the Hawks/Broncos game (Go Hawks!) as the both pulled out close wins with the Bastards cussing the PPR rule the whole way... " +
                "1 yard RB dumpoffs worth 1.1 pts??? Really?? Grumble, grumble, grumble... Oh yeah, if I didn't mention your team winning, " +
                "guess what the outcome was... No hurry, I'll wait for it.";

var week2_txt = "So apparently the secret to high scoring in the PFL is to not check your lineup and leave two open spots... and just Roll with " +
                "it scoring 189 points? Bastards! The Phat beat their projected score by 25 and still lose by 36? Or another way of looking " +
                "at it, two of the Tides players outscored the entire Chops lineup (and if your loser pool pick had the Pork being the " +
                "first team to not break a 100 for the year, you're a winner, winner, chicken dinner). The Bellys weren't complaining " +
                "though as their sad effort still chopped up a win against their bro!<br><br>Speaking of sad efforts, the Browns outdid " +
                "the Bellys by winning while scoring even less than the Bellys, taking out the Tators (who might be a little too dependent " +
                "on the Vikings). The remaining two matchups actually featured winning teams with good scores, Najee naturally beating " +
                "the Seaboys, and the Anus beat the Topes who lost despite their top 3 players scoring 83 points (which just has to Hurts!).<br>";


var week3_txt = "Well, much lower scores this week as four teams fail to break 100 and a fifth with their toes touching that line...  But congrats " +
                "to the Chops as they still ekeed out a <i>'victory'</i> with their 94 point effort icing out the Topes. On the other hand, the " +
                "Tens league low score for the week didn't work so well matched up against the Naturals league high score for the week. It just " +
                "kinda works that way I guess...<br><br>The Tide, in their ongoing groundbreaking and innovative lineup strategies, replaced an " +
                "out for the week wide receiver for, you guessed it, another injured out for the week wide receiver! Pure Genious as it led to " +
                "yet another win, this time over the Lakemen, though there's now some feeling that their team should be renamed to <i>Roll " +
                "Lamars</i>... Lamar's bye week is gonna be a killer!<br><br>In the other two matchups, the Preds got ho-hum efforts out of " +
                "most of their players and a virtual goose egg out of their #1 WR to easily lose to the Phat's mostly mundane effort, and the " +
                "Clearance Coaches slipped by the Brownies (just not much to say about this one...).<br><br>So, after just three weeks we're " +
                "down to one undefeated team, and one defeated team, the rest of us middling around the middle... long season still though!<br>";

var week4_txt = "We had three teams win while only scoring in the 120's this week. Guess we'll give the <i>'Lucky Team of the Week'</i> to all three! In the first " + 
                "matchup, the closest of the week, the <b>Notjee's</b>, with their low score of the year, got <i>Waddled</i> over by the <b>Dinner Rolls</b>, thereby " +
                "eliminating our last undefeated team (the Miami Dolphins can rest easy now).<br><br>In the second matchup, sadly the <b>Dry Lake Bed Men</b> remain " +
                "defeated, after getting zero from Alvin the RB, allowing the <b>On Sale Bells</b> to ring up a win. If only they'd played their other RB! Oh wait, " +
                "they'd have lost by 0.5 pts still... oops, never mind.<br><br>In the third sad low scoring affair, the <b>Slush Atoms</b> tanned (Copper Tone Brown " +
                "#4) the <b>Coco Puffs</b> by almost 20 pts, pretty good when you're only scoring in the 120's yourself!<br><br>Now, in the land of Big Boy Football, "  +
                "two (sorta 3) teams actually put up manly efforts. The <b>not too Phat (why almost trim, practically svelte even) Bastards</b> karushed the " +
                "<b>Cutlets</b>, more than doubling the porkers score, for the leagues largest blowout of the year (made easier mind you when your opponent only " +
                "scores in the 80s).<br><br>In the final matchup the <b>Lackadasical Anus</b> put up the third highest score of the week.  So sad (insert sad emoji " +
                "here) that it was only good enough to get blown (out the ya know what...) by the <b>Marauders</b> by 40 plus points, who now own the high league " +
                "score for the year!";
 
var week5_txt = "Well, obviously the <b>Naturals</b> are the class of this league, blowing out the <b>PreDaters</b> by 60+ pts! " +
                "And just as obviously the luckiest goes to the <b>Bass Turds</b> who under performed but had their <b>Anal</b> " +
                "opponents show them how to really underperform! Well done, well done!<br><br>In the closest match of the week " +
                "two 3-1 teams matched up for what, other than the close finish, was a points snoozefest as the <b>Bellboys</b> " +
                "barely tidied up the <b>Rollers</b>, to keep pace with Najee and Phat at the top.<br><br>In the other two " +
                "matchups the <b>Isographs</b> and the <b>Choclate Nibbs</b> both posted nice scores, and their opponents, " +
                "<b>SeaGeezers</b> and <b>The Other White Meat</b>, respectively, didn't... Simple huh?";

var week6_txt = "A low scoring affair this week, only two teams reaching their projected scores, and this weeks high score only " +
                "matching the previous lowest " +
                "weekly high score.  Good defense? Bad offense? Or the start of the dreaded Bye weeks? Aaaaaahhh!!!<br><br>" +
                "I haven't actually seen it but I'm sure the <b>Chops</b> are thanking (at least mentally) the Phat " +
                "for K Walker as they rode his 19 points to overcome the <b>Anus</b> and pick up their second win.  The " +
                "Phat sure would have liked to have Walker still on their bench as his replacement roared to a 2.5 pt " +
                "effort! Whoo! But wait, seems the <b>Phat</b> still won, as only one player for the <b>Topes</b> managed " +
                "to meet/exceed their projections - a whole team effort there!<br><br>You know you're blessed by " +
                "<b>Nature</b> when you can score your lowest total of the year and still beat the <b>Bellies</b> by " +
                "almost 20. Both the <b>Predators</b> and the <b>Tide</b> also failed to reach their projected totals " +
                "this week but the Preds managed to miss it by a larger amount to end up getting rolled...<br><br>And " +
                "in the final matchup, the <b>Seamen</b> didn't help themselves playing an inactive WR but there was " +
                "more off there than that as they lost to the <b>Brownies</b> by almost 40 pts to stay winless.  Not to " +
                "fear though, in the Bizarro world for fantasy football, they're almost certainly likely to rise up next " +
                "week to topple a first place team - that's how it works you know!";

var week7_txt = "In the most exciting contest of the weekend, not over till the end of MNF, the <b>Pork</b> are once again thanking " +
                "the Phat (Yummm, pork fat!) for KW III after barely chopping down the <b>Tators</b> this week to remain undefeated " +
                "since being gifted the gifted running back. Course thats only to reach 3-4 for the year but hey, beats the " +
                "alternative, eh? Right back into the thick of things. <br><br>The <b>Bastards</b> on the other hand " +
                "are going Ken Who? as they avoided any hint of an upset to the <b>Boat Boys</b>, winning by almost 40 pts... " +
                "<br><br>So what do you do when half your roster is out on bye? Normally you score a lot less points amd lose to " +
                "whatever lucky team happens to be playing you that week.  Well, the <b>All Naturals</b> scored less points than  " +
                "normal as expected but forgot to do the losing part as the <b>Icicles</b> lineup froze up in the spotlight.<br><br>" +
                "Speaking of freezing up... apparently the <b>Tide</b> doesn't roll when frozen over either, chillingly losing to " +
                "<b>Coco Nibbs</b> by almost 50! Whew, good effort there boy, can't even blame it on Bye weeks! <br><br>And in our " +
                "final contest(?) the <b>Bell Boys</b> tied the Najee's for lowest winning score of the week (with low winning scores " +
                "pretty much being their modus operandi all year, not having scored over 126 pts all year but still sitting at 5-2), " +
                "taking down the <b>Loose Butt</b>. Make sure you're standing upwind of that stinker.";

var week8_txt = "OK, who called this one, raise your hands... the 0-7 <b>Ocean Boys</b> became men, manly men with this " +
                "weeks league high score, beating their previous best score by almost 60 pts (and breaking 100 " +
                "for the first time in 3 weeks), taking down the <b>Pre-Daters</b> who had a good score but stll " +
                "lost by 40.<br><br>On the other end of the standings spectrum both of the division leaders scored their " +
                "lowest scores of the year, one of them surviving that result, and one not... the <b>Bass Masters</b> stayed " +
                "phat, moving to 3 game lead in their division despite their meager effort (although still winning by " +
                "46 pts) after the <b>Coco Nots</b> lineup was devasted by byes, injuries and some questionable " +
                "roster choices.<br><br>The other division leader <b>Nachos " +
                "By Natalie</b>, after their by far lowest score for the year, saw their division lead decrease to just " +
                "tie-breakers as the <b>Clearance Rack</b> took them down by 60ish.<br><br>Notice the blowout " +
                "trend? Well, we've got one more as the <b>Topes</b> iced the <b>Low Tide</b> by around 40 pts.<br><br>" +
                "In the final matchup we finally got some suspense and an excuse to watch the dull MNF game instead of " +
                "going out and getting a sugar buzz trick or treating, as the <b>Tight Butts</b> held it in and eeked out " +
                "a close win over <b>Spare Ribs</b>.<br><br>" +
                "Also of some note, but probably little interst, in four of the five matchups this week the team with the " +
                "better record going in lost to the team with a worse record (and in three of them the two teams ended up " +
                "with the same records afterwards...) in affect closing up the playoff race quite a bit, if you're even " +
                "3-5 you're only one game out!";

var week9_txt = "It was another week of 4 relatively easy wins and one nail biter, similar to last week, just the names " +
                "changed, resulting in half the league ending up with identical 4-5 records, which leaves them all tied for " +
                "that last playoff spot! And even the snake bit Predators at 3-6 are in it still as they're scoring a lot " +
                "more points than all five of the 4-5 teams just ahead of them.<br><br>" +
                "Alas, the miraculous resurgence of the <b>Seamen</b>, last weeks biggest surprise, proved to be somewhat " +
                "short lived as the <b>Anus</b> pooped on their parade. The <b>Naturals</b> ended up with a comfortable " +
                "win after K Drake scored 25 pts Monday night and the <b>Coco's</b> continued to have lineup issues.<br><br>" +
                "The <b>Chops</b> continued with their good fortune of getting K. Walker from the Phat, providing all the " +
                "margin they needed to take down the <b>Rollers</b> who managed to start two Out players... seems hard to " +
                "win that way.<br><br>In the 'Can you top this' matchup, the <b>Tators</b> J Fields scored 44 pts, only to be out " +
                "done by the <b>Topes</b> J Mixon scoring 55!  Too bad you have to play the rest of the rosters, as the rest " +
                "of the Preds lineup was better than the Ice's, resulting in a 22 pt win.<br><br>In the final matchup, the " +
                "<b>Turds</b>, despite posting their lowest score of the year, had a decent lead going into Sun evening but " +
                "the <b>Blue Light Special on Aisle 5's</b> still had New Orleans Def and Derrick Henry.  After Henry had two " +
                "TD's and 100 yds in the first half it all seemed over for the Phlat, but amazingly Henry was shut down in " +
                "the second half and the Phlat pulled off the only close game of the week on Monday night when NO Def " +
                "couldn't score the needed 7 pts.<br>";

var week10_txt = "Welcome to PFL Week 10 where 7 out of 10 teams are within plus/minus one game of being in the playoffs! Should " +
                 "be an exciting road to the playoffs!<br><br>This week we saw a matchup between the top two teams and two of the bottom " +
                 "teams. The top end matchup had the <b>Nachos</b> favored going in but the <b>Bass Pro Turds</b> receiving corps " +
                 "64 pts doubled their counterparts effort leading to a comfortable win and high score for the week.<br><br>" +
                 "In the other end matchup it was a cliff-hanger, after the <b>Loin Chops</b> forged into the lead late in MNF " +
                 "only to somehow have the Phi D eek out enough points (in a losing effort) at the end of the game for the " +
                 "<b>SeaGuys</b> to retake the lead from the porkers and win by half a point! Exciting stuff!<br><br>" +
                 "In two other matches the <b>Topes</b> rolled the <b>Low Tide</b> and the <b>Taters</b> flattened the " +
                 "<b>Bellies</b> when neither loser could break 100 pts and both winners did. That's how it works, folks!<br><br>" +
                 "In the final matchup, the <b>Carob Ochres</b> " +
                 "continuing roster choice selections (or lack there of) doomed them to a close loss to the <b>Anals</b>.<br><br>" +
                 "Here's an interesting datum: The highest scoring team in the league (Predators) and the lowest scoring team " +
                 "(Chops) in the league are both 4-6! Timing is everything I guess...<br><br>";

var week11_txt = "Looks like Division 1 is wrapped up as the <b>Obese Illegitimates</b> take out the <b>Slow Ripple</b> to secure " +
                 "a five game lead with four weeks to go. Not that they've been any great shakes the last couple of weeks but hey, " +
                 "a win is a win!<br><br>In the Division 2 the two leaders both won to enhance their chances but it'll be a while " +
                 "before the end result falls out.  The <b>Naturals</b> took down <b>the Other White Meat</b> and the <b>Belly " +
                 "Flops</b> discounted the <b>Lagoon Kids</b>.<br><br>The <b>Slushies</b> also won in Division 2, lubricating the " +
                 "<b>Stubborn Derriere</b>, to move into the last playoff spot as of the moment.  Can they keep it? With four weeks to " +
                 "go, anyone team with seven or less losses is still in play at this moment (which is all but one team - Sorry " +
                 "Seamen!).<br><br>And then there's the team everyone should be keeping an eye on - the <b>Post Taters</b>, who took out " +
                 "the <b>Choco Nibbs</b>, winning their third in a row to move to 5-6 and they're the highest scoring team in the league. " +
                 "Looks like some early season bad luck has moved on and they're killing it! But they've got the Bastards next week " +
                 "who have won <b>nine</b> in a row - might be a tough matchup or maybe the Phat are overdue for a big L?<br><br>";

var week12_txt = "<b>Bastards!</b> Those damn bastards did it again, down big after the Turkey day games they come back to eke out a win " +
                 "over the <b>Predators</b> late Monday night after the Preds Sunday lineup laid an egg. Heartbreaking loss for the Preds " +
                 "dropping them two games back in the race for the wild card spots.<br><br>Speaking of wild cards, the <b>Iceotopes</b> " +
                 "are peaking (?) at the right time, winning their third in a row, taking down the undercooked <b>Porkchops</b> to move " +
                 "into a virtual tie with the Bellies for the first wild card spot. The <b>Discounts</b> did their part in that equation " +
                 "by getting blown out of the <b>Anus</b> who are now only one back in the wild card race.<br><br>In the same old, " +
                 "same old section of the news, the <b>Tide</b> performed the now " +
                 "seemingly ritualistic beatdown of the <b>Seamen</b>, rolling up a 25 point victory to stay alive in the wild card race " +
                 "with the Predators.<br><br>And finally, the <b>Najee's</b> road a 48 pt performance from J Jacobs (and 34 from J Allen) " +
                 "to overwhelm the <b>Coco's</b> who are probably feeling a bit blue (the Coco Blues?) about their playoff chances at this " +
                 "point. With the win and high score for the week the Natures take over the total points scoring lead, obviously making them " +
                 "the championship favorites, right??? Ignore that Phat guy behind the curtain. Nothing to see there.<br><br>";

var week13_txt = "Another week in the books, we added one more team to the playoffs (Najee, backed in despite losing after the Anus pooped " +
                 "out) and sadly said playoff goodbyes to three more teams (Cocos, despite winning, and Preds because of losing, and Chops, " +
                 "just because).<br><br>In a big upset the <b>Iceotopes</b> took down what was the highest scoring team in the league, the " +
                 "<b>Naturals</b>, to keep themselves in a current playoff spot. Although, is a team thats now on a four game winning " +
                 "streak really much of an underdog despite their <i>supposed</i> roster issues?.<br><br>In a gotta have it, losers out " +
                 "matchup the <b>Tide</b> rolled over the <b>Predators</b> (in another probable upset considering the Preds were " +
                 "the second highest scoring team in the league despite their now 5-8 record?).<br><br>In the totally not an " +
                 "upset category we have the <b>Bellies</b> taking down the familial opponent <b>Chops</b> to keep their current hold " +
                 "on a playoff spot (though we do note that with the Najee's loss and the Topes and Bellies wins, Najee's division lead is " +
                 "down to one!)<br><br>In the who cares, we're playing for pride game of the week, the <b>Coco's</b> took out the " +
                 "<b>Seamen</b>. Maybe the PFL snake draft should be set up similar to to the NFL? Seamen pick first in the snake " +
                 "portion next year?<br><br>And finally there was, obviously, the most anticipated  matchup. The <b>Anus</b> were tenaciously " +
                 "hanging in there against the <b>Phat</b>, and took a fairly good lead late Sunday afternoon and seemed in position to " +
                 "knock the mighty Phat down a notch or two (and help their own playoff positioning). But a late flukey SFO defensive " +
                 "score and a flukey CeeDee Lamb (DAL) score (gotta remember to tackle, boys) crushed the Anus's hopes by early Sunday " +
                 "evening.<br><br>That leaves four teams gunning for the last two playoff spots: Bellies, Topes, Tide, and Anus. What " +
                 "will it take? Read on.<br><br><b><i>Playoffs in a nutshell:</i></b> one win by Bellies - they're in, one win by Ice - " +
                 "they're in. And since they play each other this week one of them is already locked (a tie would work for both too...). " +
                 "That leaves one spot. The Tide and Anus need the Belly/Topes loser to lose out and they win out, then it'd come down " +
                 "to total pts, where the Anus are sitting pretty (pretty anus? hmmm...) at the moment, for the final spot.<br><br>";

var week14_txt = "Wait for it!!!!";

var week15_txt = "Wait for it!!!!";


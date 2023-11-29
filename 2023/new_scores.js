"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var porScores = [ 151.00, 146.05, 161.15, 123.25, 136.90,  76.20,  80.95, 131.80, 111.80,  86.20, 150.85, 127.05  ];  // Porkchops (Noah)
var cocScores = [  81.60, 161.95, 117.50,  85.75, 101.05, 115.00, 121.40,  99.15,  98.65,  90.95, 114.85, 113.80 ];  // Coco Browns (Andy)
var mhcScores = [ 141.80, 107.95, 107.55, 178.40, 113.40, 123.60, 135.80, 163.80, 106.75, 101.65, 117.75,  81.05 ];  // The Age of APukalypse (Matt) Orig: Mile High Chubb
var preScores = [ 101.90, 113.15,  84.45, 156.20, 116.50, 157.20, 116.65, 138.40, 132.00, 200.40,  93.15, 165.55 ];  // Predators (Joe)
var steScores = [ 116.25, 114.55, 129.80,  89.50, 116.50, 112.55, 112.95, 126.65, 130.05,  96.65, 170.40, 120.65 ];  // Superbowl DB Steve's Team (Steve)

var fatScores = [ 124.05, 134.90, 160.10, 123.45, 124.50, 131.65, 110.50, 107.20, 124.35, 147.65, 133.30, 178.10 ];  // Phat Bastards (Steve C)
var iceScores = [ 133.60, 133.05, 117.95, 151.65, 117.75, 108.95, 115.25, 145.70, 108.90, 163.55, 172.10, 137.25 ];  // Iceotopes (John)
var belScores = [  96.50, 118.00, 137.10, 147.40, 149.75,  95.65, 148.75, 156.70, 113.70, 105.25, 112.95, 134.35 ];  // Discount Belicheck (Harrision)
var wbdScores = [  84.60, 142.00, 175.85,  75.45, 145.60, 116.25, 121.70, 132.20, 142.70, 172.75,  94.00, 160.30 ];  // Weapons of Bass Destruction (Daniel)
var rekScores = [ 100.80, 102.95, 170.55,  98.75, 161.25, 157.20, 152.95, 133.35, 124.65, 130.50, 127.70, 138.60 ];  // The Brotha's (Reek/Ross)


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var porPlayoffs = 0;  // Porkchops (Noah)
var cocPlayoffs = 0;  // Coco Browns (Andy)
var mhcPlayoffs = 0;  // Age Of APukalypse  (Matt) (Old: Mile High Chubb)
var prePlayoffs = 0;  // Predators (Joe)
var stePlayoffs = 1;  // Steves Superbowl DB Team (Steve)

var fatPlayoffs = 0;  // Phat Bastards (Steve)
var icePlayoffs = 1;  // Iceotopes (John)
var belPlayoffs = 0;  // Discount Belicheck (Harrision)
var wbdPlayoffs = 1;  // Weapons of Bass Destruction (Daniel)
var rekPlayoffs = 1;  // The Brotha's (Reek/Ross)


// Weekly blah blah blah text...

var week0_txt = "Welcome to the 2023 Phantom League.";

var week1_txt = "And we're off. The cream rises quickly to the top as the draft king Chop's porked out on the Chocolates <i>(this early leader for largest " +
                "margin of victory prize, retail prize value: $0.00, could be hard to beat)</i>. If cream rises then something must settle to the " +
                "bottom of that churn too, as evidenced by several teams spoiled, nay, even rancid efforts.<br><br>Mile High Chubb's QB and defense " +
				    "scored nearly as many points as some teams totals (Coco and WBD, be reassured, we're not naming any names here, just pointing things out), " +
				    "much to the Bastards chagrin, who suffered that always favorite thing: highest score of the week to lose.<br><br>New comer SDBST surprised the Tators " +
				    "in a relatively high(???) affair, well in comparison to the another newcomers Brothers victory, with that awesome just barely 100 pts score, " +
                "over the Weapons of Mass Deflation.<br><br>And in the last, well yeah, okay, kinda dull here, move along, move along, matchup the Ice restocked " +
                "the Bellys inventory from the discount rack to the 'Clearance, Must go, No offer refused' rack.";


var week2_txt = "So, who among you called this one:  the two teams with the (way) lowest scores in week one had the first and third " +
                "highest scores this week (boy, that's really gonna spike their Volatility scores) as <b>WepBaDes</b> and this weeks top " +
                "morsel <b>Coco Brownies</b>, took out the unsuspecting <b>Ice</b> and <b>Preds</b>, who had probably mailed it in " + 
                "thinking they had gimmes!<br><br>The probable best team in the league <b>Pork Rinds</b> went salty on the <b>Bro's</b> " +
                "and <b>Superduper ABC Steve's Fantasy Football Incredibe, No, Really, Just Amazingly Awesome Team</b> snuck by the <b>Six " +
                "Inch High Chubsters</b> in the lowest scoring affair, but hey a wins a win.<br><br>And in the last matchup, the <b>Flat " +
                "Belly</b> affair, both teams had a defense left going into MNF but the Turds had a 17 pt lead going in... and a 17 pt lead " +
                "going out... marking the first time this year the Fats opponents defense didn't score 35 points! Whats that you say? It's only " +
                "week two? Well, then, never mind... <i>but still true</i> :-)<br>";

var week3_txt = "So, apparently there are two paths to a 3-0 record: 1) by being good - the <b>Pork Chops</b> have had one of the three highest scores each week, " +
                "and lead the league in scoring, this week taking out the <b>APukalytes</b>, and 2) by knowing when to schedule an opponent - the <b>Super " +
                "Dupers</b> have only one scoring week in the top five for that week and are averaging less than the league average score, and their three wins " +
                "are three of the lowest five winning scores of the year! This week their mastery of scheduling resulted in another low scoring win, this time " +
                "over the <b>Coco Not So Browns</b>. Maybe the start of one of those magical seasons?<br><br>On the other end of the luckometer are the 0-3 " +
                "<b>Belicheks</b> and the 1-2 <b>Bastards</b>. <i>We won't mention the currently under-achieving 0-3 Predators at this time</i>. The Belly's " +
                "have the second and fifth highest scores to lose a game this year, losing to the <b>Weapons</b> league season high output this week. Tough to beat " +
                "that! Not to be out done in the 'Why Me?' category are the Fat - they are proud owners of the highest and fourth highest scores to lose this year, " +
                "have had the fourth highest score in the league every single week (wow, what consistency!) and the second highest season point total. They lost to " +
                "the <b>Brotha's</b> this week - a team that hadn't scored more than 102 pts the first two weeks and pulls out a 170 point effort (where'd that come " +
                "from?) against the Phat. Do we even need to mention who that one Phat win was against? Why yes, it WAS the Belichecks. Go figure. Guess the Bellys and the " +
                "Phat are both on their way to a <i>'So, its gonna be that kind of a year, huh?'</i> year.<br><br>And lastly, in a nothing to see here, move along, move along " +
                "matchup, the <b>Ice</b> chilled out those not aforementioned <b>Predators</b> to remain in ho hum, middle of the pack, when do the playoffs start mode.<br><br>"

var week4_txt = "After just four weeks we're down to just one undefeated team.  Which team is that you might ask - the league high averaging <b>Porkchops</b>, who in an off week " +
                "still scored 123 pts or the more modest scoring <b>Super DB Steve</b>, whose total this week was south of 90 points. Why of course, it the still undefeated " +
                "<font color='#ff0000'><s>Pork</s></font>, oops, I meant the Super Dupers who are now the sole 4-0 team. Congrats I guess. The SDST took advantage of an " +
                "even weeker effort out of the <b>Weapons of Bass Amusement</b> (didn't they score 178 points last week?)  The Chops on the other hand got a season high point " +
                "out of the <b>Icecubes</b> freezing out their hopes on remaining unbeaten. The Holics slide their way into first place in their division with the win.<br><br>" +
                "The <b>APukeopolis</b> broke out of their doldrums scoring the highest league point total this year blowing out the hapless <b>Siblings</b> who had their " + 
                "lowest score of the year (though not by much over two of their other efforts - another team that somehow scored 170 pts last week. Much Bastard hate there).<br><br>" +
                "On the other end of the spectrum two 0-3 teams met up so someone had to win (weren't you just hoping for a tie here????). Well in a matchup where both teams had " +
                "their highest scores of the year that someone was the <b>PreDateds</b> to eek out the <b>Bellyaches</b> in the closest matchup of the week.<br><br>In the final " +
                "matchup the <b>Flat Bass Turds</b> comfortably beat the <b>No No Browns</b> when the Cokes couldn't muster even 90 points.<br><br>So, one undefeated team, one " +
                "winless team and all the rest hanging out in the middle. Will the Bastards take dowwn Super Steve and can the Discounters feast on Pork this next week? The " +
                "beginning of Bye Weeks could shake things up. I would guess the fantasy world waits with (less than) baited breath...";

 
var week5_txt = "In a relatively unusual Monday, the MNF game had no chance to alter any of the outcomes, only just how badly would the <b>Da Brotha's</b> crush the <b>Coconaughts</b> on their way to " +
                "the high score of the week against the Cokes low score of the week. That'd be very badly I'd say. Hardly seems fair...<br><br>On another note we lost both the last unbeaten " +
                "team and the last winless team just five weeks into the season.  On the winless side, in a meeting of brothers (no, not Da Brotha's) the <b>Belly's</b> discounted the " +
                "<b>Chops</b> win hopes by saving their highest score of the year just for the Porkys to chalk up their first win.<br><br>And in a battle of the Steve's, the Fantasy gods of " +
                "fate must have gotten confused as to which Steve to bestow their lucky blessings on as the <b>Phat Steves</b> took down the undefeated (though hardly scary) <b>Super Steves</b> " +
                "in a close battle that wasn't decided till very late Sunday night thanks to the Dallas Cowboys ineptiude.<br><br>In an even closer matchup, it looked like the <b>Ice</b> were going to " +
                "be frozen out by the <b>APukesters</b> in a low scoring affair.  But, again thanks to the Cowbooys ineptitude, the Holics tight end, who had <b>zero</b> touchdowns coming in, " +
                "ends up with three TD's to overcome the Age of Aqaurius.  Not sure who hates the Cowboys more at this point, your humble author (on general principle) or the Apukies on losing " +
                "them their match.<br><br>And oh, yeah, in the final matchup (seems like there's always some final one ho hum matchp) the <b>Bass Haters</b> easily took out the (not very) " +
                "<b>Predacious</b> (Author: look it up)<br><br>And did anyone notice the Division 2 Wannabes wiped up with the Division 1 Dreamers, going 5-0 this week against them?<br><br>";

var week6_txt = "In another amazing display of playing whats in front of you, the <b>SuperDuper SteverTeamer's</b> once again found a way for their opponent to score even less points than " +
                "they did, as the <b>Belichecks</b> continue to emulate their real life NFL namesake's season (ie losing). The SDST now has four of the five lowest winning scores in the " +
                "league this year, including this weeks 112 point fest!<br><br>To show how these things normally go, every other team that scored less than 115 points this week lost, with the " +
                "<b>PorkFlops</b> 72.6 point effort (is that the right word) leading the way and ending up with an 85 pt blowout to the surging <b>Predators</b> (150 pts plus in two of the " +
                "last three weeks).<br><br>The <b>Apukalypse's</b> namesake also was not great (6.6 pts, time for a name change?) but they still scored enough to beat out the <b>Coco Chanels</b> who " +
                "now have scored even less points than the SDSTs! (<i>That can't be good</i>). Lets hope that turns around as it'd be great if the SDSTs had the best record AND the lowest average! " +
                "And speaking of surging, the <b>Bro's</b> scored big for the third time in four weeks to melt the <b>Ices</b> hopes of a win, to move into virtual tie for 2nd most points " +
                "score with the Porkers and first place in their division (via tiebreakers).<br><br>And in the last matchup the <b>Chubby Illegitimates</b> got 60 points out of their 3 Sunday and " +
                "Monday night players to overtake the <b>Weapons of Minimal Destruction</b> late Monday, and take the overall lead in points scored (though that seems to be more of a consistency " +
                "thing than a high scoring thing).";

var week7_txt = "Wow, the closest match of the year ended with <b>Fish Destroyers</b> eeking out a win over the <b>Oh No Browns</b> by 0.3 points, leaving the Cokes to wonder why just one of " +
                "their players couldn't get just 3 more yards or one more reception or one more sack or... yep, that's practically the dictionary definition of 'That Sucks'.<br><br>Speaking " +
                "of 0.3 points, thats the exact amount the <b>Flat Turds</b> got out of their lead running back this week after he had a headache just before game time, of course leading to " +
                "a close loss to the <b>Slushtopes</b>. That would be a synonym for 'That Sucks'.   Maybe the Phat should have just donated the 0.3 points to the Browns?<br><br>In another close " +
                "match, though one actually involving teams scoring high, <b>Da Brothas</b> are looking like the class of the leaque, taking down the snakebit <b>Belly Boys</b> and taking " +
                "over first place in Division 2 and the high average. Good week for them I guess.<br><br>And in an ongoing magic show the <b>Super Steve's</b> once again conned their " +
                "opponent (the once mighty <b>Choppers</b>) into having the lowest score of the week, winnnig despite having the third lowest score of the week.  Did you know that their " +
                "opponents have scored 300 points less than the Bellichecks opponents? Wow! That's some powerful magic!<br><br>And in the token ho hum match, nothing much exciting here, " +
                "move along, move along the <b>APukasaurus's</b> took down the <b>Preda-SeeYaLaterDude</b>.";


var week8_txt = "It was the best of times, it was the worst of times... that sounds vaguely familiar somehow.  Anyway, for the <b>Bellys</b> it was the worst of times as they had their " +
                "highest score of the season and still lost to the <b>Aging Apuks</b> after J. Gibbs goes for 30 on MNF. That's gotta hurt! In another entry on the 'worst of times' side of " +
                "the ledger, and scoreboard, the <b>Coco Puffs</b> had the low score for the week to drop into dead last in record and points scored, losing to <b>PorkLoins</b> who had their " +
                "best score since week 3 of the season.<br><br>In the both least and most shocking matchup of the week the <b>Stupor Steve's</b> failed to break 130 pts (least shocking - " +
                "haven't hit that mark this year) and lost (most shocking given their luck the first seven weeks) as the <b>Predators</b> forgot to read the Hollywood script and accidently " +
                "scored more points than the SDSTs. The " +
                "SDSTs still are in first place in their division but that sees as tenuous as the Seattle Seahawks division lead.<br><br>In the big boys battle for the division lead in " +
                "Division 2 the <b>Broz On Ice</b> took out the <b>Other Brozs</b> to grab hold of the number one seed (if the season ended today - really, is it too early for that?)<br><br>" +
                "And in the traditional <i>what does it all matter bowl</i> the <b>Weapons of Bastard Destruction</b> easily held on Monday night after the <b>Phlats</b> QB failed to pass " +
                "for 500 yards and 5 TDs and the WBDs defense failed to lay a zero point egg...<br><br>";

var week9_txt = "In a strange scheduling quirk four of the five matchups featured teams with identical records so lots of position joggling was bound to ensue. In a battle of the top teams " +
                "in each division, each 6-2, the <b>Stupor DBs</b> had their high score of the season, breaking a 130 points for the first time (whooo, what lofty heights we're dealing with here) " +
                "taking down the <b>Slushies</b>.<br><br>In a matchup of two 5-3 teams, the <b>Weaponators</b> won for the third stright week, karushing the <b>TAOP</b>, by having the league " +
                " high score for the week (tough to " +
                "lose when that happens) movng into first place in the South division by 3.5 total points.<br><br>The 4-4 matchup had the <b>Tubby Fish Poops</b> come out a little ahead of " +
                "<b>The Other White Meats</b> when the NY Jets left their offense in the locker room Monday night.<br><br>Then there was the matchup of two 1-7 teams, guaranteeing one of them would " +
                "double their win total over the weekend!  That team would be the <b>15% Off Till Midnight on Bellies</b> who took out the <b>Coco Free Brownies</b> in a predictably low " +
                "scoring affair, although to be fair, the Bellies are mostly just snake bit - they have the third highest total points for the year which apparently is just good enough for a 2-8 " +
                "record. Think they aren't jealous of the Super Steves?<br><br>And finally in the weekly 'Oh yeah, theres two other teams playing this week' bowl the <b>Pre-Daters</b> (who " +
                "are quietly moving up the ranks) weren't very brotherly to the <b>Siblings</b> dropping them down to third in the South.<br><br>";

var week10_txt = "Probably the highest scoring week of the year with four teams scoring over 145 points and a new league high point total for the year. The owner of that sparkling new high score " +
                 "is the oncoming <b>Predators</b>, winners of three in a row and moving into second in their division. Every single player on their team exceeded their projections except for " +
                 "their kicker who missed his projected score by 0.89 points - what a loser!   Their opponent, the <b>Not so fat, why maybe even svelte Bastards</b>, had the fourth " +
                 "highest score of the week (for like the 5th time this year, three in losses) and their second highest point total of the year which of course just meant they lost again " +
                 "for the third time in four weeks as they're headed for the bottom faster than a submarine with the doors open.<br><br>The second and third higest scores of the week, <b>Weap " +
                 "Bass Des</b> and <b>Cold Atoms</b> resulted in outputs that doubled their poor oppenents scores, the <b>PorkFlops</b> and <b>NoGo Browns</b> respectively. The Phat have just " +
                 "got to be shaking their head! Speaking of sinking, the Porks are 1-6 since a 3-0 start and the Coco's have been rusting on the ocean floor since the start.<br><br>In the tighest " +
                 "matchup of the week the <b>Bellyaching</b> weren't, as they for once had good fortune and won a low scoring close match against <b>Post-Apocalypse</b> two weeks after losing a " +
                 "high scoring close match against them by about the same margin. Guess that evens those two up...<br><br>And speaking of things evening up <i>(and I was, wasn't I?  Oh, I'm just " +
                 "so clever)</i> the <b>Stupor Team's</b> magical run may be finally running out of steam as they posted their usual low score but this time their opponent <b>Da Broz Brothers</b> " +
                 "said the heck with that, and blew the DBs out. Amazingly the SDST still have a two game lead in ther division despite still sporting the second lowest total points in league!<br><br>";

var week11_txt = "Looks like the <b>Super Steves</b> caved in and decided to play the old fashioned way - score a bunch of points, way more than the <b>Age of Aqarious</b>, did. Just rubbing " +
                 "salt into the wound I guess, piling it on till they'd beaten their previous high by 40 points.<br><br>The <b>PorkChopettes</b> thought that sounded like a good idea too and " +
                 "had their highest score in eight weeks but gol darn it apparently the <b>Iceotoparies</b> decided to do that too and produced their high score of the season to beat the Chops " +
                 "and now hold the top seed in the league.<br><br>Boy, what a" +
                 "difference a week makes. Last week the <b>PredGators</b> broke the 200 pt barrier and this week couldn't break 100 and lose to the <b>1-9 SoSo Browns</b>????  <br><br>Thanks for " +
                 "that say the <b>Bastards</b>,  who in an it all evens out eventually match (given a very large sample size apparently) beat out the the <b>Reduced Bellyfat</b> despite a middling " +
                 "kind of score.<br><br>And finally, in this weeks oh yeah the <b>WBD</b> and <b>Broz</b> also played this week match, the Brodudes whooped up on the Weapons (another team that " +
                 "scored big last week and couldn't break 100 this week!), ending the WBD's four game winning streak. That moved both teams to 7-4 records just one game behind the Ice and " +
                 "Super Steve.<br><br>And given an eight team playoff format it seems the <i>Ice, Supers, Brothas and WBD</i> (despite losing) all clinched a playoff spot with at worst 8-6 and " +
                 "7-7 records as there are already two of the ten teams that can't reach that mark. So rest your starters if you play the Phat the next three weeks OK?<br><br>";

var week12_txt = "Some teams won, some teams lost. You figure it  out...";

var week13_txt = "";

var week14_txt = "";

var week15_txt = "";

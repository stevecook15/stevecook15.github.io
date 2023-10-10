"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var porScores = [ 151.00, 146.05, 161.15, 123.25, 136.90 ];  // Porkchops (Noah)
var cocScores = [  81.60, 161.95, 117.50,  85.75, 101.05 ];  // Coco Browns (Andy)
var mhcScores = [ 141.80, 107.95, 107.55, 178.40, 113.40 ];  // The Age of APukalypse (Matt) Orig: Mile High Chubb
var preScores = [ 101.90, 113.15,  84.45, 156.20, 116.50 ];  // Predators (Joe)
var steScores = [ 116.25, 114.55, 129.80,  89.50, 116.50 ];  // Superbowl DB Steve's Team (Steve)

var fatScores = [ 124.05, 134.90, 160.10, 123.45, 124.50 ];  // Phat Bastards (Steve C)
var iceScores = [ 133.60, 133.05, 117.95, 151.65, 117.75 ];  // Iceotopes (John)
var belScores = [  96.50, 118.00, 137.10, 147.40, 149.75 ];  // Discount Belicheck (Harrision)
var wbdScores = [  84.60, 142.00, 175.85,  75.45, 145.60 ];  // Weapons of Bass Destruction (Daniel)
var rekScores = [ 100.80, 102.95, 170.55,  98.75, 161.25 ];  // The Brotha's (Reek/Ross)


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var porPlayoffs = 0;  // Porkchops (Noah)
var cocPlayoffs = 0;  // Coco Browns (Andy)
var mhcPlayoffs = 0;  // Mile High Chub  (Matt) Age Of APukalypse
var prePlayoffs = 0;  // Predators (Joe)
var stePlayoffs = 0;  // Steves Superbowl DB Team (Steve)

var fatPlayoffs = 0;  // Phat Bastards (Steve)
var icePlayoffs = 0;  // Iceotopes (John)
var belPlayoffs = 0;  // Discount Belicheck (Harrision)
var wbdPlayoffs = 0;  // Weapons of Bass Destruction (Daniel)
var rekPlayoffs = 0;  // The Brotha's (Reek/Ross)


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

 
var week5_txt = "In a relatively unusual Monday, MNF has no chance to alter any of the outcomes, only just how badly would the <b>Da Brotha's</b> crush the <b>Coconaughts</b> on their way to " +
                "the high score of the week against the Cokes low score of the week. That'd be very badly I'd say. Hardly seems fair...<br><br>On another note we lost both the last unbeaten " +
                "team and the last winless team just five weeks into the season.  On the winless side, in a meeting of brothers (no, not Da Brotha's) the <b>Belly's</b> discounted the " +
                "<b>Chops</b> win hopes by saving their highest score of the year just for the Porkys to chalk up their first win.<br><br>And in a battle of the Steve's, the Fantasy gods of " +
                "fate must have gotten confused as to which Steve to bestow their lucky blessings on as the <b>Phat Steves</b> took down the undefeated (though hardly scary) <b>Super Steves</b> " +
                "in a close battle that was decided very late Sunday night thanks to the Dallas Cowboys ineptiude.<br><br>In an even closer matchup, it looked like the <b>Ice</b> were going to " +
                "be frozen out by the <b>APukesters</b> in a low scoring affair.  But, again thanks to the Cowbooys ineptitude, the Holics tight end, who had <b>zero</b> touchdowns coming in, " +
                "ends up with three TD's to overcome the Age of Aqaurius.  Not sure who hates the Cowboys more at this point, your humble author (on general principle) or the Apukies on losing " +
                "them their match.<br><br>And Oh, yeah, in the final matchup (seems like there's always some final one ho hum matchp) the <b>Bass Haters</b> easily took out the (not very) " +
                "<b>Predacious</b> (Author: look it up)<br><br>And did anyone notice the Division 2 Wannabes wiped up with the Division 1 Dreamers, going 5-0 this week against them?<br><br>";

var week6_txt = "";

var week7_txt = "";

var week8_txt = "";

var week9_txt = "";

var week10_txt = "";

var week11_txt = "";

var week12_txt = "";

var week13_txt = "";

var week14_txt = "";

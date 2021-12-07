"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var preScores = [ 133.45, 115.15, 103.35, 136.50, 202.10, 143.35, 159.45, 109.80, 126.10, 114.40, 191.95, 124.05, 141.75 ];  // Predators
var belScores = [ 113.45,  90.85, 121.50, 114.80, 115.50, 142.15,  63.70,  59.00, 111.90, 132.20, 111.90, 107.35,  92.70 ];  // Discount Belicheck
var tenScores = [ 150.20, 113.15, 158.40, 170.15, 205.00, 124.00, 124.15, 154.15, 117.80, 100.65, 125.55, 114.25, 115.25 ];  // Tenacious Anus
var cocScores = [ 143.60, 126.15, 114.00, 144.10, 108.80, 134.55,  53.00,  71.25, 111.50, 143.90, 149.40, 100.35, 144.00 ];  // Coco Browns
var seaScores = [ 172.20, 166.30,  96.00, 134.60, 135.30, 164.35, 111.10, 122.85, 108.80, 144.80, 154.15, 151.55, 149.60 ];  // Seamen (Adam)

var iceScores = [ 131.55, 197.80, 116.30, 119.80, 108.35, 160.95, 139.75, 126.80, 123.50, 108.05, 106.25, 145.60, 100.15 ];  // Iceotopes
var fatScores = [  84.80, 107.55, 142.55, 127.85, 129.95, 161.85, 141.10, 137.95, 114.20, 120.30, 130.10,  96.90, 152.80 ];  // Phat Bastards
var porScores = [ 158.25, 157.40, 140.80, 142.60, 139.40,  95.85, 182.00, 153.25, 120.50, 142.40, 113.95, 107.70, 124.10 ];  // Porkchops
var rolScores = [ 126.55, 115.00, 163.75, 105.00, 176.80,  71.55, 117.45, 107.50, 145.70,  92.35, 138.20,  98.15, 142.95 ];  // Roll Tide
var pepScores = [ 119.10, 137.25, 159.00,  86.20, 152.05, 113.35, 124.05, 131.95,  87.30,  74.40, 102.05, 102.30,  93.75 ];  // Jabronis Fuller go eazy on the Pepsi/Jabronos

// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
//TODO: Apparently this isn't sorted along with the tems...
var playoffs = [
        2,  //alien seamen
        0,  //predators
        0,  //tenanus
        0,  //cocobrown
        4,  //belicheck
        
        2,  //porkchops
        0,  //iceotops
        4,  //fatbastards
        4,  //rolltide
        4   //fullpepsi
     ];


var week0_txt = "Welcome to the 2021 Phantom League.  Another year of hope dashed by the realization" +
                "that at least half of us drafted a shitty team... and half have a hope of making the" +
                "playoffs!  But which one is your team?  Only time will tell, unless you believe Yahoos" +
                "rankings in which case the Phat will just mail the check in and go back to watching I" +
                "Love Lucy re-runs.<br><br>";

var week1_txt = "Welcome to the 2021 Phantom League.  Another year of PFL. Maybe your wildest dreams " +
                "will be fulflled and you'll make the playoffs and win the league! Or will that hope be " +
                "cruelly dashed by the realization that you drafted a shitty team... ? Which one is your " +
                "team?  Only time will tell, unless you believe in Yahoos draft rankings in which case it " +
                "seems the Phat (who have mastered the art of bad drafting) should just mail in the season " +
                "and go back to watching I Love Lucy re-runs after this weeks effort.<br><br>" +
                "The Fuller wasn't very full but they didn't have to be as they could have benched both their " +
                "RBs and their TE and still beat the Phlat despite already having the 3rd worst score of the " +
                "week. The Ice, Tide, Belis could only watch and wonder why they weren't so lucky...<br>" +
                "In the actually interesting side of the ledger the Preds and Browns had a nail biter going, " +
                "separated by just a half point Monday night with 4 minutes to go before the Cocos pulled away " +
                "with a win!<br><br>";

var week2_txt = "In early returns, seems like the defending porksters are serious about repeating. Their " +
                "opponent apparently went easy on the <b>Pepsi</b> who fizzled out, discovering what it's " +
                "like to play a real team this week after " +
                "last weeks bye against the <b>Phlat</b>.  In the way, way to early department, can the <b>Chops</b> " +
                "go undefeated, after winning easily again to take the early lead in their division? But wait, " +
                "who're those <b>Topes</b> characters running up the score on the <b>Tide</b> (wouldn't you love " +
                "to see that in real college ball!). Serious comp for the Porkers? After their opponent " +
                "scored 170 on them last week, the Ice say, ha, I can top that and score a stellar 190 this week " +
                "to probably lock up this years league high bonus! <font color='red'>KaChing!</font><br><br>" +
                "Only one nail biter matchup was left for Monday this week so MNF was a bit of a snoozer for " +
                "most of us PFL wise, with only the <b>Preds</b> vs <b>Anus</b> result in doubt at the start " +
                "of the night... but it seemed like it was just a question of when... not if, for the Preds, " +
                "as the Preds slowly but tenaciously puckered up them Anuses, who probably needed a little more " +
                "fiber, in the end. Don't you love garbage time pts!<br><br>" +
                "And meanwhile in the newly formed Moral Victory FF league, we get the Phlat managing the " +
                "break 100 pts, and not having the low score for the week to now lead the MVFF (BTW after " +
                "this week's thrashing by the <b>UFOs</b>, we're discounting <b>Bellis</b> so much I think " +
                "we'll see them for sale in the clearance section of the meat freezer " +
                "at <font color='green'><b>Dollar Tree</b></font> this week).  But the Bastards still lost " +
                "badly to the <b>Coco's</b> after they left 45 pts on the bench. <font color='blue'><i>Note to Steve: " +
                "don't overreact to a bad week and bench your best receivers...</i></font> The Coco's weren't " +
                "any great shakes but they didn't have to be, happily gettting their turn to whack " +
                "the Phlat and the automatic win that comes along with that!<br><br>";

var week3_txt = "<i><font color='red'>(AP) Breaking News Bulletin:</font></i> The recently formed Moral Victory " +
                "(MVFF) league announced it was closing it's doors after it's sole team (the <b>Fat Bastards</b>) " +
                "unexpectedly won a game this week. Said it's owner: <i>'We were never " +
                "ever expecting a victory this week, what with our opponent being the red hot " +
                "<b>Iceotopes</b> who scored more points last week than we had all season combined. Needless to say we " +
                "are stunned. Obviously there aren't any more moral victories to be had once you've actually won a " +
                "real victory, so we had to leave the MVFF.</i> The Topes couldn't be reached for comment as they " +
                "were apparently still frozen solid in the meat locker." +
                "<br><br>In related news, the other two PFL teams that had applied to join the MMVF were denied " +
                "admission to the league after also actually winning, the <b>Tide</b>, slowly rolling by the " +
                "<b>Full-of-Themselves</b> who lost despite having the second highest score of the week (don't " +
                "you hate it when that happens?), and the <b>Discounts</b>, who didn't so much roll but kinda belly " +
                "smacked the <b>Prey</b>, leaving the MVFF with zero teams, and leading to it's shutdown. The " +
                "MVFF leqague office announced there would be NO refunds on ticket sales, saying quote <i><b>'stuff it you " +
                " losers'</b></i> unquote. <br><br>Meanwhile, the non-losers side of the PFL bracket took a beating as the " +
                "<b>Pork</b> were chopped by the <b>Anus</b>, and the <b>Seamen</b> did their best Seahawks " +
                "impersonation against the <b>Cocos's</b>, leaving the Browns (??!!!) as the last undefeated team! " +
                "Dolphin fans should begin to worry! Go mighty CBs!<br><br>";

var week4_txt = "Sphincters were titghening throughout the leqgue this week as 7 of 10 teams couldn't match their " +
                "projected scores. The <b>Tens</b> weren't one of them, apparently having taken their Kaopectate, sliding  " +
                "smoothly to this weeks top score, then using the last of the Roll to wipe the <b>Tide</b> away.  But they " +
                "weren't the only team feeling regular as the <b>Coco's</b> are apparently dropping golden nuggets out " +
                "their, well you know where.... taking down the <b>Chops</b>, who maybe need a little roughage along with " +
                "all that Pork after that butt biter.<br><br>The last of the overachievers this week were the <b>Alienators</b> " +
                "who didn't really need to do all that well since they were playing the <b>Bass Turds</b> (which legally " +
                "counts as a bye in this league except when the Turds are playing the Topes...), who were just hoping to " +
                "still have the lead in their contest after the first quarter of MNF. Of such little dreams one has when " +
                "living in the Fat camp, but some joy was squeezed out in the end as they lasted four minutes into the 2nd " +
                "quarter before being sent to bed without dinner.<br><br>On the other hand, the <b>Predators</b> ordered " +
                "up the full meal deal, large size that please, devouring the <b>Topes</b> well before Sunday bedtime, " +
                "leaving the Ice to wonder: where the hell did those 197.8 points go anyway. Finally, in the someone's " +
                "got to win it because it on the schedule matchup, the <b>Bellies</b> got a discounted win when the " +
                "<b>Pepsi</b> went flat due to lack of a tight end, which, gosh, brings us all the way round to "+
                "spinchters again! <i>Editors Note: See how I made that work? Such a clever boy...</i><br><br>" +
                "So, the perfect season watch continues as the Golden Browns remain undefeated, can't believe I'm " +
                "typing that... leaving Dolphin fans everywhere with sleepness nights.  Can it continue?  Go go Cokes! " +
                "As far as the rest of the league goes, the two divisions are strikingly different as the last four " +
                "teams in 'The Ugly' are 8 games under .500 collectively (in 4 weeks!), which amazingly means even a " +
                "1-3 start puts every team in the division within a game of the lead...  All the teams in 'The 'Good, " +
                "The Bad' can only watch the carnage, salivatinfg over the chance to continue hitting the rival " +
                "division with the ugly stick, leading them to petition league officials this week to make all " +
                "remaining PFL weeks inter-divsion games, or at the very least against the Fat!!<br><br>";
 

var week5_txt = "So, the <b>Tide</b> has had big scores two of the last three weeks, sandwiched around an 100 point effort, and " +
                "we'll just pretend the first two weeks didn't happen.  Obviously they're on a <i>Roll</i>, so it's hard to say " +
                "their score came as a complete surprise, but...  ah, heck I'll say it anyway: I'm surprised! But not as surprised " +
                "as about the 68 point butt whipping they put on the mighty <b>Coco's</b> who dropped a big smelly " +
                "<i><font color='brown'>brown</font></i> one!  Down goes Fraiser! Down goes Fraiser! " +
                "The Dolphins sleep well tonight as the last undefeated PFL team is no more! That gave the <b>Sphincter</b> boys a " +
                "chance to catch up and move into first in the <i>Not Too Bad</i> division, with a massive win, setting a new " +
                "league high with 205 points and the <font color='green'><i>cash</i></font> that comes with it, over the <b>Fuller</b> "+
                "who didn't go eazy but did go anyway, leaving the Peps looking up from the bottom of the <i>Mostly Bad</i> division " +
                "(still figuratively standing on top of the Phat's heads of course). " +
                "<br><br>Speaking of the <b>Phlat</b>, they fufilled their designated PFL role, stinking it up like a ten day old " +
                "skunk carcass, to deliver the <b>Preds</b> a stress free weekend, which they helped along with by scoring 202 " +
                "points, which also beat the previous high, to apply a 72 point beatdown on our ever suffering Phat.  The " +
                "<b>Pork</b> are the next in line for a free win which we're sure they're looking forward to after slinking by " +
                "the <b>Little Green Men</b> despite the Chops posting their lowest score of the year, keeping them on top of " +
                "their sad little division. And finally, because we have to, in a low scoring affair " +
                "between two struggling teams, that one of them by league rules was going to <i>'win'?</i> the <b>Bellys</b> " +
                "<i>'scored'?</i> more points than the <b>Topes</b> to <i>'beat'?</i> their <i><font color='blue'>ice</font></i> " +
                "cold opponent, who are threatening to change their name to the <i>AlcohlTopes</i> if this keeps up.<br><br>"

var week6_txt = "It's always a wild ride in the PFL.  There were no close games with Monday nights game not providing any " +
                "suspense in the outcomes, but that doesn't mean it wasn't a wild and wooly weekend in the PFL! One week you're " +
                "scoring over 200 points for the leagues season high, the next week you're going down the crapper, as " +
                "evidenced by both the <b>Anus</b> and <b>Preds</b> getting flushed! The <b>Tide's</b> fortunes also rolled " +
                "way out as they scored over 100 points less than they did the week before, setting the new league low for the " +
                "year <i>(the Phat thank you for that by the way)</i>. That of course means that <b>Seamen</b>, <b>Bellies</b>, " +
                "and <b>Coco's</b> all are winner winner chicken dinners, leaving the Browns, who didn't even bother fielding " +
                "a defense, once again atop the leqgue as the " +
                "sole leaders of the PFL pack (one of those magical luck is on your side seasons I guess).<br><br>" +
                "The <b>Pork</b> too were chopped down as they scored close to 50 points below their seasons average for by far " +
                "their lowest score of the year, inexplicably losing to their <b>Phat</b> opponent who said, I'll take that and " +
                "pile on top of it, as they in turn have their highest score of the year, actually looking like a real fantasy " +
                "football team for a week leading to all sorts of soon to be dashed false hope by their owner. Lastly, and " +
                "maybe even leastly, two 1-4 teams matched up for our final pairing, where the <b>Fullers</b> maybe took it " +
                "a little bit too <i><b>Eazy</b></i> on the <b>Topes</b>, allowing the Ice to melt the permafrost a little on " +
                "their way to an easy victory and their best showing in many a week!.<br><br>On the <i>'I know it's way to " +
                "early'</i> news front, it sure looks like the <i>Good</i> division, where every team is at .500 or above, is " +
                "going to be the source of most of the playoff teams, while the <i>Bad/Ugly</i> gang, where everyone is at .500 " +
                "or below (mostly below), and having a 2-4 record means only being a game out of first, they're just hoping " +
                "the league doesn't change rules about the division winners getting a playoff spot as it will probably be the " +
                "only way one of these sad sacks sniff the playoffs!<br><br>";

var week7_txt = "Remember when we thought 84 points was a horrendous unmatchable low score? <i>(Editors Note: That was all of two " +
                "weeks ago)</i>. Well, in the last two weeks thats been <i>improved?</i> on three times, including this weeks horrific " +
                "Dollar Tree discounted coconuts of a matchup of 63 to 53! Wow! Can you believe one of them got a win for that? Seems " +
                "unjust! Amazingly it wasn't the seemingly charmed <b>Choco Umbers</b> on the up side this week, as they got " +
                "<b>Bellyslapped</b> on their way to (according to PFLs snap research team) a 10 year record low in the PFL...  course both " +
                "teams had to not bother filling in their roster to do it but hey, 53 points is 53 " +
                "points and 63 is more than that!<br><br>But enough of that, how about some teams that actually earned a victory. " +
                "The <b>Pork Cutlets</b> snorted their way to the high score for the week, much to the <b>Topes</b> misery, who " +
                "actually had the fourth highest score of the week, despite Penny's two cents worth of points, but still lost. Gotta " +
                "hate life at that point. The <b>Ators</b> popped open a Big Gulp sized <b>Pepsi</b> for a oh so refreshing win, " +
                "which combined with Coco's, can't say it often enough, sad sad perfomance, left the Preds, Browns and Tens " +
                "perched on top of the Div 1 bowl.<br><br>In a Bye Week Horror matchup, the <b>Bastard</b> cousins proved a bit better " +
                "than the <b>Tides</b> flotsum, beating their projected total by almost 20 points (maybe they should play the scrubs " +
                " more often!), moving up to second in their division (ooh, what heady heights!) though still just seventh in the " +
                "league (which sure says a lot about the Ugly Div boys!). And lastly in the final matchup, the only game that was " +
                "decided Monday night, and therefore, probably the only owners watching the Hawks stink it up again,  the " +
                "<b>Anus</b> popped out a ho hum medium scoring win over the <b>Large Body of Water Adults</b>.<br><br>";

var week8_txt = "<i>Timber!!!!</i> In a massive fall from grace the <b>CocoNOTs</b>, who's 71 pts were actually a double digit improvement over " +
                "last weeks effort, go from first in the league to the bottom of their division (also known as a four team tie for second) " +
                "after being preyed upon by the <b>Ators</b>! <i>Editors Note: Never mind they'd still be sharing the top spot in " +
                "that other, who's name shall not be mentioned, division.</i><br><br>The king is dead, long live the king! The <b>Orifices</b>, " +
                "who now sit on top of the PFL throne with the best record in the league, as a result of discounting any hope the " +
                "<b>Bellies</b> had of winning (59 pts! Oh the shame, and coming on top of last weeks 63 pt effort). The Tens will " +
                "still need to be tenacious though as they're only one game up on all the other teams in the division (though they do have " +
                "a bye week against the Phat this coming weekend to rest on their laurels).<br><br>Speaking of the <b>Phlat</b>, they " +
                "continue to have not won a game this year when their opponent has scored more than 116 points (so yeah, you have to suck " +
                "badly to lose to the Turds!), this time gifting a two game lead in <i>THAT other</i> division to the <b>Chopsters</b>, " +
                "who just strolled out saying thank you, thank you very much..." +
                "The <b>Tide</b> continues to roll out (getting so low at this point you're kinda expecting a tsunami at some " +
                "time) as the <b>C-men</b> sailed that outpour to a close win, but hey a win is a win...<br><br>And in the final " +
                "matchup, where a win is just something one of them had to get, the <b>Zamboni Bunch</b> (who now have more name changes " +
                "than wins) smoothed the <b>Ice</b> to take the closest matchup of the week, creating a three way tie for pathetic (oops, meant " +
                "third) in the Abysmal division (Damnit, I mentioned their name! Doom, doom I say!), all three of which are just left " +
                "looking up and wondering: <i>How the hell are we behind the Phat?</i><br><br>";

var week9_txt = "In a rare change this year, there were still two contests to decide going into Monday night. The <b>Chop Suey</b> seemed like " +
                "sure bets to score enough to overcome the <b>Bellyachers</b>, and the <b>Illigetimate Children</b> seemed like sure bets to " +
                "NOT score enough points to overtake the <b>Constipators</b>. And,... wait for it, wait for it... yeah, thats what happened.  " +
                "Yawn... who writes these scripts anyway?<br><br>Two other teams also had players in Monday night's games but since they'd " +
                "already won they probably didn't bother watching the (lack of) drama on the tube, the <b>Ice Capades</b> skated around " +
                "the the <b>Coco Puffs</b> and the <b>Swabbies</b> sea chanted their way to more points (<i>Potentional Poll Question: " +
                "Can we really call beating your opponent, despite having the second lowest score of the week, and just barely 100 pts, " +
                "a win? Perhaps it should be called a 'what'</i>) than the Jabberwockies (<i>Editors Note: Apparently a bunch is not " +
                "enough to secure wins in this league, perhaps one needs a whole horde of JibberJabbers to succeed?</i>).<br><br>" +
                "Finally, in the only matchup without any players in tonights pigskin classic, the <b>Laundry Detergent</b> rolled over " +
                "the <b>Predestrians</b> (<i>Editors Note: This is normally at least frowned on and in some states possibly even illegal</i>) " +
                "to win for the first time since Fidget Spinners were cool. Congrats.<br><br>"; 

var week10_txt = "Ya know, there's usually a week somewhere mid season where its just kinda unsurprising.  The teams you know are gonna " +
                 "make the playoffs win, the teams you know are gonna miss the playoffs lose, and there's a smallish group in the middle " +
                 "just kinda muddling around hoping they'll get that last playoff spot. Well, that was this week...<br><br>The only surprising " +
                 "result was the <b>Topes</b> win, by definition - more points than their opponent, over the vacillating <b>Anus</b>, which " +
                 "was really more about the Anus than the Topes when you get down to it...  The <b>Belli's</b> couldn't be bothered to replace " +
                 "an out DeAndre Hopkins, but that didn't matter when the <b>Bastards</b> actually playing Gieski scored exactly as many points " +
                 "as a dead guy, leading to discounted phlattening of their opponent. But the Bells were happy for the win given their recent " +
                 "history. I guess that's what playing the Fat will do for you!<br><br>In the other three matchups, ehh... The <b>WaterBoys</b> "+
                 "continued their quiet but sucessful season, the <b>Porkers</b> moved into overall first place and the the <b>Coconuts</b> " +
                 "righted the boat for a week. The <b>Tide</b>, <b>Pre-Daters</b>, and <b>Jaccuzzis</b>, well, not so much.<br><br>";

var week11_txt = "This week we saw the top six teams in the league play each other, engaging in a battle royal for the PFL crown. And " +
                 "after 11 weeks we now have a new PFL leader! All hail the <b>Thlassic</b> <i>(look it up)</i> <b>Chaps</b> who took " +
                 "out the <b>Clearance Beliicose's</b> to rise to sole possesion of first place! The <b>Cokes</b> and <b>Pre-Daters</b> (with " +
                 "the high score of the week!) had important wins to keep themselves in the hunt, with victories over the <b>Chop Fooeys</b> " +
                 "and <b>Tenative Butts</b> respectively, both who could afford a loss and still be right in the running. That'll make the " +
                 "last couple of weeks more interesting for all of them as all six are within two games of each other!<br><br>" +
                 "Course the top six facing off also meant the bottom four teams all played each other, with the expected level of " +
                 "underperforming and who cares... especially seeing as how the four are just fighting over who'll get to finish 7th with " +
                 "three of the four now all having the same 4-7 records!  Oh boy! The excitement of it all!  The "  +
                 "<b>Slush Dopes</b> with 98.76% percent of their lineup out <i>(OK, slight exaggeration)</i> managed to get washed over by " +
                 "the <b>Red Tide</b> while the <b>Obese Illegitimates</b> sorta avenged their week 1 loss (the first of many, losses that "+
                 "is!), though really what kind of revenge is a 4-7 team over a 2-9 team really getting anyway, by filing the " + 
                 "<b>Jawbone Bunch</b> down to bone spurs, and officially eliminating them from the playoffs, though in reality they were " +
                 "probably unofficially eliminated several weeks ago...<br><br>" +
                 "Editors Note: The average margin of victory was over 40 pts this week, route city, the closest game decided by 28 points, " +
                 "and pretty much every matchup a done deal by mid Sunday.  Not much drama for Sunday night or Monday!<br><br>";

var week12_txt = "Unbelievably, even after scoring the lowest week total and losing this week to the <b>Anal Retentives</b> to go to 4-8 " +
                 "the <b>Flat Boys</b> still have a really really long shot at the playoffs thanks to the <b>Spare Ribs</b> losing to " +
                 "the <b>Slushies</b>, allowing the Topes to close to within one game of the Chops. But, if the Bastards win out and " +
                 "the Pork lose out the Bastards would win the division as they would have the best division record (including against " +
                 "the Topes)... What excitement, what joy!!!! And then reality sets in, you look at the remaining schedule, and you see " +
                 "there's no way Porkys gonna lay down three more times in a row...  what excitement? what joy? Mark the Flat down as " +
                 "toast!<br><br>The other two bottom dwellers in the Sucky Division battled it out, playing the first to reach 100 wins, "+
                 "well, the <b>Jabronis</b> managed to just hit triple digits and the <b>Tide</b> did not (but oh so close!), so..., that " +
                 "result means the Tide get to join the Jabronis in the currently exclusive 'wait till next year club'. <i>(Editors " +
                 "Note: Technically the Tide probably aren't eliminated, but their odds of making the playoffs make the Fats playoff " +
                 "chances seem like a lead pipe cinch, so we're counting them as done for! Hah! The Fat will join them next week " +
                 "anyway)</i><br><br>Meanwhile in the division where they're actually fielding real fantasy <i>(oxymoron?)</i> teams, " +
                 "the <b>SeaKids</b> won again, defeating the <b>SoSo Tans</b> to stay tenaciously on top of the Anus (despite the " +
                 "Ten's auto-win against the Phat, not to mention they've got another Fat sponsored auto-win coming up in Week 15 that'll " +
                 "really solidify the Anal's post-season chances!). And in the final matchup, the <b>Tater Tots</b> flogged the " +
                 "<b>Disco Bellys</b> to position themselves in the top spot for the probable last playoff spot! But all five teams are " +
                 "still alive and none have clinched yet so we'll have to wait till next week to see if the murky waters clear up a bit...";

var week13_txt = "Well, the futile hopes of the <b>Flat</b> and the <b>Slush</b> winning their division title were sadly crushed this week " +
                 "even though they both won their matchups against the <b>Ebb Tide</b> and the <b>Closeouts</b> respectively, since the " +
                 "<b>Baby Backs</b> and the <b>Jabberwockies</b> didn't read the PFL script and allowed the porksters to easily win " +
                 "and close out the division. Say bye to the Bastards... bye bye!! The Ice still have miniscule playoff hopes but it " +
                 "involves the Cocos going 0-2, <b>AND</b> either the Anus going 0-2 or the Predators losing one, <b>AND</b> a big total " +
                 "points deficit to make up... Yeah right...<br><br>The Tide and Bellys certainly weren't happy with any of these the " +
                 "outcomes either as they were both eliminated from the playoffs too...  Well, technically Bellys may still be alive, or " +
                 "at least not dead, but this humble author sees no realistic scenario in which they can make it, would have to overcome some " +
                 "serious total points deficits against multiple teams in two weeks even if the wins/losses fell their way. Ain't saying " +
                 "it can't happen but I'm just saying...<br><br>On the other end of the spectrum <b>Swabbies</b> continued improving their " +
                 "grasp on the #1 seed by, ho hum, winning again, making <b>Prey</b> out of their opponents.  And in the last matchup of " +
                 "the week, the <b>Black Coffees</b> overcame a <b>Tight Sphincter</b> <i>(guess coco is a laxitive?)</i>, leaving both " +
                 "teams tied at the top of the wildcard race with two weeks to go, with the Preds one back...<br><br>As a final note: " +
                 "what the heck were the Patriots doing Monday night? Trying to prove Bill B is cleverer than the rest of the leqgue? " +
                 "Running on 3 and 17, 3rd and 12, etc? Three total passes? Guess it worked though, so maybe he is smarter than all the " +
                 "rest of us? Good thing the Bastards didn't need any points from Jakobi Myers! Hope no one was starting Mac Jones...";

var week14_txt = "";

var week15_txt = "";


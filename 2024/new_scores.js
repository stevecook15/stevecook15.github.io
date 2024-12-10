"use strict";

//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var iceScores = [ 103.25, 149.85, 173.30, 131.50, 108.00, 159.95, 139.10, 165.20, 123.70, 109.25, 134.85, 109.95, 134.65, 118.95 ];  // Iceotopes (John)
var belScores = [ 132.60, 131.30, 129.65, 108.90, 137.70, 161.10, 114.25, 124.60, 194.55, 150.10, 126.00, 141.40, 169.65, 130.25 ];  // Thats What Shaheed Said (Harrision) Discount Belicheck
var porScores = [ 160.70, 121.90, 108.35, 154.85, 150.45, 104.85, 122.85, 125.30, 137.30, 119.45, 134.25, 110.20,  98.65, 149.85 ];  // Porkchops (Noah)
var preScores = [ 113.10, 126.60, 102.95, 102.00,  97.30,  97.95,  95.20, 133.55, 102.65, 103.00, 150.35, 143.25, 153.20, 146.45 ];  // Arrested Development Predators (Joe) 
var broScores = [ 105.30, 117.90, 143.05, 144.15, 130.85, 128.85, 149.10, 120.20, 129.10, 110.90, 113.65,  88.80, 110.95, 141.05 ];  // The Brotha's (Reek/Ross) Comebacks

var cocScores = [ 118.40,  94.15, 102.35,  81.00, 134.35, 134.55, 124.40, 113.45, 127.45, 118.30, 117.70, 123.15,  95.80, 168.30 ];  // Coco Browns (Andy)
var fatScores = [ 117.30, 154.15, 146.25, 130.00, 173.60, 147.50, 153.60, 124.50, 140.10, 158.50, 156.35,  97.35, 162.30, 166.10 ];  // Phat Bastards (Steve C)
var nixScores = [  86.85, 124.45, 122.75, 122.00,  95.05,  91.30, 109.90, 138.10, 141.45, 118.10, 158.95, 118.95, 102.50,  79.20 ];  // Nix UR Hopes (Steve)
var aoaScores = [ 112.25,  87.55, 142.25, 101.65, 119.80, 123.30,  99.45, 119.65,  85.85, 110.25, 120.60, 130.85, 114.75, 137.95 ];  // The Age of APukalypse (Matt)
var wbdScores = [ 133.05, 111.95,  88.70, 126.30, 166.80, 128.15, 127.95, 150.95, 115.70, 110.90, 111.25, 120.95, 139.75, 155.10 ];  // Weapons of Bass Destruction (Daniel)


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs

var icePlayoffs = 1;  // Iceotopes (John)
var belPlayoffs = 1;  // Discount Belicheck (Harrision) TWSS
var porPlayoffs = 2;  // Porkchops (Noah)
var prePlayoffs = 0;  // Predators (Joe) Arrested Development
var broPlayoffs = 1;  // The Brotha's (Reek/Ross)

var cocPlayoffs = 1;  // Coco Browns (Andy)
var fatPlayoffs = 2;  // Phat Bastards (Steve)
var nixPlayoffs = 1;  // Nix UR Hopes (Steve)
var aoaPlayoffs = 0;  // Age Of APukalypse  (Matt)
var wbdPlayoffs = 1;  // Weapons of Bass Destruction (Daniel)


// Weekly blah blah blah text...

var week0_txt = "Welcome to the 2024 Phantom League.";

var week1_txt = "Well, week one is in the books and we've got five happy teams and five unhappy teams. Happiest of all " +
                "is the Porkys who set the high water mark, scoring close to 30 more points than everyone else.  The " +
                "unhappiest team is either the Porks opponent (Weapons of Tadpole Destruction) who had the second " +
                "highest score of the week and still lost, or the Nix No Hopes, where apparently Bo Nix sucks in both " +
                "real and fantasy football, leading to being the only team to not break 100 pts, losing to the very " +
                "beatable effort put up by the Flat Bastards.<br>";

var week2_txt = "Ya know, some weeks the matchups/results just don't create compelling witty repartee, that or the " +
                "humble narrator has writers block. The Topes put up the second highest score of the week, which unlike "+
                "last weeks result for the WBDs, led to a Ice win freezing the Puke solid. The Phat had the high score " +
                "for the week, outscoring the Brownies at almost every position battle to easily take home a win. " +
                "Nix apparently does have hope (when he plays Mahommes and not Nix at least), beating the WBDs. "+
                "The Porks stayed undefeated with a close win over the Bro's. And in the last matchup, She Sheds " +
                "three players in Monday nights game scored just enough points to overtake the Arrested with 3 " +
                "minutes left in the game, keeping both owners on their toes till the very end.<br>";

var week3_txt = "Well the Ice wasn't messing around this week, putting the undefeated Porkchops into the freezer " +
                "while roaring to the high score for the year, which also leads to the Ice to now owning the league " +
                "high average.  Good week for the Topes all in all. Another team having a pretty good week was the " +
                "Phat, being the bastards that they are, using the weeks second highest score to take out the " +
                "undefeated SheSaid, leaving the Phat as the last remaining undefeated team.<br><br>" +
                "On the other end of the spectrum two of the winless teams also had a good week, with the Bro's " +
                "stomping the ArrDevs, and in a battle where one of them was going to win, the Pukes left no " +
                "doubts, destroying the Weaponless Bath Construction, who now are the only winless team. Good " +
                "things there's a lot of season to go still.<br><br>And oh yeah, the Nix beat the Coco. Ho hum.<br>";


var week4_txt = "And then there were none. The last winless team finally pulled out some fish weapons and " +
                "arrested the development of their opponent. Symmetrically, the last undefeated team fell " +
                "Phlat in their attempt to melt the Topiarys (but oh so close going down to the last " +
                "possession of MNF!). Now just two games separates first from last.`<br><br>For the second " +
                "time in four weeks the Chops porked their way to the high score of the week (we won't " +
                "talk about the other two weeks) prematurely aging the Apukes. The UR said, uh uh to the " +
                "Sheheed Shells, nixing the their hopes.<br><br>And in the final matchup the Male Siblings " +
                "of the same mother stomped the brown out of the Cocos, now just the White Chocos...<br>"; 

var week5_txt = "In the highest scoring matchup of the week it sure looked like the Pork was gonna chop "+
                "some fat off the Bastards, with D London scoring 33, Min Def 17 and Joe Flacco (Joe " +
                "Flacco?????) 32 in the early games. Little did the Chops know that the Phat had " +
                "barely begun to sizzle, getting 43 out of Chase, matching Porks defense with 17 and " +
                "23 out of their Tight End. And poof, before you knew it the Bastards had the high score " +
                "for the year (much to Topes chagrin)!<br><br>In an unexpected high scoring affair the " +
                "Popguns of Bass Destitution stormed out to the second highest score of the week, beating " +
                "their average by over 50 pts, which of course was way to much for the BroBros to deal " +
                "with.<br><br>And lets have a short moment of sympathy might be due to the Cokes as they " +
                "score their highest total of the season only to go down in inglorious defeat Monday night " +
                "to What She Said by the smallest of margins. Ok, thats long enough.<br><br>Seems like " +
                "Developers planned to try to beat Apu's Lisp by arresting their own scoring in the " +
                "double digits, which needless to say didn't work.<br><br>And in the final, oh yeah, " +
                "there are 10 teams, matchup the (previously) league leading SlushTops posted a low score " +
                "leaving themselves open to upset, but not to worry, the Nixxers had no hope of that as " +
                "they posted the lowest score of the week.<br><br>";

var week6_txt = "Well that certainly what SheShed was talking about! In a battle for first place in Division 1 " +
                "Thats What and Iceolinear put on a scoring show with the Topes walking away the always awful feeling " +
                "of losing (by the smallest margin this year) despite having the leagues second highest score of the " +
                "week. Thats gotta hurt!<br><br>" +
                "The Bastards, still just 1.51 points away from an undefeated record, continued their Phat ways, never " +
                "trailing in the match and routinely taking out the the APukes.<br><br>The Brownies, " +
                "on a four game losing streak (along with the Arr Devs), came through with a big (???) effort " +
                "to take out the Bass Masters and earn their second win of the season, roaring back into playoff " +
                "contention.<br><br>On the other end of the spectrum, the aforementioned Devels arrested any chance of " +
                "winning by scoring under 100 points for the second week in a row for their fifth consecutive " +
                "loss, allowing the Porksters to chop their way to a cheap win, joining Shaheed and Ice atop " +
                "their division.<br><br>Speaking of scoring less than 100 points in a row - the Urgh Hopes topped (or " +
                "bottomed) the Arrestees effort with an even lower score resulting in the Brotha's by the Same Mother " +
                "collecting the win over the Nixs!<br><br>";

var week7_txt = "Busy week for your humble web page manager so quick notes:<br><br>With a three way tie for first at " +
                "the start the week in Division One there was bound to be some movements in the ranks. Well, the Porks " +
                "chopped the She-Sheds and the Topes got bothered by the Brothas, leading to the Chops " +
                "sitting atop the heap which of course led to a three way tie for second between the rest of the " +
                "that bunch (more standings movement next week!).<br><br>The last (literally) remaining team in " +
                "the  division, still showing no signs of developments got Coco Brown'd leavin them in dead last " +
                "in the league (although only one game out of a playoff spot still).<br><br>" +
                "In division two matchups, the Nixes showed that yes, hope is better than a plan, taking out the " +
                "Aging Apothecarys, and the Bastards stayed Phat (even with D Smiths 1 catch for minus two yards stat " +
                "line) with the high score for the week leaving the Bass Destructors weaponless despite their QBs Monday " +
                "night heroic 40 point effort (sigh, if only Mike Evans hadn't got hurt!).<br><br>"

var week8_txt = "It's the mid point of the season and much jockeying for playoff positions is afoot. The Nix UR Hopes " +
                "took out the Porkchops to even both of their records at 5-3, the Wep Bass Des beat the Coconauts to " +
                "even both of their records at 3-5, and the She Sheds went to 5-3 by beating the Brothas who fall to " +
                "4-4. Whew, lots of 3's and 5's there!<br><br>Wait, there's more: the Iceotopes froze the Arrested's " +
                "development to move to, you guessed it - 5-3.   But no, the Arr Devs didn't fit in, moving to 1-7. " +
                "In the last matchup, the Age of Apuk had a chance to join the 3-5 party but sadly fell just short to " +
                "the Bastards who just aren't having any of this middle of the pack 5-3, 3-5 stuff...<br><br>"


var week9_txt = "Wow! Shaheed said a lot this week, setting the high score for the year and maybe setting the largest " +
                "margin of victory in league history over the Aged Apukalots. Nix There Hopes continued the Devels " +
                "ongoing incarceration in the basement and the Porkettes tanned the Cocos. <br><br>In the closest " +               
                "match of the week the topes iced the Fish Destructors, and in the oh yeah, the forgone conclusion " +
                "match the BassTurds won yet again, clinching a playoff spot, despite Baker Mayfields and Cade " +
                "Ottons (Cade Otton??? Who? Career night?) best efforts.<br><br>";

var week10_txt = "We started the week with four 6-3 teams jockeying for the probable second seed. With one head to " +
                 "matchup that number was sure to go down to at most three, with the Pork Bellys eeking out a " +
                 "narrow win over Lost R Hopes. The other two 6-3 teams both matched up against 3-6 teams (don't " +
                 "you love symmetry!) so it looked good for both going in, but alas only one team managed to earn " +
                 "victory - the SheSheds easily kicked Weapon Preservations (B)ass. Sadly the Iceotoners melted " +
                 "beneath the Hot Cocos. And that left just two chasing the Phat - but there's still many (ok, " +
                 "several, well, more like a few) weeks to go.<br><br>" +
                 "In other matches the Bro Bros added a few more gray hairs to the Aged Apocalypse in really close " +
                 "victory, and the Phat did what an 8-1 team should do to a 1-8 team (despite Yahoo projecting a " +
                 "win for the Lack of Development).<br><br>";

var week11_txt = "Apparently the <i>Development</i> was on on parole this week and took the opportunity to mug the 2nd " +
                 "place <i>Thats What</i> to keep their playoff hopes alive. But the <i>Age of Puking</i> said wait a minute " +
                 "I need a win too, blanching the <i>Browns</i> to keep a game ahead of the Devs and to within a game of " +
                 "a playoff spot.<br><br>Sadly, the <i>Weaponless Bass Constructors</i> were not able to follow the lead " +
                 "of the fellow bottom feeders and lost to the <i>We Still Have Hopes</i> who still are holding out " +
                 "hopes of winning their division.  That of course seems unlikey as the <i>Phat</i> thawed out the " +
                 "<i>Icicles</i>, avenging their only loss of the season. Bastards! All sorts of miracles would be required for " +
                 "the Bass to overtake the Turds, but hope springs eternal. Well at least till its nixxed out.<br><br>And " + 
                 "in the last contest the <i>Brotha's</i> went vegetarian and said no to any (b)eating <i>Pork Chops</i>, " +
                 "moving the Chops to the top of their division.<br><br>";

var week12_txt = "Well it's starting to get a bit more interesting, with two weeks to go both the top of the standings, " +
                 "with 3 teams still vying for the regular season crown, and the bottom with three teams duking it out " +
                 "for the last two spots! Even the 6th and 7th place teams could finish at the bottom or near the top.<br>" +
                 "<br>Let's start off with the elephant in the room, the Bass Weapons destroying the Bass Turds! Course " +
                 "anybody and their brother (well, maybe not the Brothas) would have taken down the Phlat this week. But " +
                 "still, nicely done! That means with the Porkchops oh so barely (I mean like last play of game to win " +
                 "by a quarter of a point) beating the Iceotopes, the Chops move within a game of the league lead.<br><br>" +
                 "The SheSheds also notched up a win, beating the Apukalyptics, allowing them to also keep hopes of " +
                 "PFL glory alive. Sadly the Coco Buddies nixed the hopes of the Ur Nixers slim chance of winning their " +
                 "division, but solidified the Browns chances of making the playoffs. And the Developers continued their " +
                 "climb into playoff contention at the expense of Da Bro's. Don't sleep on the Arr Devs yet - they " +
                 "pulled off this same act last year late in the season to surprise us all!<br><br>";

var week13_txt = "Looks like the top of the league is pretty settled but the bottom of the league is getting very exciting! " +
                 "The two 3-9 teams both won but couldn't gain ground on the 4-8 team because they also won, but " +
                 "the three of them all took out teams above them including the two 5-7 teams to create a five team race for " +
                 "the last three spots with one week to go (and no team has been eliminated! Amazing!). It's possibly going " +
                 "come down to total season points for the last spots!.<br><br>In the less exciting spots the Pork were " +
                 "chopless this week, ending their hopes for best regular season record (and #1 seed) as they lost and " +
                 "Phat were riled about about last week and crushed their opponent to lock up the best record. Shaheed Says " +
                 "What won, posting the high score for the week (and moved in their division lead and #2 seed while they " +
                 "were a it) improving their chances for the season highest point total award as they're now less than " +
                 "40 points down to the Bastards at this point - and bigger margins have been overcome before.<br><br>";

var week14_txt = "Quite the battle this week for the Division 1 title as the 2 brothers were tied for 1st place, and as " +
                 "luck would have it squared off against each other to see who would take their Division's crown.  And in " + 
                 "a tough exciting matchup, the Pork chopped Whatever Shaheed Said to claim the Division 1 crown! No " +
                 "excitement at all in Division 2 as the Basturds locked up that lame Divisions title quite some time " +
                 "ago.  So congrats to Steve and Noah as they are the Division winners, and the #1 and #2 seeds " + 
                 "respectively heading into the playoffs.<br><br>Congrats also to Steve as the Most Points For winner (along " +
                 "with least points against, Grrrr), and Harrison on the High Score for the Season winner.  And in a " +
                 "tight battle between good friends Coco and Dan, sorta congrats to Dan who barely won Most Points " +
                 "Against (Unluckiest), edging out Coco by a slim 4pts. Special unlucky shoutout to the Topes who had two " +
                 "of the top four highest losing scores and two of the top three smallest margins of defeat.<br><br>And " +
                 "finally, at this point we must bid " +
                 "farewell to our champions from the last 2 years, Joe, last years champ, and Matt, champ from 2 years " +
                 "ago, as they failed to make the playoffs.  So a strange coincidence for sure, and maybe a bad omen for " +
                 "this years winner?  And funny that the 5th thru 8th seeds all ended up with identical 6-8 records, so " +
                 "their seedings were based on total points.<br><br><br>1st round Playoff Matchups:<br>" +
                 "Phat Bastards(1) vs Coco Browns(8)<br>" +
                 "Porkchops(2) vs The Comeback Miracle(7)<br>" +
                 "Thats What Shaheed Said(3) vs Weapons of Bass Destruction(6)<br>" +
                 "Nix UR Hopes(4) vs Isotopes(5)<br><br>";

var week15_txt = "";

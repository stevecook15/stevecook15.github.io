//TODO: Add a more plots
//TODO: Sort division record by score, div record and total pts
//TODO: fix bar chart label below X axis

// Create an array of teamNames  (see scores.js)
// Create map with team and array each weeks opponent:  key fat, array ice, roll, etc...
// Create map with team and each weeks score (name based on the same name as in the map (eg roll))

var fatScores = [ 170.25, 160.40, 119.25, 94.10, 155.05, 144.15, 120.65, 132.55 ];
var porScores = [ 148.60, 141.80, 177.10, 96.30, 142.15, 152.45, 164.90, 99.05 ];
var tyfScores = [ 119.60, 177.10, 153.50, 140.75, 145.50, 136.40, 131.50,88.40 ];
var cocScores = [ 101.65, 146.60, 144.95, 181.25, 148.20, 107.25, 95.90, 135.00 ];
var fumScores = [ 107.90, 139.30, 110.00, 167.50, 118.50, 93.65, 117.85, 110.70 ];
  //Fu Minshews, WA Fantasy Team

var iceScores = [ 118.60, 136.35, 108.00, 151.75, 79.90, 108.65, 127.00, 89.40 ];
var preScores = [ 139.25, 130.90, 162.05, 135.00, 111.85, 90.80, 165.30, 122.95 ];
var belScores = [ 159.45, 105.30, 107.05, 146.30, 114.55, 143.65, 139.10, 119.10 ];
var rolScores = [ 139.90, 125.00, 168.05, 156.30, 152.75, 84.90, 111.10, 152.95 ];
var tenScores = [ 139.80, 133.25, 154.75, 142.90, 136.55, 134.60, 136.15, 134.90 ];


// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs
var playoffs = [
        0,  //fatbastards
        0,  //porkchops
        0,  //tenydfight (mike)
        0,  //cocobrown
        0,  //fu minshus

        0,  //iceotopes
        0,  //predators
        0,  //belicheck
        0,  //rolltide
        0   //tenanus
     ];


var week0_txt = "Welcome to the 2020 Phantom League. Which is sure to be different this year with covid! " +
                "And welcome to the newby Andy. Good luck! But not too much luck! Newbies should know their place.<br><br>" +
                "While I'm no Yahoo for projecting the draft, I did project the weekly average for each teams best lineup. " +
                "Eight of the ten teams are basically in a dead heat, with one outlier on both ends:<br><br>" +
                "<font style='myfont'>" +
                "Phat Bastards &nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;118.875<br>" +
                "Porkchops &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;119.1875<br>" +
                "Ten Yard Fight &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;120.375<br>" +
                "Coco Browns&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;121.3125<br>" +
                "The Fu Minshews &nbsp;118.4375<br><br>" +
                "Iceotopes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;114.125<br>" +
                "Predators &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;121.875<br>" +
                "Discount Belicheck &nbsp;119.3125<br>" +
                "Roll Tide &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;119.5625<br>" +
                "Tenacious Anus &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;127.125<br></font>";

var week1_txt = "D+ my derriere!!!! Take that Yahoo!  So, despite having the worst draft rating of the league, in a A- vs D+ matchup, " +
                "the Phat put up the " +
                "high score for the week, and match Yahoos projected win total for the year.  Guess it's 0-13 from here out.<br><br>" +
                "On the better lucky than good end of the spectrum the Ice eke out a win despite the third lowest score of the week - " +
                "guess timing (not location) is everything. Still looks like 1-0 on the scoreboard though.<br><br>" +
                "In the nail-biter section of the league we got the Predatory Anuses battling it out and being tenacious does the " +
                "trick...  the Preds needing a 5 yd Big Ben yd garbage time gain in the end, not a 2 yd loss. Oh so close. <br><br>" +
                "Oh, yeah, in other news... the Ten Yarders didn't put up much of a fight versus the other white meat, " +
                "and the Tide got rolled by last years champ like some discount speed bump. Tide musta been going out.";

var week2_txt = "In another demonstration of sometimes it's just bad timing, the Phat would be 17-1 against the whole league after two " +
                "weeks yet are only 1-1 in the real world. Well, at least none of their players got seriously hurt. What a weekend for that! In " +
                "other news Mikes renaming his team to 20 Yard Stroll after posting the league high score for the year so far.<br><br>" + 
                "On the opposite ends of the luck spectrum are the Ice, 2-0 despite averaging just 127 points a week and the Predators are " +
                "0-2 despite averaging 135 pts a week(opp avg = 143).  While we're on the subject, the Porks get a Brees to Kamara completion " +
                "on the final meaningless play of the game to overtake the Few Minshews.<br><br>" +
                "Finally, the Bellies discount lineup posted the low score of the year, allowing the Anus to luck their way into being one " +
                "of the only three remaining undefeated teams despite having the third lowest score of the week, in a deju vu of the Ices win " +
                "from week 1! If you're gonna suck try to be the third suckiest apparently - it's 2-0 so far.";

var week3_txt = "Higher scoring this week, with five teams over 150 pts! Sadly, not all five of them won. :-( " +
                "Well, just one of them actually as the Anus got to feel that oh so special anguish when they were " +
                "rolled over by the Tide.  Three weeks in we're down to one un-defeated team and one is-defeated team, " +
                "but the season is early!<br><br>Seems like maybe the Yahoo was right in saying the Phat lineup was " +
                "pretty thin and would go 1-13 - they're on their way after the winds blew away all the smoke and " +
                "mirrors and they are who we thought they were (obscure reference for the younger crowd). Guess it " +
                "didn't help the Chops porked their way to a new season league high and took over the points lead " +
                "<br><br>Then again, looking at the trend lines, the Belly's seem to be doing a Mini-Me impression of " +
                "the Phat, so maybe theres hope one of them can get a second win before their trends hit zero or they " +
                "play each other!"

var week4_txt = "And in breaking news, the Phat were eliminated from the playoffs.  Ok, ok, technically they're not eliminated but " +
                "they're so stinky Yahoo invoked the mercy rule, removing any pressure on them to exceed Yahoos 1-13 prediction. But " +
                "what about us the Pred-Fu-Belly alliance cries? Have you seen the scoring trend plot, the Flat respond? By week 7,  " +
                "Flat will be scoring 0 pts - can they go negative in week 8?<br><br>In the " +
                "feated world the undef Chops went down (the Flat you can understand but Pork scoring less than 100? huh?) " +
                "and the def Minshews got off the floor with the 2nd highest score of the week, leaving the standings all looking " +
                "very symmetrical! But keep an eye on Coco Puffs - they're starting to discount all their opponents. " +
                "<br><br>Last question: how in the name of hades is Intensive Care 3-1?  They been iceing their opponents?";

var week5_txt = "The good news for Intensive Don't Care is that there have been five lower scores over the last ten " +
                "years, but those probably occured before the invention of the forward pass. As expected, the ice " +
                "melted underneath them but winters coming so they've still got hope. <br><br>" +
                "The Pork continues to be tasty as they're now the only one loss team left (despite four other " +
                "teams with more total points - life is good). The Fight, Coco's and Tide certainly are waiting " +
                "for the cream rise to the top. Meanwhile in the shallow end of the fantasy pool, half the teams " +
                "(ie 2) poked their heads up and pulled out a win. Course, given that all four 1-3 teams were " +
                "facing each other, we can understand how that happened!<br><br>" +
                "Amazingly the Phat were the other team that moved up from the bottom, they're now 2-0 when " +
                "having the high score for the week and 0-3 otherwise. Tough to win consistently that way. " +
                "They've now doubled their predicted win total for the year so pressures off and it's all " +
                "gravy from here on out..."

var week6_txt = "Ah, I love symmetry. One 1 loss team, one 1 win team, two 2 win teams, two 2 loss teams. Four " +
                "all evened up in the middle... Low scoring week as half the teams fail to score 110 pts and " +
                "also the lowest high score for a week of the year. This weeks high score would have only the " + 
                "4th highest score of the week (or worse) any other week this year - the Chops are loving it of " +
                "course, continuing to pile up wins while impressing no one... a charmed team? Wait and see, " +
                "wait and see...<br><br>Don't look now but if the playoffs started today (too early for that?) " +
                "the 3-3 Phat (1-3 two weeks ago, they're butter) would be in! Love that garbage time Drake TD!"

var week7_txt = "In further proof that you shouldn't grab the tail of a carnivore, the Preds treated the Tide " +
                "like three-legged geriatric gazelles in piling their high score of the year and the high score " +
                "for the week.  But the other white meat showed even the Pred how its done, blowing out the Coco " +
                "Puffs by 69 points! Mark them down for a playoff spot today.  Kinda like early voting! Kinda dull " +
                "week though, with no games closer than 12 points.";

var week8_txt = "You know its a charmed year when you can score under a 100 points and still win by double digits! " +
                "The Pork, not needing any breaks, laid an egg and still ended up with a full meal deal, omlet, bacon and " +
                "all. On the less lucky side the Phat, despite the Coco's not even filling their roster, suffer a narrow " +
                "loss when they inexplicably decide to play a TE that doesn't even make it on the field, much less catch " +
                " a pass despite being healthy and having led their team in receptions the previous week.<br><br>" +
                "We're now over halfway through the fantasy and half of us are looking up at 0.500 - but on the cheerier " +
                "side if you're 3-5 you're still only one game out of a playoff spot.  Not sure what that says about " +
                "the league but allows all but one of us to continue to have some misplaced hope!<br><br> " +
                "Has anyone noticed that the Anus have the lowest team high score but also the highest low team score? " +
                "Must be nice to know your team is going to be competitive each week and not score 70 pts. They might be " +
                "team to beat if the Chops ever lose their lucky shamrock.";

var week9_txt = "";

var week10_txt = "";

var week11_txt = "";

var week12_txt = "";

var week13_txt = "";

var week14_txt = "";



var fatOpps = ["coc", "ten", "pre", "ice", "por", "coc", "mik", "coc", "rol", "bel", "ten", "mik", "por", "pre"];
var porOpps = ["mik", "mak", "ice", "coc", "fat", "ten", "rol", "bel", "mik", "pre", "mak", "ice", "fat", "rol"];
var mikOpps = ["por", "coc", "bel", "rol", "mak", "pre", "fat", "pre", "por", "ice", "rol", "fat", "coc", "ten"];
var cocOpps = ["fat", "mik", "ten", "por", "bel", "fat", "ice", "fat", "mak", "rol", "pre", "ten", "mik", "ice"];
var makOpps = ["ice", "por", "rol", "pre", "mik", "ice", "bel", "ten", "coc", "ten", "por", "rol", "ice", "bel"];

var iceOpps = ["mak", "bel", "por", "fat", "pre", "mak", "coc", "rol", "ten", "mik", "bel", "por", "mak", "coc"];
var preOpps = ["ten", "rol", "fat", "mak", "ice", "mik", "ten", "mik", "bel", "por", "coc", "bel", "ten", "fat"];
var belOpps = ["rol", "ice", "mik", "ten", "coc", "rol", "mak", "por", "pre", "fat", "ice", "pre", "rol", "mak"];
var rolOpps = ["bel", "pre", "mak", "mik", "ten", "bel", "por", "ice", "fat", "coc", "mik", "mak", "bel", "por"];
var tenOpps = ["pre", "fat", "coc", "bel", "rol", "por", "pre", "mak", "ice", "mak", "fat", "coc", "pre", "mik"];


class PflTeam {
  scores = [];

  constructor(name, owner, abrv, division, opponents) {
    this.name = name;
    this.owner = owner;
    this.abrv = abrv;
    this.division = division; 
    this.opponents = opponents;
    this.wins = 0;
  }

  addScore(score)
  {
  }

  setScores(scores)
  {
     this.scores = scores;
  }

  getOpponents()
  {
     return this.opponents;
  }

  getScores()
  {
     return this.scores;
  }

  getWins()
  {
     return this.wins;
  }
}

let fatTeam = new PflTeam("Fat Bastards", "Steve", "fat", 1, fatOpps);           fatTeam.setScores(fatScores);
let porTeam = new PflTeam("Porkchops", "Noah", "por", 1, porOpps);               porTeam.setScores(porScores);
let mikTeam = new PflTeam("Team FUBAR", "Michael", "mik", 1, mikOpps);           mikTeam.setScores(mikScores);
let cocTeam = new PflTeam("Coco Browns", "Andy", "coc", 1, cocOpps);             cocTeam.setScores(cocScores);
let makTeam = new PflTeam("Return of the Mack", "Matt", "mak", 1, makOpps);      makTeam.setScores(makScores);

let iceTeam = new PflTeam("Iceotopes", "John", "ice", 2, iceOpps);               iceTeam.setScores(iceScores);
let preTeam = new PflTeam("Predators", "Joe", "pre", 2, preOpps);                preTeam.setScores(preScores);
let belTeam = new PflTeam("Discount Belicheck", "Harrison", "bel", 2, belOpps);  belTeam.setScores(belScores);
let rolTeam = new PflTeam("Roll Tide", "Daniel", "rol", 2, rolOpps);             rolTeam.setScores(rolScores);
let tenTeam = new PflTeam("Tenacious Anus", "Jake", "ten", 2, tenOpps);          tenTeam.setScores(tenScores);

var pflTeams =  [
   fatTeam,
   porTeam,
   mikTeam,
   cocTeam,
   makTeam,

   iceTeam,
   preTeam,
   belTeam,
   rolTeam,
   tenTeam
];


function initTeams()
{
   var numWeeks = getNumWeeks(); //pflTeams[0].scores.length;
   var scores, opps;
   var team, opp;

   for ( var i=0; i < pflTeams.length; i++ )
   {
      team = pflTeams[i];

      opps = team.getOpponents(); // Return opp list abbrvs
      scores = team.getScores();
 
      pflTeams[i].wins = 0;
      pflTeams[i].losses = 0;
      pflTeams[i].divWins = 0;
      pflTeams[i].divLosses = 0;
      pflTeams[i].totPts = 0;
      pflTeams[i].oppPts = 0;

      for ( var week=0; week<numWeeks; week++ )
      {
         opp = getTeamByAbrv(opps[week]);
         //console.log(team.name + " vs " + opp.name + " Pts: " + team.scores[week] + " : " + opp.scores[week]);

         team.totPts += team.scores[week];
         team.oppPts += opp.scores[week];

         if ( team.totPts != 0.00 )
         {
         if ( opp != null )
         {
            if ( team.scores[week] > opp.scores[week] )
            {
                pflTeams[i].wins++;
                if ( team.division == opp.division )
                   pflTeams[i].divWins++;
            }
            else
            {
                pflTeams[i].losses++;
                if ( team.division == opp.division )
                   pflTeams[i].divLosses++;
            }
         }
         }
      }

      //console.log(team.name + " record: " +
      //               pflTeams[i].wins + "W " +  pflTeams[i].losses + "L " +
      //               pflTeams[i].divWins + "W " +  pflTeams[i].divLosses + "L " +
      //               pflTeams[i].totPts);
   }

   //console.log("****************************************************");

   //var sortedTeams = getOrderedTeams();
   //for ( var i=0; i < sortedTeams.length; i++ )
   //{
      //team = sortedTeams[i];
      //console.log(team.name + " record: " +
      //              team.wins + "W " +  team.losses + "L " +
      //              team.divWins + "W " +  team.divLosses + "L " +
      //              team.totPts);
   //}
}

function getNumWeeks()
{
   var teams = getOrderedTeams();
   var num_teams = teams.length;
   var min_weeks = 20;

   for ( var team=0; team<num_teams; team++ )
   {
      if ( teams[team].scores.length < min_weeks )
         min_weeks = teams[team].scores.length;
   }

console.log("Min Weeks: " + min_weeks);
   return min_weeks;
}


function getTeamNames()
{
   var teamNames = [];
   for ( var indx=0; indx<pflTeams.length; indx++ )
   {
      teamNames.push(pflTeams[indx].name);
   }

   return teamNames;
}


function getTeamByAbrv(abrv, week)
{
   for ( var indx=0; indx<pflTeams.length; indx++ )
   {
      if ( pflTeams[indx].abrv == abrv )
         return pflTeams[indx];
   }

   return null;
}


// function sort by div, then by record, return new list

function compareRecords(b, a)
{
   var bwins = b.wins;
   var awins = a.wins;
   var bdivWins = b.divWins;
   var adivWins = a.divWins;
   var bPts = b.totPts;
   var aPts = a.totPts;

   if ( b.division == 1 ) 
   {
      bwins += 200;
      bdivWins += 200;
      bPts += 5000;
   }
   if ( a.division == 1 ) 
   {
      awins += 200;
      adivWins += 200;
      aPts += 5000;
   }

   if ( awins > bwins )
   {
      return 1;
   }
   else if ( bwins > awins )
   {
      return -1;
   }
   else
   {
      if ( adivWins > bdivWins )
      {
         return 1;
      }
      else if ( bdivWins > adivWins )
      {
         return -1;
      }
      else
      {
         if ( aPts > bPts )
         {
            return 1;
         }
         else if ( bPts > aPts )
         {
            return -1;
         }
      }
   }

   return 0;
}

function getOrderedTeams()
{
   return pflTeams.sort(compareRecords);
}

function getWeeklyScores(week)
{
   for ( var i=0; i<pflTeams.length; i++ )
   {
   }

   return null;
}

function getWeeklyMatchUps(week)
{
   var weekList = [];
   var weekScore = [];
   var weekDiv = [];
   var team, opps, opp, divWeek;

   for ( var i=0; i<pflTeams.length; i++ )
   {
      team = pflTeams[i];
      opps = team.getOpponents(); // Return opp list abbrvs
      opp = getTeamByAbrv(opps[week]);

      if ( team.division == opp.division )
         divWeek = "* ";
      else
         divWeek = "";

//console.log("Checking " + team.name + " and " + opp.name);
      if ( AddUnique(weekList, team.name) &&
            AddUnique(weekList, opp.name) )
      {
         weekList.push(team.name);
         weekScore.push(team.scores[week]);
         weekDiv.push(divWeek);

         weekList.push(opp.name);
         weekScore.push(opp.scores[week]);
         weekDiv.push(divWeek);
      }
   }

   return [weekList, weekScore, weekDiv];
}

function AddUnique(weekList, name)
{
   for ( var j=0; j<weekList.length; j++ )
   {
      if ( weekList[j] == name ) // Already in list, ignore
      {
         return false;
      }
   }

   return true;
}

var weekly_dates = [ "Thursday, September 10th",  "Thursday, September 17th", "Thursday, September 24th",
                     "Thursday, October 1st",   "Thursday, October 8th",    "Thursday, October 15th", 
                     "Thursday, October 22nd",  "Thursday, October 29th",   "Thursday, November 5th", 
                     "Thursday, November 12th", "Thursday, November 19th",  "Thursday, November 26rd", 
                     "Thursday, December 3rd",  "Thursday, December 10th" ];

var weekly_text = [
      week1_txt,   week2_txt,   week3_txt,   week4_txt,
      week5_txt,   week6_txt,   week7_txt,   week8_txt,
      week9_txt,   week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt
  ];


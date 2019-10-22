
var iceOpps = ["rol", "bel", "kek", "fat", "pre", "mak", "nub", "rol", "ten", "kru", "bel", "kek", "mak", "nub"];
var makOpps = ["fat", "kek", "rol", "pre", "kru", "ice", "bel", "ten", "nub", "ten", "kek", "rol", "ice", "bel"];
var rolOpps = ["ice", "pre", "mak", "kru", "ten", "bel", "kek", "ice", "fat", "nub", "kru", "mak", "bel", "kek"];
var kekOpps = ["bel", "mak", "ice", "nub", "fat", "ten", "rol", "bel", "kru", "pre", "mak", "ice", "fat", "rol"];
var belOpps = ["kek", "ice", "kru", "ten", "nub", "rol", "mak", "kek", "pre", "fat", "ice", "pre", "rol", "mak"];

var preOpps = ["nub", "rol", "fat", "mak", "ice", "kru", "ten", "kru", "bel", "kek", "nub", "bel", "ten", "fat"];
var fatOpps = ["mak", "ten", "pre", "ice", "kek", "nub", "kru", "nub", "rol", "bel", "ten", "kru", "kek", "pre"];
var nubOpps = ["pre", "kru", "ten", "kek", "bel", "fat", "ice", "fat", "mak", "rol", "pre", "ten", "kru", "ice"];
var tenOpps = ["kru", "fat", "nub", "bel", "rol", "kek", "pre", "mak", "ice", "mak", "fat", "nub", "pre", "kru"];
var kruOpps = ["ten", "nub", "bel", "rol", "mak", "pre", "fat", "pre", "kek", "ice", "rol", "fat", "nub", "ten"];


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


let iceTeam = new PflTeam("Iceotopes", "John", "ice", 1, iceOpps);               iceTeam.setScores(iceScores);
let makTeam = new PflTeam("Return of the Mack", "Matt", "mak", 1, makOpps);      makTeam.setScores(makScores);
let rolTeam = new PflTeam("Roll Tide", "Daniel", "rol", 1, rolOpps);             rolTeam.setScores(rolScores);
let kekTeam = new PflTeam("Keke do you love me?", "Noah", "kek", 1, kekOpps);    kekTeam.setScores(kekScores);
let belTeam = new PflTeam("Discount Belicheck", "Harrison", "bel", 1, belOpps);  belTeam.setScores(belScores);

let preTeam = new PflTeam("Predators", "Joe", "pre", 2, preOpps);                preTeam.setScores(preScores);
let fatTeam = new PflTeam("Fat Bastards", "Steve", "fat", 2, fatOpps);           fatTeam.setScores(fatScores);
let nubTeam = new PflTeam("The Nubs", "Adam", "nub", 2, nubOpps);                nubTeam.setScores(nubScores);
let tenTeam = new PflTeam("Tenacious Anus", "Jake", "ten", 2, tenOpps);          tenTeam.setScores(tenScores);
let kruTeam = new PflTeam("Krusty Krushers", "Hunter", "kru", 2, kruOpps);       kruTeam.setScores(kruScores);

var pflTeams =  [
   iceTeam,
   makTeam,
   rolTeam,
   kekTeam,
   belTeam,

   preTeam,
   fatTeam,
   nubTeam,
   tenTeam,
   kruTeam
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

var weekly_dates = [ "Thursday, September 6th",  "Thursday, September 13th", "Thursday, September 20th",
                     "Thursday, September 27th", "Thursday, October 4th",    "Thursday, October 11th", 
                     "Thursday, October 18th",   "Thursday, October 25th",   "Thursday, November 1st", 
                     "Thursday, November 8th",   "Thursday, November 15th",  "Thursday, November 22rd", 
                     "Thursday, November 29th",  "Thursday, December 6th" ];

var weekly_text = [
      week1_txt,   week2_txt,   week3_txt,   week4_txt,
      week5_txt,   week6_txt,   week7_txt,   week8_txt,
      week9_txt,   week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt
  ];


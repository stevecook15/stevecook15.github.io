"use strict";

var preOpps = ["coc", "ten", "bel", "ice", "fat", "sea", "pep", "coc", "rol", "por", "ten", "bel", "sea", "pep"];
var belOpps = ["ten", "sea", "pre", "pep", "ice", "rol", "coc", "ten", "por", "fat", "sea", "pre", "ice", "coc"];
var tenOpps = ["bel", "pre", "por", "rol", "pep", "coc", "sea", "bel", "fat", "ice", "pre", "fat", "coc", "sea"];
var cocOpps = ["pre", "fat", "sea", "por", "rol", "ten", "bel", "pre", "ice", "pep", "por", "sea", "ten", "bel"];
var seaOpps = ["ice", "bel", "coc", "fat", "por", "pre", "ten", "rol", "pep", "rol", "bel", "coc", "pre", "ten"];

var iceOpps = ["sea", "rol", "fat", "pre", "bel", "pep", "por", "pep", "coc", "ten", "rol", "por", "bel", "fat"];
var fatOpps = ["pep", "coc", "ice", "sea", "pre", "por", "rol", "por", "ten", "bel", "pep", "ten", "rol", "ice"];
var porOpps = ["rol", "pep", "ten", "coc", "sea", "fat", "ice", "fat", "bel", "pre", "coc", "ice", "pep", "rol"];
var rolOpps = ["por", "ice", "pep", "ten", "coc", "bel", "fat", "sea", "pre", "sea", "ice", "pep", "fat", "por"];
var pepOpps = ["fat", "por", "rol", "bel", "ten", "ice", "pre", "ice", "sea", "coc", "fat", "rol", "por", "pre"];


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

  getName()
  {
     return this.name;
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

let preTeam = new PflTeam("Predators", "Joe", "pre", 1, preOpps);                preTeam.setScores(preScores);
let belTeam = new PflTeam("Discount Belicheck", "Harrison", "bel", 1, belOpps);  belTeam.setScores(belScores);
let tenTeam = new PflTeam("Tenacious Anus", "Jake", "ten", 1, tenOpps);          tenTeam.setScores(tenScores);
let cocTeam = new PflTeam("Coco Browns", "Andy", "coc", 1, cocOpps);             cocTeam.setScores(cocScores);
let seaTeam = new PflTeam("Seamen", "Adam", "sea", 1, seaOpps);                  seaTeam.setScores(seaScores);

let iceTeam = new PflTeam("Iceotopes", "John", "ice", 2, iceOpps);               iceTeam.setScores(iceScores);
let fatTeam = new PflTeam("Fat Bastards", "Steve", "fat", 2, fatOpps);           fatTeam.setScores(fatScores);
let porTeam = new PflTeam("Porkchops", "Noah", "por", 2, porOpps);               porTeam.setScores(porScores);
let rolTeam = new PflTeam("Roll Tide", "Daniel", "rol", 2, rolOpps);             rolTeam.setScores(rolScores);
//let pepTeam = new PflTeam("Fuller go eazy on the Pepsi", "Matt", "pep", 2, pepOpps); pepTeam.setScores(pepScores);
let pepTeam = new PflTeam("A Bunch of Jabronis", "Matt", "pep", 2, pepOpps); pepTeam.setScores(pepScores);

var pflTeams =  [
   preTeam,
   belTeam,
   tenTeam,
   cocTeam,
   seaTeam,
   
   iceTeam,  
   fatTeam,
   porTeam,
   rolTeam,
   pepTeam
];


function initTeams()
{
   var numWeeks = getNumWeeks(); //pflTeams[0].scores.length;
   var scores, opps;
   var team, opp;

   for ( var i=0; i < pflTeams.length; i++ )
   {
      team = pflTeams[i];
      scores = team.getScores();

      pflTeams[i].wins = 0;
      pflTeams[i].losses = 0;
      pflTeams[i].divWins = 0;
      pflTeams[i].divLosses = 0;
      pflTeams[i].totPts = 0;
      pflTeams[i].oppPts = 0;

      //console.log("Getting opps " + team.getName());
      opps = team.getOpponents(); // Return opp list abbrvs
      if ( opps == null )
      {
         console.log("Unable to get opps for " + team.getName());
         continue;
      }

      for ( var week=0; week<numWeeks; week++ )
      {
         //console.log("Week " + (week+1));

         opp = getTeamByAbrv(opps[week]);
         if ( opp == null )
         {
            console.log("Unable to get opp score for " + opps[week]);
         }
         else
         {
            //console.log(team.name + " vs " + opp.name + " Pts: " + team.scores[week] + " : " + opp.scores[week]);
   
            team.totPts += team.scores[week];
            team.oppPts += opp.scores[week];

            if ( team.totPts != 0.00 )
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

//console.log("Min Weeks: " + min_weeks);
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

      if ( opp == null )
      {
         console.log("Unable to get opp for week " + (week+1) + " for team " + team);
      }
      else
      {
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

var weekly_dates = [ "Thursday, September 9th",  "Thursday, September 16th", "Thursday, September 23th",
                     "Thursday, September 30th", "Thursday, October 7th",    "Thursday, October 14th", 
                     "Thursday, October 21st",   "Thursday, October 28th",   "Thursday, November 4th", 
                     "Thursday, November 11th",  "Thursday, November 18th",  "Thursday, November 25th", 
                     "Thursday, December 2nd",   "Thursday, December 9th",   "Thursday, December 16th" ];

var weekly_text = [
      week1_txt,   week2_txt,   week3_txt,   week4_txt,
      week5_txt,   week6_txt,   week7_txt,   week8_txt,
      week9_txt,   week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt, week15_txt
  ];


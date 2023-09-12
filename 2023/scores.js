"use strict";

//               1*     2*     3*     4*     5*     6*     7*     8*     9*    10*    11*    12*    13*    14*  
var porOpps = ["coc", "rek", "mhc", "ice", "bel", "pre", "ste", "coc", "fat", "wbd", "ice", "mhc", "pre", "ste" ];
var cocOpps = ["por", "pre", "ste", "fat", "rek", "mhc", "wbd", "por", "bel", "ice", "pre", "ste", "mhc", "wbd" ];
var mhcOpps = ["fat", "ste", "por", "rek", "ice", "coc", "pre", "bel", "wbd", "bel", "ste", "por", "coc", "pre" ];
var preOpps = ["ste", "coc", "ice", "bel", "wbd", "por", "mhc", "ste", "rek", "fat", "coc", "rek", "por", "mhc" ];
var steOpps = ["pre", "mhc", "coc", "wbd", "fat", "bel", "por", "pre", "ice", "rek", "mhc", "coc", "fat", "por" ];

var fatOpps = ["mhc", "bel", "rek", "coc", "ste", "wbd", "ice", "wbd", "por", "pre", "bel", "ice", "ste", "rek" ];
var iceOpps = ["bel", "wbd", "pre", "por", "mhc", "rek", "fat", "rek", "ste", "coc", "por", "fat", "wbd", "bel" ];
var belOpps = ["ice", "fat", "wbd", "pre", "por", "ste", "rek", "mhc", "coc", "mhc", "fat", "wbd", "rek", "ice" ];
var wbdOpps = ["rek", "ice", "bel", "ste", "pre", "fat", "coc", "fat", "mhc", "por", "rek", "bel", "ice", "coc" ];
var rekOpps = ["wbd", "por", "fat", "mhc", "coc", "ice", "bel", "ice", "pre", "ste", "wbd", "pre", "bel", "fat" ];


// Playoffs
// 0 - not in playoffs yet
// 1 - clinched playoff spot
// 2 - clinched division
// 3 - clinched first round bye
// 4 - eliminated from playoffs


class PflTeam {
  scores = [];

  constructor(name, owner, abrv, division, opponents) {
    this.name = name;
    this.owner = owner;
    this.abrv = abrv;
    this.division = division; 
    this.opponents = opponents;
    this.wins = 0;
    this.playoffs = 0;
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

  setPlayoffs(playoffs)
  {
     this.playoffs = playoffs;
  }

  getPlayoffs()
  {
     return this.playoffs;
  }
}
let porTeam = new PflTeam("Porkchops", "Noah", "por", 1, porOpps);                      porTeam.setScores(porScores); porTeam.setPlayoffs(porPlayoffs);
let cocTeam = new PflTeam("Coco Browns", "Andy", "coc", 1, cocOpps);                    cocTeam.setScores(cocScores); cocTeam.setPlayoffs(cocPlayoffs);
let mhcTeam = new PflTeam("Mile High Chubb", "Matt", "mhc", 1, mhcOpps); 		          mhcTeam.setScores(mhcScores); mhcTeam.setPlayoffs(mhcPlayoffs);
let preTeam = new PflTeam("Predators", "Joe", "pre", 1, preOpps);                       preTeam.setScores(preScores); preTeam.setPlayoffs(prePlayoffs);
let steTeam = new PflTeam("SuperBowl DB Steve's Team", "Steve", "ste", 1, steOpps);     steTeam.setScores(steScores); steTeam.setPlayoffs(stePlayoffs);

let fatTeam = new PflTeam("Phat Bastards", "Steve", "fat", 2, fatOpps);                 fatTeam.setScores(fatScores); fatTeam.setPlayoffs(fatPlayoffs);
let iceTeam = new PflTeam("Iceotopes", "John", "ice", 2, iceOpps);                      iceTeam.setScores(iceScores); iceTeam.setPlayoffs(icePlayoffs);
let belTeam = new PflTeam("Discount Belicheck", "Harrison", "bel", 2, belOpps);         belTeam.setScores(belScores); belTeam.setPlayoffs(belPlayoffs);
let wbdTeam = new PflTeam("Weapons of Bass Destruction", "Daniel", "wbd", 2, wbdOpps);  wbdTeam.setScores(wbdScores); wbdTeam.setPlayoffs(wbdPlayoffs);
let rekTeam = new PflTeam("The Brotha's", "Reek", "rek", 2, rekOpps);                   rekTeam.setScores(rekScores); rekTeam.setPlayoffs(rekPlayoffs);

var pflTeams =  [
   porTeam,
   cocTeam,
   mhcTeam,
   preTeam,
   steTeam,

   fatTeam,  
   iceTeam,  
   belTeam,
   wbdTeam,
   rekTeam
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

var weekly_dates = [ "Thursday, September 7th",  "Thursday, September 14th", "Thursday, September 21st",
                     "Thursday, September 28th", "Thursday, October 5th",    "Thursday, October 12th", 
                     "Thursday, October 19th",   "Thursday, October 26th",   "Thursday, November 2nd", 
                     "Thursday, November 9th",   "Thursday, November 16th",  "Thursday, November 23th", 
                     "Thursday, November 30th",  "Thursday, December 7th"];

var weekly_text = [
      week1_txt,   week2_txt,   week3_txt,   week4_txt,
      week5_txt,   week6_txt,   week7_txt,   week8_txt,
      week9_txt,   week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt
  ];


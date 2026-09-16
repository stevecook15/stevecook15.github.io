"use strict";

//NOTE: DOne weeks marked by star
//Done           *      *      *      *      *      *
//               1      2      3      4      5      6     7      8      9      10     11     12     13     14   
var cdzOpps = ["byd", "pdb", "coc", "nix", "por", "pym", "fat", "byd", "sod", "nix", "por", "sod", "fat", "coc" ];
var pdbOpps = ["sod", "cdz", "pym", "fat", "byd", "ice", "sod", "fat", "por", "fat", "nix", "ice", "pym", "sod" ];
var cocOpps = ["pym", "nix", "cdz", "por", "ice", "sod", "byd", "por", "ice", "sod", "fat", "byd", "nix", "cdz" ];
var sodOpps = ["pdb", "pym", "por", "ice", "fat", "coc", "pdb", "nix", "cdz", "coc", "pym", "cdz", "ice", "pdb" ];
var pymOpps = ["coc", "sod", "pdb", "BYD", "nix", "cdz", "por", "ice", "fat", "byd", "sod", "nix", "pdb", "por" ];

var iceOpps = ["por", "byd", "fat", "sod", "coc", "pdb", "nix", "pym", "coc", "por", "byd", "pdb", "sod", "nix" ];
var porOpps = ["ice", "fat", "sod", "coc", "byd", "nix", "pym", "coc", "pdb", "ice", "cdz", "fat", "byd", "pym" ];
var nixOpps = ["fat", "coc", "byd", "cdz", "pym", "por", "ice", "sod", "byd", "cdz", "pdb", "pym", "coc", "ice" ];
var bydOpps = ["cdz", "ice", "nix", "pym", "pdb", "fat", "coc", "cdz", "nix", "pym", "ice", "coc", "por", "fat" ];
var fatOpps = ["nix", "por", "ice", "pdb", "sod", "byd", "cdz", "pdb", "pym", "pdb", "coc", "por", "cdz", "byd" ];

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

let cdzTeam = new PflTeam("CeeDeez Nutz", "Harrison", "cdz", 1, cdzOpps);               cdzTeam.setScores(cdzScores); cdzTeam.setPlayoffs(cdzPlayoffs);
let pdbTeam = new PflTeam("Please don't be a Burden", "Ross", "pdb", 1, pdbOpps);       pdbTeam.setScores(pdbScores); pdbTeam.setPlayoffs(pdbPlayoffs);
let cocTeam = new PflTeam("Coco Browns", "Andy", "coc", 1, cocOpps);                    cocTeam.setScores(cocScores); cocTeam.setPlayoffs(cocPlayoffs);
let sodTeam = new PflTeam("Steve-on Diggs", "Reek", "sod", 1, sodOpps);                 sodTeam.setScores(sodScores); sodTeam.setPlayoffs(sodPlayoffs);
let pymTeam = new PflTeam("You Got a Purdy Mouth", "Matt", "pym", 1, pymOpps);          pymTeam.setScores(pymScores); pymTeam.setPlayoffs(pymPlayoffs);

let iceTeam = new PflTeam("Iceotopes", "John", "ice", 2, iceOpps);                      iceTeam.setScores(iceScores); iceTeam.setPlayoffs(icePlayoffs);
let porTeam = new PflTeam("I Blame Devin For This", "Noah", "por", 2, porOpps);         porTeam.setScores(porScores); porTeam.setPlayoffs(porPlayoffs);
let nixTeam = new PflTeam("Nix UR Hopes", "Steve", "nix", 2, nixOpps);                  nixTeam.setScores(nixScores); nixTeam.setPlayoffs(nixPlayoffs);
let bydTeam = new PflTeam("Bring Out Your Dead", "Daniel", "byd", 2, bydOpps);          bydTeam.setScores(bydScores); bydTeam.setPlayoffs(bydPlayoffs);
let fatTeam = new PflTeam("Phat Bastards", "Steve", "fat", 2, fatOpps);                 fatTeam.setScores(fatScores); fatTeam.setPlayoffs(fatPlayoffs);

var pflTeams =  [
   cdzTeam,
   pdbTeam,
   cocTeam,
   sodTeam,
   pymTeam,

   iceTeam,  
   porTeam,
   nixTeam,
   bydTeam,
   fatTeam
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
      pflTeams[i].ties = 0;
      pflTeams[i].divWins = 0;
      pflTeams[i].divLosses = 0;
      pflTeams[i].divTies = 0;
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
               else if ( team.scores[week] < opp.scores[week] )
               {
                  pflTeams[i].losses++;
                  if ( team.division == opp.division )
                     pflTeams[i].divLosses++;
               }
               else
               {
                  pflTeams[i].ties++;
                  if ( team.division == opp.division )
                     pflTeams[i].divTies++;
               }
            }
         }
      }

      //console.log(team.name + " record: " +
      //               pflTeams[i].wins + "W " + pflTeams[i].losses + "L " + pflTeams[i].ties + "T " +
      //               pflTeams[i].divWins + "W " + pflTeams[i].divLosses + "L " + pflTeams[i].divTies + "T ");
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
   var blosses = b.losses;
   var alosses = a.losses;
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
   else  // Same number of wins, check losses, then division record
   {
      if ( alosses < blosses )
      {
         return 1;
      }
      if ( blosses < alosses )
      {
         return -1;
      }

      //TODO: Can we have different number of ties at this point?

      // OK, check on division record
      if ( adivWins > bdivWins )
      {
         return 1;
      }
      else if ( bdivWins > adivWins )
      {
         return -1;
      }
      else   // Division wins is the same, check total points
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

var weekly_dates = [ "Thursday, September 9th",  "Thursday, September 17th", "Thursday, September 24th",
                     "Thursday, October 1st",    "Thursday, October 8th",    "Thursday, October 15th", 
                     "Thursday, October 22th",   "Thursday, October 29th",   "Thursday, November 5th", 
                     "Thursday, November 12th",  "Thursday, November 19th",  "Thursday, November 26th", 
                     "Thursday, December 3rd",   "Thursday, December 10th"];

var weekly_text = [
      week1_txt,   week2_txt,   week3_txt,   week4_txt,
      week5_txt,   week6_txt,   week7_txt,   week8_txt,
      week9_txt,   week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt
  ];



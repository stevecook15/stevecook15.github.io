"use strict";

//NOTE: Weeks 1 through 14 are done...

//               1      2      3      4      5      6     7      8      9      10     11     12     13     14   
var iceOpps = ["dja", "cdz", "pmb", "wbd", "fat", "ybw", "nix", "dja", "coc", "por", "wbd", "pmb", "ybw", "nix" ];
var nixOpps = ["ybw", "pmb", "dja", "por", "coc", "fat", "ice", "ybw", "wbd", "cdz", "pmb", "dja", "coc", "ice" ];
var djaOpps = ["ice", "ybw", "nix", "coc", "cdz", "pmb", "por", "ice", "fat", "wbd", "ybw", "nix", "pmb", "por" ];
var ybwOpps = ["nix", "dja", "wbd", "fat", "por", "ice", "pmb", "nix", "cdz", "coc", "dja", "cdz", "ice", "pmb" ];
var pmbOpps = ["coc", "nix", "ice", "cdz", "wbd", "dja", "ybw", "fat", "por", "fat", "nix", "ice", "dja", "ybw" ];

var cocOpps = ["pmb", "fat", "cdz", "dja", "nix", "por", "wbd", "por", "ice", "ybw", "fat", "wbd", "nix", "cdz" ];
var fatOpps = ["wbd", "coc", "por", "ybw", "ice", "nix", "cdz", "pmb", "dja", "pmb", "coc", "por", "cdz", "wbd" ];
var porOpps = ["cdz", "wbd", "fat", "nix", "ybw", "coc", "dja", "coc", "pmb", "ice", "cdz", "fat", "wbd", "dja" ];
var cdzOpps = ["por", "ice", "coc", "pmb", "dja", "wbd", "fat", "wbd", "ybw", "nix", "por", "ybw", "fat", "coc" ];
var wbdOpps = ["fat", "por", "ybw", "ice", "pmb", "cdz", "coc", "cdz", "nix", "dja", "ice", "coc", "por", "fat" ];


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

let iceTeam = new PflTeam("Iceotopes", "John", "ice", 1, iceOpps);                      iceTeam.setScores(iceScores); iceTeam.setPlayoffs(icePlayoffs);
let nixTeam = new PflTeam("Nix UR Hopes", "Steve", "nix", 1, nixOpps);                  nixTeam.setScores(nixScores); nixTeam.setPlayoffs(nixPlayoffs);
let djaTeam = new PflTeam("Django Achane'd", "Matt", "dja", 1, djaOpps);                djaTeam.setScores(djaScores); djaTeam.setPlayoffs(djaPlayoffs);
let ybwTeam = new PflTeam("Your Bye Week", "Reek", "ybw", 1, ybwOpps);                  ybwTeam.setScores(ybwScores); ybwTeam.setPlayoffs(ybwPlayoffs);
let pmbTeam = new PflTeam("Pass me a Brewski", "Ross", "pmb", 1, pmbOpps);              pmbTeam.setScores(pmbScores); pmbTeam.setPlayoffs(pmbPlayoffs);

let cocTeam = new PflTeam("Coco Browns", "Andy", "coc", 2, cocOpps);                    cocTeam.setScores(cocScores); cocTeam.setPlayoffs(cocPlayoffs);
let fatTeam = new PflTeam("Phat Bastards", "Steve", "fat", 2, fatOpps);                 fatTeam.setScores(fatScores); fatTeam.setPlayoffs(fatPlayoffs);
let porTeam = new PflTeam("Porkchops", "Noah", "por", 2, porOpps);                      porTeam.setScores(porScores); porTeam.setPlayoffs(porPlayoffs);
let cdzTeam = new PflTeam("CeeDeez Nutz", "Harrison", "cdz", 2, cdzOpps);               cdzTeam.setScores(cdzScores); cdzTeam.setPlayoffs(cdzPlayoffs);
let wbdTeam = new PflTeam("Weapons of Bass Destruction", "Daniel", "wbd", 2, wbdOpps);  wbdTeam.setScores(wbdScores); wbdTeam.setPlayoffs(wbdPlayoffs);

var pflTeams =  [
   iceTeam,  
   nixTeam,
   djaTeam,
   ybwTeam,
   pmbTeam,

   cocTeam,
   fatTeam,  
   porTeam,
   cdzTeam,
   wbdTeam
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

var weekly_dates = [ "Thursday, September 5th",  "Thursday, September 12th", "Thursday, September 19th",
                     "Thursday, September 26th", "Thursday, October 3rd",    "Thursday, October 10th", 
                     "Thursday, October 17th",   "Thursday, October 24th",   "Thursday, October 31st", 
                     "Thursday, November 7th",   "Thursday, November 14th",  "Thursday, November 21st", 
                     "Thursday, November 28th",  "Thursday, December 5th"];

var weekly_text = [
      week1_txt,   week2_txt,   week3_txt,   week4_txt,
      week5_txt,   week6_txt,   week7_txt,   week8_txt,
      week9_txt,   week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt
  ];


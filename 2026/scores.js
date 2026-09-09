"use strict";

//NOTE: DOne weeks marked by star
//Done           *      *
//               1      2      3      4      5      6     7      8      9      10     11     12     13     14   
var cdzOpps = ["bdb", "pdb", "coc", "pdb", "dja", "byd", "fat", "byd", "cmr", "nix", "bdb", "cmr", "fat", "coc" ];
var pdbOpps = ["coc", "cdz", "ice", "cdz", "byd", "dja", "cmr", "fat", "bdb", "fat", "nix", "ice", "dja", "cmr" ];
var cocOpps = ["pdb", "nix", "cdz", "dja", "nix", "bdb", "byd", "bdb", "ice", "cmr", "fat", "byd", "nix", "cdz" ];
var cmrOpps = ["nix", "cmr", "byd", "fat", "bdb", "ice", "pdb", "nix", "cdz", "coc", "dja", "cdz", "ice", "pdb" ];
var djaOpps = ["ice", "dja", "nix", "coc", "cdz", "pdb", "bdb", "ice", "fat", "byd", "cmr", "nix", "pdb", "bdb" ];

var iceOpps = ["bdb", "byd", "pdb", "byd", "fat", "cmr", "nix", "dja", "coc", "bdb", "byd", "pdb", "cmr", "nix" ];
var bdbOpps = ["ice", "fat", "fat", "nix", "cmr", "coc", "dja", "coc", "pdb", "ice", "cdz", "fat", "byd", "dja" ];
var nixOpps = ["fat", "coc", "dja", "bdb", "coc", "fat", "ice", "cmr", "byd", "cdz", "pdb", "dja", "coc", "ice" ];
var bydOpps = ["cdz", "ice", "cmr", "ice", "pdb", "cdz", "coc", "cdz", "nix", "dja", "ice", "coc", "bdb", "fat" ];
var fatOpps = ["nix", "bdb", "bdb", "cmr", "ice", "nix", "cdz", "pdb", "dja", "pdb", "coc", "bdb", "cdz", "byd" ];

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

let cdzTeam = new PflTeam("CeeDeez Nutz", "Harrison", "cdz", 2, cdzOpps);               cdzTeam.setScores(cdzScores); cdzTeam.setPlayoffs(cdzPlayoffs);
let pdbTeam = new PflTeam("Please don't be a Burden", "Ross", "pdb", 1, pdbOpps);       pdbTeam.setScores(pdbScores); pdbTeam.setPlayoffs(pdbPlayoffs);
let cocTeam = new PflTeam("Coco Browns", "Andy", "coc", 2, cocOpps);                    cocTeam.setScores(cocScores); cocTeam.setPlayoffs(cocPlayoffs);
let cmrTeam = new PflTeam("Comeback Miracle", "Reek", "cmr", 1, cmrOpps);               cmrTeam.setScores(cmrScores); cmrTeam.setPlayoffs(cmrPlayoffs);
let djaTeam = new PflTeam("Django Achane'd", "Matt", "dja", 1, djaOpps);                djaTeam.setScores(djaScores); djaTeam.setPlayoffs(djaPlayoffs);

let iceTeam = new PflTeam("Iceotopes", "John", "ice", 1, iceOpps);                      iceTeam.setScores(iceScores); iceTeam.setPlayoffs(icePlayoffs);
let bdbTeam = new PflTeam("Back the Drawing Board", "Noah", "bdb", 2, bdbOpps);         bdbTeam.setScores(bdbScores); bdbTeam.setPlayoffs(bdbPlayoffs);
let nixTeam = new PflTeam("Nix UR Hopes", "Steve", "nix", 1, nixOpps);                  nixTeam.setScores(nixScores); nixTeam.setPlayoffs(nixPlayoffs);
let bydTeam = new PflTeam("Bring Out Your Dead", "Daniel", "byd", 2, bydOpps);          bydTeam.setScores(bydScores); bydTeam.setPlayoffs(bydPlayoffs);
let fatTeam = new PflTeam("Phat Bastards", "Steve", "fat", 2, fatOpps);                 fatTeam.setScores(fatScores); fatTeam.setPlayoffs(fatPlayoffs);

var pflTeams =  [
   cdzTeam,
   pdbTeam,
   cocTeam,
   cmrTeam,
   djaTeam,

   iceTeam,  
   bdbTeam,
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



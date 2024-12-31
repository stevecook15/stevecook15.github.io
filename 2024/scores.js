"use strict";

//               1*     2*     3*     4*     5*     6*     7*     8*     9*    10*    11*    12*    13*    14*  
var iceOpps = ["pre", "aoa", "por", "fat", "nix", "bel", "bro", "pre", "wbd", "coc", "fat", "por", "bel", "bro" ];
var belOpps = ["bro", "pre", "fat", "nix", "coc", "ice", "por", "bro", "aoa", "wbd", "pre", "aoa", "ice", "por" ];
var porOpps = ["wbd", "bro", "ice", "aoa", "fat", "pre", "bel", "nix", "coc", "nix", "bro", "ice", "pre", "bel" ];
var preOpps = ["ice", "bel", "bro", "wbd", "aoa", "por", "coc", "ice", "nix", "fat", "bel", "bro", "por", "coc" ];
var broOpps = ["bel", "por", "pre", "coc", "wbd", "nix", "ice", "bel", "fat", "aoa", "por", "pre", "wbd", "ice" ];

var cocOpps = ["aoa", "fat", "nix", "bro", "bel", "wbd", "pre", "wbd", "por", "ice", "aoa", "nix", "fat", "pre" ];
var fatOpps = ["nix", "coc", "bel", "ice", "por", "aoa", "wbd", "aoa", "bro", "pre", "ice", "wbd", "coc", "nix" ];
var nixOpps = ["fat", "wbd", "coc", "bel", "ice", "bro", "aoa", "por", "pre", "por", "wbd", "coc", "aoa", "fat" ];
var aoaOpps = ["coc", "ice", "wbd", "por", "pre", "fat", "nix", "fat", "bel", "bro", "coc", "bel", "nix", "wbd" ];
var wbdOpps = ["por", "nix", "aoa", "pre", "bro", "coc", "fat", "coc", "ice", "bel", "nix", "fat", "bro", "aoa" ];


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
let belTeam = new PflTeam("Thats What Shaheed Said", "Harrison", "bel", 1, belOpps);    belTeam.setScores(belScores); belTeam.setPlayoffs(belPlayoffs);
let porTeam = new PflTeam("Porkchops", "Noah", "por", 1, porOpps);                      porTeam.setScores(porScores); porTeam.setPlayoffs(porPlayoffs);
let preTeam = new PflTeam("Arrested Development", "Joe", "pre", 1, preOpps);            preTeam.setScores(preScores); preTeam.setPlayoffs(prePlayoffs);
let broTeam = new PflTeam("The Comeback Miracle's", "Reek", "bro", 1, broOpps);         broTeam.setScores(broScores); broTeam.setPlayoffs(broPlayoffs);

let cocTeam = new PflTeam("Coco Browns", "Andy", "coc", 2, cocOpps);                    cocTeam.setScores(cocScores); cocTeam.setPlayoffs(cocPlayoffs);
let fatTeam = new PflTeam("Phat Bastards", "Steve", "fat", 2, fatOpps);                 fatTeam.setScores(fatScores); fatTeam.setPlayoffs(fatPlayoffs);
let nixTeam = new PflTeam("Nix UR Hopes", "Steve", "nix", 2, nixOpps);                  nixTeam.setScores(nixScores); nixTeam.setPlayoffs(nixPlayoffs);
let aoaTeam = new PflTeam("The Age of APukalypse", "Matt", "aoa", 2, aoaOpps);          aoaTeam.setScores(aoaScores); aoaTeam.setPlayoffs(aoaPlayoffs);
let wbdTeam = new PflTeam("Weapons of Bass Destruction", "Daniel", "wbd", 2, wbdOpps);  wbdTeam.setScores(wbdScores); wbdTeam.setPlayoffs(wbdPlayoffs);

var pflTeams =  [
   iceTeam,  
   belTeam,
   porTeam,
   preTeam,
   broTeam,

   cocTeam,
   fatTeam,  
   nixTeam,
   aoaTeam,
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


"use strict";
//               1      2      3      4      5      6      7      8      9      10     11     12     13     14     15
var cocOpps = ["fat", "pre", "bel", "ice", "por", "sea", "rol", "fat", "jab", "ten", "pre", "jab", "sea", "rol", "jab" ];
var fatOpps = ["coc", "rol", "pre", "por", "ten", "ice", "sea", "coc", "bel", "jab", "rol", "pre", "ten", "sea", "bel" ];
var preOpps = ["sea", "coc", "fat", "ten", "jab", "rol", "por", "sea", "ice", "bel", "coc", "fat", "rol", "por", "ice" ];
var rolOpps = ["ten", "fat", "sea", "jab", "bel", "pre", "coc", "ice", "por", "ice", "fat", "sea", "pre", "coc", "por" ];
var seaOpps = ["pre", "jab", "rol", "bel", "ice", "coc", "fat", "pre", "ten", "por", "bel", "rol", "coc", "fat", "ten" ];

var iceOpps = ["bel", "ten", "por", "coc", "sea", "fat", "jab", "rol", "pre", "rol", "ten", "por", "jab", "bel", "pre" ];
var jabOpps = ["por", "sea", "ten", "rol", "pre", "bel", "ice", "bel", "coc", "fat", "por", "coc", "ice", "ten", "coc" ];
var belOpps = ["ice", "por", "coc", "sea", "rol", "jab", "ten", "jab", "fat", "pre", "sea", "ten", "por", "ice", "fat" ];
var porOpps = ["jab", "bel", "ice", "fat", "coc", "ten", "pre", "ten", "rol", "sea", "jab", "ice", "bel", "pre", "rol" ];
var tenOpps = ["rol", "ice", "jab", "pre", "fat", "por", "bel", "por", "sea", "coc", "ice", "bel", "fat", "jab", "sea" ];


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

let cocTeam = new PflTeam("Coco Browns", "Andy", "coc", 1, cocOpps);             cocTeam.setScores(cocScores); cocTeam.setPlayoffs(cocPlayoffs);
let fatTeam = new PflTeam("Phat Bastards", "Steve", "fat", 1, fatOpps);          fatTeam.setScores(fatScores); fatTeam.setPlayoffs(fatPlayoffs);
let preTeam = new PflTeam("Predators", "Joe", "pre", 1, preOpps);                preTeam.setScores(preScores); preTeam.setPlayoffs(prePlayoffs);
let rolTeam = new PflTeam("Roll Tide", "Daniel", "rol", 1, rolOpps);             rolTeam.setScores(rolScores); rolTeam.setPlayoffs(rolPlayoffs);
let seaTeam = new PflTeam("Seamen", "Adam", "sea", 1, seaOpps);                  seaTeam.setScores(seaScores); seaTeam.setPlayoffs(seaPlayoffs);

let iceTeam = new PflTeam("Iceotopes", "John", "ice", 2, iceOpps);               iceTeam.setScores(iceScores); iceTeam.setPlayoffs(icePlayoffs);
let jabTeam = new PflTeam("Najee By Nature", "Matt", "jab", 2, jabOpps); 		   jabTeam.setScores(jabScores); jabTeam.setPlayoffs(jabPlayoffs);
let belTeam = new PflTeam("Discount Belicheck", "Harrison", "bel", 2, belOpps);  belTeam.setScores(belScores); belTeam.setPlayoffs(belPlayoffs);
let porTeam = new PflTeam("Porkchops", "Noah", "por", 2, porOpps);               porTeam.setScores(porScores); porTeam.setPlayoffs(porPlayoffs);
let tenTeam = new PflTeam("Tenacious Anus", "Jake", "ten", 2, tenOpps);          tenTeam.setScores(tenScores); tenTeam.setPlayoffs(tenPlayoffs);


var pflTeams =  [
   cocTeam,
   fatTeam,
   preTeam,
   rolTeam,
   seaTeam,
   
   iceTeam,  
   jabTeam,
   belTeam,
   porTeam,
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

var weekly_dates = [ "Thursday, September 8th",  "Thursday, September 15th", "Thursday, September 22nd",
                     "Thursday, September 29th", "Thursday, October 6th",    "Thursday, October 13th", 
                     "Thursday, October 20th",   "Thursday, October 27th",   "Thursday, November 3rd", 
                     "Thursday, November 10th",  "Thursday, November 17th",  "Thursday, November 24th", 
                     "Thursday, December 1st",   "Thursday, December 8th",   "Thursday, December 15th" ];

var weekly_text = [
      week1_txt,   week2_txt,   week3_txt,   week4_txt,
      week5_txt,   week6_txt,   week7_txt,   week8_txt,
      week9_txt,   week10_txt,  week11_txt,  week12_txt,
      week13_txt,  week14_txt,  week15_txt
  ];


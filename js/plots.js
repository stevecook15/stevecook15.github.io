
"use strict" 

//TODO:  Avg margin of victory/loss

// Reads scores from scores.js
var PLOT_MIN_VALUE = 80.0;
var PLOT_MAX_VALUE = 200.0;
var PLOT_NUM_TICS = 12;

function TeamAvgs()
{
   var plot_names = new Array( "Low Score", "Average Score", "High Score" );

   var low_data = new Array();
   var average_data = new Array();
   var high_data = new Array();

   var tscore, lscore, hscore;

   var teamIndx = 0;
   var plabels = new Array();

   var teams = getOrderedTeams();
   var team;

   for ( var jteam=0; jteam<teams.length; jteam++ )
   {
      team = teams[jteam];

      var id = document.getElementById("team" + jteam);
      if ( id && id.checked == true )
      {
         tscore = team.totPts;
         lscore = 500.0;
         hscore = 0.0;
         for ( var week=0; week<team.scores.length; week++ )
         {
            if ( team.scores[week] > hscore )
               hscore = team.scores[week];
            if ( team.scores[week] < lscore )
               lscore = team.scores[week];
         }
         average_data[teamIndx] = tscore/team.scores.length;
         if ( average_data[teamIndx] < PLOT_MIN_VALUE )
            average_data[teamIndx] = PLOT_MIN_VALUE;
         if ( lscore < PLOT_MIN_VALUE )
            lscore = PLOT_MIN_VALUE;
         low_data[teamIndx] = lscore;
         high_data[teamIndx] = hscore;
         plabels[teamIndx] = team.name;
         teamIndx++;
      }
   }

   var plotTitle = "PFL Team Averages - Week " + teams[0].scores.length + "";
   var xaxisTitle = "";
   var yaxisTitle = "Points";

   var chart = new BizBarChart();
   chart.setPlotType(chart.ADJACENT);

   chart.setXLabels(plabels);
   chart.rotateXLabels(true);
   chart.setXTitle(xaxisTitle);
   chart.setYTitle(yaxisTitle);
   chart.setPlotTitle(plotTitle.toString());
   chart.setHorzGrid(true);
   chart.highlightLine(1);
   //chart.setVertGrid(true);

// Specify bar colors??
   if ( teams[0].scores.length != 0 && teams[0].scores[0] != 0 )
   {
      chart.addLine(low_data);
      chart.addLine(average_data);
      chart.addLine(high_data);
   }

   //chart.setAutoScale(true);
   chart.setNumTics(PLOT_NUM_TICS);
   chart.setYMax(PLOT_MAX_VALUE);
   chart.setYMin(PLOT_MIN_VALUE);

   chart.setThreeD(true);
   chart.setThreeDAxes(true);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   var legend = new BizLegend();
   for ( var indx=0; indx<plot_names.length; indx++ )
   {
      legend.addLabel(plot_names[indx]);
   }

   var legendId = document.getElementById("legend_canvas");
   var lwidth = legendId.width;
   var lheight = legendId.height;

   legend.draw("legend_canvas", lwidth, lheight);

   var detailsTxt = document.getElementById("detailsText");
   if ( detailsTxt != null )
   {
      var txt = "Your season scoring average, how's it match up?";
      detailsTxt.innerText = txt;     // IE
      detailsTxt.textContent = txt;   // Real browsers
   }
}


function OppAverages()
{
   var plot_names = new Array( "You", "Opponents" ); //, "Difference" );

   var xaxisTitle = "";
   var yaxisTitle = "Points";

   var chart = new BizBarChart();
   chart.setPlotType(chart.ADJACENT);

   chart.setPlotTitle("Average vs Opponent's Average");
//TODO Need to fix for Adjacent charts?
   chart.rotateXLabels(true);
   chart.setXTitle(xaxisTitle);
   chart.setYTitle(yaxisTitle);
   chart.setHorzGrid(true);

   var swins, slosses;
   var avg, oppAvg;
   var team, oppnt;

   var jteam = 0;
   var avg_val = new Array();
   var opp_val = new Array();

   var plabels = new Array();

   var opps;
   var teams = getOrderedTeams();
   var week = teams[0].scores.length;

   for ( var indx=0; indx<teams.length; indx++ )
   {
      var id = document.getElementById("team" + indx);
      if ( id.checked == true )
      {
         team = teams[indx];
         opps = team.getOpponents();
         oppnt = getTeamByAbrv(opps[week]);

         avg_val[jteam] = team.totPts / week;
         opp_val[jteam] = oppnt.totPts / week;
         plabels[jteam] = team.name;
         jteam++;
      }
   }

   // To display avg values
   //chart.labelValues(true);

   if ( teams[0].scores.length != 0 && teams[0].scores[0] != 0 )
   {
      chart.addLine(avg_val);
      chart.addLine(opp_val);
   }

   //chart.setXLabels(pfl_labels);
   chart.setXLabels(plabels);

   //chart.setAutoScale(true);
   chart.setNumTics(PLOT_NUM_TICS);
   chart.setYMax(PLOT_MAX_VALUE);
   chart.setYMin(PLOT_MIN_VALUE);

   chart.setThreeD(true);
   chart.setThreeDAxes(true);

   var colors = new Array ( "#00ff00", "#ff0000" );
   chart.setColors(colors);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   // Add labels in same order as data!!!
   var legend = new BizLegend();
   for ( var indx=0; indx<plot_names.length; indx++ )
      legend.add(plot_names[indx], colors[indx]);

   var legendId = document.getElementById("legend_canvas");
   var lwidth = legendId.width;
   var lheight = legendId.height;

   legend.draw("legend_canvas", lwidth, lheight);

   var detailsTxt = document.getElementById("detailsText");
   if ( detailsTxt != null )
   {
      var txt = "Do you run up against a hot team each week?  Or are you getting lucky " +
                "with low opponent scores each week? ";
      detailsTxt.innerText = txt;     // IE
      detailsTxt.textContent = txt;   // Real browsers
   }
}

function MarginVictory()
{
   var PLOT_MAX_VALUE = 100.0;
   var NUM_TICS = 10;

   var plot_names = new Array( "Victories", "Losses" );

   var victory_margin = new Array();
   var loss_margin = new Array();

   var plotTitle = "Avg Margin of Victory/Loss";
   var xaxisTitle = "";
   var yaxisTitle = "Margin";

   var chart = new BizBarChart();
   chart.setPlotType(chart.ADJACENT);
   var colors = new Array ( "#00ff00", "#ff0000" );
   chart.setColors(colors);
//LATER chart.labelBars(true);

//TODO Need to fix for Adjacent charts?
   chart.rotateXLabels(true);
   chart.setXTitle(xaxisTitle);
   chart.setYTitle(yaxisTitle);
   chart.setPlotTitle(plotTitle);
   chart.setHorzGrid(true);

   var nwins, nlosses;
   var swins, slosses;
   var teams, opps, oppnt, team;

   var plabels = new Array();
   var teams = getOrderedTeams();
   var week = teams[0].scores.length;

   var jteams = 0;
   for ( var indx=0; indx<teams.length; indx++ )
   {
      var id = document.getElementById("team" + indx);
      if ( id.checked == true )
      {
         team = teams[indx];
         opps = team.getOpponents();

         nwins = 0; nlosses = 0;
         swins = 0.0; slosses = 0.0;
         for ( var jndx=0; jndx<week; jndx++ )
         {
            oppnt = getTeamByAbrv(opps[jndx]);

console.log("Wk, tm, opp, score oppscore: " + (jndx+1) + ", " + team.name + ", " + oppnt.name +
                  ", " + team.scores[jndx] + ", " + oppnt.scores[jndx]);
            if ( team.scores[jndx] > oppnt.scores[jndx] )
            {
               nwins++;
               swins += (team.scores[jndx] - oppnt.scores[jndx]);
            }
            else
            {
               nlosses++;
               slosses += (oppnt.scores[jndx] - team.scores[jndx]);
            }
         }

         if ( nwins > 0 )
            swins = swins / nwins;
         if ( nlosses > 0 )
            slosses = slosses / nlosses;

         victory_margin[jteams] = swins;
         loss_margin[jteams] = slosses;
         plabels[jteams] = team.name;
         jteams++;
      }
   }

// Specify bar colors??
   chart.addLine(victory_margin);
   chart.addLine(loss_margin);

   //chart.setXLabels(pfl_labels);
   chart.setXLabels(plabels);
   //chart.setAutoScale(true);
   chart.setNumTics(10);
   chart.setYMax(100.0);
   chart.setYMin(0.0);

   chart.setThreeD(true);
   chart.setThreeDAxes(true);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   // Add labels in same order as data!!!
   var legend = new BizLegend();
   for ( var indx=0; indx<plot_names.length; indx++ )
      legend.add(plot_names[indx], colors[indx]);

   var legendId = document.getElementById("legend_canvas");
   var lwidth = legendId.width;
   var lheight = legendId.height;

   legend.draw("legend_canvas", lwidth, lheight);

   var detailsTxt = document.getElementById("detailsText");
   if ( detailsTxt != null )
   {
      var txt = "Are you squeaking out wins or kicking butt?  Are you " +
                "snakebitten and just barely losing, or getting your butt kicked?";

      detailsTxt.innerText = txt;     // IE
      detailsTxt.textContent = txt;   // Real browsers
   }
}

function VsLeague()
{
   var teamscore, oppnscore;
   var tot_games, wins, losses;

   var league_wins = new Array();
   var league_losses = new Array();
   var tot_wins = new Array();
   var tot_losses = new Array();
   var record = "";

   var teams = getOrderedTeams();
   var num_teams = teams.length;
   var num_weeks = teams[0].scores.length;
   var labels = new Array();

   var tWinArr = new Array();
   var tLossArr = new Array();

   for ( var indx=0; indx<num_teams; indx++ )
   {
      tWinArr[indx] = 0;
      tLossArr[indx] = 0;
   }

   var team, opps, oppTeam;

   for ( var indx=0; indx<num_teams; indx++ )
   {
      team = teams[indx];

      for ( var week=0; week<num_weeks; week++ )
      {
         for ( var oppnt=0; oppnt<num_teams; oppnt++ )
         {
            if ( indx != oppnt )
            {
               oppTeam = teams[oppnt];

               if ( team.scores[week] > oppTeam.scores[week] )
               {
                  tWinArr[indx]++;
               }
               else if ( team.scores[week] < oppTeam.scores[week] )
               {
                  tLossArr[indx]++;
               }
               else 
               {
                  tWinArr[indx] += 0.5;
                  tLossArr[indx] += 0.5;
               }
            }
         }
      }
   }

   var plabels = new Array();
   var jteams = 0;
   for ( var indx=0; indx<teams.length; indx++ )
   {
      var id = document.getElementById("team" + indx);
      if ( id.checked == true )
      {
         plabels[jteams] = teams[indx].name;
         league_wins[jteams] = tWinArr[indx];
         league_losses[jteams] = tLossArr[indx];
         jteams++;
      }
   }

   var max_wins = 0;
   var max_losses = 0;

   for ( var team=0; team<jteams; team++ )
   {
      if ( league_wins[team] >  max_wins )
         max_wins = league_wins[team];
      if ( league_losses[team] >  max_losses )
         max_losses = league_losses[team];
   }

   var colors = new Array ( "#00ff00", "#ff0000", "#0000ff", "#ffff00" );

   var chart = new BizBarChart();
   chart.setPlotType(chart.ADJACENT);
   chart.setColors(colors);

   if ( teams[0].scores.length != 0 && teams[0].scores[0] != 0 )
   {
      chart.addLine(league_wins);
      chart.addLine(league_losses);
   }

   chart.setXLabels(plabels);
   chart.rotateXLabels(true);

   if ( max_wins < 10 && max_losses < 10 )
   {
      chart.setYMax(10);
      chart.setNumTics(10);
   }
   else if ( max_wins < 25 && max_losses < 25 )
   {
      chart.setYMax(25);
      chart.setNumTics(5);
   }
   else if ( max_wins < 50 && max_losses < 50 )
   {
      chart.setYMax(50);
      chart.setNumTics(10);
   }
   else if ( max_wins < 75 && max_losses < 75 )
   {
      chart.setYMax(75);
      chart.setNumTics(5);
   }
   else
   {
      chart.setYMax(120);
      chart.setNumTics(12);
   }

   chart.setThreeD(true);
   chart.setThreeDAxes(true);

   chart.labelValues(true);

//   //chart.setTitleFont(new Font("SansSerif", Font.BOLD, 18));
   chart.setPlotTitle("League Record vs All Teams after Week " + teams[0].scores.length);

//   //chart.setYAxisFont(new Font("SansSerif", Font.BOLD, 14));
   chart.setYTitle("Win/Loss Percentage");

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   // Add legend
   // Add labels in same order as data!!!
   var legends = new Array( "Wins", "Losses");

   var legend = new BizLegend();
   legend.setLayout(BizLegend.HORIZONTAL);
   for ( var indx=0; indx<legends.length; indx++ )
      legend.add(legends[indx], colors[indx]);

   var legendId = document.getElementById("legend_canvas");
   var lwidth = legendId.width;
   var lheight = legendId.height;
   legend.draw("legend_canvas", lwidth, lheight);

   var detailsTxt = document.getElementById("detailsText");
   if ( detailsTxt != null )
   {
      var txt = "Your combined recored if you played " +
                "against all the other teams each week, " +
                "instead of lucking out against some team! ";

      detailsTxt.innerText = txt;     // IE
      detailsTxt.textContent = txt;   // Real browsers
   }
}


function ScoringPlot()
{
   var plotTitle = "Weekly Scoring";
   var xaxisTitle = "Week";
   var yaxisTitle = "Points";

   var chart = new BizLineChart();
   chart.setPlotType(chart.YONLY_PLOT);

   chart.setXTitle(xaxisTitle);
   chart.setYTitle(yaxisTitle);
   chart.setPlotTitle(plotTitle);
   chart.setHorzGrid(true);
   chart.setLineWidth(2);
   chart.labelMaxValue(true);

   var teams = getOrderedTeams();
   var num_weeks = teams[0].scores.length;

   //need up to 12 colors!!!
   var wscore = new Array();
   var labels = new Array();
   var week;

   for ( var week=0; week<num_weeks; week++ )
      wscore[week] = 0.0;

   var jndx = 0;
   for ( var indx=0; indx<teams.length; indx++ )
   {
      var id = document.getElementById("team" + indx);
      if ( id.checked == true )
      {
         chart.addLine(teams[indx].scores, "", chart.colors[indx]);
         labels[jndx] = teams[indx].name;
         jndx++;
      }

      for ( var week=0; week<num_weeks; week++ )
      {
         wscore[week] += teams[indx][week];
      }
   }

   var num_teams = teams.length;
   var season_avg = 0.0;
   for ( var week=0; week<num_weeks; week++ )
   {
      wscore[week] /= num_teams;
      season_avg += wscore[week];
      wscore[week] = wscore[week].toFixed(2);
   }

//   chart.addLine(wscore, "Weekly Avg", "#000000");
   season_avg /= num_weeks;
   chart.addRefLine(season_avg.toFixed(2));

   //chart.setAutoScale(true);
   chart.setNumTics(PLOT_NUM_TICS);
   chart.setYMax(PLOT_MAX_VALUE);
   chart.setYMin(PLOT_MIN_VALUE);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   var legendId = document.getElementById("legend_canvas");
   var cwidth = legendId.width;
   var cheight = legendId.height;

   // Add labels in same order as data!!!
   var legend = new BizLegend();
   for ( var indx=0; indx<labels.length; indx++ )
      legend.addLabel(labels[indx]);

   var legendId = document.getElementById("legend_canvas");
   var lwidth = legendId.width;
   var lheight = legendId.height;

   legend.draw("legend_canvas", lwidth, lheight);

   var detailsTxt = document.getElementById("detailsText");
   if ( detailsTxt != null )
   {
      var txt = "How consistent is your scoring? Blind dog finding a bone " +
                "every now and then or actually a good team. You decide...";
      detailsTxt.innerText = txt;     // IE
      detailsTxt.textContent = txt;   // Real browsers
   }
}


function ScoringTrend()
{
   var plotTitle = "Scoring Trend";
   var xaxisTitle = "Week";
   var yaxisTitle = "Points";

   var chart = new BizLineChart();

   chart.setXTitle(xaxisTitle);
   chart.setYTitle(yaxisTitle);
   chart.setPlotTitle(plotTitle);
   chart.setHorzGrid(true);
   chart.setLineWidth(2);
//   chart.labelMaxValue(true);
//   chart.labelMinValue(true);

   // Everyone should be playing same number of weeks
   var teams = getOrderedTeams();
   var num_weeks = teams[0].scores.length;
   var labels = new Array();

   if ( num_weeks == 1 )
   {
      chart.setPlotType(chart.MARKER_PLOT);

      for ( var team=0; team<teams.length; team++ )
      {
         var sdev = new Array();
         sdev[0] = teams[team].scores[0];
         var id = document.getElementById("team" + team);
         if ( id.checked == true )
         {
            chart.addLine(sdev, teams[team].name, chart.colors[team]);
            labels.push(teams[team].name);
         }
      }
   }
   else
   {
      chart.setPlotType(chart.RIBBON_PLOT);

      var xarr = new Array();
      for ( indx=0; indx<num_weeks; indx++ )
         xarr[indx] = indx + 1;

      var lin = new BizInterp();
      var smooth = new Array();
      var params;

      //need up to 12 colors!!!
      for ( team=0; team<teams.length; team++ )
      {
         var id = document.getElementById("team" + team);
         if ( id.checked == true )
         {
            params = lin.calcParams(xarr, teams[team].scores);

            for ( indx=0; indx<num_weeks; indx++ )
            {
               smooth[indx] = lin.calcPoint(params, indx+1);
            }

            chart.addLine(smooth, teams[team].name, chart.colors[team]);
            labels.push(teams[team].name);
         }
      }
   }

   //chart.setAutoScale(true);
   chart.setNumTics(PLOT_NUM_TICS);
   chart.setYMax(PLOT_MAX_VALUE);
   chart.setYMin(PLOT_MIN_VALUE);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   var legendId = document.getElementById("legend_canvas");
   var cwidth = legendId.width;
   var cheight = legendId.height;

   // Add labels in same order as data!!!
   var legend = new BizLegend();
   for ( var indx=0; indx<labels.length; indx++ )
      legend.addLabel(labels[indx]);

   var legendId = document.getElementById("legend_canvas");
   var lwidth = legendId.width;
   var lheight = legendId.height;

   legend.draw("legend_canvas", lwidth, lheight);

   var detailsTxt = document.getElementById("detailsText");
   if ( detailsTxt != null )
   {
      var txt = "Getting better each week?  Or is your season " +
                "draining down the crapper? See for yourself... ";
      detailsTxt.innerText = txt;     // IE
      detailsTxt.textContent = txt;   // Real browsers
   }
}


/*****
function AvgRecord()
{
   var num_weeks = pfl_scores[0].length;

   var name;
   var wins;
   var record = new Array(0, 0, 0, 0, 0, 0);
   var labels = new Array("0-5", "1-4", "2-3", "3-2", "4-1", "5-0");

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   var mwidth = cwidth / 3;
   var mheight = cheight / 2;

   var xoff = new Array(0, mwidth, 2*mwidth, 0, mwidth, 2*mwidth);
   var yoff = new Array(0, 0, 0, mheight, mheight, mheight);

   for ( var team=0; team<pfl_scores.length; team++ )
   {
      // Calc wins array (how many times 1st, 2nd, 3rd, etc...)
      name = pfl_labels[team];

      for ( var indx=0; indx<6; indx++ )
         record[indx] = 0;

      for ( var week=0; week<num_weeks; week++ )
      {
         wins = 0;

         for ( var league=0; league<pfl_scores.length; league++ )
         {
            if ( team != league )
            {
               if ( pfl_scores[team][week] > pfl_scores[league][week] )
               {
                  wins++;
               }
            }
         }

         record[wins]++;
      }

      var chart = new BizPieChart();
      chart.setValues(record);
      chart.setLabels(labels);
      chart.setLabelsType(chart.LABEL_NAMES);
      chart.setLabelsPosition(chart.LABEL_INTERIOR);
      chart.setName(name);
      chart.draw("plot_canvas", mwidth, mheight, xoff[team], yoff[team]);
   }

   var record_names = new Array( "0-5", "1-4", "2-3", "3-2", "4-1", "5-0" );
   var legend = new BizLegend();
   for ( var indx=0; indx<record_names.length; indx++ )
      legend.addLabel(record_names[indx]);

   var legendId = document.getElementById("legend_canvas");
   var lwidth = legendId.width;
   var lheight = legendId.height;

   legend.draw("legend_canvas", lwidth, lheight);

   var detailsTxt = document.getElementById("detailsText");
   if ( detailsTxt != null )
   {
      var txt = "Pie chart shows the percentage of times you've scored a particular record (e.g. 3-2)." +
                " If you've got a lot of cyan (ie 5-0's) you're probably winning! But it's probably" +
                " beginners luck in this case :-)";
      detailsTxt.innerText = txt;     // IE
      detailsTxt.textContent = txt;   // Real browsers
   }
}
***/


function StdDevs()
{
   var plotTitle = "Scoring Volatility Trend";
   var xaxisTitle = "Week";
   var yaxisTitle = "Points";

   var chart = new BizLineChart();
   chart.setPlotType(chart.YONLY_PLOT);

   chart.setXTitle(xaxisTitle);
   chart.setYTitle(yaxisTitle);
   chart.setPlotTitle(plotTitle);
   chart.setHorzGrid(true);
   chart.setLineWidth(2);
   chart.labelMaxValue(true);

   var teams = getOrderedTeams();
   var num_weeks = teams[0].scores.length;
   var labels = new Array();

   var stdDev;
   for ( var team=0; team<teams.length; team++ )
   {
      // Calculate the std dev for each
      stdDev = calcStdDev(teams[team].scores, team);

      var id = document.getElementById("team" + team);
      if ( id.checked == true )
      {
         chart.addLine(stdDev, "", chart.colors[team]);
         labels.push(teams[team].name);
      }
   }

   //chart.setAutoScale(true);
   chart.setNumTics(8);
   chart.setYMax(80.0);
   chart.setYMin(0.0);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   var legendId = document.getElementById("legend_canvas");
   var cwidth = legendId.width;
   var cheight = legendId.height;

   // Add labels in same order as data!!!
   var legend = new BizLegend();
   for ( var indx=0; indx<labels.length; indx++ )
      legend.addLabel(labels[indx]);

   var legendId = document.getElementById("legend_canvas");
   var lwidth = legendId.width;
   var lheight = legendId.height;

   legend.draw("legend_canvas", lwidth, lheight);

   var detailsTxt = document.getElementById("detailsText");
   if ( detailsTxt != null )
   {
      var txt = "Can you sleep well at night knowing how much your team will score each week?" +
                " See your scoring stability trend." +
                " The lower and flatter the line the more likely you'll know what to expect next week.";
      detailsTxt.innerText = txt;     // IE
      detailsTxt.textContent = txt;   // Real browsers
   }
}


function calcStdDev(team_scores, team)
{
   var num_weeks = team_scores.length;
   var results = new Array();
   var sum, devnsum, deviation;

   for ( var week=0; week<num_weeks; week++ )
   {
      deviation = new Array();
      sum = 0;
      devnsum = 0;

      for ( var pt=0; pt<=week; pt++ )
      {
         sum += (team_scores[pt] * 1)         // ensure number
      }

      var mean = (sum/(pt)).toFixed(6);       // 6 decimal places
      for ( var pt=0; pt<=week; pt++ )
      {
         deviation = team_scores[pt] - mean;
         deviation = deviation * deviation;
         devnsum = devnsum + deviation;
      }

      if ( week == 0 )  // Std dev is zero...
         results[week] = 0;
      else
         results[week] = Math.sqrt(devnsum/(pt-1)).toFixed(3);  // 6 decimal places
   }

   return results;
}

function getScoresLength()
{
   var week;
   for ( week=0; week<pfl_scores[0].length; week++ )
   {
      if ( pfl_scores[0][week] == 0.0 )
         return week;
   }

   return week;
}


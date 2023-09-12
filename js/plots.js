'use strict';

//TODO: How to make plots bigger when window size gets bigger?
//TODO: try adding multiple team avgs to begin/end of smoothed score raw data, then only draw real lines

class Plots
{
   // Reads scores from scores.js
   PLOT_MIN_VALUE = 80.0;
   PLOT_MAX_VALUE = 180.0;
   PLOT_NUM_TICS = 10;

   constructor()
   {
   }

   teamAvgs()
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

      var numWeeks = this.getNumWeeks();

      for ( var jteam=0; jteam<teams.length; jteam++ )
      {
         team = teams[jteam];

         var id = document.getElementById("team" + jteam);
         if ( id && id.checked == true )
         {
            tscore = 0.0;
            lscore = 500.0;
            hscore = 0.0;
            for ( var week=0; week<numWeeks; week++ )
            {
               if ( team.scores[week] > hscore )
                  hscore = team.scores[week];
               if ( team.scores[week] < lscore )
                  lscore = team.scores[week];
               tscore += team.scores[week];
            }
            average_data[teamIndx] = tscore/numWeeks;
            if ( average_data[teamIndx] < this.PLOT_MIN_VALUE )
               average_data[teamIndx] = this.PLOT_MIN_VALUE;
            if ( lscore < this.PLOT_MIN_VALUE )
               lscore = this.PLOT_MIN_VALUE;
            low_data[teamIndx] = lscore;
            high_data[teamIndx] = hscore;
            plabels[teamIndx] = team.name;
            teamIndx++;
         }
      }

      var plotTitle = "PFL Team Averages - Week " + numWeeks + "";
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
      if ( numWeeks != 0 && teams[0].scores[0] != 0 )
      {
         chart.addLine(low_data);
         chart.addLine(average_data);
         chart.addLine(high_data);
      }

      //chart.setAutoScale(true);
      chart.setNumTics(this.PLOT_NUM_TICS);
      chart.setYMax(this.PLOT_MAX_VALUE);
      chart.setYMin(this.PLOT_MIN_VALUE);

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
         var txt = "Your season scoring average, low score and high score, how's it match up? " +
                   "Hint: you want the red bar high, and the green bar even higher!!!";
         detailsTxt.innerText = txt;     // IE
         detailsTxt.textContent = txt;   // Real browsers
      }
   }


   oppAverages()
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

      var avg, oppAvg;
      var team, oppnt;

      var jteam = 0;
      var avg_val = new Array();
      var opp_val = new Array();

      var plabels = new Array();

      var opps;
      var teams = getOrderedTeams();

      var numWeeks = this.getNumWeeks();

      for ( var indx=0; indx<teams.length; indx++ )
      {
         var id = document.getElementById("team" + indx);
         if ( id.checked == true )
         {
            team = teams[indx];
            opps = team.getOpponents();
            oppnt = getTeamByAbrv(opps[numWeeks]);

//TODO: Need to manually sum up opponents points
            plabels[jteam] = team.name;
            avg_val[jteam] = team.totPts / numWeeks;

            // Need to get opponents pts for that week, sum it up...
            opp_val[jteam] = 0;
            for ( var jndx=0; jndx<numWeeks; jndx++ )
            {
               oppnt = getTeamByAbrv(opps[jndx]);
               opp_val[jteam] += oppnt.scores[jndx];
            }
            opp_val[jteam] /= numWeeks;
            jteam++;
         }
      }

      // To display avg values
      //chart.labelValues(true);

      if ( numWeeks != 0 && teams[0].scores[0] != 0 )
      {
         chart.addLine(avg_val);
         chart.addLine(opp_val);
      }

      //chart.setXLabels(pfl_labels);
      chart.setXLabels(plabels);

      //chart.setAutoScale(true);
      chart.setNumTics(10); //this.PLOT_NUM_TICS);
      chart.setYMax(175.0); //this.PLOT_MAX_VALUE);
      chart.setYMin(this.PLOT_MIN_VALUE);

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

   marginOfVictory()
   {
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
      var numWeeks = this.getNumWeeks();

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

            for ( var jndx=0; jndx<numWeeks; jndx++ )
            {
               oppnt = getTeamByAbrv(opps[jndx]);
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
      chart.setNumTics(8);
      chart.setYMax(80.0);
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

   vsLeague()
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
      var numWeeks = this.getNumWeeks();
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

         for ( var week=0; week<numWeeks; week++ )
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
      else if ( max_wins < 100 && max_losses < 100 )
      {
         chart.setYMax(100);
         chart.setNumTics(10);
      }
      else
      {
         chart.setYMax(120);
         chart.setNumTics(6);
      }

      chart.setThreeD(true);
      chart.setThreeDAxes(true);

      chart.labelValues(true);

   //   //chart.setTitleFont(new Font("SansSerif", Font.BOLD, 18));
      chart.setPlotTitle("League Record vs All Teams after Week " + numWeeks + "");

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
         var txt = "Your combined recored if you played against all the other teams each week, " +
                   "instead of lucking out against some team only scoring 100 points!! ";
   
         detailsTxt.innerText = txt;     // IE
         detailsTxt.textContent = txt;   // Real browsers
      }
   }


   scoringPlot()
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
      var numWeeks = this.getNumWeeks();

      //need up to 12 colors!!!
      var wscore = new Array();
      var labels = new Array();
      var colors = new Array();
      var week;

      for ( var week=0; week<numWeeks; week++ )
      {
         wscore[week] = 0.0;
      }

      var jndx = 0;
      for ( var indx=0; indx<teams.length; indx++ )
      {
         var id = document.getElementById("team" + indx);
         if ( id.checked == true )
         {
            chart.addLine(teams[indx].scores, "", chart.colors[indx]);
            labels[jndx] = teams[indx].name;
            colors[jndx] = chart.colors[indx];
            jndx++;
         }

         for ( var week=0; week<numWeeks; week++ )
         {
            wscore[week] += teams[indx][week];
         }
      }

      var num_teams = teams.length;
      var season_avg = 0.0;
      for ( var week=0; week<numWeeks; week++ )
      {
         wscore[week] /= num_teams;
         season_avg += wscore[week];
         wscore[week] = wscore[week].toFixed(2);
      }

//   chart.addLine(wscore, "Weekly Avg", "#000000");
      season_avg /= numWeeks;
      chart.addRefLine(season_avg.toFixed(2));

      //chart.setAutoScale(true);
      chart.setNumTics(this.PLOT_NUM_TICS);
      chart.setYMax(this.PLOT_MAX_VALUE);
      chart.setYMin(this.PLOT_MIN_VALUE);

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
         legend.add(labels[indx], colors[indx])

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


   scoringTrend()
   {
      var plotTitle = "Scoring Trend";
      var xaxisTitle = "Week";
      var yaxisTitle = "Points";

      var chart = new BizLineChart();
      chart.setPlotType(chart.YONLY_PLOT);

      //chart.setAutoScale(true);
      chart.setNumTics(12); //this.PLOT_NUM_TICS);
      chart.setYMax(180); //this.PLOT_MAX_VALUE);
      chart.setYMin(60); //this.PLOT_MIN_VALUE);

      chart.setXTitle(xaxisTitle);
      chart.setYTitle(yaxisTitle);
      chart.setPlotTitle(plotTitle);
      chart.setHorzGrid(true);
      chart.setLineWidth(2);
//      chart.labelMaxValue(true);
//      chart.labelMinValue(true);

      // Everyone should be playing same number of weeks
      var teams = getOrderedTeams();
      var numWeeks = this.getNumWeeks();
      var labels = new Array();
      var colors = new Array();
   
      if ( numWeeks == 1 )
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
               colors.push(chart.colors[team]);
            }
         }
      }
      else
      {
         chart.setPlotType(chart.RIBBON_PLOT);

         var xarr = new Array();
         for ( indx=0; indx<numWeeks; indx++ )
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
   
               for ( indx=0; indx<numWeeks; indx++ )
               {
                  smooth[indx] = lin.calcPoint(params, indx+1);
               }
   
               chart.addLine(smooth, teams[team].name, chart.colors[team]);
               labels.push(teams[team].name);
               colors.push(chart.colors[team]);
            }
         }
      }

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
         legend.add(labels[indx], colors[indx]);

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


   volatilityTrend()
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
      var numWeeks = this.getNumWeeks();
      var labels = new Array();
      var colors = new Array();

      var stdDev;
      var relDev;
      for ( var team=0; team<teams.length; team++ )
      {
         // Calculate the std dev for each
         stdDev = this.calcStdDev(teams[team].scores, team);
         relDev = this.calcRelStdDev(teams[team].scores, team);

         var id = document.getElementById("team" + team);
         if ( id.checked == true )
         {
            //chart.addLine(stdDev, "", chart.colors[team]);
            labels.push(teams[team].name);
            colors.push(chart.colors[team]);

            chart.addLine(relDev, "", chart.colors[team]);
         }
      }

      //chart.setAutoScale(true);
      chart.setNumTics(10);
      chart.setYMax(50.0);
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
         legend.add(labels[indx], colors[indx]);

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


   calcStdDev(team_scores, team)
   {
      var numWeeks = this.getNumWeeks();
      var results = new Array();
      var sum, devnsum, deviation;

      for ( var week=0; week<numWeeks; week++ )
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
            results[week] = Math.sqrt(devnsum/(pt-1)).toFixed(2);  // 2 decimal places
      }

      return results;
   }


   calcRelStdDev(team_scores, team)
   {
      var numWeeks = this.getNumWeeks();
      var results = new Array();
      var sum, stdDev, mean, pt;

      for ( var week=0; week<numWeeks; week++ )
      {
         stdDev = this.calcStdDev(team_scores, team);

         sum = 0;
         for ( pt=0; pt<=week; pt++ )
         {
            sum += (team_scores[pt] * 1)         // ensure number
         }

         mean = (sum/(pt)).toFixed(6);       // 6 decimal places

         if ( week == 0 )  // Rel Std dev is zero...
            results[week] = 0;
         else
            results[week] = ((stdDev[week] / mean ) * 100.0).toFixed(2);
      }

      return results;
   }


   rollingAvgPlot()
   {
      var plotTitle = "Rolling Average";
      var xaxisTitle = "Week";
      var yaxisTitle = "Points";

      var chart = new BizLineChart();
      chart.setPlotType(chart.YONLY_PLOT);

      //chart.setAutoScale(true);
      chart.setNumTics(9);  //this.PLOT_NUM_TICS);
      chart.setYMax(170);  //this.PLOT_MAX_VALUE);
      chart.setYMin(80);  //this.PLOT_MIN_VALUE);

      chart.setXTitle(xaxisTitle);
      chart.setYTitle(yaxisTitle);
      chart.setPlotTitle(plotTitle);
      chart.setHorzGrid(true);
      chart.setLineWidth(2);
      //chart.labelMaxValue(true);

      var teams = getOrderedTeams();
      var team;
      var numWeeks = this.getNumWeeks();

      //need up to 12 colors!!!
      var labels = new Array();
      var colors = new Array();

      var jndx = 0;
      for ( var indx=0; indx<teams.length; indx++ )
      {
         var id = document.getElementById("team" + indx);
         if ( id.checked == true )
         {
            team = teams[indx];

            var rollingAvg = new Array();
            var sum;
            for ( var week=0; week<numWeeks; week++ )
            {
               sum = 0.0;
               for ( var week2=0; week2<=week; week2++ )
               {
                  sum += team.scores[week2];
               }

               rollingAvg[week] = (sum / (week+1)).toFixed(2);
            }

            chart.addLine(rollingAvg, "", chart.colors[indx]);
            labels[jndx] = teams[indx].name;
            colors[jndx] = chart.colors[indx];
            jndx++;
         }
      }

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
         legend.add(labels[indx], colors[indx]);

      var legendId = document.getElementById("legend_canvas");
      var lwidth = legendId.width;
      var lheight = legendId.height;
   
      legend.draw("legend_canvas", lwidth, lheight);

      var detailsTxt = document.getElementById("detailsText");
      if ( detailsTxt != null )
      {
         var txt = "Rolling average is another measure of your teams scoring trend. Plot points indicate " +
                   "your teams average at each week, is it going up or down (hope for the former!)";
         detailsTxt.innerText = txt;     // IE
         detailsTxt.textContent = txt;   // Real browsers
      }
   }

   getNumWeeks()
   {
      var teams = getOrderedTeams();
      var num_teams = teams.length;
      var min_weeks = 20;

      for ( var team=0; team<num_teams; team++ )
      {
         if ( teams[team].scores.length < min_weeks )
            min_weeks = teams[team].scores.length;
      }

      return min_weeks;
   }


   predictY(xpts, ypts, x)
   {
//if ( x == 1.0 )
//{
//console.log("predict pts: " + xpts.length + ", " + ypts.length + " for " + x);
//}

      if ( xpts.length == 0 )
         return 0.0;
 
      var lagrange = new Array();
      for ( var i=0; i<xpts.length; i++ )
      {
         lagrange[i] = 1;

         for ( var k=0; k<xpts.length; k++ )
         {
            if ( i != k )
            {
               lagrange[i] *= (x - xpts[k]) / (xpts[i] - xpts[k]);
            }
         }
      }

      var y = 0.0;
      for ( var i=0; i<ypts.length; i++ )
      {
         y += lagrange[i] * ypts[i];
      }
 
      return y;
   }

   smoothedScoringPlot()
   {
      var plotTitle = "Smoothed Weekly Scoring";
      var xaxisTitle = "Week";
      var yaxisTitle = "Points";

      var chart = new BizLineChart();
      chart.setPlotType(chart.XY_PLOT);

      chart.setXTitle(xaxisTitle);
      chart.setYTitle(yaxisTitle);
      chart.setPlotTitle(plotTitle);
      chart.setHorzGrid(true);
      chart.setLineWidth(2);
      chart.labelMaxValue(true);

      var teams = getOrderedTeams();
      var numWeeks = this.getNumWeeks();

//     // Notional caller for JS
//     var bc = new BezierCurve();
//var bxpts = new Array()
// var bypts = new Array()
// var bscores = teams[3].scores;
// var numScores = bscores.length;
//var bx = 1.0; // Week 1
//var numXpts = 0;
//while ( bx <= numScores )
//{
//   bxpts[numXpts] = bx;
//   bx += 0.125;
//   numXpts += 1;
//}
//console.log("Num X: " + bxpts.length);

//// Fill in Y points (evenly spaced X pts)
//bypts = bc.Bezier2D(bscores, bxpts.length);  // 8 data points per week
//console.log("Returned Y data: " + bypts.length);

      chart.setXMin(0.5);
      chart.setXMax(numWeeks + 0.5);

      var wscore = new Array();
      var labels = new Array();
      var colors = new Array();

      for ( var week=0; week<numWeeks; week++ )
      {
         wscore[week] = 0.0;
      }

      var jndx = 0;
      for ( var indx=0; indx<teams.length; indx++ )
      {
         var id = document.getElementById("team" + indx);
         if ( id.checked == true )
         {
            var scores = teams[indx].scores;
            var xpts = new Array();
            var ypts = new Array();

            var numScores = scores.length;
            if ( scores[numScores] === 'undefined' )
            {
               console.log("last week undefined...");
	            numScores -= 1;
            }

            var j;
            for (j=1; j<=numScores; j++ )
            {
               xpts[j] = j;
               ypts[j] = scores[j-1];
            }

            numScores += 2;

            xpts[0] = 0.0;
            ypts[0] = scores[0];

            xpts[numScores-1] = j;
            ypts[numScores-1] = ypts[j-1];

            var smoothX = new Array();
            var smoothY = new Array();
            var x = 1.0; // Week 1
            var y;
            var i = 0;
            while ( x <= (numScores-2) )
            {
               y = this.predictY(xpts, ypts, x);

					// Add to output array
					if ( i > 0 )
               {
                  smoothX[i] = x;
                  smoothY[i] = y;
                  x += 0.125;
               }
               i++;
            }

            chart.addXYLine(smoothX, smoothY, "", chart.colors[indx]);
            labels[jndx] = teams[indx].name;
            colors[jndx] = chart.colors[indx];
            jndx++;
         }

         for ( var week=0; week<numWeeks; week++ )
         {
            wscore[week] += teams[indx][week];
         }
      }


//for ( var indx=0; indx<bypts.length; indx++ )
//{
//   //console.log("Indx " + indx + ": " + bxpts[indx] + ", " + bypts[indx]);
//}
//   chart.addXYLine(bxpts, bypts, "", chart.colors[0]);

      var num_teams = teams.length;
      var season_avg = 0.0;
      for ( var week=0; week<numWeeks; week++ )
      {
         wscore[week] /= num_teams;
         season_avg += wscore[week];
         wscore[week] = wscore[week].toFixed(2);
      }

      season_avg /= numWeeks;
      chart.addRefLine(season_avg.toFixed(2));

      //chart.setAutoScale(true);
      chart.setNumTics(14); //this.PLOT_NUM_TICS);
      chart.setYMax(200); //this.PLOT_MAX_VALUE);
      chart.setYMin(60); //this.PLOT_MIN_VALUE);

      var canvasId = document.getElementById("plot_canvas");
      var cwidth = canvasId.width;
      var cheight = canvasId.height;

	   // OK, draw the plot...
      chart.draw("plot_canvas", cwidth, cheight);

      var legendId = document.getElementById("legend_canvas");
      var cwidth = legendId.width;
      var cheight = legendId.height;
      // Add labels in same order as data!!!
      var legend = new BizLegend();
      for ( var indx=0; indx<labels.length; indx++ )
      {
         legend.add(labels[indx], colors[indx])
      }
   
      var legendId = document.getElementById("legend_canvas");
      var lwidth = legendId.width;
      var lheight = legendId.height;

      legend.draw("legend_canvas", lwidth, lheight);

      var detailsTxt = document.getElementById("detailsText");
      if ( detailsTxt != null )
      {
         var txt = "How consistent is your scoring? If your line zooms outside the box " +
                   "it's probably every bit the roller coaster ride it looks like!!";
         detailsTxt.innerText = txt;     // IE
         detailsTxt.textContent = txt;   // Real browsers
      }
   }


   lucky_bastards()
   {
      var highTeam = new Array()
      var lowTeam = new Array()
      var smallLossTeam = new Array()

      var numWeeks = this.getNumWeeks();
      var teams = getOrderedTeams();
      var team;
      var opps;
      var oppnt;
      var xx;

      for ( var indx=0; indx<teams.length; indx++ )
      {
         team = teams[indx];
         opps = team.getOpponents();

         for ( var jndx=0; jndx<numWeeks; jndx++ )
         {
            oppnt = getTeamByAbrv(opps[jndx]);
            if ( team.scores[jndx] > oppnt.scores[jndx] )  // Team won
            {
               xx = new TInfo(team.name, (jndx+1), team.scores[jndx]);
               highTeam.push(xx)
            }
            else   // team lost
            {
               xx = new TInfo(team.name, (jndx+1), team.scores[jndx]);
               lowTeam.push(xx)

               xx = new TInfo(team.name, (jndx+1), (oppnt.scores[jndx] - team.scores[jndx]));
               smallLossTeam.push(xx)
            }
         }

         highTeam.sort((a, b) => {
            return a.score - b.score;
         });

         lowTeam.sort((a, b) => {
            return b.score - a.score;
         });

         smallLossTeam.sort((a, b) => {
            return a.score - b.score;
         });
      }

      var canvas = document.getElementById("plot_canvas");
      if ( canvas.getContext == null )
         G_vmlCanvasManager.initElement(canvas);

      if ( canvas.getContext == null )
      {
         alert("legend still no context");
         return;
      }

      var ctx = canvas.getContext('2d');
      // this adds the text functions to the ctx
      CanvasTextFunctions.enable(ctx);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      var str;
      var ypos = 20;
      ctx.drawText(12, 12, 20, ypos, "Lowest scores to win: ");
      ypos += 20;

      highTeam.length = 5;
      highTeam.forEach((e) => {
         str = e.team + ", Week " + e.week + ", " + e.score.toFixed(2);
         ctx.drawText(10, 10, 28, ypos, str);
         ypos += 20;
      });
     
      ypos += 20;
      ctx.drawText(11, 12, 20, ypos, "Highest scores to lose: ");
      ypos += 20;

      lowTeam.length = 5;
      lowTeam.forEach((e) => {
         str = e.team + ", Week " + e.week + ", " + e.score.toFixed(2);
         ctx.drawText(10, 10, 28, ypos, str);
         ypos += 20;
      });

      ypos += 20;
      ctx.drawText(11, 12, 20, ypos, "Smallest margins of defeat: ");
      ypos += 20;

      smallLossTeam.length = 5;
      smallLossTeam.forEach((e) => {
         str = e.team + ", Week " + e.week + ", " + e.score.toFixed(2);
         ctx.drawText(10, 10, 28, ypos, str);
         ypos += 20;
      });
   }
}

function TInfo(team, week, score)
{
   this.team = team;
   this.week = week;
   this.score = score;
}


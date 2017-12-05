
//TODO:  Avg margin of victory/loss

// Reads scores from scores.js

function TeamAvgs()
{
   var plot_names = new Array( "Low Score", "Average Score", "High Score" );

   var low_data = new Array();
   var average_data = new Array();
   var high_data = new Array();

   var tscore, lscore, hscore;

   var team = 0;
   var plabels = new Array();
   for ( var jteam=0; jteam<pfl_scores.length; jteam++ )
   {
      var id = document.getElementById("team" + jteam);
      if ( id && id.checked == true )
      {
         lscore = 500.0;
         tscore = 0.0;
         hscore = 0.0;
         for ( week=0; week<pfl_scores[jteam].length; week++ )
         {
            tscore += pfl_scores[jteam][week];
            if ( pfl_scores[jteam][week] > hscore )
               hscore = pfl_scores[jteam][week];
            if ( pfl_scores[jteam][week] < lscore )
               lscore = pfl_scores[jteam][week];
         }
         average_data[team] = tscore/pfl_scores[jteam].length;
         low_data[team] = lscore;
         high_data[team] = hscore;
         plabels[team] = pfl_labels[jteam];
         team++;
      }
   }

   var plotTitle = "PFL Team Averages - Week " + pfl_scores[0].length + "";
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
   if ( pfl_scores[0].length != 0 && pfl_scores[0][0] != 0 )
   {
      chart.addLine(low_data);
      chart.addLine(average_data);
      chart.addLine(high_data);
   }

   //chart.setAutoScale(true);
   chart.setNumTics(15);
   chart.setYMax(230.0);
   chart.setYMin(80.0);

   chart.setThreeD(true);
   chart.setThreeDAxes(true);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   // Add labels in same order as data!!!
   var legend = new BizLegend();
   for ( var indx=0; indx<plot_names.length; indx++ )
      legend.addLabel(plot_names[indx]);

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

   var plotTitle = "Opponents Averages";
   var xaxisTitle = "";
   var yaxisTitle = "Points";

   var avg_val = new Array();
   var opp_val = new Array();
   //var diff_val = new Array();

   var chart = new BizBarChart();
   chart.setPlotType(chart.ADJACENT);

   chart.setPlotTitle("Average vs Opponent's Average");
//TODO Need to fix for Adjacent charts?
   chart.rotateXLabels(true);
   chart.setXTitle(xaxisTitle);
   chart.setYTitle(yaxisTitle);
   chart.setHorzGrid(true);

// Specify bar colors??
   var avg, opp;
   var swins, slosses;
   var cteam, oppnt;

   var jteam = 0;
   var plabels = new Array();

   for ( var indx=0; indx< pfl_scores.length; indx++ )
   {
      var id = document.getElementById("team" + indx);
      if ( id.checked == true )
      {
         cteam = pfl_scores[indx];
         oppnt= opp_scores[indx];
         avg = 0; opp = 0;
         for ( var jndx=0; jndx<cteam.length; jndx++ )
         {
            avg += cteam[jndx];
            opp += oppnt[jndx];
         }

         avg_val[jteam] = avg / cteam.length;
         opp_val[jteam] = opp / cteam.length;
         //diff_val[jteam] = avg_val[jteam] - opp_val[jteam];
         plabels[jteam] = pfl_labels[indx];
         jteam++;
      }
   }

   //chart.labelValues(true);

   if ( pfl_scores[0].length != 0 && pfl_scores[0][0] != 0 )
   {
      chart.addLine(avg_val);
      chart.addLine(opp_val);
   }

   //chart.setXLabels(pfl_labels);
   chart.setXLabels(plabels);

   //chart.setAutoScale(true);
   chart.setNumTics(15);
   chart.setYMax(230.0);
   chart.setYMin(80.0);

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
   var plot_names = new Array( "Victories", "Losses" );

   var team_data = pfl_scores;
   var opponent_data = opp_scores;

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
   var cteam, oppnt;

   var plabels = new Array();
   var jteams = 0;
   for ( var indx=0; indx<pfl_scores.length; indx++ )
   {
      var id = document.getElementById("team" + indx);
      if ( id.checked == true )
      {
         cteam = pfl_scores[indx];
         oppnt= opp_scores[indx];
         nwins = 0; nlosses = 0;
         swins = 0.0; slosses = 0.0;
         for ( var jndx=0; jndx<cteam.length; jndx++ )
         {
            if ( cteam[jndx] > oppnt[jndx] )
            {
               nwins++;
               swins += (cteam[jndx] - oppnt[jndx]);
            }
            else
            {
               nlosses++;
               slosses += (oppnt[jndx] - cteam[jndx]);
            }
         }
         if ( nwins > 0 )
            swins = swins / nwins;
         if ( nlosses > 0 )
            slosses = slosses / nlosses;

         victory_margin[jteams] = swins;
         loss_margin[jteams] = slosses;
         plabels[jteams] = pfl_labels[indx];
         jteams++;
      }
   }

// Specify bar colors??
   chart.addLine(victory_margin);
   chart.addLine(loss_margin);

   //chart.setXLabels(pfl_labels);
   chart.setXLabels(plabels);
   //chart.setAutoScale(true);
   chart.setNumTics(12);
   chart.setYMax(60.0);
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
   var teamscore, oppnscore, team;
   var tot_games, wins, losses;

   var league_wins = new Array();
   var league_losses = new Array();
   var tot_wins = new Array();
   var tot_losses = new Array();

   var num_teams = pfl_scores.length;

   var tWinArr = new Array();
   var tLossArr = new Array();

   var record = "";

   var num_teams = pfl_scores.length;
   var num_weeks = pfl_scores[0].length;

   for ( var team=0; team<num_teams; team++ )
   {
      tWinArr[team] = 0;
      tLossArr[team] = 0;
   }

   for ( var week=0; week<num_weeks; week++ )
   {
      for ( var team=0; team<num_teams; team++ )
      {
         for ( var oppnt=0; oppnt<num_teams; oppnt++ )
         {
            if ( team != oppnt )
            {
               if ( pfl_scores[team][week] > pfl_scores[oppnt][week] )
                  tWinArr[team]++;
               else if ( pfl_scores[team][week] < pfl_scores[oppnt][week] )
                  tLossArr[team]++;
            }
         }
      }
   }

   var plabels = new Array();
   var jteams = 0;
   for ( team=0; team<num_teams; team++ )
   {
      var id = document.getElementById("team" + team);
      if ( id.checked == true )
      {
         league_wins[jteams] = tWinArr[team];
         league_losses[jteams] = tLossArr[team];
         tot_wins[jteams] = 0.0;
         tot_losses[jteams] = 0.0;

         for ( week=0; week<pfl_scores[team].length; week++ )
         {
            tot_games = wins = losses = 0;
            for ( oppnt=0; oppnt<num_teams; oppnt++ )
            {
               if ( team != oppnt )
               {
                  teamscore = pfl_scores[team][week];
                  oppnscore = pfl_scores[oppnt][week];

                  if ( teamscore > oppnscore )
                     wins++;
                  else
                     losses++;
               }
            }

            tot_wins[jteams] += wins;
            tot_losses[jteams] += losses;
            tot_games += (wins + losses);
         }
         plabels[jteams] = pfl_labels[team];
         jteams++;
      }
   }

   var max_wins = 0;
   var max_losses = 0;

   //for ( team=0; team<num_teams; team++ )
   for ( team=0; team<jteams; team++ )
   {
      if ( tot_wins[team] >  max_wins )
         max_wins = tot_wins[team];
      if ( tot_losses[team] >  max_losses )
         max_losses = tot_losses[team];
   }

   //var colors = new Array ( "red", "green", "blue", "yellow" );
   var colors = new Array ( "#00ff00", "#ff0000", "#0000ff", "#ffff00" );

   var chart = new BizBarChart();
   chart.setPlotType(chart.ADJACENT);
   chart.setColors(colors);
//LATER   chart.labelBars(true);

   if ( pfl_scores[0].length != 0 && pfl_scores[0][0] != 0 )
   {
      chart.addLine(tot_wins);
      chart.addLine(tot_losses);
   }

   //chart.setXLabels(pfl_labels);
   chart.setXLabels(plabels);
//   chart.rotateLabels(true);

//   for ( var jndx=10; jndx<85; jndx += 5 )
//   {
//      if ( max_wins < jndx )
//      {
//         chart.setYMax(jndx);
//         chart.setNumTics(jndx);
//         break;
//      }
//   }

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
   chart.setYMax(100);
   chart.setNumTics(10);
}

   chart.setThreeD(true);
   chart.setThreeDAxes(true);

   chart.labelValues(true);

//   //chart.setTitleFont(new Font("SansSerif", Font.BOLD, 18));
   chart.setPlotTitle("League Record vs All Teams after Week " + pfl_scores[0].length);

//   //chart.setYAxisFont(new Font("SansSerif", Font.BOLD, 14));
   chart.setYTitle("Win/Loss Percentage");

//   chart.addRefLine(50.0);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   // Add legend
   // Add labels in same order as data!!!
   //var legends = new Array( "League Wins", "League Losses", "All Wins", "All Losses" );
   var legends = new Array( "Wins", "Losses");

   var legend = new BizLegend();
   legend.setLayout(BizLegend.HORIZONTAL);
   for ( indx=0; indx<legends.length; indx++ )
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

   //need up to 12 colors!!!
   var num_weeks = pfl_scores[0].length;
   var wscore = new Array();
   var week;

   for ( week=0; week<num_weeks; week++ )
      wscore[week] = 0,0;

   for ( team=0; team<pfl_scores.length; team++ )
   {
      var id = document.getElementById("team" + team);
      if ( id.checked == true )
         chart.addLine(pfl_scores[team], "", chart.colors[team]);

      for ( week=0; week<num_weeks; week++ )
      {
         wscore[week] += pfl_scores[team][week];
      }
   }

   var num_teams = pfl_scores.length;
   var season_avg = 0.0;
   for ( week=0; week<num_weeks; week++ )
   {
      wscore[week] /= num_teams;
      season_avg += wscore[week];
      wscore[week] = wscore[week].toFixed(2);
      //console.log("Wk " + (week+1) + ": " + wscore[week]);
   }
//   chart.addLine(wscore, "Weekly Avg", "#000000");
   season_avg /= num_weeks;
   chart.addRefLine(season_avg.toFixed(2));

   //chart.setAutoScale(true);
   chart.setNumTics(15);
   chart.setYMax(230.0);
   chart.setYMin(80.0);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   var legendId = document.getElementById("legend_canvas");
   var cwidth = legendId.width;
   var cheight = legendId.height;

   // Add labels in same order as data!!!
   var legend = new BizLegend();
   for ( var indx=0; indx<pfl_labels.length; indx++ )
      legend.addLabel(pfl_labels[indx]);

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

//   chart.setXLabels(pfl_labels);
   chart.setXTitle(xaxisTitle);
   chart.setYTitle(yaxisTitle);
   chart.setPlotTitle(plotTitle);
   chart.setHorzGrid(true);
   chart.setLineWidth(2);
//   chart.labelMaxValue(true);
//   chart.labelMinValue(true);

   // Everyone should be playing same number of weeks
   var num_weeks = pfl_scores[0].length;
   if ( num_weeks == 1 )
   {
      chart.setPlotType(chart.MARKER_PLOT);

      for ( var team=0; team<pfl_scores.length; team++ )
      {
         var sdev = new Array();
         sdev[0] = pfl_scores[team][0];
         var id = document.getElementById("team" + team);
         if ( id.checked == true )
            chart.addLine(sdev, pfl_labels[team], chart.colors[team]);
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
      for ( team=0; team<pfl_scores.length; team++ )
      {
         params = lin.calcParams(xarr, pfl_scores[team]);

         for ( indx=0; indx<num_weeks; indx++ )
         {
            smooth[indx] = lin.calcPoint(params, indx+1);
         }

         var id = document.getElementById("team" + team);
         if ( id.checked == true )
            chart.addLine(smooth, pfl_labels[team], chart.colors[team]);
      }
   }

   //chart.setAutoScale(true);
   chart.setNumTics(12);
   chart.setYMax(200.0);
   chart.setYMin(80.0);

   var canvasId = document.getElementById("plot_canvas");
   var cwidth = canvasId.width;
   var cheight = canvasId.height;
   chart.draw("plot_canvas", cwidth, cheight);

   var legendId = document.getElementById("legend_canvas");
   var cwidth = legendId.width;
   var cheight = legendId.height;

   // Add labels in same order as data!!!
   var legend = new BizLegend();
   for ( var indx=0; indx<pfl_labels.length; indx++ )
      legend.addLabel(pfl_labels[indx]);

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

   var stdDev;
   for ( team=0; team<pfl_scores.length; team ++ )
   {
      // Calculate the std dev for each
      stdDev = calcStdDev(pfl_scores[team], team);

      var id = document.getElementById("team" + team);
      if ( id.checked == true )
         chart.addLine(stdDev, "", chart.colors[team]);
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
   for ( var indx=0; indx<pfl_labels.length; indx++ )
      legend.addLabel(pfl_labels[indx]);

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


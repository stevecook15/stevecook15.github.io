function SmoothedScoringPlot()
{
   var plotTitle = "Smoothed Weekly Scoring";
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

   var jndx = 0;
   for ( var indx=0; indx<teams.length; indx++ )
   {
      var id = document.getElementById("team" + indx);
      if ( id.checked == true )
      {
         var scores = pfl_scores[team];
         var xpts = new Array();
         var ypts = new Array();

         for ( i=0; i<scores.length; i++ )
         {
            xpts[i] = i; ypts[i] = scores[i];
         }

         var smooth = new Array();
         var x = 0.0, y;
         var i = 0;
         while ( x <= scores.length )
         {
            y = predictY(xpts, ypts, x);
// Add to output array
            smooth[i] = y;
            x += 0.5;
            i++;
         }

         chart.addLine(smooth, "", chart.colors[indx]);
         labels[jndx] = teams[indx].name;
         colors[jndx] = chart.colors[indx];
         jndx++;
      }
   }

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
         var txt = "How consistent is your scoring? Blind dog finding a bone " +
                   "every now and then or actually a good team. You decide...";
         detailsTxt.innerText = txt;     // IE
         detailsTxt.textContent = txt;   // Real browsers
   }
}

function predictY(xpts, ypts, x)
{
   if ( xpts.length == 0 )
      return 0.0;
 
   var lagrange = new Array();
   for ( i=0; i<xpts.length; i++ )
   {
       lagrange[i] = 1;

       for ( k=0; k<xpts.length; k++ )
       {
           if ( i != k )
           {
               lagrange[i] *= (x - xpts[k]) / (xpts[i] - xpts[k]);
           }
       }
   }

   var y = 0.0;
   for ( i=0; i<ypts.length; i++ )
   {
       y += lagrange[i] * ypts[i];
   }
 
   return y;
}


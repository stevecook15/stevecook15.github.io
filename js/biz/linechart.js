
//
// linechart.js - A simplistic HTML canvas tag line chart widget
//
//  Copyright (c) 2007 Steven A. Cook
//
//  This program is free software; you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation; either version 2 of the License, or
//  (at your option) any later version.
//
//  This software is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//

class BizLineChart
{
   constructor()
   {
      this.DEBUG = true;

      this.XORG_OFFSET = 60;
      this.XTOP_OFFSET = 20;
      this.YORG_OFFSET = 44;
      this.YTOP_OFFSET = 30;

      this.YPLOT_OFFSET  = 10;
      this.THREED_OFFSET = 10;

      this.YONLY_PLOT  = 0;
      this.AREA_PLOT   = 1;
      this.RIBBON_PLOT = 2;
      this.MARKER_PLOT = 3;
      this.XY_PLOT     = 4;   // XY plot
      this.LOGY_PLOT   = 5;   // Log Y plot
      this.LOGX_PLOT   = 6;   // Log X plot
      this.LOGLOG_PLOT = 7;   // Log XY plot

      this.BLACK = "#000000";
      this.WHITE = "#ffffff";
      this.GRAY = "#aaaaaa";

      //                        // red,       blue,     green,    purple,
      //                        // orange,    cyan,     yellow,   magenta
      //this.colors = new Array("#ff0000", "#0000ff", "#008800", "#900090",
      //                        "#ffa500", "#00ffff", "#ffff00", "#008000");

      //this.shadows = new Array("#a00000", "#0000a0", "#007000", "#700070",
      //                         "#cc8500", "#00a0a0", "#a0a000", "#007000");

      this.colors = new Array("#ff0000",  // red
                              "#0000ff",  // blue
                              "#008000",  // green
                              "#800080",  // purple
                              "#ffa580",  // orange
                              "#00ffff",  // cyan
                              "#ffff00",  // yellow
                              "#008080",  // teal
                              "#ff00ff",  //pink
                              "#00ff00",  // lime
                              "#800000",  // maroon
                              "#808000"); // olive

//gray #808080
//navy #000080
//silver #C0C0C0

      // Internal values
      this.plotData = new Array();
      this.plotLabel = new Array();
      this.plotColors = new Array();
      this.plotXScale = 1.0;
      this.plotYMax = 100.0;
      this.plotYMin = 0.0;
      this.xOrg = 0;
      this.yOrg = 0;
      this.xTop = 0;
      this.yTop = 0;
      this.xScale = 0;
      this.yScale = 0;

      // Settable params
      this.plotType = this.YONLY_PLOT;
      this.plotWidth = 0;
      this.plotHeight = 0;
      this.plotTitle = null;
      this.yAxisTitle = null;
      this.xAxisTitle = null;
      this.xAxisLabels = null;
      this.yAxisLabels = null;
      this.backgroundColor = "#ffffff";
      this.axesColor = "#000000";
      this.xAxisStartValue = 1;
      this.xAxisIncrement = 1;
      this.numTics = 5;
      this.drawMarkers = true;
      this.labelAllPts = false;
      this.labelMax = false;
      this.labelMin = false;
      this.rotate_xflag = false;   // Rotate x axis labels
      this.rotate_yflag = false;   // Rotate y axis labels
      this.auto_scale = false;
      this.vertGrid = false;
      this.horzGrid = false;
      this.lineWidth = 1;

      this.refLine = false;
      this.refValue = 0.0;

      // Need to get fonts sizing same for text and numbers!
      this.titleFont = 10;
      this.xAxisFont = 10;
      this.yAxisFont = 10;
      this.xLabelsFont = 10;
      this.yLabelsFont = 10;
      this.refLineFont = 10;

      this.titleFontSize = 12;
      this.xAxisFontSize = 12;
      this.yAxisFontSize = 12;
      this.xLabelsFontSize = 10;
      this.yLabelsFontSize = 10;
      this.refLineFontSize = 10;

      if ( this.plotData.length != 0 )
         this.initialize();
   }

initialize() 
{  
   var lineData;
   
   if ( this.plotData.length != 0 )
   {
      for ( var indx=0; indx<this.plotData.lenth; indx++ )
      {
         lineData = this.plotData[indx];
         lineData.length = 0;
      }
   }
   
   this.plotData.length = 0;
}


/**
 * Add a data line to the plot
 *
 * @param data      Array of Y values
 * @param lineLabel Optional info label for line, displayed at start
 *                   or end of line 
 */
addLine(data, lineLabel, lineColor)
{
   // Create and fill the data elements
   var lineData = new Array();

   for ( var indx=0; indx<data.length; indx++ )
      lineData[indx] = data[indx];

   var num_lines = this.plotData.length;
   this.plotData[num_lines] = lineData;

   if ( lineColor != null )
   {
      this.plotColors[num_lines] = lineColor;
   }
   else
   {
      // Get next color in list...
      var jndx = num_lines % this.colors.length;
      this.plotColors[num_lines] = this.colors[jndx];
   }

   if ( lineLabel != null )
      this.plotLabel[num_lines] = lineLabel;
   else
      this.plotLabel[num_lines] = "";
}


/**
 * Set the max value used for Y axis scaling
 *
 * @param scale     Max value
 */
setYMax(scale)
{
   this.plotYMax = scale;
   if ( this.plotYMax == 0.0 )  // Small sanity check....
      this.plotYMax = 1.0;
}


/**
 * Set the min value used for Y axis scaling
 *
 * @param scale     Min value
 */
setYMin(scale)
{
   this.plotYMin = scale;
   if ( this.plotYMin >= this.plotYMax )  // Small sanity check....
      this.plotYMin = 0.0;
}

/**
 * Set the plot display type
 *
 * @param plot_type     Type of plot, e.g. line, area, ribbon...
 */
setPlotType(plot_type)
{
   this.plotType = plot_type;
}


/**
 * Set the overall plot title
 *
 * @param title     Title for the plot
 */
setPlotTitle(title)
{
   this.plotTitle = title;
}


/**
 * Set the Y axis title
 *
 * @param title     Title to display on Y axis
 */
setYTitle(title)
{
   this.yAxisTitle = title;
}


/**
 * Set the X axis title
 *
 * @param title     Title to display on X axis
 */
setXTitle(title)
{
   this.xAxisTitle = title;
}


/**
 * Set the background color for the plot
 *
 * @param color     Color to draw background with
 */
setBackground(color)
{
   this.backgroundColor = color;
}


/**
 * Set the color for the Axes lines
 *
 * @param color     Color to draw axes with
 */
setAxesColor(color)
{
   this.axesColor = color;
}


/**
 * Set the overall font to use with the plot
 *
 * @param font     Font for the plot
 */
setFont(font)
{
   this.titleFont = font;
   this.xAxisFont = font;
   this.yAxisFont = font;
   this.xLabelsFont = font;
   this.yLabelsFont = font;
   this.refLineFont = font;
}


/**
 * Set the font to use for the plot title
 *
 * @param font     Font for the title
 */
setTitleFont(font)
{
   this.titleFont = font;
}


/**
 * Set the font to use for the X axis title
 *
 * @param font     Font for the title
 */
setXAxisFont(font)
{
   this.xAxisFont = font;
}


/**
 * Set the font to use for the Y axis title
 *
 * @param font     Font for the title
 */
setYAxisFont(font)
{
   this.yAxisFont = font;
}


/**
 * Set the font to use for the X axis title
 *
 * @param font     Font for the title
 */
setXLabelsFont(font)
{
   this.xLabelsFont = font;
}


/**
 * Set the font to use for the Y axis title
 *
 * @param font     Font for the title
 */
setYLabelsFont(font)
{
   this.yLabelsFont = font;
}


/**
 * Set the font to use for the reference lines
 *
 * @param font     Font for the reference lines
 */
setRefLineFont(font)
{
   this.refLineFont = font;
}


addRefLine(value)
{
   this.refLine = true;
   this.refValue = value;
}

setXLabels(labels)
{
   // Create and fill the label elements
   var num_pts = labels.length;

   this.xAxisLabels = new Array();

   for ( var indx=0; indx<num_pts; indx++ )
      this.xAxisLabels[indx] = labels[indx];
}

setYLabels(labels)
{
   // Create and fill the label elements
   var num_pts = labels.length;

   this.yAxisLabels = new Array();

   for ( var indx=0; indx<num_pts; indx++ )
      this.yAxisLabels[indx] = labels[indx];
}

/*
 * Flag to rotate X axis labels 90 degrees (ie vertical)
 * @param {boolean} rot_flag Rotate X axis labels
 */
rotateXLabels(rot_flag)
{
   this.rotate_xflag = rot_flag;
}


/*
 * Flag to rotate Y axis labels 90 degrees (ie horizontal)
 * @param {boolean} rot_flag Rotate Y axis labels
 */
rotateYLabels(rot_flag)
{
   this.rotate_yflag = rot_flag;
}


/**
 * Flag to display text detailing value of the max data value
 *
 * @param label_flag     Display max value
 */
labelMaxValue(label_flag)
{
   this.labelMax = label_flag;
}


/**
 * Flag to display text detailing value of the min data value
 *
 * @param label_flag     Display max value
 */
labelMinValue(label_flag)
{
   this.labelMin = label_flag;
}


/**
 * Flag to display marker detailing value of the all data values
 *
 * @param label_flag     Display data value
 */
labelAllValues(label_flag)
{
   this.labelAllPts = label_flag;
}


/**
 * Set number of tic marks on Y axis
 *
 * @param num_tics     Number of tic marks
 */
setNumTics(num_tics)
{
   this.numTics = num_tics;
}


/**
 * Value to start X axis labeling with
 *
 * @param startX      Value of first X axis tic (default 1)
 */
setXStartValue(startX)
{
   this.xAxisStartValue = startX;
}


/**
 * Value to increment X axis labeling by
 *
 * @param incrX      Value of increment (default 1)
 */
setXIncrement(incrX)
{
   this.xAxisIncrement = incrX;
}

/**
 * Width of line to draw plot lines
 *
 * @param line_width      Value of line width (default 1)
 */
setLineWidth(line_width)
{
   this.lineWidth = line_width;
}

setAutoScale(scale_flag)
{
   this.auto_scale = scale_flag;
}

setYScale(scale)
{
//ZZZZ LATER!
}

setVertGrid(flag)
{
   this.vertGrid = flag;
}

setHorzGrid(flag)
{
   this.horzGrid = flag;
}


//FUTURE:  Be able to define string based X axis too, doesn't make much
//           sense but hey, if they wanna do it...


draw(canvasID, width, height)
{
   var canvas = document.getElementById(canvasID);
   if ( canvas == null || canvas.length == 0 )
   {
      alert("linechart no canvas");
      return;
   }

   if ( canvas.getContext == null )
      G_vmlCanvasManager.initElement(canvas);

   if ( canvas.getContext == null )
   {
      alert("linechart still no context");
      return;
   }

   var ctx = canvas.getContext('2d');

   // this adds the text functions to the ctx
   CanvasTextFunctions.enable(ctx);

//ZZZZ Need to modify based on titles being displayed!!!
   var TITLE_FONT_HEIGHT = 8;

   var yOffset = this.YORG_OFFSET;
   if ( this.rotate_xflag == true )  // Save more space for X axis tic labels
      yOffset += 50;

   this.plotWidth = width - this.XORG_OFFSET - this.XTOP_OFFSET;
   this.plotHeight = height - yOffset - this.YTOP_OFFSET - TITLE_FONT_HEIGHT;

   this.xOrg = this.XORG_OFFSET;
   this.xTop = width - this.XTOP_OFFSET;
   this.yOrg = height - yOffset;
   this.yTop = this.YTOP_OFFSET;

   var ymin, ymax, num_tics;

   if ( this.auto_scale == true || this.plotType == this.AREA_PLOT )
   {
      ymin = this.calcMinValue();
      ymax = this.calcMaxValue();

      var axes = new BizScaleAxes();
      axes.calculate(ymin, ymax, this.numTics);

      ymin = axes.getMinValue();
      ymax = axes.getMaxValue();
      num_tics = axes.getIntervals();
   }
   else
   {
      ymin = this.plotYMin;
      ymax = this.plotYMax;
      num_tics = this.numTics;
   }

   var color;

   var max_pts = this.calcMaxPoints();

   this.xScale = this.plotWidth/max_pts;
   this.yScale = this.plotHeight/(ymax-ymin);

   ctx.fillStyle = this.backgroundColor;
   ctx.fillRect(0, 0, width, height);

   this.drawAxes(ctx, max_pts, ymin, ymax, num_tics);

   var num_sets = this.plotData.length;
   for ( var indx=0; indx<num_sets; indx++ )
   {
      switch ( this.plotType )
      {
         case this.RIBBON_PLOT:
            color = this.plotColors[indx];
            this.drawRibbonPlot(ctx, indx, ymin, ymax, color);
            break;

         case this.AREA_PLOT:
            color = this.plotColors[num_sets-1-indx];
            this.drawAreaPlot(ctx, num_sets-1-indx, ymin, color);
            break;

         case this.YONLY_PLOT:
         case this.MARKER_PLOT:
         default:
            color = this.plotColors[indx];
            this.drawPlot(ctx, indx, ymin, color);
            break;
      }
   }

// Needs to be in percent value when in percent mode...
   if ( this.refLine == true )
   {
//ZZZZ Dashed line function needed
      //ZZZZctx.strokeStyle = dashed;

      var y = this.yOrg - (this.refValue - ymin)*this.yScale;

      ctx.strokeStyle = this.BLACK;
      ctx.beginPath();
      ctx.moveTo(this.xOrg, y);
      ctx.lineTo(this.xTop, y);
      ctx.stroke();

      var xp = this.xOrg - 2;

      var yp = y + ctx.fontHeight(this.refLineFont, this.refLineFontSize)/2 - 2;

      ctx.lineWidth = 1;
      ctx.drawTextRight(this.refLineFont, this.refLineFontSize,
                             xp, yp, this.refValue + "");
   }
}


drawAxes(ctx, num_pts, ymin, ymax, num_tics)
{
   var x, y, x1, x2, y1, y2;

   ctx.strokeStyle = this.axesColor;

//ZZZ Line width?

   ctx.beginPath();
   ctx.moveTo(this.xTop, this.yOrg);
   ctx.lineTo(this.xOrg, this.yOrg);
   ctx.lineTo(this.xOrg, this.yTop);
   ctx.stroke();

   // Draw the X axis labels
   var xval = this.xAxisStartValue;
   for ( var indx=0; indx<num_pts; indx++ )
   {
      x = this.xScale*indx + this.xOrg + this.xScale/2.0;

      ctx.beginPath();
      ctx.moveTo(x, this.yOrg);
      ctx.lineTo(x, this.yOrg+10.0);
      ctx.stroke();

      if ( this.vertGrid == true )
      {
         ctx.beginPath();
         ctx.moveTo(x, this.yOrg);
         ctx.lineTo(x, this.yTop);
         ctx.stroke();
      }

      if ( this.xAxisLabels == null || this.xAxisLabels.length == 0 )  // Draw the index number
      {
         ctx.strokeStyle = this.BLACK;
         ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize, x,
                                this.yOrg+12+8, xval + "");
         xval += this.xAxisIncrement;
      }
      else   // User passed long string based labels
      {
         try
         {
            var label = this.xAxisLabels[indx];

            ctx.strokeStyle = this.BLACK;

            if ( this.rotate_xflag == true  && label != null )
            {
               ctx.save();
               ctx.translate(x-3, this.yOrg+12);
               ctx.rotate(Math.PI/2);
               var font_size = this.xLabelsFontSize;
               ctx.drawText(this.xLabelsFont, font_size, 0, 0, label);
               ctx.restore();
            }
            else if ( label != null )
            {
//ZZZ TODO, See if label longer than width, cut/reduce/etc...
//ZZZ Move every other label down? Use more space?
//ZZZ Or if more than one word, do a breakline, draw second below it...
               var nlab;
               var nlab2 = "";
               if ( label.length > 7 )
               {
                  if ( label.indexOf(" ") == 5 )
                  {
                     nlab = label.substring(0, 5);
                     nlab2 = label.substring(5);
                  }
                  else
                  {
                     nlab = label.substring(0, 7);
                     nlab2 = label.substring(7);
                  }
               }
               else
                  nlab = label;

               var font_size = this.xLabelsFontSize;
               var llen = ctx.measureText(this.xLabelsFont, font_size, nlab);
               while ( ctx.measureText(this.xLabelsFont, font_size, nlab) > this.xScale &&
                      font_size > 4 )
                  font_size--;

               ctx.drawTextCenter(this.xLabelsFont, font_size,
                                  x, this.yOrg+12+font_size, nlab);

               if ( nlab2 != "" )
               {
                  ctx.drawTextCenter(this.xLabelsFont, font_size,
                                  x, this.yOrg+12+font_size+font_size, nlab2);
               }
            }
         }
         catch ( ex )
         {
            if ( this.DEBUG == true )
               alert("Error: Label at " + indx + " -> " + ex);
         }
      }
   }

   var yoff = (this.yOrg-this.yTop)/num_tics;
   var yval = (ymax-ymin)/num_tics;

   // Draw the Y axis labels
   for ( var indx=0; indx<=num_tics; indx++ )
   {
      y = this.yOrg - yoff*indx;

      ctx.strokeStyle = this.BLACK;

      ctx.beginPath();
      ctx.moveTo(this.xOrg, y);
      ctx.lineTo(this.xOrg-10.0, y);
      ctx.stroke();

      if ( this.horzGrid == true )
      {
         ctx.beginPath();
         ctx.moveTo(this.xOrg, y);
         ctx.lineTo(this.xTop, y);
         ctx.stroke();
      }

      var xpos = this.xOrg - 12;
      var ypos = y + ctx.fontHeight(this.yLabelsFont, this.yLabelsFontSize)/2 - 2;

      if ( this.yAxisLabels == null || this.yAxisLabels.length == 0 )  // Draw the index number
      {
         var ytxt = yval*indx + ymin;
         ctx.drawTextRight(this.yLabelsFont, this.yLabelsFontSize, xpos, ypos, ytxt + "");
      }
      else
      {
         var label = this.yAxisLabels[indx];
         ctx.drawTextRight(this.yLabelsFont, this.yLabelsFontSize, xpos, ypos, label);
      }
   }

   if ( this.horzGrid == true ) // Add border to right side
   {
      ctx.beginPath();
      ctx.moveTo(this.xTop, this.yOrg);
      ctx.lineTo(this.xTop, this.yTop);
      ctx.stroke();
   }
   else if ( this.vertGrid == true )  // Add border to top
   {
      ctx.beginPath();
      ctx.moveTo(this.xOrg, this.yTop);
      ctx.lineTo(this.xTop, this.yTop);
      ctx.stroke();
   }

   // Draw the plot titles
   if ( this.xAxisTitle != null && this.xAxisTitle.length > 0 )
   {
      var xpos = this.xOrg + this.plotWidth/2;

      var yOffset = this.YORG_OFFSET;
      if ( this.rotate_xflag == true )  // Save more space for X axis tic labels
         yOffset += 50;

      //var ypos = this.plotHeight + yOffset + this.YTOP_OFFSET + 6;
      var ypos = this.yOrg + 14;

      ctx.drawTextCenter(this.xAxisFont, this.xAxisFontSize, xpos, ypos, this.xAxisTitle);
   }

   if ( this.yAxisTitle != null && this.yAxisTitle.length > 0 )
   {
      var angle = Math.PI/4;
// Need to set the plot origins to some point so its centered properly
      //ZZZZ ctx.save();
      //ZZZZ ctx.rotate(3*Math.PI/2);
      //ZZZZctx.drawText(this.yAxisFont, this.yAxisFontSize, 0, 0,  yAxisTitle);
      //ZZZZ ctx.rotate(-3*Math.PI/2);
      //ZZZZ ctx.restore();
   }

   if ( this.plotTitle != null && this.plotTitle.length != 0 )
   {
      var xpos = this.xOrg + this.plotWidth/2;
      var ypos = ctx.fontHeight(this.titleFont, this.titleFontSize) + 4;
      ctx.drawTextCenter(this.titleFont, this.titleFontSize, xpos, ypos, this.plotTitle);
   }
}

drawRibbonPlot(ctx, curr_set, ymin, ymax, color)
{
   var lineData = this.plotData[curr_set];

   var zpos = 0; //this.THREED_OFFSET * (this.plotData.length-1);
   var XBAR = 12;
   var YBAR = 10;

   var leftX, leftY;
   var xp, yp;
   var y1, pt_sz;

   var point_space = this.plotWidth / this.calcMaxPoints();

   var x0 = this.xOrg + this.xScale/2.0;
   var y0 = -1;

   // Save initial point
   var leftX = x0 = this.xOrg + this.xScale/2.0;
   var leftY = (lineData[0]-ymin)*this.yScale;
   var rightY = (lineData[lineData.length-1]-ymin)*this.yScale;

   for ( var j=0; j<lineData.length; j++ )
   {
      xp = x0;
      y1 = (lineData[j]-ymin)*this.yScale;
      yp = this.yOrg - y1;

      if ( y0 >= 0.0 && y1 >= 0.0 )
      {
         var xpts = new Array(5);   // X Data for polygon
         var ypts = new Array(5);   // Y Data for polygon

         var xtmp = x0 - point_space;
         var ytmp = this.yOrg - y0;

         xpts[0] = xtmp + zpos;
         xpts[1] = xtmp + zpos + XBAR;
         xpts[2] = xp + zpos + XBAR;
         xpts[3] = xp + zpos;
         xpts[4] = xtmp + zpos;

         ypts[0] = ytmp - zpos;
         ypts[1] = ytmp - zpos - YBAR;
         ypts[2] = yp - zpos - YBAR;
         ypts[3] = yp - zpos;
         ypts[4] = ytmp - zpos;

         ctx.beginPath();
         ctx.moveTo(xpts[0], ypts[0]);
         for ( var jndx=1; jndx<xpts.length; jndx++ )
            ctx.lineTo(xpts[jndx], ypts[jndx]);

         ctx.fillStyle = color;
         ctx.fill();

         ctx.fillStyle = this.BLACK;
         ctx.stroke();
      }

      y0 = y1;
      x0 += point_space;
   }

   if ( rightY > leftY )
   {
      var ypt = parseInt(this.yOrg - leftY) - 4;
      ctx.drawTextRight(this.xLabelsFont, this.xLabelsFontSize,
                               parseInt(leftX)-2, ypt, this.plotLabel[curr_set]);
   }
   else
   {
      var ypt = parseInt(this.yOrg - rightY) - 4;
      ctx.drawText(this.xLabelsFont, this.xLabelsFontSize,
                               parseInt(x0-point_space)+XBAR+2, ypt, this.plotLabel[curr_set]);
   }
}

drawAreaPlot(ctx, curr_set, ymin, color)
{
   var lineData = this.plotData[curr_set];

   var max_pts = this.calcMaxPoints();
   var xpts = new Array(max_pts+2);
   var ypts = new Array(max_pts+2);

   var xp = this.xOrg + this.xScale/2.0; // + this.YPLOT_OFFSET;

   // Divide by number of lines
   var area_scale = this.yScale; // / this.plotData.length;

   var kndx = 0;
   for ( var indx=0; indx<lineData.length; indx++ )
   {
      if ( indx == 0 )
      {
         xpts[kndx] = xp;
         ypts[kndx] = this.yOrg;
         kndx++;
      }

      // Sum up previous data points
      if ( curr_set > 0 )
      {
         var tmpData;
         var ytmp = 0;
         for ( var jndx=0; jndx<=curr_set; jndx++ )
         {
            tmpData = this.plotData[jndx];
            ytmp += tmpData[indx];
         }

         xpts[kndx] = xp;
         ypts[kndx] = this.yOrg - (ytmp-ymin)*area_scale;
         kndx++;
      }
      else
      {
         xpts[kndx] = xp;
         ypts[kndx] = this.yOrg - (lineData[indx]-ymin)*area_scale;
         kndx++;
      }

      if ( indx == lineData.length-1 )
      {
         xpts[kndx] = xp;
         ypts[kndx] = this.yOrg;
         kndx++;
      }

      xp += this.xScale;
   }

   ctx.beginPath();
   ctx.moveTo(xpts[0], ypts[0]);
   for ( var jndx=1; jndx<kndx; jndx++ )
      ctx.lineTo(xpts[jndx], ypts[jndx]);

   ctx.fillStyle = color;
   ctx.fill();

   ctx.fillStyle = this.BLACK;
   ctx.stroke();

//   if ( markerFlag == true )
//   {
//      for ( int j=0; j<npts; j++ )
//      {
//         xp = xpoints[j] - 3;
//         yp = ypoints[j] - 3;
//         g.fillArc(xp, yp, 5, 5, 0, 360);
//      }
//   }
}

drawPlot(ctx, curr_set, ymin, color)
{
   var lineData = this.plotData[curr_set];
   var x1, y1, x2, y2;

   var num_pts = lineData.length;
   var minValue =  1000000000.0;
   var maxValue = -1000000000.0;
   var minIndex = -1;
   var maxIndex = -1;
   var xp, yp;

   if ( this.labelMax == true || this.labelMin == true )
   {
      for ( var indx=0; indx<num_pts; indx++ )
      {
         if ( lineData[indx] > maxValue )
         {
            maxValue = lineData[indx];
            maxIndex = indx;
         }
         if ( lineData[indx] < minValue )
         {
            minValue = lineData[indx];
            minIndex = indx;
         }
      }
   }

   xp = x1 = this.xOrg + this.xScale/2.0;
   yp = y1 = this.yOrg - (lineData[0]-ymin)*this.yScale;

//ZZZ Need to ensure proper label colors
   ctx.strokeStyle = this.BLACK;

   if ( this.labelAllPts == true ) // Display value for each point
   {
//ZZZ Need to use numberHeight
      var ytxt = lineData[0];
      ctx.strokeStyle = this.BLACK;
      ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize,
                               x1, y1-6, ytxt + "");
   }
   else
   {
      if ( this.labelMax == true && maxIndex == 0 )
      {
//ZZZ Need to use numberHeight
         var ytxt = lineData[maxIndex];
         ctx.strokeStyle = this.BLACK;
         ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize,
                               x1, y1-6, ytxt + "");
      }

      if ( this.labelMin == true && minIndex == 0 )
      {
//ZZZ Need to use numberHeight
         var ytxt = lineData[minIndex];
         ctx.strokeStyle = this.BLACK;
         ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize,
                               x1, y1-6, ytxt + "");
      }
   }

   if ( this.drawMarkers == true || this.plotType == this.MARKER_PLOT )
   {
         ctx.strokeStyle = color;
         ctx.lineWidth = this.lineWidth;
         ctx.beginPath();
         ctx.moveTo(x1-5, y1);
         ctx.lineTo(x1, y1+5);
         ctx.lineTo(x1+5, y1);
         ctx.lineTo(x1, y1-5);
         ctx.lineTo(x1-5, y1);
         ctx.fillStyle = color;
         ctx.fill();
   }


   for ( var indx=1; indx<num_pts; indx++ )
   {
      x2 = this.xScale*indx + this.xOrg + this.xScale/2.0;
      y2 = this.yOrg - (lineData[indx]-ymin)*this.yScale;

      if ( this.plotType == this.YONLY_PLOT )
      {
         ctx.strokeStyle = color;
         ctx.lineWidth = this.lineWidth;
         ctx.beginPath();
         ctx.moveTo(x1, y1);
         ctx.lineTo(x2, y2);
         ctx.stroke();
      }

//TODO Need to define multiple marker types
      if ( this.drawMarkers == true || this.plotType == this.MARKER_PLOT )
      {
         ctx.beginPath();
         ctx.moveTo(x2-5, y2);
         ctx.lineTo(x2, y2+5);
         ctx.lineTo(x2+5, y2);
         ctx.lineTo(x2, y2-5);
         ctx.lineTo(x2-5, y2);
         ctx.fillStyle = color;
         ctx.fill();
      }

      if ( this.labelAllPts == true )
      {
//ZZZ Need to use numberHeight
         ctx.strokeStyle = this.BLACK;
         ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize,
                               x2, y2-6, lineData[indx] + "");
      }
      else
      {
         if ( this.labelMax == true && maxIndex == indx )
         {
//ZZZ Need to use numberHeight
            var ytxt = lineData[indx];
            ctx.strokeStyle = this.BLACK;
            ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize,
                               x2, y2-6, ytxt + "");
         }

         if ( this.labelMin == true && minIndex == indx )
         {
//ZZZ Need to use numberHeight
            var ytxt = lineData[indx];
            ctx.strokeStyle = this.BLACK;
            ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize,
                               x2, y2-6, ytxt + "");
         }
      }

      x1 = x2;
      y1 = y2;
   }

   if ( yp < y2 )
      ctx.drawTextRight(this.xLabelsFont, this.xLabelsFontSize,
                               xp-2, yp-4, this.plotLabel[curr_set]);
   else
      ctx.drawText(this.xLabelsFont, this.xLabelsFontSize,
                               x2+2, y2-4, this.plotLabel[curr_set]);
}

// Determine maximum number of x axis data points among the sets of data
calcMaxPoints()
{
   var max_pts = 0;
   var lineData;

   for ( var indx=0; indx<this.plotData.length; indx++ )
   {
      lineData = this.plotData[indx];
      if ( lineData.length > max_pts )
         max_pts = lineData.length;
   }

   return max_pts;
}


calcMinValue()
{
   return 0.0;
}

calcMaxValue()
{
   var max_val = -999999.0;

   if ( this.plotType == this.AREA_PLOT )  //Build up a height chart
   {
      var max_pts = this.calcMaxPoints();
      var maxArray = new Array(max_pts);

      for ( var i=0; i<max_pts; i++ )
         maxArray[i] = 0;

      // Sum Y values for each pt
      for ( var i=0; i<this.plotData.length; i++ )
      {
         lineData = this.plotData[i];
         for ( var j=0; j<lineData.length; j++ )
         {
            maxArray[j] += lineData[j];
         }
      }

      // Find largest sum
      for ( var i=0; i<max_pts; i++ )
      {
         if ( maxArray[i] > max_val )
            max_val = maxArray[i];
      }
   }
   else  // Not a cumulative type plot, just find largest Y value
   {
      for ( var i=0; i<this.plotData.length; i++ )
      {
         lineData = this.plotData[i];
         for ( var j=0; j<lineData.length; j++ )
         {
            if ( lineData[j] > max_val )
               max_val = lineData[j];
         }
      }
   }

   return max_val;
}

}

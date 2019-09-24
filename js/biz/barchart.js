
// Clear an area: clearRect(x,y,width,height) : Clears the specified area
//   and makes it fully transparent

/*
 * barchart.js - A simple minded bar chart class
 *
 *  Copyright (c) 2010 Steven A. Cook
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This software is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

/*
 * BizBarChart - a minimal bar javascript charting library using the html <canvas> tag
 * @constructor
 */
class BizBarChart
{
   constructor()
   {
      this.DEBUG = false;

      this.ADJACENT = 1;   // Stack bars next to each other
      this.INLAID   = 2;   // Inlay each successive set of bars
      this.STACKED  = 3;   // Stack successive sets on top of previous
      this.THREED_ADJACENT = 4;  // Three D adjacent bars
      this.THREED_STACKED  = 5;  // Three D stacked bars
      this.PERCENT  = 6;   // Stacked bars scaled to always be 100%

      this.XORG_OFFSET = 60;
      this.XTOP_OFFSET = 20;
      this.YORG_OFFSET = 50;
      this.YTOP_OFFSET = 30;

      this.BLACK = "#000000";
      this.WHITE = "#ffffff";
      this.GRAY = "#bbbbbb";

      this.plotData = new Array();
      this.percentData = new Array();
      this.xAxisLabels = null;
      this.yAxisLabels = null;

      this.highlightSet = -100;

      // Standard colors
                           // red,       blue,     green,    purple,
                           // orange,    cyan,     yellow,   magenta
      this.colors = new Array("#ff0000", "#0000ff", "#008800", "#900090",
                           "#ffa500", "#00ffff", "#ffff00", "#ff00ff");

      this.shadows = new Array("#a00000", "#0000a0", "#007000", "#700070",
                            "#cc8500", "#00a0a0", "#a0a000", "#700070");

      this.color_bars = new Array("#ff0000", "#0000ff", "#008800", "#900090",
                               "#ffa500", "#00ffff", "#ffff00", "#ff00ff");
      this.color_bars_flag = false;

      this.plotYMax = 100.0;
      this.plotYMin = 0.0;
      this.plotWidth = 0;
      this.plotHeight = 0;
      this.xOrg = 0;
      this.yOrg = 0;
      this.xTop = 0;
      this.yTop = 0;
      this.xScale = 0;
      this.yScale = 0;
      this.plotType = this.ADJACENT;
      this.threeD = false;
      this.threeDAxes = false;
      this.rotate_xflag = false;
      this.rotate_yflag = false;
      this.auto_scale = false;
      this.labelMax = false;
      this.labelMin = false;
      this.labelBars = false;
      this.numTics = 5;

      this.vertGrid = false;
      this.horzGrid = false;

      this.refLine = false;
      this.refValue = 0.0;

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

      this.yAxisTitle = null;
      this.xAxisTitle = null;
      this.plotTitle = null;
      this.backgroundColor = "#ffffff";
      this.axesColor = "#000000";
      this.xAxisStartValue = 1;
      this.xAxisIncrement = 1;

      if ( this.plotData.length != 0 )
         this.initialize();
   }


/*
 * Re-initializes any data structures / display values
 */
initialize()
{
   var barData;

   if ( this.plotData.length != 0 )
   {
      for ( var indx=0; indx<this.plotData.lenth; indx++ )
      {
         barData = this.plotData[indx];
         barData.length = 0;
      }
   }

   this.plotData.length = 0;
}

/*
 * Add a set of data to the bar chart (ie a row of bars)
 * @param {Array} data Array of data values
 */
addLine(data)
{
   // Create and fill the data elements
   var num_pts = data.length;

   var barData = new Array();

   for ( var indx=0; indx<num_pts; indx++ )
      barData[indx] = data[indx];

   var num_lines = this.plotData.length;
   this.plotData[num_lines] = barData;
}


/*
 * Highlight/empahsize a particular bar srer
 * @param line_num  Which bar set to highlight/emphasize
 */
highlightLine(line_num)
{
   this.highlightSet = line_num;
}


/*
 * Add a set of colors to draw the bars with, will recyle through colors when
 * more data sets than colors exist.
 * @param {Array} bar_colors Array of color names (eg red, #ff0033)
 */
setColors(bar_colors)
{
   this.color_bars_flag = false;

   for ( var indx=0; indx<bar_colors.length; indx++ )
   {
      this.colors[indx] = bar_colors[indx];
   }
}

/*
 * Define the color to draw a particular bars set with
 * @param {int} bar_set Which bar set to set color for 
 * @param {String} color Color name (eg red, #ff0033)
 */
setColor(bar_set, color)
{
   this.color_bars_flag = false;
   this.colors[bar_set] = color;
}

/*
 * Set color plot by bar as opposed to by set
 */
setColorByBars()
{
   this.color_bars_flag = true;
}

/*
 * Define different colors to use when using setColorByBars
 * @param {Array} bar_colors Array of color names (eg red, #ff0033)
 */
setBarColors(bar_colors)
{
   this.color_bars_flag = true;

   for ( var indx=0; indx<bar_colors.length; indx++ )
   {
      this.color_bars[indx] = bar_colors[indx];
   }
}


/*
 * Set the color for the background of the plot area
 * @param {String} color Color name (eg red, #ff0033)
 */
setBackgroundColor(color)
{
   this.backgroundColor = color;
}


/*
 * Define the color used to draw axes lines
 * @param {String} color Color name (eg red, #ff0033)
 */
setAxesColor(color)
{
   this.axesColor = color;
}


/*
 * Set auto_scaling to true - overides previously set mins/maxs
 */
setAutoScalen()
{
   this.auto_scale = true;
}


/*
 * Manually set the maximum Y value for the plot
 * Overrides any previously set auto scale
 * @param {float} ymax Maximum Y value (ie top of chart)
 */
setYMax(ymax)
{
   this.auto_scale = false;
   this.plotYMax = ymax;
   if ( this.plotYMax == 0.0 )  // Small sanity check....
      this.plotYMax = 1.0;
}


/*
 * Manually set the minimum Y value for the plot
 * Overrides any previously set auto scale
 * @param {float} ymin Minimum Y value (ie bottom of chart)
 */
setYMin(ymin)
{
   this.auto_scale = false;
   this.plotYMin = ymin;

//ZZZZ Only do this if yMax has actually been set!!!
   if ( this.plotYMin >= this.plotYMax )  // Small sanity check....
   {
//console.log("setYMin sanity fix: yMin " + yMin + " >= yMax " + this.plotYMax);
      this.plotYMin = 0.0;
   }
}


/*
 * Sets which type of bar chart to display: Adjacent, Stacked, etc...
 * Valid values are: ADJACENT, INLAID, STACKED, PERCENT
 * @param {int} plot_type Bar chart type
 */
setPlotType(plot_type)
{
   this.plotType = plot_type;
}


/*
 * Sets flag for displaying 3D bars
 * @param {boolean} flag3d true/false flag
 */
setThreeD(flag3d)
{
   this.threeD = flag3d;
}


/*
 * Sets flag for displaying 3D axes
 * @param {boolean} flag3d true/false flag
 */
setThreeDAxes(flag3d)
{
   this.threeDAxes = flag3d;
}


/*
 * Sets the title of the Y axis
 * @param {String} title Y axis title
 */
setYTitle(title)
{
   this.yAxisTitle = title;
}


/*
 * Sets the title of the X axis
 * @param {String} title X axis title
 */
setXTitle(title)
{
   this.xAxisTitle = title;
}


/*
 * Sets the title displayed above the plot
 * @param {String} title Plot title
 */
setPlotTitle(title)
{
   this.plotTitle = title;
}


/*
 * Set X axis tic/interval labels to passed array of labels
 * @param {Array} labels X Axis labels
 */
setXLabels(labels)
{
   // Create and fill the label elements
   var num_pts = labels.length;

   this.xAxisLabels = new Array();

   for ( var indx=0; indx<num_pts; indx++ )
      this.xAxisLabels[indx] = labels[indx];
}


/*
 * Set Y axis tic/interval labels to passed array of labels
 * @param {Array} labels Y Axis labels
 */
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

/*
 * Flag to display marker detailing value of the max data value
 * @param {boolean} label_flag     Display max value
 */
labelMaxValue(label_flag)
{
   this.labelMax = label_flag;
}


/*
 * Flag to display marker detailing value of the min data value
 * @param {boolean} label_flag     Display min value
 */
labelMinValue(label_flag)
{
   this.labelMin = label_flag;
}


/*
 * Flag to display value of each bar value
 * @param {boolean} label_flag     Display min value
 */
labelValues(label_flag)
{
   this.labelBars = label_flag;
}


/*
 * Set number of tic marks on Y axis
 * @param {int} num_tics Number of tic marks
 */
setNumTics(num_tics)
{
   this.numTics = num_tics;
}

setTitleFont(font, size)
{
   this.titleFont = font;
   this.titleFontSize = size;
}

setXAxisFont(font, size)
{
   this.xAxisFont = font;
   this.xAxisFontSize = size;
}

setYAxisFont(font, size)
{
   this.yAxisFont = font;
   this.yAxisFontSize = size;
}

setXLabelsFont(font, size)
{
   this.xLabelsFont = font;
   this.xLabelsFontSize = size;
}

setYLabelsFont(font, size)
{
   this.yLabelsFont = font;
   this.yLabelsFontSize = size;
}

setRefLineFont(font, size)
{
   this.refLineFont = font;
   this.refLineFontSize = size;
}

addRefLine(value)
{
   this.refLine = true;
   this.refValue = value;
}

setVertGrid(flag)
{
   this.vertGrid = flag;
}

setHorzGrid(flag)
{
   this.horzGrid = flag;
}


/*
 * Value to start X axis labeling with
 * @param {float} startX Value of first X axis tic (default 1)
 */
setXStartValue(startX)
{
   this.xAxisStartValue = startX;
}


/*
 * Value to increment X axis labeling by
 * @param {float} incrX Value of increment (default 1)
 */
setXIncrement(incrX)
{
   this.xAxisIncrement = incrX;
}


//******************************************************************************
//*****************        End of settable parameters       ********************
//******************************************************************************


/*
 * Draw the chart given the previously set plot parameters
 * @param {String} canvasID HTML ID value for canvas to draw to
 * @param {int} width  Width of canvas area
 * @param {int} height Height of canvas area
 */
draw(canvasID, width, height)
{
   var canvas = document.getElementById(canvasID);
   if ( canvas == null || canvas.length == 0 )
   {
      alert("barchart No canvas");
      return;
   }

   if ( canvas.getContext == null )
      G_vmlCanvasManager.initElement(canvas); 

   if ( canvas.getContext == null )
   {
      alert("barchart still context");
      return;
   }

   var ctx = canvas.getContext('2d');
   if ( ctx == null )
      return;

   ctx.lineWidth = 1;

   // this adds the text functions to the ctx
   CanvasTextFunctions.enable(ctx);

//ZZZZ Really need to calculate the longest label length
//ZZZZ If the yOffset is greater than half the window height
//ZZZZ  limit it so there's still room for the plot itself

   var yOffset = this.YORG_OFFSET;
   if ( this.rotate_xflag == true )  // Save more space for X axis tic labels
      yOffset += 50;

   this.plotWidth = width - this.XORG_OFFSET - this.XTOP_OFFSET;
   this.plotHeight = height - yOffset - this.YTOP_OFFSET - 8;

   this.xOrg = this.XORG_OFFSET;
   this.xTop = width - this.XTOP_OFFSET;
   this.yOrg = height - yOffset;

   //ZZZZyTop = YTOP_OFFSET + fm.getAscent();
   this.yTop = this.YTOP_OFFSET + 4;

   var max_bars = this.calcMaxBars();

   this.xScale = this.plotWidth/max_bars;

   if ( this.DEBUG == true )
      alert("xScale: " + this.plotWidth + "/" + max_bars + " = " + this.xScale);

   var ymin, ymax, num_tics;

   if ( this.plotType == this.PERCENT )
   {
      ymin = 0.0;
      ymax = 100.0;
      num_tics = 10;
   }
   else if ( this.auto_scale == true )
   {
      this.setPlotScale();

      var axes = new BizScaleAxes();
      axes.calculate(this.plotYMin, this.plotYMax, this.numTics);

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

   if ( (ymax-ymin)/num_tics < 1.0 )  // add +1 to ymax-ymin for axes steps < 1
      this.yScale = this.plotHeight/(ymax-ymin+1);
   else
      this.yScale = this.plotHeight/(ymax-ymin);

   if ( this.DEBUG == true )
      alert("yScale: " + this.plotHeight + "/" + (ymax-ymin) + " = " + this.yScale);

   ctx.fillStyle = this.backgroundColor;
   ctx.lineWidth = 1;
   ctx.fillRect(0, 0, width, height);

   this.drawAxes(ctx, max_bars, width, height, ymin, ymax, num_tics);

   if ( this.plotType == this.PERCENT )  // Gen percents for each bar pt
   {
      for ( var indx=0; indx<max_bars; indx++ )
         this.percentData[indx] = 0;

      var tmpData = new Array();
      for ( var indx=0; indx<max_bars; indx++ )
      {
         for ( var jndx=0; jndx<this.plotData.length; jndx++ )
         {
            tmpData = this.plotData[jndx];
            this.percentData[indx] += tmpData[indx];
         }
      }
   }

   for ( var indx=0; indx<this.plotData.length; indx++ )
   {
      this.drawPlot(ctx, indx, this.plotData.length);
   }

// Needs to be in percent value when in percent mode...
   if ( this.refLine == true )
   {
//ZZZZ Dashed line function needed
      //ZZZZctx.setStroke(dashed);

      var y = this.yOrg - (this.refValue - ymin)*this.yScale;

      ctx.beginPath();
      ctx.moveTo(this.xOrg, y);
      ctx.lineTo(this.xTop, y);
      ctx.stroke();

      var xp = this.xOrg - 2;

      var yp = y - ctx.fontHeight(this.refLineFont, this.refLineFontSize) - 2;

      ctx.setStroke(this.BLACK);
      ctx.lineWidth = 1;
      ctx.drawTextRight(this.refLineFont, this.refLineFontSize, xp, yp, refValue + "");
   }

   if ( this.labelMax == true || this.labelMin == true )
      this.drawMinMaxes(ctx, ymin, ymax);
}


//****************************************************************************
//*****************        End of public functions        ********************
//****************************************************************************

/*
 * Calc pixel width of any given bar area (single, adjacent, inlaid, etc...)
 * @ignore
 */
calcBarWidth(max_bars)
{
   return this.plotWidth/(max_bars*1.5);
}


/*
 * Draw the X, Y axis and plot titles
 * @ignore
 */
drawAxes(ctx, num_pts, width, height, ymin, ymax, num_tics)
{
   var indx;
   var x, y, x1, x2, y1, y2;
   var fm;
   var max_bars = this.calcMaxBars();

   var offset3D = 0;
   if ( this.threeDAxes == true )
   {
      offset3D = this.calcBarWidth(max_bars)/this.plotData.length;
      if ( offset3D > this.YTOP_OFFSET )
         offset3D = this.YTOP_OFFSET - 1.0;
   }

   ctx.strokeStyle = this.axesColor;
   ctx.lineWidth = 1;

//ZZZZ Set stroke width!!!
   ctx.beginPath();
   ctx.moveTo(this.xTop, this.yOrg);
   ctx.lineTo(this.xOrg, this.yOrg);
   ctx.lineTo(this.xOrg, this.yTop);
   ctx.stroke();

   if ( this.threeDAxes == true )
   {
      var xf, yf;

      // Draw left corner...
      var x1Points = new Array(this.xOrg, this.xOrg+offset3D,
                            this.xOrg+offset3D, this.xOrg, this.xOrg);
      var y1Points = new Array(this.yOrg, this.yOrg-offset3D,
                             this.yTop-offset3D, this.yTop, this.yOrg);

      ctx.beginPath();
      xf = x1Points[0];
      yf = y1Points[0];
      ctx.moveTo(xf, yf);

      for ( var index=1; index<x1Points.length; index++ )
      {
         xf = x1Points[index];
         yf = y1Points[index];
         ctx.lineTo(xf, yf);
      }

      ctx.fillStyle = this.GRAY;
      ctx.fill();

      ctx.strokeStyle = this.axesColor;
      ctx.stroke();

      // Draw bottom plate rect...
      var x2Points = new Array(this.xOrg, this.xOrg+offset3D, this.xTop+offset3D, this.xTop, this.xOrg);
      var y2Points = new Array(this.yOrg, this.yOrg-offset3D, this.yOrg-offset3D, this.yOrg, this.yOrg);

      ctx.beginPath();
      xf = x2Points[0];
      yf = y2Points[0];
      ctx.moveTo(xf, yf);

      for ( var index=1; index<x2Points.length; index++ )
      {
         xf = x2Points[index];
         yf = y2Points[index];
         ctx.lineTo(xf, yf);
      }

      ctx.fillStyle = this.GRAY;
      ctx.fill();

      ctx.strokeStyle = this.axesColor;
      ctx.stroke();

      // Draw plot background
      var x2Points = new Array(this.xOrg+offset3D, this.xOrg+offset3D,
                           this.xTop+offset3D, this.xTop+offset3D, this.xOrg+offset3D);
      var y2Points = new Array(this.yOrg-offset3D, this.yTop-offset3D,
                           this.yTop-offset3D, this.yOrg-offset3D, this.yOrg-offset3D);

      ctx.beginPath();
      xf = x2Points[0];
      yf = y2Points[0];
      ctx.moveTo(xf, yf);

      for ( var index=1; index<x2Points.length; index++ )
      {
         xf = x2Points[index];
         yf = y2Points[index];
         ctx.lineTo(xf, yf);
      }

      ctx.fillStyle = this.GRAY;
      ctx.fill();

      ctx.strokeStyle = this.axesColor;
      ctx.stroke();
   }

   ctx.strokeStyle = this.BLACK;

   // Draw the X axis labels
   var xval = this.xAxisStartValue;
   for ( indx=0; indx<num_pts; indx++ )
   {
      x = this.xScale*indx + this.xOrg + this.xScale/2.0;
      ctx.beginPath();
      ctx.moveTo(x, this.yOrg);
      ctx.lineTo(x, this.yOrg + 10.0);
      ctx.stroke();

      if ( this.vertGrid == true )
      {
         ctx.beginPath();
         ctx.moveTo(x + offset3D, this.yOrg - offset3D);
         ctx.lineTo(x + offset3D, this.yTop - offset3D);
         ctx.stroke();
      }

      if ( this.xAxisLabels == null || this.xAxisLabels.length == 0 )  // Draw the index number 
      {
         ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize,
                              x, this.yOrg+12+this.xLabelsFontSize, xval + "");

         xval += this.xAxisIncrement;
      }
      else  // User passed long string based labels
      {
         try
         {
            var label = this.xAxisLabels[indx];

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

   // Calc the Y axis labels
   var yoff = (this.yOrg-this.yTop)/num_tics;
   var yval = (ymax-ymin)/num_tics;

   var ytxt, label, ynum;

   // Draw Y Axis tics && labels
   for ( indx=0; indx<=num_tics; indx++ )
   {
      y = this.yOrg - yoff*indx;

      ctx.beginPath();
      ctx.moveTo(this.xOrg, y);
      ctx.lineTo(this.xOrg - 10.0, y);
      ctx.stroke();

      if ( this.horzGrid == true )
      {
         ctx.beginPath();
         ctx.moveTo(this.xOrg + offset3D, y - offset3D);
         ctx.lineTo(this.xTop + offset3D, y - offset3D);
         ctx.stroke();
      }

      var xpos = this.xOrg - 12;
      var ypos = y + ctx.fontHeight(this.yLabelsFont, this.yLabelsFontSize)/2 - 2;

      if ( this.yAxisLabels == null || this.yAxisLabels.length == 0 )  // Draw the index number 
      {
         ytxt = yval*indx + ymin;

//ZZZZ rotate_yflag?

         if ( this.plotType == this.PERCENT )
         {
            ynum = ytxt.toFixed(0);
            ctx.drawTextRight(this.yLabelsFont, this.yLabelsFontSize, xpos, ypos, ynum + " %");
         }
         else
         {
            if ( ytxt >= 1.0 )
               ynum = ytxt.toFixed(1);
            else
               ynum = ytxt.toFixed(2);
            ctx.drawTextRight(this.yLabelsFont, this.yLabelsFontSize, xpos, ypos, ynum + " ");
         }
      }
      else
      {
         label = this.yAxisLabels[indx];
         ctx.drawTextRight(this.yLabelsFont, this.yLabelsFontSize, xpos, ypos, label);
      }
   }

   if ( this.threeDAxes == false )
   {
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
   }

   // Draw plot titles
   if ( this.plotTitle != null && this.plotTitle.length > 0 )
   {
      var title_strs = this.plotTitle.split("|");
      var ypos = ctx.fontHeight(this.titleFont, this.titleFontSize) + 14;

      for ( var indx=0; indx<title_strs.length; indx++ )
      {
//ZZZ if 3D bars subtract 3D offset from ypos
         ctx.drawTextCenter(this.titleFont, this.titleFontSize,
                               width/2, ypos, title_strs[indx]);
         ypos += (ctx.fontHeight(this.titleFont, this.titleFontSize) + 4);
      }
   }

   // Draw X axis title
   if ( this.xAxisTitle != null && this.xAxisTitle.length > 0 )
   {
      var xpos = this.xOrg + this.plotWidth/2;
      var ypos = height - 4;

      ctx.drawTextCenter(this.xAxisFont, this.xAxisFontSize, xpos, ypos, this.xAxisTitle);
   }

   // Draw Y axis title
   if ( this.yAxisTitle != null && this.yAxisTitle.length > 0 )
   {
      //ZZZZctx.save();
      //ZZZZvar tr = ctx.getTransform();
      //ZZZZ//ctx.translate(fm.getHeight()+2 ,
      //ZZZZctx.translate(fm.getAscent()+2, this.yOrg-(this.plotHeight/2) +
      //ZZZZ                   fm.stringWidth(this.yAxisTitle)/2);
      //ZZZZctx.rotate(3*Math.PI/2);
      //ZZZZctx.drawText(this.yAxisFont, this.yAxisFontSize, 0, 0,  yAxisTitle);
      //ZZZZctx.rotate(-3*Math.PI/2);
      //ZZZZctx.setTransform(tr);
      //ZZZZctx.restore();
   }
}


/*
 * Draw the standard bar chart (ie ADJACENT)
 * @ignore
 */
drawPlot(ctx, curr_set, num_sets)
{
   var xpt;
   var y1, y2;
   var bar_width;

   var max_bars = this.calcMaxBars();
   var set_width = this.calcBarWidth(max_bars);

   var color = this.colors[curr_set % 8];
   if ( color != null )
      ctx.strokeStyle = color;
   else
      ctx.strokeStyle = this.BLACK;

   var barData = new Array();
   barData = this.plotData[curr_set];

   // Draw each bar set
   for ( var indx=0; indx<barData.length; indx++ )
   {
      xpt = this.xScale*indx + this.xOrg + this.xScale/2.0;

      switch ( this.plotType )
      {
         case this.ADJACENT:
         default:
            bar_width = set_width/num_sets;
            xpt -= (set_width/2);
            xpt += (bar_width*curr_set);
            y1 = this.yOrg;
            y2 = this.yOrg - (barData[indx]-this.plotYMin)*this.yScale;
            break;

         case this.INLAID:
            bar_width = set_width - ((set_width/num_sets)*curr_set);
            xpt -= bar_width/2;
            y1 = this.yOrg;
            y2 = this.yOrg - (barData[indx]-this.plotYMin)*this.yScale;
            break;

         case this.STACKED:
            bar_width = set_width;
            xpt -= bar_width/2;

            // Sum up previous data points
            if ( curr_set > 0 )
            {
               var tmpData = new Array();
               var ytmp = 0;
               for ( var jndx=0; jndx<=curr_set; jndx++ )
               {
                  tmpData = this.plotData[jndx];
                  ytmp += tmpData[indx];
               }

               y1 = this.yOrg - ((ytmp-barData[indx])-this.plotYMin)*this.yScale;
               y2 = this.yOrg - (ytmp-this.plotYMin)*this.yScale;
            }
            else
            {
               y1 = this.yOrg;
               y2 = this.yOrg - (barData[indx]-this.plotYMin)*this.yScale;
            }
            break;

         case this.PERCENT:
            bar_width = set_width;
            xpt -= bar_width/2;

            // Sum up previous data points
            if ( curr_set > 0 )
            {
               var tmpData = new Array();
               var ytmp = 0;
               for ( var jndx=0; jndx<=curr_set; jndx++ )
               {
                  tmpData = this.plotData[jndx];
                  ytmp += tmpData[indx];
               }

               var yp1 = ((ytmp - barData[indx]) / this.percentData[indx]) * 100.0;
               var yp2 = (ytmp / this.percentData[indx]) * 100.0;

               y1 = this.yOrg - yp1*this.yScale;
               y2 = this.yOrg - yp2*this.yScale;
            }
            else
            {
               y1 = this.yOrg;
               y2 = this.yOrg - ((barData[indx] / this.percentData[indx]) * 100.0) * this.yScale;
            }
            break;
      }

      try
      {
         var lineargradient = ctx.createLinearGradient(xpt, y2, (xpt+bar_width), y1);
         lineargradient.addColorStop(0, this.WHITE);
      }
      catch ( ex )
      {
      }

      var bar_color;
      if ( this.color_bars_flag == true )  // Force color of bar to given values
      {
         if ( lineargradient )
            lineargradient.addColorStop(1, this.color_bars[indx]);
         bar_color = this.color_bars[indx];
      }
      else // Use standard color for this particular data set
      {
         if ( lineargradient )
            lineargradient.addColorStop(1, color);
         bar_color = color;
      }

      if ( lineargradient )
         ctx.fillStyle = lineargradient;

var xpp = xpt;
var bwidth = bar_width;
if ( curr_set == this.highlightSet ) // What if highlite = 0 or last
{
   xpp = xpt - 2;
   bwidth =  bar_width + 4;
}
else if ( curr_set == this.highlightSet - 1 )
{
   xpp = xpt;
   bwidth =  bar_width - 2;
}
else if ( curr_set == this.highlightSet + 1 )  // What about the rest of the bars
{
   xpp = xpt + 2;
   bwidth =  bar_width - 2;
}

      var bar_height = y1 - y2;
      //ctx.fillRect(xpt, y2, bar_width, bar_height);
      ctx.fillRect(xpp, y2, bwidth, bar_height);

//Highlite: increase stroke width?
//if ( this.highlightSet == curr_set )
//   ctx.lineWidth = 3;
//else
   ctx.lineWidth = 1;

      ctx.strokeStyle = this.BLACK;
      //ctx.strokeRect(xpt, y2, bar_width, bar_height);
      ctx.strokeRect(xpp, y2, bwidth, bar_height);

      if ( this.threeD == true && barData[indx] != 0 &&
            (this.plotType == this.ADJACENT ||
             this.plotType == this.STACKED ||
             this.plotType == this.PERCENT ||
            (this.plotType == this.INLAID && curr_set == 0)) )
      {
         //this.drawShadows(ctx, bar_width, xpt, y2, bar_height, bar_color);
         this.drawShadows(ctx, bwidth, xpp, y2, bar_height, bar_color);
      }

//ZZZZ
if ( this.labelBars == true )
   ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize,
                     xpp+bwidth/2, y2+30, barData[indx].toFixed(0));

      if ( this.plotType == this.PERCENT && barData[indx] != 0 )
      {
         ctx.strokeStyle = this.BLACK;
         ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize,
                              xpp+bwidth/2, y2+bar_height/2, barData[indx] + "");
                              //xpt+bar_width/2, y2+bar_height/2, barData[indx] + "");
      }
   }
}


/*
 * Draw the shadows on any bars if threeD bars flag is set
 * @ignore
 */
drawShadows(ctx, bar_width, x, y, bar_height, color)
{
   var max_bars = this.calcMaxBars();
   var offset = this.calcBarWidth(max_bars)/this.plotData.length;
   if ( offset > this.YTOP_OFFSET )
      offset = this.YTOP_OFFSET - 1.0;

   var y2 = y + bar_height;
   var xf, yf;

   // Draw top of 3d rectangle...
   var x1Points = new Array(x, x+offset, x+bar_width+offset, x+bar_width);
   var y1Points = new Array(y, y-offset, y-offset, y);

   xf = x1Points[0];
   yf = y1Points[0];
   ctx.beginPath();
   ctx.moveTo(xf, yf);
   for ( var index = 1; index < x1Points.length; index++ )
   {
      xf = x1Points[index];
      yf = y1Points[index];
      ctx.lineTo(xf, yf);
   }
   ctx.fillStyle = color;
   ctx.fill();

   ctx.strokeStyle = this.BLACK;
   ctx.lineWidth = 1;
   ctx.stroke();

   // Draw right side of 3d rectangle...
   var x2Points = new Array(x+bar_width, x+bar_width+offset,
                               x+bar_width+offset, x+bar_width);
   var y2Points = new Array(y2, y2-offset, y-offset, y);

   xf = x2Points[0];
   yf = y2Points[0];
   ctx.beginPath();
   ctx.moveTo(xf, yf);
   for ( var index = 1; index < x2Points.length; index++ )
   {
      xf = x2Points[index];
      yf = y2Points[index];
      ctx.lineTo(xf, yf);
   }

   ctx.fillStyle = color;
   ctx.fill();

   ctx.strokeStyle = this.BLACK;
   ctx.stroke();
}


/*
 * Draw markers indicating min and max values for a given set of bars
 * @ignore
 */
drawMinMaxes(ctx, ymin, ymax)
{
   var barData = new Array();

   var minValue =  1000000000.0;
   var maxValue = -1000000000.0;
   var minIndex = -1;
   var maxIndex = -1;
   var minLine = -1;
   var maxLine = -1;

   for ( var jndx=0; jndx<this.plotData.length; jndx++ )
   {
      barData = this.plotData[jndx];

      for ( var indx=0; indx<barData.length; indx++ )
      {
         if ( barData[indx] > maxValue )
         {
            maxValue = barData[indx];
            maxIndex = indx;
            maxLine = jndx;
         }
         if ( barData[indx] < minValue )
         {
            minValue = barData[indx];
            minIndex = indx;
            minLine = jndx;
         }
      }
   }

   if ( this.labelMax == true && maxIndex != -1 )
   {
      barData = this.plotData[maxLine];

      if ( this.DEBUG == true )
         alert("Max Line: " + maxLine + ", Index: " + maxIndex +
                               ", Value: " + barData[maxIndex]);

      var x = this.xScale*maxIndex + this.xOrg + this.xScale/2.0;
      var y = this.yOrg - (barData[maxIndex]-ymin)*this.yScale - this.xLabelsFontSize;

      var max_val = barData[maxIndex];
      ctx.lineWidth = 1;
      ctx.strokeStyle = this.BLACK;
      ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize, x, y, max_val + "");
   }

   if ( this.labelMin == true && minIndex != -1 )
   {
      barData = this.plotData[minLine];

      if ( this.DEBUG == true )
         alert("Min Line: " + minLine + ", Index: " + minIndex +
                               ", Value: " + barData[minIndex]);

      var x = this.xScale*minIndex + this.xOrg + this.xScale/2.0;
      var y = this.yOrg - (barData[minIndex]-ymin)*this.yScale - this.xLabelsFontSize;

      var min_val = barData[minIndex];
      ctx.lineWidth = 1;
      ctx.strokeStyle = this.BLACK;
      ctx.drawTextCenter(this.xLabelsFont, this.xLabelsFontSize, x, y, min_val + "");
   }
}


/*
 * Find out the maximum number of bars (ie data points) in all the define data sets
 * @ignore
 */
calcMaxBars()
{
   var max_bars = 0;
   var barData = new Array();

   for ( var indx=0; indx<this.plotData.length; indx++ )
   {
      barData = this.plotData[indx];
      if ( barData.length > max_bars )
         max_bars = barData.length;
   }

   return max_bars;
}


/*
 * Find out the min and max values in all the sets of bars
 * @ignore
 */
setPlotScale()
{
   var barData = new Array();
   var max_value = -99999999.0;
   var min_value = +99999999.0;

   if ( this.plotType == this.STACKED )  // Need to sum each X value
   {
      var maxBars = this.calcMaxBars();
      var tmpData = new Array(maxBars);
      for ( var indx=0; indx<maxBars; indx++ )
         tmpData[indx] = 0;

      for ( var indx=0; indx<this.plotData.length; indx++ )
      {
         barData = this.plotData[indx];
         for ( var jndx=0; jndx<barData.length; jndx++ )
         {
            tmpData[jndx] += barData[jndx];
         }
      }

      // Now calculate against summed bars...
      for ( var indx=0; indx<maxBars; indx++ )
      {
         if ( tmpData[indx] > max_value )
            max_value = tmpData[indx];
      }
   }
   else   // Just find min/max value within data set
   {
      for ( var indx=0; indx<this.plotData.length; indx++ )
      {
         barData = this.plotData[indx];
         for ( var jndx=0; jndx<barData.length; jndx++ )
         {
            if ( barData[jndx] > max_value )
               max_value = barData[jndx];
         }
      }
   }

//ZZZ What about supporting negative values?
   min_value = 0;

// Needed? Rounds axes in the 0.0 to 1.0 to 1.0
// Could check orders of magnitude...  0.001 or 1000

   if ( max_value > 0.0 && max_value < 1.0 )
      max_value = 1.0;
   if ( min_value < 1.0 && min_value > 0.0 )
      min_value = 0.0;

   this.plotYMin = min_value;
   this.plotYMax = max_value;
}

}


/**=====================================================================
 ** Program Unit ID: piechart.js
 **
 ** Description: Source file for a html canvas tag based pie chart widget
 **
 ** Copyright (c) 2008 Steven A. Cook
 **
 ** This program is free software; you can redistribute it and/or modify
 ** it under the terms of the GNU General Public License as published by
 ** the Free Software Foundation; either version 2 of the License, or
 **  (at your option) any later version.
 **
 ** This software is distributed in the hope that it will be useful,
 ** but WITHOUT ANY WARRANTY; without even the implied warranty of
 ** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 ** GNU General Public License for more details.
 **
 ** Author:   Steven A Cook
 ***********************************************************************/

//TODO: need to fill all wedge vertical pieces - seems to be missing on the left...

// Data structure for calculating pie sections
function BizPieWedge()
{
   var xc, yc;    // Center point
   var xs, ys;    // Starting angle loc
   var xe, ye;    // Ending angle loc
   var xpts = new Array();
   var ypts = new Array();
}

// Constructor
function BizPieChart()
{
   //  Constants
   this.BLACK = "#000000";
   this.WHITE = "#ffffff";
   this.GRAY = "#aaaaaa";

   this.DEG_180 =  180;
   this.DEG_360 =  360;
   this.DEG_720 =  720;
   this.MIN_WEDGE = 6;
   this.PI =       3.141592654;
   this.M_PI =     3.141592654;
   this.COUNTER_CLOCKWISE = 0;
   this.CLOCKWISE = 1;

   this.LABEL_INTERIOR = 0;
   this.LABEL_EXTERIOR = 1;
   this.LABEL_XYLOC = 2;
   this.NEAR_LABELS = 0;
   this.EXTENDED_LABELS = 1;
   this.LABEL_VALUES = 0;
   this.LABEL_NAMES = 1;
   this.LABEL_BOTH = 2;

   // Internal variables - 'private' if js really supported it properly
   this.canvas = null;

   this.wedge_yval = new Array(); 
   this.wedge_slice = new Array();
   this.wedge_arc_pos = new Array(); 
   this.wedge_degrees = new Array();

   //ZZZZ Settable values - Need 'setters' for all these values

   this.pieData = new Array(); 
   this.explodes = new Array(); 
   this.fillpats = new Array(); 
   this.labels = new Array(); 

//ZZZZ
//ZZZZ aqua     #00FFFF    lime     #00FF00    silver   #C0C0C0
//ZZZZ black    #000000    maroon   #800000    teal     #008080
//ZZZZ blue     #0000FF    navy     #000080    white    #FFFFFF
//ZZZZ fuchsia  #FF00FF    olive    #808000    yellow   #FFFF00
//ZZZZ gray     #808080    purple   #800080
//ZZZZ green    #008000    red      #FF0000  
//ZZZZ

                           // red,       blue,     green,    purple,
                           // orange,    cyan,     yellow,   magenta
   this.colors = new Array("#ff0000", "#0000ff", "#008800", "#900090",
                           "#ffa500", "#00ffff", "#ffff00", "#ff00ff");

   this.shadows = new Array("#a00000", "#0000a0", "#007000", "#700070",
                            "#cc8500", "#00a0a0", "#a0a000", "#cc009c");

   this.titleFont = 10;
   this.chartFont = 10;
   this.labelsFont = 10;

   this.titleFontSize = 12;
   this.chartFontSize = 10;
   this.labelsFontSize = 8;

   this.start_angle = 0;
   this.view_angle = 60;
   this.shadow_height = 20;
   this.explode_offset = 20;

   this.backgroundColor = "#ffffff";

   this.labelLoc = this.LABEL_EXTERIOR;
   this.labelOffset = this.EXTENDED_LABELS;
   this.labelType = this.LABEL_VALUES;
   this.percent_flag = false;

   this.box_plot = false;
   this.plotTitle = "";
   this.pieName = "";

   if ( this.pieData.length != 0 )
      this.initialize();
}

BizPieChart.prototype.initialize = function()
{
   this.pieData.length = 0;
   this.labels.length = 0;
   this.explodes.length = 0;

   //ZZZthis.fillpats.length = 0;
   //ZZZthis.colors.length = 0;
   //ZZZthis.shadows.length = 0;
}


BizPieChart.prototype.destroy = function()
{
   //  Free data
   if ( this.pieData != null )
      this.pieData.length = 0;
   if ( this.explodes != null )
      this.explodes.length = 0;
   if ( this.colors != null )
      this.colors.length = 0;
   if ( this.shadows != null )
      this.shadows.length = 0;
   if ( this.fillpats != null )
      this.fillpats.length = 0;
}


// Convience functions for setting labels, data, colors, fills

BizPieChart.prototype.setValue = function(slice, data)
{
   if ( slice >= this.pieData.length )
      return;

   this.pieData[slice] = data;
}


BizPieChart.prototype.setValues = function(data)
{
   if ( data == null || data.length == 0 )
   {
      alert("No data passed...");
      return;
   }

   this.pieData.length = 0;

   for ( var slice=0; slice<data.length; slice++ )
      this.pieData[slice] = data[slice];
}


BizPieChart.prototype.setExplode = function(slice, explode)
{
   if ( slice < 0 || slice >= this.pieData.length )
      return;

   this.explodes[slice] = explode;
}


BizPieChart.prototype.setExplodes = function(new_explodes)
{
   if ( new_explodes == null || new_explodes.length == 0 )
      return;

   this.explodes.length = 0;

   for ( var i=0; i<new_explodes.length; i++ )
      this.explodes[i] = new_explodes[i];
}


BizPieChart.prototype.setThreeD = function(angle)
{
   this.view_angle = angle;
}


BizPieChart.prototype.setFillPattern = function(slice, pattern)
{
   if ( slice < 0 || slice >= this.pieData.length )
      return;

   this.fillpats[slice] = pattern;
}


BizPieChart.prototype.setFillPatterns = function(patterns)
{
   var num_fills = patterns.length;
   if ( num_fills > this.pieData.length )
      num_fills = this.pieData.length;

   for ( var i=0; i<num_fills; i++ )
      this.fillpats[i] = patterns[i];
}


BizPieChart.prototype.setColor = function(slice, color)
{
   if ( slice < 0 || slice >= this.pieData.length )
      return;

   this.colors[slice] = color;
}


BizPieChart.prototype.setColors = function(new_colors)
{
   if ( new_colors == null || new_colors.length == 0 )
      return;

   this.colors.length = 0;
// Or set to zero, create new array?
   for ( var i=0; i<new_colors.length; i++ )
   {
      this.colors[i] = new_colors[i];
   }

//ZZZZ Need to null the shadows and/or create shades/gradients of passed colors
}

/**
 * Set the background color for the plot
 *
 * @param color     Color to draw background with
 */
BizPieChart.prototype.setBackground = function(color)
{
   this.backgroundColor = color;
}


BizPieChart.prototype.setLabel = function(slice, labels)
{
   if ( slice < 0 || slice >= this.pieData.length )
      return;

   if ( label != null )            // If they sent us something
      this.labels[slice] = label;
   else
      this.labels[slice] = "";
}


BizPieChart.prototype.setLabels = function(labels)
{
   if ( labels == null || labels.length == 0 )
      return;

   this.labels.length = 0;
   for ( var i=0; i<labels.length; i++ )
   {
      if ( labels[i] != null )            // If they sent us something
         this.labels[i] = labels[i];
      else
         this.labels[i] = "";
   }
}

BizPieChart.prototype.setName = function(pie_name)
{
   if ( pie_name == null )
      this.pieName = "";
   else
      this.pieName = pie_name;
}

BizPieChart.prototype.setTitle = function(pie_title)
{
   if ( pie_title == null )
      this.plotTitle = "";
   else
      this.plotTitle = pie_title;
}

BizPieChart.prototype.setTitleFont = function(font, size)
{
   this.titleFont = font;
   this.titleFontSize = size;
}

BizPieChart.prototype.setChartFont = function(font, size)
{
   this.chartFont = font;
   this.chartFontSize = size;
}

BizPieChart.prototype.setLabelsFont = function(font, size)
{
   this.labelsFont = font;
   this.labelsFontSize = size;
}

BizPieChart.prototype.setLabelsType = function(type)
{
   this.labelType = type;
}

BizPieChart.prototype.setLabelsPosition = function(loc)
{
   this.labelLoc = loc;
}

//******************************************************************************
//*****************        End of settable parameters       ********************
//******************************************************************************


BizPieChart.prototype.draw = function(canvasID, chart_width, chart_height, xoffset, yoffset)
{
   var canvas = document.getElementById(canvasID);
   if ( canvas == null || canvas.length == 0 )
   {
      alert("piechart Null canvas");
      return;
   }

   if ( canvas.getContext == null )
      G_vmlCanvasManager.initElement(canvas);

   if ( canvas.getContext == null )
   {
      alert("piechart still no context");
      return;
   }

   if ( xoffset == undefined )
      xoffset = 0;
   if ( yoffset == undefined )
      yoffset = 0;

//console.log(this.pieName + ", " + chart_width + ", " + chart_height + ", " + xoffset + ", " + yoffset);

   // Find center of pie
   var xpie = chart_width/2 + xoffset;
   var ypie = chart_height/2 + yoffset;
//console.log("Center: " + xpie + ", " + ypie);

   var xrad, yrad;

   // Set the pie radius to use 2/3 of the area for the pie
   if ( chart_width < chart_height )
      xrad = chart_width / 3;
   else
      xrad = chart_height / 3;

//   // Simulate 3D appearance via making an ellipse if view_angle != 0
//   var view_ang = Math.cos(this.view_angle * this.PI /180.0);
//   yrad = xrad * view_ang;
   yrad = xrad;

   var ctx = canvas.getContext('2d');

   // Add in text functions into canvas tag ctx
   CanvasTextFunctions.enable(ctx);

   ctx.fillStyle = this.backgroundColor;
   ctx.fillRect(xoffset, yoffset, chart_width+xoffset, chart_height+yoffset);

   if ( this.box_plot )
      ctx.strokeRect(0, 0, chart_width+xoffset-1, chart_height+yoffset-1);

   var sign = 1.0;
   if ( this.direction == this.CLOCKWISE )
      sign = -1.0;

   // loop over slices in pie to see if any are exploded, and to sum total
   var exploded = false;
   var pietot = 0.0;
   for ( var slice=0; slice<this.pieData.length; slice++ )
   {
      if ( this.explodes[slice] == true )    // Are any exploded??
         exploded = true;
      pietot += this.pieData[slice];  // sum slice values
   }

   //** At this point we sort pie pieces according to min y value of mid arc,
   //**  so we draw back pieces first.  This is in lieu of actually doing any
   //**  real 3D type calculations. So sue me if I'm lazy....

   this.calcWedgeOrder(sign, pietot);
   this.sortWedges();

   // Simulate 3D appearance via making an ellipse if view_angle != 0
   var view_ang = Math.cos(this.view_angle * this.PI /180.0);
   var xradius = xrad;
   var yradius = yrad * view_ang;

   if ( this.shadow_height && pietot > 0.0 )
   {
      this.draw3dShadows(ctx, sign, pietot, xradius, yradius, xpie, ypie);
   }

   if ( pietot > 0.0 )  // Draw each pie wedge
   {
      this.drawPieWedges(ctx, sign, pietot, xradius, yradius, xpie, ypie);
   }

   ctx.strokeStyle = this.BLACK;

//   //  Draw outline on pie if none exploded
//   if ( pietot > 0.0  && !exploded )        // if pie contains any data
//   {
//      //var xpos = xpie - xradius;
//      //var ypos = ypie - yradius;
//
//      //ctx.strokeStyle = this.BLACK;
//// What if xrad != yrad?
//      //ctx.arc(xpos, ypos, xradius, 0, 2*Math.PI, 0);
//      ctx.stroke();
//   }


   // Draw the pie name, if any
   if ( this.pieName && this.pieName.length != 0 )
   {
      ctx.strokeStyle = this.BLACK;
      var chart_strs = this.pieName.split("|");
      var ypos = (chart_height+yoffset) - (this.chartFontSize * chart_strs.length + 4);

      var x = xpie;
      var y = ypos;

      for ( var indx=0; indx<chart_strs.length; indx++ )
      {
         ctx.drawTextCenter(this.chartFont, this.chartFontSize, x, y, chart_strs[indx]);
         ypos += (ctx.fontHeight(this.chartFont, this.chartFontSize) + 4);
      }
   }

   //   Draw out the screen title, if any
   if ( this.plotTitle && this.plotTitle.length != 0 )
   {
      ctx.strokeStyle = this.BLACK;
      var title_strs = this.plotTitle.split("|");
      var ypos = 20;

      for ( var indx=0; indx<title_strs.length; indx++ )
      {
         ctx.drawTextCenter(this.titleFont, this.titleFontSize,
                               xpie, ypos+yoffset, title_strs[indx]);
         ypos += (ctx.fontHeight(this.titleFont, this.titleFontSize) + 4);
      }
   }
}


BizPieChart.prototype.draw3dShadows = function(ctx, sign, pietot, xrad, yrad, xpie, ypie)
{
   var arc_pos, degrees;
   var xp, yp;
   var wedge_num;

   /* loop over slices in pie */
   for ( var slice=0; slice<this.pieData.length; slice++ )
   {
      wedge_num = this.wedge_slice[slice];

      if ( this.pieData[wedge_num] != 0.0 )
      {
         arc_pos = this.wedge_arc_pos[slice];
         degrees = this.wedge_degrees[slice];

         xp = xpie;
         yp = ypie;

         if ( this.explodes[wedge_num] )
         {
            xp += this.explode_offset * this.PCOS(arc_pos, degrees);
            yp -= this.explode_offset * this.PSIN(arc_pos, degrees);
         }

         var color = this.def_color;
         if ( this.shadows.lenth != 0 )
         {
            var snum = wedge_num % this.shadows.length;
            color = this.shadows[snum];
         }
         else if ( this.colors.lenth != 0 )
         {
            var num = wedge_num % this.colors.length;
            color = this.colors[num];
         }

         var pie = this.calcWedgePts(xp, yp, arc_pos, degrees, xrad, yrad);

         if ( pie != null )
         {
            this.shadeWedge(ctx, pie, color, arc_pos, degrees);
         }
         else if ( degrees == 0 )  // Draw an empty pie slice
         {
            var ang = arc_pos * this.M_PI / 180.0;    // start angle

            var piece = new BizPieWedge();
            piece.xc = xp;
            piece.yc = yp;
            piece.xs = xp + xrad * Math.cos(ang);
            piece.ys = yp - yrad * Math.sin(ang);

            this.shadeWedge(ctx, piece, color, arc_pos, degrees);
         }
      }
   }
}


BizPieChart.prototype.drawPieWedges = function(ctx, sign, pietot, xrad, yrad, xpie, ypie)
{
   var label;
   var ftmp;                          /* tmp value */
   var xp, yp;
   var fill_num, color;

   var arc_pos = this.start_angle;
   var degrees = 0.0;

   // loop over slices in pie
   for ( var slice=0; slice<this.pieData.length; slice++)
   {
      ftmp = this.pieData[slice]/pietot;

      arc_pos += degrees;
      degrees  = 360.0 * sign * ftmp; // calc slice size

      xp = xpie;
      yp = ypie;

      if ( this.explodes[slice] )
      {
         xp += this.explode_offset * this.PCOS(arc_pos, degrees);
         yp -= this.explode_offset * this.PSIN(arc_pos, degrees);
      }

//ZZZ      fill_num = this.fillpats[slice] % this.fillpats.length;
      var num = slice % this.colors.length;

      ctx.fillStyle = this.colors[num];
      ctx.strokeStyle = this.BLACK;

      //ZZZZ XSetStipple(XtDisplay(w), this.sliceGC, 
      //ZZZZ                 this.fill_bitmaps[fill_num]);

      if ( this.pieData[slice] != 0.0 )
      {
         var wedge = this.calcWedgePts(xp, yp, arc_pos, degrees, xrad, yrad);
         if ( wedge )
         {
            ctx.beginPath();

            ctx.moveTo(wedge.xpts[0], wedge.ypts[0]);
            for ( var jndx=1; jndx<wedge.xpts.length; jndx++ )
               ctx.lineTo(wedge.xpts[jndx], wedge.ypts[jndx]);

            ctx.fillStyle = this.colors[num];
            ctx.fill();

            ctx.fillStyle = this.BLACK;
            ctx.stroke();
         }
         else   // Too small an angle, just draw a token sliver
         {
            var ang = arc_pos * this.M_PI / 180.0;    // start angle

            var x2 = xp + xrad * Math.cos(ang);
            var y2 = yp - yrad * Math.sin(ang);

            ctx.beginPath();
            ctx.moveTo(xp, yp);
            ctx.lineTo(x2, y2);

            ctx.fillStyle = this.BLACK;
            ctx.stroke();
         }
      }

      label = "";
      if ( this.labels[slice] != null && this.labels[slice].length != 0 )
      {
         label = this.labels[slice];
         if ( this.labels[slice].length > 16 )
            label.length = 16;
      }

      var percent = 100.0 * ftmp;   // calc slice percent
      var value   = this.pieData[slice];

      if ( this.labelLoc == this.LABEL_INTERIOR )
      {
         if ( percent >= this.MIN_WEDGE )
            this.drawInteriorLabel(ctx, xp, yp, xrad, yrad, arc_pos, degrees,
                                     label, value, percent);
         // else if force labels draw exterior...
      }
      else  // Draw label outside the pie chart
      {
         this.drawLabel(ctx, xp, yp, xrad, yrad, arc_pos, degrees,
                            label, value, percent);
      }
   }
}


BizPieChart.prototype.shadeWedge = function(ctx, wedge, color, arc_pos, degrees)
{
   if ( arc_pos < 90  || arc_pos >= 270 || !degrees )
   {
      ctx.beginPath();
      ctx.moveTo(wedge.xc, wedge.yc);
      ctx.lineTo(wedge.xs, wedge.ys);
      ctx.lineTo(wedge.xs, wedge.ys + this.shadow_height);
      ctx.lineTo(wedge.xc, wedge.yc + this.shadow_height);
      ctx.lineTo(wedge.xc, wedge.yc);

      ctx.fillStyle = color;
      ctx.fill();

      ctx.fillStyle = this.BLACK;
      ctx.stroke();
   }

   if ( degrees && arc_pos+degrees > 90 && arc_pos+degrees < 270 )
   {
      ctx.beginPath();
      ctx.moveTo(wedge.xc, wedge.yc);
      ctx.lineTo(wedge.xe, wedge.ye);
      ctx.lineTo(wedge.xe, wedge.ye + this.shadow_height);
      ctx.lineTo(wedge.xc, wedge.yc + this.shadow_height);
      ctx.lineTo(wedge.xc, wedge.yc);

      ctx.fillStyle = color;
      ctx.fill();

      ctx.fillStyle = this.BLACK;
      ctx.stroke();
   }

   if ( degrees &&
          ((arc_pos >= 180 && arc_pos <= 360) || arc_pos+degrees >= 180) )
   {
      var indx = 0;
      var npts = wedge.xpts.length - 2;  // Forget center points

      ctx.beginPath();
      ctx.moveTo(wedge.xpts[0], wedge.ypts[0]);

      for ( var i=1; i<npts; i++, indx++ )
      {
         ctx.lineTo(wedge.xpts[i], wedge.ypts[i]);
      }

      for ( var i=npts-1; i>=0; i--, indx++ )
      {
         ctx.lineTo(wedge.xpts[i], wedge.ypts[i] + this.shadow_height);
      }

      ctx.lineTo(wedge.xpts[0], wedge.ypts[0]);

      ctx.fillStyle = color;
      ctx.fill();

      ctx.fillStyle = this.BLACK;
      ctx.stroke();
   }
}


BizPieChart.prototype.drawLabel = function(ctx, xp, yp, xrad, yrad, arc_pos,
                                           degrees, label, value, percent)
{
   var   x1, y1, x2, y2; 
   var   offset, right_side;
   var   tmp_txt;

   x1 = xp + xrad * 0.9 * this.PCOS(arc_pos, degrees);
   y1 = yp - yrad * 0.9 * this.PSIN(arc_pos, degrees);

   xrad += 16;
   yrad += 16;

   x2 = xp + xrad * this.PCOS(arc_pos, degrees);
   y2 = yp - yrad * this.PSIN(arc_pos, degrees);

   if ( x1 > xp )       // Wedge piece is to right of center
   {
      right_side = true;
      offset = 0.3 * xrad + 4;
   }
   else                 // Wedge piece is to left of center
   {
      right_side = false;
      offset = -0.3 * xrad;
   }

   if ( y2 > yp )
      y2 += this.shadow_height;

   ctx.strokeStyle = this.BLACK;
   ctx.beginPath();
   ctx.moveTo(x1, y1);
   ctx.lineTo(x2, y2);
   ctx.stroke();

   if ( this.labelOffset == this.NEAR_LABELS ) 
   {
      xrad += 4;
      yrad += 4;
      x2 = xp + xrad * this.PCOS(arc_pos, degrees);
      y2 = yp - yrad * this.PSIN(arc_pos, degrees);
      if ( y2 > yp )
         y2 += this.shadow_height;
   }
   else                     // Extend line out to side
   {
      ctx.strokeStyle = this.BLACK;
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 + offset, y2);
      ctx.stroke();
      x2 += offset;
   }

   var tmp_txt, txt_str;

   // Display percent of pie or actual value based on flag
   if ( this.percent_flag )
      tmp_txt = percent + "% ";
   else
      tmp_txt = value + " ";

   switch ( this.labelType )
   {
      default:
      case this.LABEL_VALUES:
         txt_str = tmp_txt;
         break;

      case this.LABEL_NAMES:
         txt_str = label;
         break;

      case this.LABEL_BOTH:
         txt_str = tmp_txt +  label;
         break;
   }

   // Draw the label
//** How about allowing color
   if ( right_side == true )
      ctx.drawText(this.labelsFont, this.labelsFontSize, x2, y2+4, txt_str);
   else
      ctx.drawTextRight(this.labelsFont, this.labelsFontSize, x2, y2+4, txt_str);
}


// xp, yp = Center of wedge
BizPieChart.prototype.drawInteriorLabel = function(ctx, xp, yp, xrad1, yrad1, arc_pos,
                                                 degrees, label, value, percent)
{
   var  xrad = 0.75 * xrad1;
   var  yrad = 0.75 * yrad1;

   // find center of wedge
   xp += xrad * this.PCOS(arc_pos, degrees);
   yp -= yrad * this.PSIN(arc_pos, degrees);

   var  tmp_txt, txt_str;

   // Display percent of pie or actual value based on flag
   if ( this.percent_flag )
      tmp_txt = percent + "% ";
   else
      tmp_txt = value + " ";

   switch ( this.labelType )
   {
      default:
      case this.LABEL_VALUES:
         txt_str = tmp_txt;
         break;

      case this.LABEL_NAMES:
         txt_str = label;
         break;

      case this.LABEL_BOTH:
         txt_str = tmp_txt +  label;
         break;
   }

   ctx.drawTextCenter(this.labelsFont, this.labelsFontSize, xp, yp+4, txt_str);
}


BizPieChart.prototype.calcWedgeOrder = function(sign, pietot)
{
   var arc_pos = this.start_angle;
   var degrees = 0.0;
   var ftmp, ang;
   var xt, yt;
   var xp, yp;

   for ( var slice=0; slice<this.pieData.length; slice++ )
   {
      if ( this.pieData[slice] != 0.0 )
      {
         ftmp = this.pieData[slice]/pietot;
         arc_pos += degrees;
         degrees  = 360.0 * sign * ftmp;                // calc slice size
         ang = (arc_pos + degrees/2) * this.M_PI / 180.0;    // mid point angle
         xt = Math.cos(ang);
         yt = -Math.sin(ang);
         xp = (10.0 * xt) + (xt >= 0. ? .5 : -.5);
         yp = (10.0 * yt) + (yt >= 0. ? .5 : -.5);

         this.wedge_yval[slice] = yp;
         this.wedge_slice[slice] = slice;
         this.wedge_arc_pos[slice] = arc_pos;
         this.wedge_degrees[slice] = degrees;
      }
      else
      {
         this.wedge_yval[slice] = 0;
         this.wedge_slice[slice] = 0;
         this.wedge_arc_pos[slice] = 0;
         this.wedge_degrees[slice] = 0;
      }
   }
}


BizPieChart.prototype.sortWedges = function()
{
   var length = this.wedge_yval.length;
   var yval, slice, arc_pos, degrees;
   var j;

   for ( var i=1; i<length; i ++ )
   {
      yval = this.wedge_yval[i];
      slice = this.wedge_slice[i];
      arc_pos = this.wedge_arc_pos[i];
      degrees = this.wedge_degrees[i];

      j = i-1;

      while ( j >= 0 && this.wedge_yval[j] > yval )
      {
         this.wedge_yval[j+1] = this.wedge_yval[j];
         this.wedge_slice[j+1] = this.wedge_slice[j];
         this.wedge_arc_pos[j+1] = this.wedge_arc_pos[j];
         this.wedge_degrees[j+1] = this.wedge_degrees[j];
         j--;
      }

      this.wedge_yval[j+1] = yval;
      this.wedge_slice[j+1] = slice;
      this.wedge_arc_pos[j+1] = arc_pos;
      this.wedge_degrees[j+1] = degrees;
   }
}


BizPieChart.prototype.PCOS = function(a, b)
{
   return Math.cos((a+(b/2.0))/57.296);
}


BizPieChart.prototype.PSIN = function(a, b)
{
   return Math.sin((a+(b/2.0))/57.296);
}


BizPieChart.prototype.calcWedgePts = function(xc, yc, angle1, angle2, xrad, yrad)
{
   var xc, yc;
   var t, xt, yt, dc, ds;
   var xr, yr;

   if ( angle1 == null )
      angle1 = 0;

   if ( angle2 == 0 ) // Nothing to draw
      return null;

   // XWin measures arcs in 64ths of a degree
   //ZZZZ angle1 *= 64;
   //ZZZZ angle2 *= 64;

   if ( angle2 > this.DEG_360 )
      angle2 = this.DEG_360;

   var pwidth  = 2 * xrad;
   var pheight = 2 * yrad;

   //
   // compute number of points needed for "good" display precision 
   //
   var size = (pwidth + pheight) / 2.0;
   var npts = this.M_PI * Math.sqrt(size);
   if ( npts < 8 )  npts = 8;
   npts = (npts * ((angle2 < 0) ? -angle2 : angle2) + 
                this.DEG_720 - 1) / this.DEG_360;
   npts = Math.ceil(npts);
   npts++;
   if ( npts > 199 )  npts = 199;

   var wedge = new BizPieWedge();

   wedge.xpts = new Array(npts+2);
   wedge.ypts = new Array(npts+2);

   // angle between polygon points
   var ang = angle2 * this.M_PI / (this.DEG_180 * (npts - 1));
   dc = Math.cos(ang);
   ds = - Math.sin(ang);
    
   if ( angle1 == 0 )
   {
      xt = 1.0;
      yt = 0.0;
   } 
   else 
   {
      ang = angle1 * this.M_PI / this.DEG_180;    // start angle vector
      xt = Math.cos(ang);
      yt = - Math.sin(ang);
   }

   for ( var i=0; i<npts; i++ )     // compute polygon points
   {
      wedge.xpts[i] = xc + xrad * xt + (xt >= 0. ? .5 : -.5);
      wedge.ypts[i] = yc + yrad * yt + (yt >= 0. ? .5 : -.5);
      t = dc * xt - ds * yt;        // rotate vector
      yt = ds * xt + dc * yt;
      xt = t;
   }

   wedge.xc = xc;
   wedge.yc = yc;
   wedge.xs = wedge.xpts[0];
   wedge.ys = wedge.ypts[0];
   wedge.xe = wedge.xpts[npts-1];
   wedge.ye = wedge.ypts[npts-1];

   if ( angle2 != this.DEG_360 )
   {
      wedge.xpts[npts] = xc;
      wedge.ypts[npts] = yc; 
      npts++;
      wedge.xpts[npts] = wedge.xpts[0];
      wedge.ypts[npts] = wedge.ypts[0]; 
      npts++;
   }

   return wedge;
}


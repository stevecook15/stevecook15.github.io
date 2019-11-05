
/**
 *
 * A simplistic javascript chart legend using the html 'canvas' tag.
 *
 * <br>
 * Copyright (c) 2008 Steven A. Cook
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * @constructor
 */
function BizLegend()
{
   this.BLACK = "#000000";
   this.WHITE = "#ffffff";
   this.GRAY = "#aaaaaa";
   this.VERTICAL = 0;
   this.HORIZONTAL = 1;

   //                            // red,       blue,     green,    purple,
   //                            // orange,    cyan,     yellow,   magenta
   //this.def_colors = new Array("#ff0000", "#0000ff", "#008800", "#900090",
   //                            "#ffa500", "#00ffff", "#ffff00", "#ff00ff");


   this.def_colors = new Array("#ff0000",   // red
                           "#0000ff",   // blue
                           "#008000",   // green
                           "#800080",   // purple
                           "#ffa580",   // orange
                           "#00ffff",   // cyan
                           "#ffff00",   // yellow
                           "#008080",   // teal
                           "#ff00ff",   // pink
                           "#00ff00",   // lime
                           "#800000",   // maroon
                           "#808000");  // olive

//gray #808080
//navy #000080
//silver #C0C0C0

   this.legend_colors = new Array();

   this.legend_labels = new Array();
   this.layout = this.VERTICAL;
   this.backgroundColor = "#ffffff";

   this.legendFont = 10;
   this.legendFontSize = 10;

   if ( this.legend_labels.length != 0 )
      this.initialize();
}


/**
 * Re-initializes any data structures / display values
 */
BizLegend.prototype.initialize = function()
{
   this.legend_labels.length = 0;
   this.legend_colors.length = 0;
}


/**
 * Clear the drawing area defined by id and width/height
 * @param {String} canvasID HTML ID value for canvas to draw to
 * @param {int} width  Width of canvas area
 * @param {int} height Height of canvas area
 */
BizLegend.prototype.clear = function(canvasID, width, height)
{
   var canvas = document.getElementById(canvasID);
   if ( canvas == null || canvas.length == 0 )
   {
alert("legend no canvas");
      return;
   }

   if ( canvas.getContext == null )
      G_vmlCanvasManager.initElement(canvas);

   if ( canvas.getContext == null )
   {
alert("legen still no context");
      return;
   }

   var ctx = canvas.getContext('2d');

   ctx.fillStyle = this.backgroundColor;
   ctx.fillRect(0, 0, width, height);
}


/**
 * Add a line to the legend with implicit color based on same order a plot data sets
 * @param {String} label  Label string to display
 */
BizLegend.prototype.addLabel = function(label)
{
   var indx = this.legend_labels.length;

   this.legend_labels[indx] = label;
   this.legend_colors[indx] = this.def_colors[indx % 12];
}


/**
 * Add an item to the legend with explicit color
 * @param {String} label  Label string to display
 * @param {String} color  Color to draw label box with
 */
BizLegend.prototype.add = function(label, color)
{
   var indx = this.legend_labels.length;

   this.legend_labels[indx] = label;
   this.legend_colors[indx] = color;
}


/**
 * Set vertical or horizontal layout
 * @param {int} value   VERTICAL or HORIZONTAL
 */
BizLegend.prototype.setLayout = function(value)
{
   this.layout = value;
}


/**
 * Set the background color for the plot
 * @param {String} color     Color to draw background with
 */
BizLegend.prototype.setBackgroundColor = function(color)
{
   this.backgroundColor = color;
}


/**
 * Draw the chart given the previously set plot parameters
 * @param {String} canvasID HTML ID value for canvas to draw to
 * @param {int} width  Width of canvas area
 * @param {int} height Height of canvas area
 */
BizLegend.prototype.draw = function(canvasID, width, height)
{
   var canvas = document.getElementById(canvasID);
   if ( canvas == null || canvas.length == 0 )
   {
      alert("legend no canvas");
      return;
   }

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

   if ( this.legend_labels.length == 0 )
   {
      alert("No legend labels provided...");
      return;
   }

   ctx.fillStyle = this.backgroundColor;
   ctx.fillRect(0, 0, width, height);

   //ctx.strokeRect(0, 0, width, height);

   var label, color;

   // Calculate text height for some random text string
   var txtHeight = ctx.fontHeight(this.legendFont, this.legendFontSize);

   var xloc = 12;
   var yloc = 8;
   for ( var indx=0; indx<this.legend_labels.length; indx++ )
   {
      label = this.legend_labels[indx];
      color = this.legend_colors[indx];

      if ( this.layout == this.HORIZONTAL )
      {
         // Create a legend square same size as text height
         ctx.fillStyle = color;
         ctx.fillRect(xloc, yloc, txtHeight, txtHeight);

         ctx.strokeStyle = this.BLACK;
         //ctx.fillStyle = this.backgroundColor;

         ctx.strokeRect(xloc, yloc, txtHeight, txtHeight);
         xloc += txtHeight + 6;

         ctx.drawTextRight(this.legendFont, this.legendFontSize, xloc, txtHeight + yloc - 1, label);

         xloc += ctx.measureText(this.legendFont, this.legendFontSize, label);

         if ( xloc+txtHeight > width )
         {
            xloc = 12;
            yloc += (txtHeight+8);
         }
      }
      else    // Vertical layout
      {
         ctx.fillStyle = color;
         ctx.fillRect(6, (indx*(txtHeight+6))+6, txtHeight, txtHeight);

         ctx.strokeStyle = this.BLACK;
         ctx.strokeRect(6, (indx*(txtHeight+6))+6, txtHeight, txtHeight);

         ctx.drawText(this.legendFont, this.legendFontSize, 6 + txtHeight + 4,
                             (indx*(txtHeight+6))+txtHeight+4, label);
      }
   }
}


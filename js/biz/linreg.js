
/*
 * linreg.js - A simple minded linear regression ported to javascript
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

function BizInterp()
{ 
   // Initialize any static vars?
}

BizInterp.prototype.tester = function()
{
   var xarr = new Array(  1.0,  2.0,  3.0,  4.0,  5.0,  6.0 );
   var yarr = new Array( 12.0, 23.0, 17.0, 29.0, 21.0, 16.0 );

   var params = this.calcParams(xarr, yarr);

   var x1 = 1.0;
   var x2 = 6.0;
   var y1 = this.calcPoint(params, x1);
   var y2 = this.calcPoint(params, x2);

   //console.log("Orig Pt 1: " + xarr[0] + ", " + yarr[0]);
   //console.log("New Pt 1: " + x1 + ", " + y1);

   //console.log("Orig Pt 2: " + xarr[5] + ", " + yarr[5]);
   //console.log("New Pt 2: " + x2 + ", " + y2);
}

// Calc slope/intercept/etc...
// Pass arrays of x and y
BizInterp.prototype.calcParams = function(x, y)
{
   var n = 0;

   // first pass: read in data, compute xbar and ybar
   var sumx = 0.0, sumy = 0.0, sumx2 = 0.0;

   for ( indx=0; indx<x.length; indx++ )
   {
      sumx  += x[indx];
      sumx2 += x[indx] * x[indx];
      sumy  += y[indx];
      n++;
   }

   var xbar = sumx / n;
   var ybar = sumy / n;

   // second pass: compute summary statistics
   var xxbar = 0.0, yybar = 0.0, xybar = 0.0;
   for ( i = 0; i < n; i++ )
   {
      xxbar += (x[i] - xbar) * (x[i] - xbar);
      yybar += (y[i] - ybar) * (y[i] - ybar);
      xybar += (x[i] - xbar) * (y[i] - ybar);
   }

   var beta1 = xybar / xxbar;
   var beta0 = ybar - beta1 * xbar;

   // This is the 'y = mX + b' results
   //console.log("y   = " + beta1 + " * x + " + beta0);

   // analyze results
   var df = n - 2;
   var rss = 0.0;      // residual sum of squares
   var ssr = 0.0;      // regression sum of squares
   var fit;
   for ( i=0; i<n; i++ )
   {
      fit = beta1*x[i] + beta0;
      rss += (fit - y[i]) * (fit - y[i]);
      ssr += (fit - ybar) * (fit - ybar);
   }

   var R2    = ssr / yybar;
   var svar  = rss / df;
   var svar1 = svar / xxbar;
   var svar0 = svar/n + xbar*xbar*svar1;

   //System.out.println("R^2                 = " + R2);
   //System.out.println("std error of beta_1 = " + Math.sqrt(svar1));
   //System.out.println("std error of beta_0 = " + Math.sqrt(svar0));

   svar0 = svar * sumx2 / (n * xxbar);

   //System.out.println("std error of beta_0 = " + Math.sqrt(svar0));
   //System.out.println("SSTO = " + yybar);
   //System.out.println("SSE  = " + rss);
   //System.out.println("SSR  = " + ssr);

   var params = new Array();
   params[0] = beta0;
   params[1] = beta1;

   return params;
}

BizInterp.prototype.calcPoint = function(params, x)
{
   return ( (params[1] * x) + params[0]);
}


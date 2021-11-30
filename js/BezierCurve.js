'use-strict';

//  // how many points do you need on the curve?
//  const int POINTS_ON_CURVE = 1000;

// Example from C# code:
//  double[] ptind = new double[ptList.Count];
//  double[] p = new double[POINTS_ON_CURVE];
//  ptList.CopyTo(ptind, 0);
//  bc.Bezier2D(ptind, (POINTS_ON_CURVE) / 2, p);

// Notional caller for JS
// bc = new BezierCurve();
// var xpts = new Array()
// var ypts = new Array()
// var scores = teams[indx].scores;
//var numScores = scores.length;
//var x = 1.0; // Week 1
//var numXPts = 0;
//while ( x <= numScores )
//{
//   xpts[i] = x;
//   x += 0.125;
//   numXpts += 1;
//}
// Fill in Y points (evenly spaced X pts)
// y = bc.Bezier2d(teamX.scores, numXpts);  // 8 data points per week
// Add x, y to XYPlot data
// 

class BezierCurve
{
   //var FactorialLookup = new Array();

   constructor()
   {
      //CreateFactorialTable();
   }

   Bezier2D(b, cpts)   //double[] b, int cpts, double[] p)
   {
      console.log("Bez RawData: " + b.length);
		console.log("Bez Interp pts: " + cpts);

      var p = new Array();

      var npts = (b.length) / 2;
      console.log("Npts: " + npts);

      var icount, jcount;
      var step, t;
      var basis;

      // Calculate points on curve

      icount = 0;
      t = 0;
      step = 1.0 / (cpts - 1);
      console.log("Steps: " + step);

      for (var i1 = 0; i1 < cpts; i1++)
      { 
//console.log("Outer Loop: " + i1 + " -> " + cpts);
         if ((1.0 - t) < 5e-6) 
         {
            t = 1.0;
         }

         jcount = 0;
         p[icount] = 0.0;
         p[icount + 1] = 0.0;
         for (var i = 0; i < npts; i++)
         {
//console.log("Inner Loop: " + i + " -> " + npts);
            basis = this.Bernstein(npts - 1, i, t);
            p[icount] += basis * b[jcount];
            p[icount + 1] += basis * b[jcount + 1];
            jcount = jcount + 2;
         }

         icount += 2;
         t += step;
      }
console.log("Done with B2D");

      return p;
   }


   factorial(n)
   {
      var ans=1;
              
      for (var i = 2; i <= n; i++)
      {
         ans = ans * i;
      }
      return ans;
   }

   //factorial(n)
   //{
   //   return n ? n * this.factorial(n - 1) : 1;
   //}

   //alert( this.factorial(5) ); // 120

   NiFunc(n, i)
   {
      var ni;
      var a1 = this.factorial(n);
      var a2 = this.factorial(i);
      var a3 = this.factorial(n - i);

      return a1/ (a2 * a3); 
   }

   // Calculate Bernstein basis
   Bernstein(n, i, t)
   {
      var basis;
      var ti;   // t^i 
      var tni;  // (1 - t)^i 

      // Prevent problems with pow

      if (t == 0.0 && i == 0) 
         ti = 1.0; 
      else 
         ti = Math.pow(t, i);

      if (n == i && t == 1.0) 
         tni = 1.0; 
      else 
         tni = Math.pow((1 - t), (n - i));

      //Bernstein basis
      basis = this.NiFunc(n, i) * ti * tni; 
      return basis;
   }


//  // just check if n is appropriate, then return the result
//  factorial(int n)
//  {
//     //if (n < 0) { throw new Exception("n is less than 0"); }
//     //if (n > 32) { throw new Exception("n is greater than 32"); }
//
//     return FactorialLookup[n]; // returns the value n! as a SUMORealing point number
//  }

//        // create lookup table for fast factorial calculation
//        private void CreateFactorialTable()
//        {
//            // fill untill n=32. The rest is too high to represent
//            double[] a = new double[33]; 
//            a[0] = 1.0;
//            a[1] = 1.0;
//            a[2] = 2.0;
//            a[3] = 6.0;
//            a[4] = 24.0;
//            a[5] = 120.0;
//            a[6] = 720.0;
//            a[7] = 5040.0;
//            a[8] = 40320.0;
//            a[9] = 362880.0;
//            a[10] = 3628800.0;
//            a[11] = 39916800.0;
//            a[12] = 479001600.0;
//            a[13] = 6227020800.0;
//            a[14] = 87178291200.0;
//            a[15] = 1307674368000.0;
//            a[16] = 20922789888000.0;
//            a[17] = 355687428096000.0;
//            a[18] = 6402373705728000.0;
//            a[19] = 121645100408832000.0;
//            a[20] = 2432902008176640000.0;
//            a[21] = 51090942171709440000.0;
//            a[22] = 1124000727777607680000.0;
//            a[23] = 25852016738884976640000.0;
//            a[24] = 620448401733239439360000.0;
//            a[25] = 15511210043330985984000000.0;
//            a[26] = 403291461126605635584000000.0;
//            a[27] = 10888869450418352160768000000.0;
//            a[28] = 304888344611713860501504000000.0;
//            a[29] = 8841761993739701954543616000000.0;
//            a[30] = 265252859812191058636308480000000.0;
//            a[31] = 8222838654177922817725562880000000.0;
//            a[32] = 263130836933693530167218012160000000.0;
//            FactorialLookup = a;
//        }

}

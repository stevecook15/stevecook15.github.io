
/**
 * BizScaleAxes is a set of functions to generate nice (ie reasonable) axis numbers
 * for any given range of values.  This was originally FORTRAN or C code or something - 
 * I've lost the info detailing who originally developed the algorithm.
 * @constuctor
 * @ignore
 */
function BizScaleAxes()
{

   // Set of potential multipliers for well tempered numbers
   this.dataSet = new Array( 1.0, 2.0, 5.0, 10.0 );

   this.plot_index = 0;
   this.powerOfTen = 0.0;

   this.scalemin = 0.0;
   this.scalemax = 100.0;
   this.num_intervals = 9;
}


/**
 * @ignore
 */
BizScaleAxes.prototype.calculate = function(dataMin, dataMax, numIntervals)
{
   // Calculates the best axes values from the passed variables.  Axes values then
   // can be retrieved by the 'get' routines.
   //    dataMin - min value for axes calaculation
   //    dataMax - max value for axes calaculation
   //    numIntervals - initial suggestion for number of intervals (ie tic marks)

   var IntervalSize;
   var NiceNum;

   if ( dataMin >= dataMax )
      return;

   if ( numIntervals < 2 )
      numIntervals = 2;

   // Calculate the smallest potential interval size
   IntervalSize = (dataMax - dataMin)/numIntervals;

   // Set the intial offset into dataSet
   this.plot_index = 0;

   // Calculate the smallest nice number not smaller then IntervalSize
   for ( NiceNum = this.firstNiceNum(IntervalSize);
           NiceNum < IntervalSize; NiceNum = this.nextNiceNum() )
      ;

   // Produce the scale using the specified nice number
   var lo_mult = this.calcLowMult(dataMin, dataMax, NiceNum);
   var hi_mult = this.calcHighMult(dataMin, dataMax, NiceNum);

   // Continue rescaling data with new nice numbers until the
   //  requested number of intervals is not exceeded

   while ( hi_mult - lo_mult  > numIntervals )
   {
      NiceNum = this.nextNiceNum();
      lo_mult = this.CalcLowMult(dataMin, dataMax, NiceNum);
      hi_mult = this.calcHighMult(dataMin, dataMax, NiceNum);
   }

   // Calculate scale limits
   this.scalemin = lo_mult * NiceNum;
   this.scalemax = hi_mult * NiceNum;
   this.num_intervals = Math.floor(hi_mult - lo_mult);
}

/**
 * @ignore
 */
BizScaleAxes.prototype.getMinValue = function()
{
   // Gets the previously defined minimum value for the axis
   //    returns: minimum value for axes

   return this.scalemin;
}

/**
 * @ignore
 */
BizScaleAxes.prototype.getMaxValue = function()
{
   // Gets the previously defined maximum value for the axis
   //    returns: maximum value for axes

   return this.scalemax;
}

/**
 * @ignore
 */
BizScaleAxes.prototype.getIntervals = function()
{
   // Gets the previously defined number of intervals
   //    returns: number of intervals/tic for axes

   return this.num_intervals;
}


/**
 * @ignore
 */
BizScaleAxes.prototype.firstNiceNum = function(IntervalSize)
{
   // Calculate the first nice number

   // Calculate an initial power of 10
   var tmpval = Math.log(IntervalSize) / Math.log(10);
   var Exponent = Math.floor(tmpval);

   // Calculate the power of ten
   this.powerOfTen = this.Power(10.0, Exponent);
   if ( this.powerOfTen * 10.0 < IntervalSize )
      this.powerOfTen *= 10.0;

   this.plot_index = 0;

   return this.powerOfTen;
}


/**
 * @ignore
 */
BizScaleAxes.prototype.nextNiceNum = function()
{
   // Calculate the next nice number

   // Increment the index
   this.plot_index++;

   // If the maximum index has been exceeded, reset the index
   //  to zero and increase the power of 10 
   if ( this.plot_index >= this.dataSet.length )
   {
      this.plot_index = 0;
      this.powerOfTen *= 10.0;
   }

   return this.dataSet[this.plot_index] * this.powerOfTen;
}


/**
 * @ignore
 */
BizScaleAxes.prototype.calcLowMult = function(datamin, datamax, NiceNum)
{
   // Calculate the low end mulitplier

   var lo_mult = Math.floor(datamin/NiceNum);

   if ( (lo_mult+1)*NiceNum <= datamin )
      lo_mult++;

   return lo_mult;
}

    
/**
 * @ignore
 */
BizScaleAxes.prototype.calcHighMult = function(datamin, datamax, NiceNum)
{
   // Calculate the high end mulitplier

   var hi_mult = Math.ceil(datamax/NiceNum);

   if ( (hi_mult-1)*NiceNum >= datamax )
      hi_mult--;

   return hi_mult;
}


/**
 * @ignore
 */
BizScaleAxes.prototype.Power = function(root, exponent)
{
   // Raise a double  to an integer power

   // For negative exponents, invert root and use positive exponent
   if ( exponent < 0 )
   {
      root = 1.0/root;
      exponent = -exponent;
   }

   // Perform multiplications
   var result = 1.0;
   while ( exponent != 0 )
   {
      if ( (exponent & 1) != 0 )
         result *= root;
   
      exponent >>= 1;

      if ( exponent != 0 )
         root *= root;
   }

   return result;
}


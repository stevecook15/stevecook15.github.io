
class PflUtils
{
//TODO: Figure out how to calculate this based on first tue of season
//------ Day of each wednesday, leading up to next weeks game
//------ WK:   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
   dMons = [  8,  8,  8,  9,  9,  9,  9, 10, 10, 10, 10, 11, 11, 11, 11, 11 ];
   dDays = [ 16, 23, 30,  7, 14, 21, 28,  4, 11, 18, 25,  2,  9, 16, 23, 30 ];

   constructor()
   {
   }

   clearTable(tbl)
   {
      while ( tbl.childNodes.length > 0 )
      {
         tbl.removeChild(tbl.childNodes[0]);
      }
   }

   calcWeek(today)
   {
      var daynum = this.getDOY(today);

      var tuesday;
      var tuesnum;

      var week = 1;
      for ( var indx=0; indx<this.dMons.length; indx++ )
      {
         var d = new Date();
         var year = d.getFullYear();
         tuesday = new Date(year, this.dMons[indx], this.dDays[indx]);
         tuesnum = this.getDOY(tuesday); 

         if ( daynum <= tuesnum )
            break;

         week++;
      }

      if ( week == 0 )  // Always make first week available
         week = 1;
      else if ( week > 16 )  // Never go past last week
         week = 16;

      return week;
   }

   getDOY(checkDate)
   {
      var d = new Date();
      var year = d.getFullYear();
      var onejan = new Date(year, 0, 1);
      return Math.ceil((checkDate - onejan) / 86400000);
   }


   bsort(names, wins, losses)
   {
      var len = names.length;
      var stop;
      var temp;

      for ( var i=0; i < len; i++ )
      {
         for ( var j=0, stop=len-i; j<stop; j++ )
         {
            if ( wins[j] < wins[j+1] )
            {
               temp = wins[j];
               wins[j] = wins[j+1];
               wins[j+1] = temp;

               temp = losses[j];
               losses[j] = losses[j+1];
               losses[j+1] = temp;

               temp = names[j];
               names[j] = names[j+1];
               names[j+1] = temp;
            }
         }
      }
   }
}


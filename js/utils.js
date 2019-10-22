
class PflUtils
{
   constructor(year, month, day)
   {
      this.dMons = new Array();
      this.dDays = new Array();

      var d = new Date(year, month-1, day, 12, 0, 0, 0); 
      var dd, mm;

      for ( var week=1; week<=16; week++ )
      {
         d.setDate(d.getDate() + 7); 
         dd = d.getDate();
         mm = d.getMonth() + 1;
         this.dMons.push(mm); 
         this.dDays.push(dd);
         //console.log("Week " + week + " Month " + mm + " Day " + dd);
      }
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
         tuesday = new Date(year, (this.dMons[indx]-1), this.dDays[indx]);
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


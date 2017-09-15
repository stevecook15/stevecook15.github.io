
function luckyDog()
{
   var num_teams = pfl_scores.length;

   var league_wins = new Array(num_teams);
   var league_losses = new Array(num_teams);

   var tot_wins = new Array(num_teams);
   var tot_losses = new Array(num_teams);

   var names = new Array(num_teams);
   var wins = new Array(num_teams);
   var losses = new Array(num_teams);

   for ( var indx=0; indx<num_teams; indx++ )
   {
      league_wins[indx] = pfl_records[indx][0];
      league_losses[indx] = pfl_records[indx][1];
      tot_wins[indx] = 0;
      tot_losses[indx] = 0;
   }

   // Number of weeks played
   var num_scores = pfl_scores[0].length;

   var table = null;
   var tableBody = null;
   var row, cell, textNode;
   var tHdr = new Array("Name", "Wins", "Losses", " % ");
   var teamscore, oppnscore, percent;
   var str;

   try
   {
      // Do all the weeks,then build season
      for ( var week=1; week<=num_scores; week++ )
      {
         // Make sure names are in correct order after bsort
         for ( var indx=0; indx<num_teams; indx++ )
            names[indx] = pfl_labels[indx];

         str = "lweek" + week;
         divId = document.getElementById(str);
         if ( divId != null )
         {
            table = document.createElement("table");
            table.setAttribute("border", "1px");
            tableBody = document.createElement("tbody");
            table.appendChild(tableBody);
            divId.appendChild(table);

            row = document.createElement("tr");
            row.setAttribute("bgcolor", "#ffff00");
            cell = document.createElement("th");
            cell.setAttribute("colspan", "4");
            textNode = document.createTextNode("Week " + week);
            cell.appendChild(textNode);
            row.appendChild(cell);
            tableBody.appendChild(row);

            row = document.createElement("tr");
            row.setAttribute("bgcolor", "#ffff00");

            for ( var kndx=0; kndx<4;kndx++ )
            {
               cell = document.createElement("th");
               textNode = document.createTextNode(tHdr[kndx]);
               cell.appendChild(textNode);
               row.appendChild(cell);
            }
            tableBody.appendChild(row);

            for ( var team=0; team<num_teams; team++ )
            {
               wins[team] = 0;
               losses[team] = 0;

               teamscore = pfl_scores[team][week-1];

               for ( var oppnt=0; oppnt<num_teams; oppnt++ )
               {
                  if ( team != oppnt )
                  {
                     oppnscore = pfl_scores[oppnt][week-1];

                     if ( teamscore > oppnscore )
                        wins[team]++;
                     else
                        losses[team]++;
                  }
               }

               tot_wins[team] += wins[team];
               tot_losses[team] += losses[team];
            }

            bsort(names, wins, losses);

            for ( var team=0; team<num_teams; team++ )
            {
               row = document.createElement("tr");
               row.setAttribute("bgcolor", "#dddddd");

               cell = document.createElement("td");
               textNode = document.createTextNode(names[team]);
               cell.appendChild(textNode);
               row.appendChild(cell);

               cell = document.createElement("td");
               cell.setAttribute("align", "center");
               textNode = document.createTextNode("" + wins[team]);
               cell.appendChild(textNode);
               row.appendChild(cell);

               cell = document.createElement("td");
               cell.setAttribute("align", "center");
               textNode = document.createTextNode("" + losses[team]);
               cell.appendChild(textNode);
               row.appendChild(cell);

               cell = document.createElement("td");
               cell.setAttribute("align", "center");
               percent = (wins[team] / (wins[team] + losses[team])) * 10000.0;
               ipercent = parseInt("" + percent);
               percent = ipercent / 100.0;
               if ( percent == 0 || percent == 100 )
                  textNode = document.createTextNode("" + percent + ".0");
               else
                  textNode = document.createTextNode("" + percent);
               cell.appendChild(textNode);
               row.appendChild(cell);

               tableBody.appendChild(row);
            }
         }
      }

      tableBody = document.getElementById("lseason_table");
      if ( tableBody != null )
      {
         row = document.createElement("tr");
         row.setAttribute("bgcolor", "#ffff00");
         cell = document.createElement("th");
         cell.setAttribute("colspan", "4");
         textNode = document.createTextNode("Season Totals");
         cell.appendChild(textNode);
         row.appendChild(cell);
         tableBody.appendChild(row);

         row = document.createElement("tr");
         row.setAttribute("bgcolor", "#ffff00");

         for ( var kndx=0; kndx<4;kndx++ )
         {
            cell = document.createElement("th");
            textNode = document.createTextNode(tHdr[kndx]);
            cell.appendChild(textNode);
            row.appendChild(cell);
         }
         tableBody.appendChild(row);

         for ( var team=0; team<num_teams; team++ )
            names[team] = pfl_labels[team];

         bsort(names, tot_wins, tot_losses);

         for ( var team=0; team<num_teams; team++ )
         {
            row = document.createElement("tr");
            row.setAttribute("bgcolor", "#dddddd");

            cell = document.createElement("td");
            textNode = document.createTextNode(names[team]);
            cell.appendChild(textNode);
            row.appendChild(cell);

            cell = document.createElement("td");
            cell.setAttribute("align", "center");
            textNode = document.createTextNode("" + tot_wins[team]);
            cell.appendChild(textNode);
            row.appendChild(cell);

            cell = document.createElement("td");
            cell.setAttribute("align", "center");
            textNode = document.createTextNode("" + tot_losses[team]);
            cell.appendChild(textNode);
            row.appendChild(cell);

            cell = document.createElement("td");
            cell.setAttribute("align", "center");
            if ( tot_wins[team] == 0 && tot_losses[team] == 0 )
            {
               textNode = document.createTextNode("0.0");
            }
            else
            {
               percent = (tot_wins[team] / (tot_wins[team] + tot_losses[team])) * 10000.0;
               ipercent = parseInt("" + percent);
               percent = ipercent / 100.0;
               if ( percent == 0 || percent == 100 )
                  textNode = document.createTextNode("" + percent + ".0");
               else
                  textNode = document.createTextNode("" + percent);
            }
            cell.appendChild(textNode);
            row.appendChild(cell);

            tableBody.appendChild(row);
         }
      }
   }
   catch ( err )
   {
      console.log("Error in script: " + err);
   }
}



function showStandings()
{
   var table1Hdr = document.getElementById("Div1Hdr");
   var table1Body = document.getElementById("Div1Body");
   var rec;

   if ( table1Hdr != null )
      clearTable(table1Hdr);

   if ( table1Body != null )
   {
      clearTable(table1Body);

      addRow(table1Hdr, "Team", "Owner", "W/L", "Div W/L", 0);
      for ( var indx=0; indx<4; indx++ )
      {
         rec = pfl_records[indx];
         addRow(table1Body, pfl_labels[indx], pfl_owners[indx],
                      "" + rec[0] + "/" + rec[1],
                      "" + rec[2] + "/" + rec[3], playoffs[indx]);
      }
   }

   var table2Hdr = document.getElementById("Div2Hdr");
   if ( table2Hdr != null )
      clearTable(table2Hdr);

   var table2Body = document.getElementById("Div2Body");
   if ( table2Body != null )
   {
      clearTable(table2Body);

      addRow(table2Hdr, "Team", "Owner", "W/L", "Div W/L", 0);
      for ( var indx=4; indx<8; indx++ )
      {
         rec = pfl_records[indx];
         addRow(table2Body, pfl_labels[indx], pfl_owners[indx],
                      "" + rec[0] + "/" + rec[1],
                      "" + rec[2] + "/" + rec[3], playoffs[indx]);
      }
   }
}

function clearTable(tbl)
{
   while ( tbl.childNodes.length > 0 )
   {
      tbl.removeChild(tbl.childNodes[0]);
   }
}


function addRow(tbody, teamname, owner, record, points, playoffs)
{
   var row, cell, textNode, lf;

   row = document.createElement("tr");

   cell = document.createElement("td");
   cell.setAttribute("className", "standings");

   switch ( playoffs )
   {
      case 1: cell.setAttribute("class", "playoffs"); break;
      case 2: cell.setAttribute("class", "div_winner"); break;
      case 3: cell.setAttribute("class", "bye_winner"); break;
      case 4: cell.setAttribute("class", "eliminated"); break;
      default: cell.setAttribute("class", "standings"); break;
   }

   textNode = document.createTextNode(teamname);
   cell.appendChild(textNode);
   row.appendChild(cell);

   //lf = document.createElement("br");
   //cell.appendChild(lf);

   cell = document.createElement("td");
   cell.setAttribute("class", "owners");
   cell.setAttribute("className", "owners");
   textNode = document.createTextNode("  " + owner + "  ");
   cell.appendChild(textNode);
   row.appendChild(cell);

   cell = document.createElement("td");
   cell.setAttribute("class", "records");
   cell.setAttribute("className", "records");
   textNode = document.createTextNode("  " + record + "  ");
   cell.appendChild(textNode);
   row.appendChild(cell);

   cell = document.createElement("td");
   cell.setAttribute("class", "points");
   cell.setAttribute("className", "points");
   if ( playoffs == 5 )
      textNode = document.createTextNode("  " + points + "  ");
   else
      //textNode = document.createTextNode("  " + points.toFixed(2) + "  ");
      textNode = document.createTextNode("  " + points + "  ");
   cell.appendChild(textNode);
   row.appendChild(cell);

   tbody.appendChild(row);
}

function ssort(names, owners, wins, losses, points)
{
   var len = names.length;
   var stop;
   var temp;
   var ntemp;

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

            temp = points[j];
            points[j] = points[j+1];
            points[j+1] = temp;

            ntemp = names[j];
            names[j] = names[j+1];
            names[j+1] = ntemp;

            ntemp = owners[j];
            owners[j] = owners[j+1];
            owners[j+1] = ntemp;
         }
         else if ( wins[j] == wins[j+1] && points[j] < points[j+1] )
         {
            temp = wins[j];
            wins[j] = wins[j+1];
            wins[j+1] = temp;

            temp = losses[j];
            losses[j] = losses[j+1];
            losses[j+1] = temp;

            temp = points[j];
            points[j] = points[j+1];
            points[j+1] = temp;

            ntemp = names[j];
            names[j] = names[j+1];
            names[j+1] = ntemp;

            ntemp = owners[j];
            owners[j] = owners[j+1];
            owners[j+1] = ntemp;
         }
      }
   }
}


'use strict';

class Standings
{

   constructor()
   {
   }

   show()
   {
      var table1Hdr = document.getElementById("Div1Hdr");
      var table1Body = document.getElementById("Div1Body");
      var rec;

      if ( table1Hdr != null )
         pflUtils.clearTable(table1Hdr);

      var pteams = getOrderedTeams();
      var team;

      if ( table1Body != null )
      {
         pflUtils.clearTable(table1Body);

         this.addRow(table1Hdr, "Team", "Owner", "All W/L", "Div W/L", "Tot Pts", 0);
         for ( var indx=0; indx<5; indx++ )
         {
            team = pteams[indx];
            this.addRow(table1Body, team.name, team.owner,
                        "" + team.wins + "/" + team.losses,
                        "" + team.divWins + "/" + team.divLosses,
                        team.totPts.toFixed(0),
                        playoffs[indx]);
         }
      }

      var table2Hdr = document.getElementById("Div2Hdr");
      if ( table2Hdr != null )
         pflUtils.clearTable(table2Hdr);

      var table2Body = document.getElementById("Div2Body");
      if ( table2Body != null )
      {
         pflUtils.clearTable(table2Body);

         this.addRow(table2Hdr, "Team", "Owner", "All W/L", "Div W/L", "Tot Pts", 0);
         for ( var indx=5; indx<10; indx++ )
         {
            team = pteams[indx];
            this.addRow(table2Body, team.name, team.owner,
                        "" + team.wins + "/" + team.losses,
                        "" + team.divWins + "/" + team.divLosses,
                        team.totPts.toFixed(0),
                        playoffs[indx]);
         }
      }
   }


   addRow(tbody, teamname, owner, record, div_record, points, playoffs)
   {
      var row, cell, textNode, lf;

      row = document.createElement("tr");

      cell = document.createElement("td");
      cell.setAttribute("className", "standings");

//console.log("Team " + teamname + ", " + playoffs);
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
      cell.setAttribute("class", "records");
      cell.setAttribute("className", "records");
      textNode = document.createTextNode("  " + div_record + "  "); 
      cell.appendChild(textNode);
      row.appendChild(cell);

      cell = document.createElement("td");
      cell.setAttribute("class", "points");
      cell.setAttribute("className", "points");
      textNode = document.createTextNode("  " + points + "  "); 
      cell.appendChild(textNode);
      row.appendChild(cell);

      tbody.appendChild(row);
   }
}


'use strict';

class Rosters
{
   constructor()
   {
   }

   show()
   {
      var tableHdr = document.getElementById("rhead0");
      var tableBody = document.getElementById("rbody0");
      this.fillTable(tableHdr, tableBody, team0);

      tableHdr = document.getElementById("rhead1");
      tableBody = document.getElementById("rbody1");
      this.fillTable(tableHdr, tableBody, team1);

      tableHdr = document.getElementById("rhead2");
      tableBody = document.getElementById("rbody2");
      this.fillTable(tableHdr, tableBody, team2);

      tableHdr = document.getElementById("rhead3");
      tableBody = document.getElementById("rbody3");
      this.fillTable(tableHdr, tableBody, team3);

      tableHdr = document.getElementById("rhead4");
      tableBody = document.getElementById("rbody4");
      this.fillTable(tableHdr, tableBody, team4);

      tableHdr = document.getElementById("rhead5");
      tableBody = document.getElementById("rbody5");
      this.fillTable(tableHdr, tableBody, team5);

      tableHdr = document.getElementById("rhead6");
      tableBody = document.getElementById("rbody6");
      this.fillTable(tableHdr, tableBody, team6);

      tableHdr = document.getElementById("rhead7");
      tableBody = document.getElementById("rbody7");
      this.fillTable(tableHdr, tableBody, team7);

      tableHdr = document.getElementById("rhead8");
      tableBody = document.getElementById("rbody8");
      this.fillTable(tableHdr, tableBody, team8);

      tableHdr = document.getElementById("rhead9");
      tableBody = document.getElementById("rbody9");
      this.fillTable(tableHdr, tableBody, team9);
   }

   fillTable(hdr, body, players)
   {
      var player;

      if ( hdr != null )
         pflUtils.clearTable(hdr);

      if ( body != null )
      {
         pflUtils.clearTable(body);

         this.addHdr(hdr, players[0]);

         for ( var indx=1; indx<players.length; indx++ )
         {
            player = players[indx].split(',');
            this.addRow(body, player[0], player[1], player[2], player[3], player[4]);
         }
      }
   }


   addHdr(thdr, team)
   {
      var row, cell, textNode, lf;

      row = document.createElement("tr");

      cell = document.createElement("td");
      textNode = document.createTextNode(" " + team + " ");
      cell.colSpan = 4;
      cell.setAttribute("align", "center");
      cell.setAttribute("class", "rphead");
      cell.appendChild(textNode);
      row.appendChild(cell);

      thdr.appendChild(row);
   }

   addRow(tbody, stbn, name, team, pos, onTeam)
   {
      var row, cell, textNode, lf;

      row = document.createElement("tr");

      cell = document.createElement("td");
      var image = document.createElement("img");
      image.src = "Gifs/" + team + ".gif";
      image.width = 24;
      cell.appendChild(image);
      row.appendChild(cell);

      cell = document.createElement("td");
      textNode = document.createTextNode(stbn);
      cell.appendChild(textNode);
      cell.setAttribute("class", "rpcell0");
      row.appendChild(cell);

      cell = document.createElement("td");
      textNode = document.createTextNode(pos);
      cell.appendChild(textNode);
      cell.setAttribute("class", "rpcell0");
      row.appendChild(cell);

      if ( onTeam != "0" )
      {
         cell.setAttribute("class", "rpcell1");
         cell.style.setProperty("text-decoration", "line-through");
      }
      else
         cell.setAttribute("class", "rpcell0");

      cell.appendChild(textNode);
      row.appendChild(cell);

      cell = document.createElement("td");
      textNode = document.createTextNode(name);
      cell.setAttribute("class", "rpcell");

      if ( onTeam != "0" )
      {
         cell.setAttribute("class", "rpcell1");
         cell.style.setProperty("text-decoration", "line-through");
      }
      else
         cell.setAttribute("class", "rpcell0");

      cell.appendChild(textNode);
      row.appendChild(cell);

      tbody.appendChild(row);
   }
}


function singleDivScoring()
{
   var name = new Array();
   var score = new Array();
   var winArr = new Array();
   var lossArr = new Array();

   if ( pfl_scores[0].length < week )
      return;

   for ( team=0; team<pfl_scores.length; team ++ )
   {
      name[team] = pfl_labels[team];
      score[team] = pfl_scores[team][week-1];
   }

   rsort(name, score);

   var wins = 5;
   var losses = 0;
   for ( team=0; team<pfl_scores.length; team ++ )
   {
      winArr[team] = wins;     wins--;
      lossArr[team] = losses;  losses++;
   }

   var tblName = "wk" + week + "Body"
   var tblBody = document.getElementById(tblName);
   var row;
   for ( team=0; team<pfl_scores.length; team ++ )
   {
      //console.log("team, win, loss: " + name[team] + ", " + score[team] + ", " +
      //               winArr[team] + ", " + lossArr[team]);

      row = document.createElement("tr");

      addCell(row, name[team], "scoringName", "LEFT");
      addCell(row, score[team], "scoringValue", "CENTER");
      addCell(row, winArr[team], "scoringRec", "CENTER");
      addCell(row, lossArr[team], "scoringRec", "CENTER");

      tblBody.appendChild(row);
   }

   var textID = "wk" + week + "Text";
   var textObj = document.getElementById(textID);
   if ( textObj != null )
      textObj.innerHTML = weekly_text[week-1] + "<br>";
}

function addCell(row, field, className, align)
{
   var cell = document.createElement("td");
   cell.setAttribute("className", className);
   cell.setAttribute("align", align);

   var textNode = document.createTextNode(field);
   cell.appendChild(textNode);

   row.appendChild(cell);
}

function rsort(names, scores)
{
   var len = names.length;
   var stop;
   var temp;

   for ( var i=0; i < len; i++ )
   {
      for ( var j=0, stop=len-i; j<stop; j++ )
      {
         if ( scores[j] < scores[j+1] )
         {
            temp = scores[j];
            scores[j] = scores[j+1];
            scores[j+1] = temp;

            temp = names[j];
            names[j] = names[j+1];
            names[j+1] = temp;
         }
      }
   }
}


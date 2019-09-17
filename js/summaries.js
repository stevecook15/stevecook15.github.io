
displayWeek = function(week)
{
   if ( week == -1 )   // Calculate this week
   {
      var today = new Date();
      week = CalcWeek(today);
   }

   var weekStr;
   if ( week < 10 )
      weekStr = "2019/Week0" + week + ".html";
   else
      weekStr = "2019/Week" + week + ".html";

   if ( week > 14 ) // Playoffs...
   {
      $('#currweek_window').dialog("option", "title", "Week " + week).load(weekStr);
   }
   else
   {
      var dateStr = weekly_dates[week-1];
      var matchups = getWeeklyMatchUps(week-1);
      var teams = matchups[0];
      var scores = matchups[1];
      var divGames = matchups[2];
      var comments = weekly_text[week-1];

      var DialogContent = mkWeek(week, dateStr, teams, scores, divGames, comments);
      $('#currweek_window').html(DialogContent);
      $('#currweek_window').dialog("option", "title", "Week " + week);
   }
   $('#currweek_window').dialog("open");
}

SetWeeks = function()
{
   var today = new Date();
   var week = CalcWeek(today);

   var btnId;
   var btn;

   for ( var indx=week; indx<=16; indx++ )
   {
      btnId = "wk" + indx + "Btn";
      btn = document.getElementById(btnId);
      if ( btn != null )
      {
         if ( indx < 10 )
            btn.src = "Gifs/gweek0" + indx + ".png";
         else if ( indx == 15 )
            btn.src = "Gifs/ground1.png";
         else if ( indx == 16 )
            btn.src = "Gifs/gfinals.png";
         else
            btn.src = "Gifs/gweek" + indx + ".png";
         btn.disabled = true;
      }
   }

   for ( var indx=1; indx<=week; indx++ )
   {
      btnId = "wk" + indx + "Btn";
      btn = document.getElementById(btnId);
      if ( btn != null )
      {
         if ( indx < 10 )
            btn.src = "Gifs/week0" + indx + ".png";
         else if ( indx == 15 )
            btn.src = "Gifs/round1.png";
         else if ( indx == 16 )
            btn.src = "Gifs/finals.png";
         else
            btn.src = "Gifs/week" + indx + ".png";
         btn.disabled = false;
      }
   }
}


/*
SetScore = function(team, score)
{
   var span = document.getElementById(team);
   if ( span == null )
   {
      console.log("Couldn't find span: " + team);
      return;
   }

   while ( span.firstChild )
   {
      span.removeChild(span.firstChild);
   }
   span.appendChild(document.createTextNode(score));
}
*/


mkWeek = function(week, dateStr, teams, scores, divGames, comments)
{
   var hdrHtml = '<div id="wk' + week + 'Hdr" class="weeklyHdr"><center>' +
                 '<table border="0" width="100%"><tr><td align="center">' +
                 '<b>' + dateStr + '</b></td></tr></table><font size="-1">' +
                 'Asterik (*) by team name indicates a division matchup.</font></div>\n';

   var txtscr1 = "";
   var txtscr2 = "";
   var resHtml = "";
   var jndx=1;

   for ( var indx=0; indx<10; indx += 2)
   {
      if ( scores[indx] == parseInt(scores[indx]) )
         txtscr1 = "" + scores[indx] + ".0"
      else
         txtscr1 = "" + scores[indx]

      if ( scores[indx+1] == parseInt(scores[indx+1]) )
         txtscr2 = "" + scores[indx+1] + ".0"
      else
         txtscr2 = "" + scores[indx+1]

      resHtml += '<div id="res' + week + "_" + jndx + '" class="res' + jndx + '">' +
                 '<table border="1" cellpadding="2" cellspacing="2" bgcolor="#dddddd">' +
                 '<tr><td class="scName">' + divGames[indx] + teams[indx] + '</td><td class="scValue"><b>' +
                 txtscr1 + '</b></td></tr>' +
                 '<tr><td class="scName">' + divGames[indx+1] + teams[indx+1] + '</td><td class="scValue">' +
                 txtscr2 + '</span></td></tr></table></div>\n';
      jndx++;
   }

   var ftrHtml = '<div id="wk' + week + 'Comments" class="weeklyComments">' + comments + '</div>';

   return hdrHtml + resHtml + ftrHtml;
}


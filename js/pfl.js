
$(document).ready(function()
{
   $('#summaries_button').button();
   $('#standings_button').button();
   $('#roster_button').button();
   $('#plots_button').button();
   $('#currweek_button').button();

   $("#summaries_button").button().click(function()
   {
      $("#summaries_window").dialog("open");
   });

   $("#standings_button").button().click(function()
   {
      standings_dialog.dialog("open");
   });
    
   $("#currweek_button").button().click(function()
   {
      displayWeek(-1);
   });

   $("#roster_button").button().click(function()
   {
      var rosters_dialog = $("#roster_window");
      rosters_dialog.css('background', 'url(Gifs/backgrnd.gif)');
      rosters_dialog.dialog('option', 'position', [100, 80]);
      rosters_dialog.dialog("open");
      showRosters();
   });

   $("#plots_button").button().click(function()
   {
      var plots_dialog = $("#plots_window");
      plots_dialog.css('background', 'url(Gifs/backgrnd.gif)');
      plots_dialog.dialog('option', 'position', [160, 100]);
      plots_dialog.dialog("open");
   });

   var summaries_dialog = $("#summaries_window");
   $("#summaries_window").dialog({ width: 150, height: 430, autoOpen: true });
   $("#summaries_window").dialog('option', 'position', [10, 70]);
   $("#summaries_window").css('background', 'url(Gifs/backgrnd.gif)');
   SetWeeks();

   var standings_dialog = $("#standings_window");
   standings_dialog.dialog({ width: 400, height: 430, autoOpen: true });
   standings_dialog.dialog('option', 'position', [170, 70]);
   standings_dialog.css('background', 'url(Gifs/backgrnd.gif)');
   showStandings();

   var currweek_dialog = $("#currweek_window");
   currweek_dialog.dialog({ width: 550, height: 430, autoOpen: true });
   currweek_dialog.dialog('option', 'position', [580, 70]);
   currweek_dialog.css('background', 'url(Gifs/backgrnd.gif)');
   displayWeek(-1);

   $("#roster_window").dialog({ width: 1130, height: 530, autoOpen: false });

   $("#plots_window").dialog({ width: 960, height: 474, autoOpen: false });

   setFilter("plot_options", pfl_labels);
});



function setFilter(form, labels)
{
   var container = document.getElementById(form);

   // Clear previous contents of the container
   while ( container.hasChildNodes() )
   {
      container.removeChild(container.lastChild);
   }

   var input;
   var label;

   for ( i=0; i<labels.length; i++ )
   {
      // Append a node with a random text
      // Create an <input> element, set its type and name attributes
      input = document.createElement("input");
      input.type = "checkbox";
      input.name = "team" + i;
      input.id = "team" + i;
      input.checked = true;
      container.appendChild(input);

      label = document.createElement("label");
      label.setAttribute("for", "team" + i);
      label.htmlFor = "team" + i;
      label.innerHTML = pfl_labels[i];

      container.appendChild(label);

      // Append a line break 
      container.appendChild(document.createElement("br"));
   }
}


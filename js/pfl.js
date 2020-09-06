
let pflUtils = new PflUtils(2020, 9, 9);   // TODO: Pass first wednesday before league start each year
let standings = new Standings();
let summaries = new Summaries();
let rosters = new Rosters();
let plots = new Plots();


$(document).ready(function()
{
   initTeams();

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
      summaries.displayWeek(-1);
   });

   $("#roster_button").button().click(function()
   {
      var rosters_dialog = $("#roster_window");
      rosters_dialog.css('background', 'url(Gifs/backgrnd.gif)');
      rosters_dialog.dialog('option', 'position', [100, 80]);
      rosters_dialog.dialog("open");
      rosters.show();
   });

   $("#plots_button").button().click(function()
   {
      var plots_dialog = $("#plots_window");
      plots_dialog.css('background', 'url(Gifs/backgrnd.gif)');
      plots_dialog.dialog('option', 'position', [160, 100]);
      plots_dialog.dialog("open");
   });

   var summaries_dialog = $("#summaries_window");
   $("#summaries_window").dialog({ width: 150, height: 470, autoOpen: true });
   $("#summaries_window").dialog('option', 'position', [10, 70]);
   $("#summaries_window").css('background', 'url(Gifs/backgrnd.gif)');
   summaries.setWeeks();

   var standings_dialog = $("#standings_window");
   standings_dialog.dialog({ width: 480, height: 470, autoOpen: true });
   standings_dialog.dialog('option', 'position', [170, 70]);
   standings_dialog.css('background', 'url(Gifs/backgrnd.gif)');
   standings.show();

   var currweek_dialog = $("#currweek_window");
   currweek_dialog.dialog({ width: 550, height: 470, autoOpen: true });
   currweek_dialog.dialog('option', 'position', [662, 70]);
   currweek_dialog.css('background', 'url(Gifs/backgrnd.gif)');
   summaries.displayWeek(-1);

   $("#roster_window").dialog({ width: 1210, height: 530, autoOpen: false });

   $("#plots_window").dialog({ width: 960, height: 474, autoOpen: false });

   setFilter("plot_options", getTeamNames());
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
      label.innerHTML = labels[i];

      container.appendChild(label);

      // Append a line break 
      container.appendChild(document.createElement("br"));
   }
}


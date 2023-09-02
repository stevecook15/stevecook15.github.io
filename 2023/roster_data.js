
// Division 1 - 

var team0 = [ "Porkchops / Noah",
   "ST,Deshaun Watson,CLE,QB,0",
   "ST,Austin Ekeler,LAC,RB,0",
   "ST,Aaron Jones,GNB,RB,0",
   "ST,Justin Jefferson,MIN,WR,0",
   "ST,Deebo Samuel,SFO,WR,0",
   "ST,DJ Moore,CHI,WR,0",
   "ST,Evan Engram,JAC,TE,0",
   "ST,Jake Elliott,PHI,KR,0",
   "ST,Buffalo Bills,BUF,DEF,0",
   "BN,Dak Prescott,DAL,QB,0",
   "BN,Breece Hall,NYJ,RB,0",
   "BN,Brian Robinson,WAS,RB,0",
   "BN,Elijah Mitchell,SFO,RB,0",
   "BN,Michael Pittman Jr,IND,WR,0",
   "BN,Jakobi Meyers,LVG,WR,0"
];

var team1 = [ "Coco Browns / Andy",  
   "ST,Patrick Mahones,KAN,QB,0",
   "ST,Derrick Henry,TEN,RB,0",
   "ST,Saquon Barkley,NYG,RB,0",
   "ST,Amari Cooper,CLE,WR,0",
   "ST,Mike Williams,LAC,WR,0",
   "ST,Drake London,LVG,WR,0",
   "ST,Kyle Pitts,ATL,TE,0",
   "ST,Jason Meyers,SEA,KR,0",
   "ST,Pittsburgh Steelers,PIT,DEF,0",
   "BN,Russell Wilson,DEN,QB,0",
   "BN,James Cook,BUF,WR,0",
   "BN,Khalil Herbert,CHI,RB,0",
   "BN,Ezekiel Elliott,NWE,RB,0",
   "BN,Damien Harris,BUF,RB,0",
   "BN,Christian Watson,GNB,WR,0"
];

var team2 = [ "Mile High Chubb / Matt",  
   "ST,Tua Tagovailoa,MIA,QB,0",
   "ST,Nick Chubb,CLE,RB,0",
   "ST,Jahmyr Gibbs,DET,RB,0",
   "ST,Alexander Mattison,MIN,RB,0",
   "ST,Cooper Kupp,LAR,WR,0",
   "ST,A.J. Brown,PHI,WR,0",
   "ST,Pat Freiermuth,PIT,TE,0",
   "ST,Daniel Carlson,LVG,KR,0",
   "ST,Dallas Cowboys,DAL,DEF,0",
   "BN,Geno SMith,SEA,QB,0",
   "BN,Tank Bigsby,JAC,RB,0",
   "BN,Dalvin Cook,NYJ,RB,0",
   "BN,Terry McLaurin,WAS,WR,0",
   "BN,Gabe Davis,BUF,WR,0",
   "BN,Nico Collins,HOU,WR,0"
];


var team3 = [ "Predators / Joe",  
   "ST,Justin Fields,CHI,QB,0",
   "ST,Josh Jacobs,LVG,RB,0",
   "ST,Cam Akers,LAR,RB,0",
   "ST,CeeDee Lamb,DAL,WR,0",
   "ST,Amon-Ra St. Brown,DET,WR,0",
   "ST,Jaylen Waddle,MIA,WR,0",
   "ST,Darren Waller,DET,TE,0",
   "ST,Jake Moody,SFO,KR,0",
   "ST,Washington Commanders,WAS,DEF,0",
   "BN,Javonte Williams,DEN,RB,0",
   "BN,Zach Charbonnet,SEA,RB,0",
   "BN,George Pickens,PIT,WR,0",
   "BN,Zay Flowers,BAL,WR,0",
   "BN,Elijah Moore,CLE,WR,0",
   "BN,New York Jets,NYJ,WR,0"
];

var team4 = [ "Superbowl DB Steve's Team / Steve",  
   "ST,Lamar Jackson,BAL,QB,0",
   "ST,J.K. Dobbins,BAL,RB,0",
   "ST,Joe Mixon,CIN,RB,0",
   "ST,Tyreek Hill,MIA,WR,0",
   "ST,Tee Higgins,CIN,WR,0",
   "ST,Calvin Ridley,JAC,WR,0",
   "ST,David Njoku,CLE,TE,0",
   "ST,Justin Tucker,BAL,KR,0",
   "ST,Denver Broncos,DEN,DEF,0",
   "BN,Aaron Rodgers,NYJ,QB,0",
   "BN,Jamaal Williams,NOR,RB,0",
   "BN,Jerick McKinnon,KAN,RB,0",
   "BN,Devin Singletary,HOU,RB,0",
   "BN,Odell Beckham Jr,BAL,WR,0",
   "BN,Courtland Sutton,DEN,WR,0"
];


// Divison 2 - 

var team5 = [ "Phat Bastards / Steve",  
   "ST,Trevor Lawrence,JAC,QB,0",
   "ST,Bijan Robinson,ATL,RB,0",
   "ST,Tony Pollard,DAL,RB,0",
   "ST,Stefon Diggs,BUF,WR,0",
   "ST,Keenan Allen,LAC,WR,0",
   "ST,Tyler Lockett,SEA,WR,0",
   "ST,Dallas Goedert,PHI,TE,0",
   "ST,Greg Joeseph,MIN,KR,0",
   "ST,Baltimore Ravens,BAL,DEF,0",
   "BN,Derek Carr,LVG,QB,0",
   "BN,Dameon Pierce,HOU,RB,0",
   "BN,Antonio Gibson,WAS,RB,0",
   "BN,Treylon Burks,TEN,WR,0",
   "BN,Cole Kmet,CHI,TE,0",
   "BN,Los Angeles Chargers,LAC,DEF,0"
];

var team6 = [ "Iceotopes / John F",  
   "ST,Justin Herbert,LAC,QB,0",
   "ST,Christian McCaffrey,SFO,RB,0",
   "ST,Miles Sanders,CAR,RB,0",
   "ST,David Montgomery,DET,RB,0",
   "ST,DeVonta Smith,PHI,WR,0",   
   "ST,DK Metcalf,SEA,WR,0",
   "ST,George Kittle,SFO,TE,0",
   "ST,Younghoe Koo,ATL,KR,0",
   "ST,Philadelphia Eagles,PHI,DEF,0",
   "BN,Samaje Perine,DEN,RB,0",
   "BN,Brandon Alyuk,SFO,WR,0",
   "BN,JuJu Smith-Schuster,NWE,WR,0",
   "BN,Adam Thielen,CAR,WR,0",
   "BN,Chigoziem Okonkwo,TEN,TE,0",
   "BN,Juwan Johnson,WAS,TE,0"
];

var team7 = [ "Discount Belicheck / Harrison",
   "ST,Josh Allen,BUF,QB,0",
   "ST,AJ Dillon,GNB,RB,0",
   "ST,James Conner,ARI,RB,0",
   "ST,Davante Adams,LVG,WR,0",
   "ST,DeAndre Hopkins,TEN,WR,0",
   "ST,Chris Godwin,TAM,WR,0",
   "ST,Mark Andrews,BAL,TE,0",
   "ST,Harrison Butker,KAN,KR,0",
   "ST,New Orleans Saints,NOR,DEF,0",
   "BN,Matthew Stafford,LAR,QB,0",
   "BN,Jonathan Taylor,IND,RB,0",
   "BN,Alvin Kamara,NOR,RB,0",
   "BN,Rashaad Penny,PHI,RB,0",
   "BN,Marquise Brown,ARI,WR,0",
   "BN,Brandin Cooks,TAM,WR,0"
];

var team8 = [ "Weapons of Bass Destruction / Daniel",  
   "ST,Joe Burrow,CIN,QB,0",
   "ST,Najee Harris,PIT,RB,0",
   "ST,Rhamondre Stevenson,NWE,RB,0",
   "ST,Isiah Pacheco,KAN,RB,0",
   "ST,Ja'Marr Chase,CIN,WR,0",
   "ST,Garrett Wilson,NYJ,WR,0",
   "ST,T.J. Hockenson,MIN,TE,0",
   "ST,Tyler Bass,BUF,KR,0",
   "ST,Miami Dolphins,MIA,DEF,0",
   "BN,Kirk Cousins,MIN,QB,0",
   "BN,Rachaad White,TAM,RB,0",
   "BN,Raheem Mostert,MIA,RB,0",
   "BN,Jeff Wilson Jr,MIA,RB,0",
   "BN,Jordan Addison,MIN,WR,0",
   "BN,Skyy Moore,KAN,WR,0",
   "BN,Mike Evans,TAM,WR,0"
];

var team9 = [ "Reek's Standout Team / Reek",  
   "ST,Jalen Hurts,PHI,QB,0",
   "ST,Travis Etienne Jr,JAC,RB,0",
   "ST,Kenneth Walker III,SEA,RB,0",
   "ST,Chris Olave,NOR,WR,0",
   "ST,Diontae Johnson,PIT,WR,0",
   "ST,D'Andre Swift,PHI,WR,0",
   "ST,Travis Kelce,KAN,TE,0",
   "ST,Evan McPherson,CIN,KR,0",
   "ST,San Franciso 49ers,SFO,DEF,0",
   "BN,Daniel Jones,NYG,QB,0",
   "BN,Tyler Allgeier,ATL,RB,0",
   "BN,Jahan Dotson,WAS,WR,0",
   "BN,Christian Kirk,JAC,WR,0",
   "BN,Allen Lazard,NYJ,WR,0",
   "BN,Dalton Kincaid,BUF,TE,0"
];




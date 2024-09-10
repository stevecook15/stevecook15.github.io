
// Division 1 - 

var team0 = [ "Iceotopes / John F",  
   "ST,Brock Purdy,SFO,QB,0",
   "ST,Derrick Henry,BAL,RB,0",
   "ST,James Cook,BUF,RB,0",
   "ST,Dallas Goedert,PHI,TE,0",
   "ST,CeeDee LAmb,DAL,WR,0",   
   "ST,Deebo Samuel,SFO,WR,0",
   "ST,David Montgomery,DET,RB,0",
   "ST,Justin Tucker,BAL,KR,0",
   "ST,Kansas City Chiefs,KAN,DEF,0",
   "BN,Blake Corum,LAR,RB,0",
   "BN,Amari Cooper,CLE,WR,0",
   "BN,Terry McLaurin,WAS,WR,0",
   "BN,Trey Benson,ARI,RB,0",
   "BN,Joshua Palmer,LAC,WR,0",
   "BN,Chubba Hubbard,CAR,RB,0"
];

var team1 = [ "Thats What Shaheed Said / Harrison",
   "ST,Joe Burrow,CIN,QB,0",
   "ST,Bijan Robinson,ATL,RB,0",
   "ST,Saquon Barkley,PHI,RB,0",
   "BN,David Njoku,CLE,TE,0",
   "ST,Stefon Diggs,HOU,WR,0",
   "ST,Calvin Ridley,TEN,WR,0",
   "ST,Chris Godwin,TAM,WR,0",
   "ST,Harrison Butker,KAN,KR,0",
   "ST,New Orleans Saints,NOR,DEF,0",
   "BN,Rhamondre Stevenson,NWE,RB,0",
   "BN,Tyjae Spears,TEN,RB,0",
   "BN,Travis Kelce,KAN,TE,0",
   "BN,Zay Flowers,BAL,WR,0",
   "BN,Diontae Johnson,CAR,WR,0",
   "BN,Rashid Shaheed,NOR,WR,0"
];

var team2 = [ "Porkchops / Noah",
   "ST,Anthony Richardson,IND,QB,0",
   "ST,Alvin Kamara,NOR,RB,0",
   "ST,Jahmyr Gibbs,DET,RB,0",
   "ST,Jake Ferguson,ARI,TE,0",
   "ST,Cooper Kupp,LAR,WR,0",
   "ST,Michael Pittman,IND,WR,0",
   "ST,Drake London,CHI,WR,0",
   "ST,Jake Moody,SFO,KR,0",
   "ST,Dallas Cowboys,DAL,DEF,0",
   "BN,Kirk Cousins,ARI,QB,0",
   "BN,James Conner,ARI,RB,0",
   "BN,Zack Moss,CIN,RB,0",
   "BN,George Pickens,PIT,WR,0",
   "BN,Mike Williams,NYJ,WR,0",
   "BN,Brandin Cooks,DAL,WR,0"
];

var team3 = [ "Predators / Joe",  
   "ST,Kyler Murray,ARI,QB,0",
   "ST,Kyren Williams,LAR,RB,0",
   "ST,Aaron Jones,MIN,RB,0",
   "ST,Trey McBride,ARI,TE,0",
   "ST,Tyreek Hill,MIA,WR,0",
   "ST,Davante Adams,LVG,WR,0",
   "ST,Chris Olave,NOR,WR,0",
   "ST,Younghoe koo,ATL,KR,0",
   "ST,Seattle Seahawks,SEA,DEF,0",
   "BN,Zamir White,LVG,RB,0",
   "BN,Jerome Ford,CLE,RB,0",
   "BN,Gus Edwards,LAC,WR,0",
   "BN,Jaylen Waddle,MIA,WR,0",
   "BN,Hollywood Brown,KAN,WR,0",
   "BN,Keon Coleman,BUF,WR,0"
];

var team4 = [ "The Brotha's/ Reek/Ross",  
   "ST,C.J. Stroud,HOU,QB,0",
   "ST,Jonathan Taylor,IND,RB,0",
   "ST,Isiah Pacheco,KAN,RB,0",
   "ST,Mark Andrews,BAL,TE,0",
   "ST,DK Metcalf,SEA,WR,0",
   "ST,Andrei Iosivas,CIN,WR,0",
   "ST,Joe Mixon,HOU,RB,0",
   "ST,Harrison Butker,KAN,KR,0",
   "ST,San Franciso 49ers,SFO,DEF,0",
   "BN,Tony Pollard,TEN,RB,0",
   "BN,Christian Watson,GNB,WR,0",
   "BN,Courtland SUtton,DEN,WR,0",
   "BN,Curtis Samuel,BUF,WR,0",
   "BN,Khalil Shakir,BUF,WR,0",
   "BN,T.J. Hockenson,MIN,TE,0"
];

// Division Two

var team5 = [ "Coco Browns / Andy",  
   "ST,Josh Allen,BUF,QB,0",
   "ST,Christian McCaffrey,SFO,RB,0",
   "ST,Rachaad White,TAM,RB,0",
   "ST,Evan Engram,JAC,TE,0",
   "ST,A.J. Brown,PHI,WR,0",
   "ST,DJ Moore,CHI,WR,0",
   "ST,Jaxon Smith-Njigba,SEA,WR,0",
   "ST,Brandon Aubrey,DAL,KR,0",
   "ST,Miami Dolphins,MIA,DEF,0",
   "BN,Jaylen Warren,PIT,RB,0",
   "BN,J.K. Dobbins,LAC,RB,0",
   "BN,Kyle Pitts,ATL,TE,0",
   "BN,DeAndre Hopkins,TEN,WR,0",
   "BN,Tee Higgins,CIN,WR,0",
   "BN,Adam Thielen,CAR,WR,0"
];

var team6 = [ "Phat Bastards / Steve C",  
   "ST,Jalen Hurts,PHI,QB,0",
   "ST,Najee Harris,PIT,RB,0",
   "ST,Kenneth Walker,SEA,RB,0",
   "ST,Brock Bowers,LVG,TE,0",
   "ST,JaMarr CHase,CIN,WR,0",
   "ST,Justin Jefferson,MIN,WR,0",
   "ST,Devonta Smith,PHI,WR,0",
   "ST,Evan McPherson,CIN,KR,0",
   "ST,New York Jets,NYG,DEF,0",
   "BN,Jordan Love,GNB,QB,0",
   "BN,Johnathon Brooks,CAR,RB,0",
   "BN,Pat Freirmuth,PIT,TE,0",
   "BN,Brian Thomas,JAC,WR,0",
   "BN,Ladd McConkey,LAC,WR,0",
   "BN,Jaleel McLaughlin,DEN,RB,0"
];


var team7 = [ "Nix UR Hopes / Steve",  
   "ST,Patrick Mahomes,KAN,QB,0",
   "ST,De'Von Achane,MIA,RB,0",
   "ST,Javonte Williams,DEN,RB,0",
   "ST,Daltin Kincaid,BUF,TE,0",
   "ST,Amon-Ra St. Brown,DET,WR,0",
   "ST,Marvin Harrison Jr.,ARI,WR,0",
   "ST,Nico Collins,HOU,WR,0",
   "ST,Jason Sanders,MIA,KR,0",
   "ST,Baltimore Ravens,BAL,DEF,0",
   "BN,Bo Nix,DEN,QB,0",
   "BN,Devin Singletary,NYG,RB,0",
   "BN,Brandon Aiyuk,SFO,WR,0",
   "BN,Jayden Reed,GNB,WR,0",
   "BN,Jerry Jeudy,CLE,WR,0",
   "BN,Cole Kmet,CHI,TE,0"
];


var team8 = [ "The Age of APukalypse / Matt",  
   "ST,Dak Prescott,DAL,QB,0",
   "ST,Breece Hall,NYJ,RB,0",
   "ST,D'Andre Swift,CHI,RB,0",
   "ST,Sam LaPorta,DET,TE,0",
   "ST,Rashee Rice,KAN,WR,0",
   "ST,Christian Kirk,JAC,WR,0",
   "ST,Tank Dell,HOU,WR,0",
   "ST,cameron Dicker,LAC,KR,0",
   "ST,Chicago Bears,CHI,DEF,0",
   "BN,Tua Tagoviloa,MIA,QB,0",
   "BN,Austin Ekeler,WAS,RB,0",
   "BN,Nick Chubb,CLE,RB,0",
   "BN,Puka Nacua,LAR,WR,0",
   "BN,Malik Nabers,NYG,WR,0",
   "BN,Rome Odunze,CHI,WR,0",
   "BN,Dalton Schultz,HOU,TE,0"
];


var team9 = [ "Weapons of Bass Destruction / Daniel",  
   "ST,Lamar Jackson,BAL,QB,0",
   "ST,Travis Etienne Jr.,JAC,RB,0",
   "ST,Josh Jacobs,GNB,RB,0",
   "ST,George Kittle,SFO,TE,0",
   "ST,Garrett Wilson,NYJ,WR,0",
   "ST,Mike Evans,TAM,WR,0",
   "ST,Xavier Worthy,KAN,WR,0",
   "ST,Greg Zuerlein,NYJ,KR,0",
   "ST,Pittsburgh Steelers,PIT,DEF,0",
   "BN,Caleb Williams,CHI,QB,0",
   "BN,Raheem Mostert,MIA,RB,0",
   "BN,Brian Robinson Jr,WAS,RB,0",
   "BN,Chase Brown,CIN,RB,0",
   "BN,Keenan Allen,CHI,WR,0",
   "BN,Jameson Williams,DET,WR,0"
];


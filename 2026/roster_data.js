
// *******************  Division 1,

var team0 = [ "CeeDeez Nutz / Harrison",   
   "ST,Jayden Daniels,WAS,QB,0",
   "ST,De'Von Achane,MIA,RB,0",
   "ST,Jaylen Warren,PIT,RB,0",
   "ST,George Kittle,SFO,TE,0",
   "ST,Garrett Wilson,NYJ,WR,0",
   "ST,Ja'Marr Chase,CIN,WR,0",
   "ST,Nico Collins,HOU,WR,0",
   "ST,Jason Meyers,SEA,KR,0",
   "ST,Los Angeles,LAR,DEF,0",
   "BN,Jadarian Price,SEA,RB,0",
   "BN,Rachaad White,WAS,RB,0",
   "BN,Woody Marks,HOU,RB,0",
   "BN,DK Metcalf,PIT,WR,0",
   "BN,Matthew Golden,GNB,WR,0",
   "BN,Quentin Johnston,LAC,WR,0"
];

var team1 = [ "Please Don't be a Burden / Ross",   
   "ST,Josh Allen,BUF,QB,0",
   "ST,Omarion Hampton,LAC,RB,0",
   "ST,Ashton Jeanty,LVG,RB,0",
   "ST,Colston Loveland,CHI,TE,0",
   "ST,Chris Olave,NOR,WR,0",
   "ST,Christian Watson,GNB,WR,0",
   "ST,Luther Burden III,CHI,WR,0",
   "ST,Brandon Aubrey,DAL,KR,0",
   "ST,Philadelphia,PHI,DEF,0",
   "BN,Trevor Lawrence,JAC,QB,0",
   "BN,Bhayshul Tuten,JAC,RB,0",
   "BN,Mike Washington Jr,LVG,RB,0",
   "BN,Parker Washington,JAC,WR,0",
   "BN,DwZhaun Stribling,SFO,WR,0",
   "BN,Makai Lemon,PHI,WR,0"
];

var team2 = [ "Coco Browns / Andy",   
   "ST,Lamar Jackson,BAL,QB,0",
   "ST,Derrick Henry,BAL,RB,0",
   "ST,Rico Dowdle,PIT,RB,0",
   "ST,Dallas Goedert,PHI,TE,0",
   "ST,Amon-Ra St. Brown,DET,WR,0",
   "ST,Terry McLaurin,WAS,WR,0",
   "ST,Mike Evans,SFO,WR,0",
   "ST,Cameron Dicker,LAC,KR,0",
   "ST,Seattle,SEA,DEF,0",
   "BN,Daniel Jones,NYG,QB,0",
   "BN,Tony Pollard,TEN,RB,0",
   "BN,Aaron Jones Sr,NIN,RB,0",
   "BN,Wan'Dale Robinson,TEN,WR,0",
   "BN,Jordan Addison,MIN,WR,0",
   "BN,Brock Bowers,LVG,TE,0"
];


var team3 = [ "Steve-on Diggs / Reek",   
   "ST,Jalen Hurts,PHI,QB,0",
   "ST,Chase Brown,CIN,RB,0",
   "ST,Saquon Barkley,PHI,RB,0",
   "ST,Trey McBride,ARI,TE,0",
   "ST,Malik Nabers,NYG,WR,0",
   "ST,Davante Adams,LAR,WR,0",
   "ST,Quinshon Judkins,CLE,RB,0",
   "ST,Cam Little,JAC,KR,0",
   "ST,Detroit,PIT,DEF,0",
   "BN,Drake Maye,NWE,QB,0",
   "BN,Stefon Diggs,WAS,WR,0",
   "BN,J.K. Dobbins,DEN,RB,0",
   "BN,Michael Wilson,ARI,WR,0",
   "BN,RJ Harvey,DEN,RB,0",
   "BN,Mark Andrews,BAL,TE,0"
];

var team4 = [ "You Got a Purdy Mouth / Matt",    
   "ST,Justin Herbert,LAC,QB,0",
   "ST,Jahmyr Gibbs,DET,RB,0",
   "ST,Travis Etienne,NOR,RB,0",
   "ST,Harold Fannin Jr,CLE,TE,0",
   "ST,Jaxon Smith-Njigba,SEA,WR,0",
   "ST,DJ Moore,BUF,WR,0",
   "ST,Jameson Williams,DET,WR,0",
   "ST,Jake Bates,DET,KR,0",
   "ST,Jacksonville,JAC,DEF,0",
   "BN,Brock Purdy,SFO,QB,0",
   "BN,Kenny Gainwell,TAM,RB,0",
   "BN,Jacory Croskey-Merritt,WAS,RB,0",
   "BN,Carnell Tate,TEN,WR,0",
   "BN,Dalton Kincaid,BUF,TE,0",
   "BN,Minnesota,MIN,DEF,0",
   "IR,TreVeyon Henderson,NWE,RB,0"
];



// *****************  Division Two


var team5 = [ "Iceotopes / John F",    
   "ST,Dak Prescott,DAL,QB,0",
   "ST,Javonte Williams,DAL,RB,0",
   "ST,Kenneth Walker III,KAN,RB,0",
   "ST,Tucker Kraft,GNB,TE,0",
   "ST,Justin Jefferson,MIN,WR,0",
   "ST,George Pickens,DAL,WR,0",
   "ST,David Montgomery,HOU,RB,0",
   "ST,Ka'imi Fairbairn,HOU,KR,0",
   "BN,Pittsburgh,PIT,DEF,0",
   "BN,Jaxson Dart,NYG,QB,0",
   "BN,DeVonta SMith,PHI,WR,0",
   "BN,MarShawn Lloyd,GNB,RB,0",
   "BN,Courtland Sutton,DEN,WR,0",
   "BN,Chris Rodriguez Jr,JAC,RB,0",
   "ST,New England,NWE,DEF,0"
];

var team6 = [ "Back the Drawing Board / Noah",    
   "ST,Baker Mayfield,BAL,QB,0",
   "ST,Bijan Robinson,ATL,RB,0",
   "ST,Cam Skattebo,NYG,RB,0",
   "ST,Travis Kelce,KAN,TE,0",
   "ST,A.J. Brown,NWE,WR,0",
   "ST,Tee Higgins,CIN,WR,0",
   "ST,Zay Flowers,BAL,WR,0",
   "ST,Harrison Mevis,LAR,KR,0",
   "ST,Baltimore,BAL,DEF,0",
   "BN,Patrick Mahommes,KAN,QB,0",
   "BN,Bucky Irving,TAM,RB,0",
   "BN,Chubba Hubbard,CAR,RB,0",
   "BN,Marvin Harrison Jr,ARI,WR,0",
   "BN,Debo Samuel Sr,SFO,WR,0",
   "BN,Jayden Reed,GNB,WR,0",
   "IR,Tank Dell,HOU,RB,0",
   "IR,Zach Charbonnet,SEA,RB,0"
];

var team7 = [ "Bring Out Yer Dead / Daniel",  
   "ST,Matthew Stafford,LAR,QB,0",
   "ST,James Cook III,BUF,RB,0",
   "ST,Kyren Williams,LAR,RB,0",
   "ST,Tyler Warren,IND,TE,0",
   "ST,Puka Nacua,LAR,WR,0",
   "ST,Tetairoa McMillan,CAR,WR,0",
   "ST,Rome Odunze,CHI,WR,0",
   "ST,Harrison Butker,KAN,KR,0",
   "ST,Los Angeles,LAC,DEF,0",
   "BN,Josh Jacobs,GNB,RB,0",
   "BN,Rhamondre Stevenson,NWE,RB,0",
   "BN,Kyle Monangai,CHI,RB,0",
   "BN,Michael Pittman Jr,PIT,WR,0",
   "BN,Chris Godwin Jr,TAM,WR,0",
   "BN,Tyjae Spears,TEN,RB,0"
];

var team8 = [ "Nix UR Hopes / Steve M",   
   "ST,Joe Burrow,CIN,QB,0",
   "ST,Christian McCaffrey,SFO,RB,0",
   "ST,Jeremiyah Love,ARI,RB,0",
   "ST,Kyle Pitts Sr,ATL,TE,0",
   "ST,Drake Loveland,ATL,WR,0",
   "ST,Jaylen Waddle,DEN,WR,0",
   "ST,Breece Hall,NYJ,RB,0",
   "ST,Will Lutz,DEN,KR,0",
   "ST,Houston,HOU,DEF,0",
   "BN,Bo Nix,DEN,QB,0",
   "BN,Jonathon Brooks,CAR,RB,0",
   "BN,Rashee Rice,KAN,WR,0",
   "BN,Jakobi Meyers,JAC,WR,0",
   "BN,Khalil Shakir,BUF,WR,0",
   "BN,KC Concepcion,CLE,WR,0"
];

var team9 = [ "Phat Bastards / Steve C",   
   "ST,Jared Goff,DET,QB,0",
   "ST,Johnathon Taylor,IND,RB,0",
   "ST,D'Andre Swift,CHI,RB,0",
   "ST,Sam LaPorta,DET,TE,0",
   "ST,CeeDee Lamb,DAL,WR,0",
   "ST,Ladd McConkey,LAC,WR,0",
   "ST,Emeka Egbuka,TAM,WR,0",
   "ST,Evan McPherson,CIN,KR,0",
   "ST,Denver,DEN,DEF,0",
   "BN,Caleb Williams,CHI,QB,0",
   "BN,Jordan Mason,MIN,RB,0",
   "BN,Blake Corum,LAR,RB,0",
   "BN,Alec Pierce,IND,WR,0",
   "BN,Brian THomas Jr,JAC,WR,0",
   "BN,Isaiah Likely,NYG,TE,0"
];



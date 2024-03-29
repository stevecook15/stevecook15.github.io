'use strict';

// 
// Eventually this will provide standard set of colors for the other chart objects
//

// #000000 black  	
// #000080 navy  
// #00008B darkblue  	
// #0000CD mediumblue  	
// #0000FF blue  	
// #006400 darkgreen  	
// #008000 green  	
// #008080 teal  
// #008B8B darkcyan  	
// #00BFFF deepskyblue  	
// #00CED1 darkturquoise  	
// #00FA9A mediumspringgreen  	
// #00FF00 lime  	
// #00FF7F springgreen  
// #00FFFF aqua  	
// #00FFFF cyan  	
// #191970 midnightblue  	
// #1E90FF dodgerblue  	
// #20B2AA lightseagreen  	
// #228B22 forestgreen  	
// #2E8B57 seagreen  
// #2F4F4F darkslategray  	
// #32CD32 limegreen  	
// #3CB371 mediumseagreen  	
// #40E0D0 turquoise  
// #4169E1 royalblue  
// #4682B4 steelblue  
// #483D8B darkslateblue  	
// #48D1CC mediumturquoise  	
// #4B0082 indigo  	
// #556B2F darkolivegreen  	
// #5F9EA0 cadetblue  	
// #6495ED cornflowerblue  	
// #66CDAA mediumaquamarine  	
// #696969 dimgray  	
// #6A5ACD slateblue  
// #6B8E23 olivedrab  
// #708090 slategray  
// #778899 lightslategray  	
// #7B68EE mediumslateblue  	
// #7CFC00 lawngreen  	
// #7FFF00 chartreuse  	
// #7FFFD4 aquamarine  	
// #800000 maroon  	
// #800080 purple  
// #808000 olive  
// #808080 gray  	
// #87CEEB skyblue
// #87CEFA lightskyblue
// #8A2BE2 blueviolet
// #8B0000 darkred  	
// #8B008B darkmagenta  	
// #8B4513 saddlebrown  
// #8FBC8F darkseagreen  	
// #90EE90 lightgreen  	
// #9370DB mediumpurple  	
// #9400D3 darkviolet  	
// #98FB98 palegreen  
// #9932CC darkorchid  	
// #9ACD32 yellowgreen  
// #A0522D sienna  
// #A52A2A brown  	
// #A9A9A9 darkgray  	
// #ADD8E6 lightblue  	
// #ADFF2F greenyellow  	
// #AFEEEE paleturquoise  
// #B0C4DE lightsteelblue  	
// #B0E0E6 powderblue  
// #B22222 firebrick  	
// #B8860B darkgoldenrod  	
// #BA55D3 mediumorchid  	
// #BC8F8F rosybrown  
// #BDB76B darkkhaki  	
// #C0C0C0 silver  
// #C71585 mediumvioletred  	
// #CD5C5C indianred  	
// #CD853F peru  
// #D2691E chocolate  	
// #D2B48C tan  
// #D3D3D3 lightgrey  	
// #D8BFD8 thistle  
// #DA70D6 orchid  
// #DAA520 goldenrod  	
// #DB7093 palevioletred  
// #DC143C crimson  	
// #DCDCDC gainsboro  	
// #DDA0DD plum  
// #DEB887 burlywood  	
// #E0FFFF lightcyan  	
// #E6E6FA lavender  	
// #E9967A darksalmon  	
// #EE82EE violet  
// #EEE8AA palegoldenrod  
// #F08080 lightcoral  	
// #F0E68C khaki  	
// #F0F8FF aliceblue  	
// #F0FFF0 honeydew  	
// #F0FFFF azure  	
// #F5DEB3 wheat  
// #F5F5DC beige  	
// #F5F5F5 whitesmoke  
// #F5FFFA mintcream  	
// #F8F8FF ghostwhite  	
// #FA8072 salmon  
// #FAA460 sandybrown  
// #FAEBD7 antiquewhite  	
// #FAF0E6 linen  	
// #FAFAD2 lightgoldenrodyellow  	
// #FDF5E6 oldlace  
// #FF0000 red  
// #FF00FF fuchsia  	
// #FF00FF magenta  	
// #FF1493 deeppink  	
// #FF4500 orangered  
// #FF6347 tomato  
// #FF69B4 hotpink  	
// #FF7F50 coral  	
// #FF8C00 darkorange  	
// #FFA07A lightsalmon  	
// #FFA500 orange  
// #FFB6C1 lightpink  	
// #FFC0CB pink  
// #FFD700 gold  	
// #FFDAB9 peachpuff  
// #FFDEAD navajowhite  
// #FFE4B5 moccasin  	  
// #FFE4C4 bisque  	
// #FFE4E1 mistyrose  	
// #FFEBCD blanchedalmond  	
// #FFEFD5 papayawhip  
// #FFF0F5 lavenderblush  	
// #FFF5EE seashell  
// #FFF8DC cornsilk  	
// #FFFACD lemonchiffon  	
// #FFFAF0 floralwhite  	
// #FFFAFA snow  
// #FFFF00 yellow  
// #FFFFE0 lightyellow  	
// #FFFFF0 ivory  	
// #FFFFFF white  

//Question: How do I convert a hex color string (e.g. "FFFFCC") to
// numeric RGB values of the same color?

//Answer: Here is a script that does this conversion:

//R = HexToR("#FFFFFF");
//G = HexToG("#FFFFFF");
//B = HexToB("#FFFFFF");

function BizColors()
{
}

BizColors.prototype.HextoR = function(h)
{
   return parseInt((cutHex(h)).substring(0, 2), 16);
}

BizColors.prototype.HextoG = function(h)
{
   return parseInt((cutHex(h)).substring(2, 4), 16);
}

BizColors.prototype.HextoB = function(h)
{
   return parseInt((cutHex(h)).substring(4, 6), 16);
}

BizColors.prototype.cutHex = function(h)
{
   return (h.charAt(0)=="#") ? h.substring(1,7):h;
}


// Question: How do I convert RGB values of a color to a hexadecimal string?

// Answer: The algorithm is as follows: make sure that RGB values are in the
// range 0...255, convert RGB values to hex strings, and then merge the three strings.

// Here is a script that does this conversion:

BizColors.prototype.RGBtoHex = function(R, G, B)
{
   return toHex(R) + toHex(G) + toHex(B)
}

BizColors.prototype.toHex = function(N)
{
   if ( N == null )
      return "00";

   N = parseInt(N);
   if ( N == 0 || isNaN(N) )
      return "00";

   N = Math.max(0, N);
   N = Math.min(N, 255);
   N = Math.round(N);

   return "0123456789ABCDEF".charAt((N-N%16)/16) + "0123456789ABCDEF".charAt(N%16);
}


var ks = "abc";
function ShowRibbon() 
{
   $("#s4-ribbonrow").show();
   $(".ribbonbackground").show();

}

function HideRibbon() 
{
	  $("#s4-ribbonrow").hide();
      $(".ribbonbackground").hide();
}

$(document).ready(function()
{
	
   if (typeof _spUserId == "undefined") 
   {
      HideRibbon();
   }
   else 
   {
      ShowRibbon();
   }
});

$(document).keydown(function (e) 
{
	
   if (e.keyCode == 17) {if (ks == "b"){ ks = "a" + ks; }else{ ks = "a";} return false; }
   if (e.keyCode == 16) { if (ks == "a") { ks = ks + "b";}else{ ks = "b";} return false;  }
   if (e.keyCode == 82) 
   {
    	if (ks == "ab") 
    	{ 
	         if($("#s4-ribbonrow").css("display")=="none") 
	         {
	         	ShowRibbon();
	         } 
	         else 
	         {
				HideRibbon();
	         }	         
	         return false;
        } 
   }
	return true;
});


$(document).keyup(function (e) 
{
	 if (e.keyCode == 17 || e.keyCode == 16) { ks = "";}

});

  

/*
     FILE ARCHIVED ON 22:39:02 Jun 28, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:53:43 Apr 06, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 124.974 (3)
  esindex: 0.005
  captures_list: 140.219
  CDXLines.iter: 11.05 (3)
  PetaboxLoader3.datanode: 55.711 (4)
  exclusion.robots: 0.162
  exclusion.robots.policy: 0.148
  RedisCDXSource: 1.842
  PetaboxLoader3.resolve: 119.158 (2)
  load_resource: 60.966
*/
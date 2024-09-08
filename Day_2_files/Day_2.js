// Created by iWeb 3.0.1 local-build-20090621

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:13,offset:new IWPoint(9.1924,9.1924),color:'#000000',opacity:0.300000}),shadow_0:new IWShadow({blurRadius:13,offset:new IWPoint(8.4853,8.4853),color:'#000000',opacity:0.300000}),shadow_3:new IWShadow({blurRadius:13,offset:new IWPoint(8.4853,8.4853),color:'#000000',opacity:0.300000}),shadow_2:new IWShadow({blurRadius:13,offset:new IWPoint(9.1924,9.1924),color:'#000000',opacity:0.300000}),shadow_4:new IWShadow({blurRadius:13,offset:new IWPoint(8.4853,8.4853),color:'#000000',opacity:0.300000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Day_2_files/Day_2Moz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}

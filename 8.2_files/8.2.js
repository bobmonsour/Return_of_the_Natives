// Created by iWeb 3.0.1 local-build-20090624

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:13,offset:new IWPoint(9.1924,9.1924),color:'#000000',opacity:0.330000}),shadow_1:new IWShadow({blurRadius:13,offset:new IWPoint(9.1924,9.1924),color:'#000000',opacity:0.330000}),shadow_0:new IWShadow({blurRadius:13,offset:new IWPoint(9.1924,9.1924),color:'#000000',opacity:0.300000}),shadow_3:new IWShadow({blurRadius:13,offset:new IWPoint(9.1924,9.1924),color:'#000000',opacity:0.330000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('8.2_files/8.2Moz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}

// Created by iWeb 3.0.1 local-build-20090621

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:13,offset:new IWPoint(9.3514,9.0306),color:'#000000',opacity:0.300000}),shadow_0:new IWShadow({blurRadius:14,offset:new IWPoint(9.8995,9.8995),color:'#000000',opacity:0.350000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Point_A_files/Point_AMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}

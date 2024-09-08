// Created by iWeb 3.0.1 local-build-20090614

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000}),shadow_1:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-4,4,8,252),url:'Point_B_files/stroke.png'},{rect:new IWRect(-4,-4,8,8),url:'Point_B_files/stroke_1.png'},{rect:new IWRect(4,-4,187,8),url:'Point_B_files/stroke_2.png'},{rect:new IWRect(191,-4,8,8),url:'Point_B_files/stroke_3.png'},{rect:new IWRect(191,4,8,252),url:'Point_B_files/stroke_4.png'},{rect:new IWRect(191,256,8,8),url:'Point_B_files/stroke_5.png'},{rect:new IWRect(4,256,187,8),url:'Point_B_files/stroke_6.png'},{rect:new IWRect(-4,256,8,8),url:'Point_B_files/stroke_7.png'}],new IWSize(195,260)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.440000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Point_B_files/Point_BMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}

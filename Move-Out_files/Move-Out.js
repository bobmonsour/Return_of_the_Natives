// Created by iWeb 3.0.1 local-build-20090621

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:12,offset:new IWPoint(8.4853,8.4853),color:'#000000',opacity:0.300000}),shadow_0:new IWShadow({blurRadius:13,offset:new IWPoint(8.4853,8.4853),color:'#000000',opacity:0.300000}),stroke_0:new IWPhotoFrame([IWCreateImage('Move-Out_files/Headlines_01.png'),IWCreateImage('Move-Out_files/Headlines_02.png'),IWCreateImage('Move-Out_files/Headlines_03.png'),IWCreateImage('Move-Out_files/Headlines_06.png'),IWCreateImage('Move-Out_files/Headlines_09.png'),IWCreateImage('Move-Out_files/Headlines_08.png'),IWCreateImage('Move-Out_files/Headlines_07.png'),IWCreateImage('Move-Out_files/Headlines_04.png')],null,0,1.000000,-3.000000,-3.000000,-3.000000,-3.000000,2.000000,2.000000,2.000000,2.000000,4.000000,4.000000,4.000000,4.000000,null,null,null,0.100000),shadow_1:new IWShadow({blurRadius:13,offset:new IWPoint(8.4853,8.4853),color:'#000000',opacity:0.300000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Move-Out_files/Move-OutMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}

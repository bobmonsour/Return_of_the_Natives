// Created by iWeb 3.0.1 local-build-20090621

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000}),shadow_1:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000}),shadow_2:new IWShadow({blurRadius:12,offset:new IWPoint(8.4853,8.4853),color:'#000000',opacity:0.300000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.allfeetondeck.com/Return_of_the_Natives/Bobs_Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Bobs_Blog_files/Bobs_BlogMoz.css')
detectBrowser();fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();IMpreload('Bobs_Blog_files','shapeimage_5','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}

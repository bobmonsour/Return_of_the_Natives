// Created by iWeb 3.0.1 local-build-20090621

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000}),shadow_2:new IWShadow({blurRadius:13,offset:new IWPoint(9.1924,9.1924),color:'#000000',opacity:0.300000}),shadow_1:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.allfeetondeck.com/Return_of_the_Natives/Moms_Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Moms_Blog_files/Moms_BlogMoz.css')
detectBrowser();fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();IMpreload('Moms_Blog_files','shapeimage_4','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}

load_links("homepage");
document.body.style.margin="0px";
var topsize=download_a.getClientRects()[0].height*1.2;
onresize=function(){
  homepage_frame.style.width=innerWidth+"px";
  homepage_frame.style.height=innerHeight-topsize+"px";
}
onresize();

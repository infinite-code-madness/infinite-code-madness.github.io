load_links("homepage");
document.body.style.margin="0px";
var topsize=download_a.getClientRects()[0].height*1.2;
window.__defineGetter__("scrollbarWidth",function(){
  var outer=document.createElement('div');
  outer.style.visibility='hidden';
  outer.style.overflow='scroll';
  document.body.appendChild(outer);

  var inner = document.createElement('div');
  outer.appendChild(inner);

  var w=(outer.offsetWidth-inner.offsetWidth);

  document.body.removeChild(outer);

  return w;
});
window.__defineGetter__("isScrollbarVisible",function(){
return document.body.getClientRects()[0].height>innerHeight});
onresize=function(){
  homepage_frame.style.width=(innerWidth-(isScrollbarVisible?scrollbarWidth:0))+"px";
}
onresize();

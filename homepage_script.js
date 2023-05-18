load_links("homepage");
document.body.style.margin="0px";
search_input.style.border="2px solid #000000";
search_input.style.borderRadius=0;
search_input.style.padding="5px";
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
return document.body.getClientRects()[0].height>=innerHeight});
onresize=function(){
  homepage_frame.style.width=(innerWidth-(isScrollbarVisible?scrollbarWidth:0))+"px";
  search_image_size=innerWidth/25;
  search.style.height=search.style.width=search_input.style.height=search_image_size+"px";
  search_input.style.width=((innerWidth-search_image_size)-(isScrollbarVisible?scrollbarWidth:0))+"px";
  search_input.style.fontSize=(search_image_size-10)+"px";
}
search.onclick=function(){
location="/search.html#"+escape(search_input.value)}
search_input.onkeypress=function(event){
if (event.key=="Enter"){
search.click()}}
onresize();

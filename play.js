var xhr=new XMLHttpRequest();
xhr.open("GET","/js_api/games.json",false);
xhr.send();
var games=JSON.parse(xhr.responseText);
onload=onhashchange=function(){
  var id=location.hash.slice(1);
  for (i in games){
  if (games[i].id===id){
    game=games[i];
    break;
  }
  }
play_frame.src=game["url"];
recommended_frame.src="/recommended.html#"+id;
}

addEventListener("load",function(){
if (localStorage["playframe_ratio"]){
document.body.setAttribute("cols",localStorage["playframe_ratio"]);}
});

onresize=function(){
if (game.reload_on_resize){
  play_frame.src="about:blank";
play_frame.src=game["url"];}}

fullscreen=function(){
  document.body.requestFullscreen();
}

home=function(){
  location="/";
}

var old_ratio=localStorage["playframe_ratio"]||"90%,10%";

addEventListnener("fullscreen",function(){
if (document.fullscreenElement){
  old_ratio=document.body.getAttribute("cols");
  onunload();
  play_frame.noResize=recommended_frame.noResize=true;
document.body.setAttribute("cols","100%,0%");}else{
  play_frame.noResize=recommended_frame.noResize=false;
  document.body.setAttribute("cols",old_ratio);
}});

onunload=onvisibilitychange=onpagehide=function(){
localStorage["playframe_ratio"]=document.body.getAttribute("cols")}

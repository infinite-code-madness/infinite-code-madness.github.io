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

onwebkitfullscreenchange=onmozfullscreenchange=onfullscreenchange=function(){
if (document.fullscreenElement){
  play_frame.noResize=recommended_frame.noResize=true;
document.body.setAttribute("cols","100%,0%");}else{
  play_frame.noResize=recommended_frame.noResize=false;
  document.body.setAttribute("cols","90%,10%");
}}

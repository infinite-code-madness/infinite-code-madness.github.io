load_links("play_frame");

var game=null;

onresize=function(){
  var size=innerWidth/5;
fullscreen.style.height=fullscreen.style.width=home.style.height=home.style.width=size+"px";
  if (game){
  if (game.reload_on_resize){content_frame.src="about:blank";
                            content_frame.src=game.url;}}
};
fullscreen.style.right="0px";
home.style.left="0px";
fullscreen.style.zIndex=home.style.zIndex=2;
home.style.position=fullscreen.style.position="absolute";
content_frame.style.width="100%";
content_frame.style.height="100%";
onhashchange=function(){
var id=location.hash.slice(1);
var xhr=new XMLHttpRequest();
xhr.open("GET","/js_api/games.json",false);
xhr.send();
var games=JSON.parse(xhr.responseText);
for (i in games){
if (games[i].id==id){
game=games[i];
break};
}
content_frame.src=game["url"];
};
onhashchange();
onresize();

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
play_frame.src="/embed.html#"+escape(game["url"]);
recommended_frame.src="/recommended.html#"+id;
}

onresize=function(){
if (game.reload_on_resize){
  play_frame.src="about:blank";
play_frame.src="/embed.html#"+game["url"];}}

fullscreen=function(){
  play_frame.contentWindow.requestFullscreen();
}

home=function(){
  location="/";
}

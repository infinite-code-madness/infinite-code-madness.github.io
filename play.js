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

fullscreen=function(){
}

home=function(){
}

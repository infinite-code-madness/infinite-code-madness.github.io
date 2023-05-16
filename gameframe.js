var xhr=new XMLHttpRequest();
xhr.open("GET","/js_api/games.json",false);
xhr.send();
games=JSON.parse(xhr.repsonseText);

if (!localStorage.preferences){
var prefs={"game_play_counts":{},"hashtag_play_counts":{}};
}else{
var prefs=JSON.parse(localStorage.preferences)}

onvisibilitychange=onunload=onpagehide=function(){
localStorage.preferences=JSON.stringify(prefs)}

games.sort(function(a,b){
var a_id=a["id"];
var b_id=b["id"];
var a_playcount=prefs["game_play_counts"][a_id]||0;
var b_playcount=prefs["game_play_counts"][b_id]||0;
if (a_playcount!=b_playcount){
return b_playcount-a_playcount};
var a_hashplaycount=0;
  for (i in a.hashtags){
  a_hashplaycount+=prefs.hashtag_play_counts[a.hashtags[i]]||0}
var b_hashplaycount=0;
  for (i in b.hashtags){
  b_hashplaycount+=prefs.hashtag_play_counts[b.hashtags[i]]||0}
if (a_hashplaycount!=b_hashplaycount){
return b_hashplaycount-a_hashplaycount};
return 0.5-Math.random()
});

onresize=function(){
size=innerWidth/10)
for (i in image_resize_register){
var image=image_resize_register[i];
image.style.width=image.style.height=size+"px";
}}

hover_handler=function(event){
var img=event.target;
var id=img.getAttribute("gameid");
var game=game_register[id].game;
  var font=document.createElement("font");
  font.color="#FFFFFF";
  font.innerText=game["name"];
  var center=document.createElement("center");
  center.style.position="absolute";
  center.style.width=img.style.width;
  center.appendChild(font);
  var height=font.getClientRects()[0].height;
  center.style.height=height+"px";
  center.style.bottom=img.getClientRects()[0].bottom+"px";
  center.style.left=img.getClientRects()[0].left+"px";
  center.style.zIndex=2;
  center.style.backgroundColor="#000000";
  document.body.appendChild(center);
  center.setAttribute("gameid",id);
  font.setAttribute("gameid",id);
  font.onclick=center.onclick=click_handler;
  current_hover_element={"center":center,"img":img,"font":font,"id":id,"game":game};
}

unhover_handler=function(){
  if (current_hover_element){
  document.body.removeChild(current_hover_element.center);
  current_hover_element=null;}
}

click_handler=function(event){
var id=event.target.getAttribute("gameid");
var game=game_register[id].game;
for (i in game.hashtags){
var hashtag=game.hashtags[i];
prefs.hashtag_play_counts[hashtag]=(prefs.hashtag_play_counts[hashtag]||0)+1;
}
prefs.game_play_counts[id]=(prefs.game_play_counts[id]||0)+1;
window.top.location="/play.html#"+id;}

var current_hover_element=null;

var game_register={};
var image_resize_register=[];

create_game=function(game){
var image_element=document.createElement("img");
image_element.src=game["image"];
document.appendChild(image_element);
image_resize_register.push(image_element);
  image_element.setAttribte("gameid",game["id"]);
  image_element.onmouseover=hover_handler;
  image_element.onmouseleave=unhover_handler;
  image_element.onclick=click_handler;
game_register[game["id"]]={"game":game,"img":image_element};
}

for (i in games){
  create_game(games[i]);
}

onresize();

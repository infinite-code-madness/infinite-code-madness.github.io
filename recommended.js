var size_factor=1;
document.body.style.margin="0px";
var id=location.hash.slice(1);
for (i in games){
if (games[i].id==id){
  var game=games[i];
  break;
}}
games.sort(function(a,b){
if (a==game){
  return -1;
}
if (b==game){
  return 1;
  }
var a_matchcount=prefs.game_play_counts[a.id]||0;
  var b_matchcount=prefs.game_play_counts[b.id]||0;
  var a_hashcount=0;
  var b_hashcount=0;
  for (i in a.hashtags){
    var hashtag=a.hashtags[i];
    a_hashcount+=prefs.hashtag_play_counts[hashtag]||0;
    if (game.hashtags.includes(hashtag)){
      a_matchcount+=1;
      a_matchcount+=prefs.hashtag_play_counts[hashtag]||0}
  }
  for (i in b.hashtags){
    var hashtag=b.hashtags[i];
    b_hashcount+=prefs.hashtag_play_counts[hashtag]||0;
    if (game.hashtags.includes(hashtag)){
      b_matchcount+=1;
      b_matchcount+=prefs.hashtag_play_counts[hashtag]||0}
  }
  if (a_matchcount!==b_matchcount){
  return b_matchcount-a_matchcount}
if ((prefs.game_play_counts[a.id]||0)!==(prefs.game_play_counts[b.id]||0)){
return (prefs.game_play_counts[b.id]||0)-(prefs.game_play_counts[a.id]||0)}
  if (a_matchcount!==b_matchcount){
  return b_matchcount-a_matchcount}
  return 0.5-Math.random();
});
games.splice(0,1);
load_links("play_frame");

addEventListener("resize",function(){
  size=innerWidth/2;
fullscreen.style.width=fullscreen.style.height=home.style.width=home.style.height=size+"px"});

size=innerWidth/2;
var game_amount=Math.ceil((outerHeight-size)/innerWidth);
for (var i=0;i<Math.min(game_amount,games.length);i++){
create_game(games[i])}

onhashchange=function(){
  location.reload()};

fullscreen.onclick=top.fullscreen;
home.onclick=top.home;
onresize();

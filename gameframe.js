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

for (i in games){
  create_game(games[i]);
}

onresize();
document.body.style.margin="0px";
top.document.getElementById("homepage_frame").style.height=document.body.getClientRects()[0].height+"px";
document.body.style.overflowX="hidden";

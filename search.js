var query=unescape(location.hash.slice(1));
search_input.value=query;

onhashchange=function(){
  location.reload()};

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
  search_image_size=innerWidth/30;
  search.style.height=search.style.width=search_input.style.height=search_image_size+"px";
  search_input.style.width=((innerWidth-search_image_size)-(isScrollbarVisible?scrollbarWidth:0))+"px";
  search_input.style.fontSize=(search_image_size-10)+"px";
}

var games_to_keep=[];
var words=query.split(" ");
for (i in games){
for (i2 in words){
if games[i].name.includes(words[i2]){
games_to_keep.push(games[i]);
break}
}}

games_to_keep.sort(function(a,b){
var a_matches=0;
var b_matches=0;
  var a_indexscore=0;
  var b_indexscore=0;
for (i in words){
if (a.name.includes(words[i])){
a_matches+=1;
a_indexscore+=a.name.indexOf(words[i])};
  if (b.name.includes(words[i])){
b_matches+=1;
  b_indexscore+=b.name.indexOf(words[i])};
}
  if (a_matches!=b_matches){
  return b_matches-a_matches}
if (a_indexscore!=b_indexscore){
return b_indexscore-a_indexscore};
  
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

for (i in games_to_keep){
create_game(games_to_keep[i])};

onresize();

var initialized=false;

addEventListener("resize",(function(){
var size=(innerWidth-(isScrollbarVisible?scrollbarWidth:0))/30;
search.style.width=search.style.height=home.style.width=home.style.height=search_input.style.height=size+"px";
search_input.style.width=(innerWidth-((size*2)+(isScrollbarVisible?scrollbarWidth:0)))+"px";
if (!initialized){
  initialized=true;
return arguments.callee}})());

document.body.style.margin="0px";
document.body.style.overflowX="hidden";

search.onclick=function(){
if (search_input.value.length>0){
location="/search.html#"+escape(search_input.value)}}

search_input.onkeypress=function(event){
if (event.key=="Enter"){
search.click()}}

home.onclick=function(){
location="/"}

load_links("search");

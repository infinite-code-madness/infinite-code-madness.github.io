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

var words=query.toUpperCase().split(" ");
var games_to_keep=games.filter(function(game){return words.some(function(w){return game.name.includes(w)})});

games_to_keep.sort(function(a,b){
  var a_name_upper=a.name.toUpperCase();
  var b_name_upper=b.name.toUpperCase();
var a_matches=0;
var b_matches=0;
  var a_indexscore=0;
  var b_indexscore=0;
for (i in words){
  var word=words[i];
if (a_name_upper.includes(word)){
a_matches+=1;
a_indexscore+=a_name_upper.indexOf(word)};
  if (b_name_upper.includes(word)){
b_matches+=1;
  b_indexscore+=b_name_upper.indexOf(word)};
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
var a_hashplaycount=a.hashtags.reduce(function(count,current){return count+(prefs.hashtag_play_counts[hashtag]||0)},0);
var b_hashplaycount=b.hashtags.reduce(function(count,current){return count+(prefs.hashtag_play_counts[hashtag]||0)},0);
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

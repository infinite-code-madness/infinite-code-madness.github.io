onload=function(){
var id=location.hash;
play_frame.src="/play_frame.html"+id;
  recommended_frame.src="/recommended.html"+id;
}
onhashchange=function(){
var id=location.hash;
play_frame.src="/play_frame.html"+id;
  recommended_frame.src="/recommended.html"+id;}

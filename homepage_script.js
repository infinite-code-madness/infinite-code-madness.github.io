var xhr=new XMLHttpRequest();
xhr.open("GET","/js_api/urls_2.json",false);
xhr.send();
var urls=JSON.parse(xhr.responseText)["homepage"];
for (i in urls){
  for (i2 in urls[i]){
    document.getElementById(i).setAttribute(i2,urls[i][i2]);
  }
}
document.body.style.margin="0px";
var topsize=download_a.getClientRects()[0].height*1.2;
iframe.style.height=topsize+"px";

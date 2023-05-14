var xhr=new XMLHttpRequest();
xhr.open("GET","/js_api/urls.json",false);
xhr.send();
var urls=JSON.parse(xhr.responseText);
download_a.href=urls["download_64_bit"];

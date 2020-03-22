// import './style.css'; // Usar import está mal, mejor usar fetch.

function bajar(url,json,retrollamada){
  var tipo = undefined
  switch(json){
    case false:tipo="text";break;
    case "text":tipo="text";break;
    case "texto":tipo="text";break;

    case true:tipo="json";break;
    case "json":tipo="json";break;
  }
  fetch(url)
  .then(
    x=>tipo=="text"?x.text()
    :tipo=="json"?x.json()
    :x.text()
  ).then(retrollamada)
}
function bajar_estilo(url){
  bajar(url,"texto",x=>{
    var minúsculas = x.toLowerCase()
    var no_es_html = minúsculas.match(/^<!doctype html>/)==null
    var es_css = no_es_html
    if(es_css){
      console.log(es_css)
    }
  })
}
var url_estilo = location.href+"estilo.css"
bajar_estilo(url_estilo)

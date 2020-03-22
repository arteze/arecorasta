// import './style.css'; // Usar import está mal, mejor usar fetch.

function bajar(url,json,retrollamada){
  switch(json){
    case false:tipo="text";break;
    case "text":tipo="text";break;
    case "texto":tipo="text";break;

    case true:tipo="json";break;
    case "json":tipo="json";break;
  }
  fetch(url).then(x=>x[tipo]()).then(retrollamada)
}
function bajar_estilo(url){
  bajar(url,"texto",x=>console.log(3,x,4))
}
var url_estilo = location.href+"estilo.css"
console.log(url_estilo)
bajar(url_estilo)

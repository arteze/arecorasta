// import './estilo.css'; // Usar import está mal, mejor usar fetch.

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
function insertar_estilo_desde_texto(url,texto){
  var estilo = document.createElement("style")
  estilo.innerHTML = texto
  estilo.setAttribute("href",url)
  document.head.appendChild(estilo)
}
function insertar_estilo_desde_ruta(url,dominio){
  var estilo = document.createElement("link")
  var ahora = Date.now()
  var url_2 = dominio && url.replace(location.origin,dominio)
  var url_ahora = url_2 + "?" + "tiempo=" + Date.now()
  estilo.setAttribute("rel","stylesheet")
  estilo.href = url_ahora
  document.head.appendChild(estilo)
}
function bajar_estilo(url,dominio){
  bajar(url,"texto",x=>{
    var minúsculas = x.toLowerCase()
    var no_es_html = minúsculas.match(/^<!doctype html>/)==null
    var es_css = no_es_html
    if(es_css){
      insertar_estilo_desde_texto(url,x)
    }else{
      console.log("No se pudo bajar el estilo desde StackBlitz.")
      try{
        insertar_estilo_desde_ruta(url,dominio)
      }catch(e){
        console.log("No se pudo agregar el estilo al head.")
      }
    }
  })
}
var url_estilo = location.href+"estilo.css"
 bajar_estilo(url_estilo,"https://arteze.github.io/codersrank")

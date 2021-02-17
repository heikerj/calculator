/*modo oscuro a modo claro
        heiker 
           */

function switchSheet() {
  let theme = document.getElementById("theme");
  let pa = document.getElementById("dia")
  let mode = document.getElementById("modo")
  let img = document.getElementById("sol")
  let title = document.getElementById("title")
  let icon = document.getElementById("icon")
  

  if (theme.getAttribute("href") == "dia.css") {
    theme.href = "noche.css";
    pa.innerHTML= " ahora estamos en tema oscuro";
    img.src = "\luna.png";
    mode.innerHTML= " Activar tema claro";
    title.innerHTML= "Calculator/Tema oscuro";
    icon.href= "luna.png";
    
  } else {
    theme.href = "dia.css";
    pa.innerHTML=("estamos en tema claro")
    img.src = "\sol.png";
    mode.innerHTML=(" Activar tema oscuro")
    title.innerHTML = "Calculator/Tema claro";
    icon.href= "sol.png";
  }
}
/*menú desplegable */
function ver(n) {
         document.getElementById("subseccion"+n).style.display="block"
         }
function ocultar(n) {
         document.getElementById("subseccion"+n).style.display="none"
         }


        /*calculator*/
function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
function getResult() {
    return(document.getElementById('result').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    var result = eval(getResult()); 
    setResult(result);
}
function del() { 
    setResult (0);}
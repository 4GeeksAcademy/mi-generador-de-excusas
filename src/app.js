import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    function generadorAleatorioExcusas() {
    let who = ["El perro", "Mi profesor", "Mi padre", "Un hipopótamo"]; let randomWho = Math.floor(Math.random() * who.length);
    let action = ["se ha comido", "ha dormido sobre", "ha destrozado"]; let randomAction = Math.floor(Math.random() * action.length);
    let what = ["mis deberes", "mi coche", "mi cama"]; let randomWhat = Math.floor(Math.random() * what.length);
    let when = ["esta noche", "ahora mismo", "hace dos días"]; let randomWhen = Math.floor(Math.random() * when.length);
    
    return (`${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`)
  };
  
  document.querySelector("#excuse").innerHTML = generadorAleatorioExcusas();
};

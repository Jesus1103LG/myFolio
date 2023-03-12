const html = document.querySelector(".html");
const css = document.querySelector(".css");
const javascript = document.querySelector(".javascript");
const python = document.querySelector(".python");
const seccion2__ul = document.querySelector(".seccion2--ul");
const seccion2 = document.querySelector(".seccion2");

const childHTML = html.firstElementChild;
const lastHTML = html.lastElementChild;

var fabIco = ['fa-brands fa-html5','fa-brands fa-css3-alt','fa-brands fa-js','fa-brands fa-python'];
var lenguage = ['HTML','CSS','JavaScript','Python'];
var contador = 0;

if(screen.width <= 428){
    seccion2__ul.removeChild(css);
    seccion2__ul.removeChild(javascript);
    seccion2__ul.removeChild(python);
    seccion2__ul.classList.toggle('one');

    setInterval(cambiarClass,2000);
}

function cambiarClass(){
    contador++;
    if(contador > fabIco.length - 1){
        contador = 0;
    }
    childHTML.classList.value = fabIco[contador];
    lastHTML.innerHTML = `<h3>${lenguage[contador]}</h3>`
}




import _, { size } from 'lodash';
import './estilo.css';
import Imagen from './skate.png';
import Datos from'./datos.csv';
import yaml from './datos.yaml'
import json5 from './datos.json5';
import './estilo.scss';

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration =>{
            console.log("SW registrado!", registration);
        }).catch(err=>{
            console.log("SW no registrado", err)
        });
    });
}

function componente(){
    const elemento = document.createElement('div');
    //Lodash
    elemento.innerHTML = _.join(['Saludos', Datos[0][1]],' ');
    elemento.classList.add('texto');
    console.log(Datos);
    return elemento;
}
function imagenSkate(){
    var img = document.createElement("IMG");
    img.src = Imagen;
    document.getElementById('imageDiv').appendChild(img);
    img.style.display="block";
    img.style.margin= "auto";    
}
var inputs = document.getElementsByClassName('formulario__input');
for (var i =0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}


console.log(yaml.title)
console.log(json5.owner.name)
document.body.appendChild(componente());
document.body.appendChild(imagenSkate());

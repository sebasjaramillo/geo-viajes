import {continentes}from "./modulo.js";

let afri=document.getElementById('af');
let asi=document.getElementById(".as");
let eur=document.getElementById(".eu");
let oce=document.getElementById(".oc");
let ame=document.getElementById(".am");
let na1=document.getElementById("n1")
let na2=document.getElementById("n2")
let na3=document.getElementById("n3")
let na4=document.getElementById("n4")
let na5=document.getElementById("n5")
let na6=document.getElementById("n6")
let boton=document.getElementById("card")
let btn=document.querySelector('.hola')
let img=document.querySelector('.img')

let caso=0

switch(caso){
    case 1(afri):
        na2.innerText=`${continentes[caso].name2}`;
    break;
    case 2:
        na1.innerText=`${continentes[caso].name1}`;
    break;
}
afri.addEventListener('click',afri)

asi.addEventListener('click',asi)





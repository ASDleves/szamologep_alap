window.addEventListener("load", init);


function id(elem) {
return document.getElementById(elem);
}
function $(elem){
    return document.getElementsByClassName(elem);

}
function init(){


 for (let index = 0; index < 10; index++){
     var gomb = document.querySelectorAll(".szamok")[0];
     gomb.innerHTML +="<button id=''>"+index+"</button>"

 }
}

//Creazione Documento// 

let newDiv= document.createElement('div');
newDiv.className = "container";
document.body.appendChild(newDiv);

let title = document.createElement('h1');
title.innerHTML = "Counter";
title.className = "titolo";
newDiv.appendChild(title);

let view = document.createElement('div');
view.className = "vista";
newDiv.appendChild(view);

let number = document.createElement('div');
number.innerHTML = "0";
number.className = "numero";
view.appendChild(number);


let bottoni = document.createElement('div');
bottoni.className = "buttons";
newDiv.appendChild(bottoni);

let bottoneSx = document.createElement('button');
bottoneSx.className = "decrement";
bottoneSx.innerHTML = "-"
bottoni.appendChild(bottoneSx);

let bottoneDx = document.createElement('button');
bottoneDx.className = "increment";
bottoneDx.innerHTML = "+"
bottoni.appendChild(bottoneDx);

//Funzioni//

let counter = 0; 

function increment(){
    counter++;
    number.innerHTML = counter;
}

bottoneDx.addEventListener('click',increment)

function decrement(){
    counter != 0 ? counter-- : "";
    number.innerHTML = counter; 
}

bottoneSx.addEventListener('click', decrement)
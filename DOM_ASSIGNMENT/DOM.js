var headone = document.querySelector('#one')
var headtwo = document.querySelector("#two")
var headthree = document.querySelector("#three")

headone.addEventListener('mouseover', function(){
  headone.textContent = "Mouse Currently here!";
  headone.style.color = "red";
})

headone.addEventListener('mouseout', function(){
  headone.textContent = "HOVE OVER ME!";
  headone.style.color = "black";
})

headone.addEventListener('click', function(){
  headone.textContent = "CLICKED ON!";
  headone.style.color = "blue";
})

headone.addEventListener('dblclick', function(){
  headone.textContent = "DOUBLE CLICKED ON!";
  headone.style.color = "green";
})
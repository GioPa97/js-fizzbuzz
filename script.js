
let container=document.querySelector(".mio-container");

/*Inserisco in un ciclo le variabili*/

for(let i=1; i<=100; i++){

    if (i%3==0){
        container.innerHTML += '<div class="card"><p>Fizz</p></div>';

    } else if (i%3==0 && i%5==0){
        container.innerHTML += '<div class="card"><p>FizzBuzz</p></div>';
  
    }
    else if(i%5==0){
        container.innerHTML += '<div class="card"><p>Buzz</p></div>';
    }
    else{
        container.innerHTML += '<div class="card"><p>'+i+'</p></div>';
    }
};


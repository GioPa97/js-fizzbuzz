let containerPrincipale = document.querySelector(".mio-container");

for (let i = 0; i < 1000; i++ ){


    switch(i){
        case fizz:
            containerPrincipale.innerHTML += '<div class="square"><p>Fizz</p></div>';
            break;
        case buzz:
            containerPrincipale.innerHTML += '<div class="square"><p>Buzz</p></div>';
            break;
        case fizzbuzz:
            containerPrincipale.innerHTML += '<div class="square"><p>FizzBuzz</p></div>';
            break;
        
        default:
            containerPrincipale.innerHTML += '<div class="square"><p>' + i + '</p></div>';
    }

}

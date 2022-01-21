var containerElemento = document.getElementById('container');

  for(let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
      containerElemento.innerHTML += "<div class='red_3_5'>" + "fizzbuzz" + "</div>";
    } 
    else if(i%5==0){
      containerElemento.innerHTML += "<div class='yellow_5'>" + "buzz" + "</div>";
    }
    else if(i%3==0){
      containerElemento.innerHTML += "<div class='green_3'>" + "fizz" + "</div>";
    }
    else{
      containerElemento.innerHTML += "<div class='box'>" + i + "</div>";
    }
   
  }


function calculate() {
  var height = (document.getElementById("height").value)/100; /* Dividido por 100, pois no IMC a altura deve estar em metro */
  var weight = document.getElementById("weight").value;
  /*console.log(height);
  console.log(weight);*/

  var imc = weight /(height)**2
  /*console.log(imc)*/
  var text = ""
  if(imc<17){
    text="Você está muito magro!"
  } else if(imc<18.5){
    text="Você está um pouco abaixo do peso"
  } else if(imc<=24.9){
    text="Parabéns, você está ótimo!"
  } else if(imc<29.9){
    text="Você está um pouco acima do peso"
  } else if(imc<34.9){
    text="Você está obeso"
  } else if(imc<39.9){
    text="Você está com obesidade severa"
  } else if(imc>40){
    text="Você está com obesidade mórbida!"
  }
  document.getElementById("text_area").innerText=text
}

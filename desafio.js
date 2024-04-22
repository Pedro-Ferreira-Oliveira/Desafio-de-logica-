let victories = 10;
let defeat = 2;
let patent = " ";

function calculator(victories , defeat){
return victories - defeat;}

let result = calculator(victories,defeat);

switch(true){
case result <= 10:
  patent= "Ferro";
  break;

  case result >=11 && result <=20:
  patent = " Bronze ";
  break;

  case result >=21 && result <=50:
  patent = " Prata ";
  break;

  case result >=51 && result <=80:
  patent = " Ouro ";
  break;

  case result >=81 && result <=90:
  patent = " Diamante ";
  break;

  case result >=91 && result <=100:
  patent = " Lendário ";
  break;

  case result >=101:
  patent = " Imortal ";
  break;
}  
console .log (" O Herói tem de saldo: " + result + " - Está no nível de: " + patent )

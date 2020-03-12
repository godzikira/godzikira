function raschitat() {
strana  = document.getElementById('strana').value;
switch (strana) {
   case "ukraine":
      cena = 1;
      break
   case "russia":
      cena = 1.1;
      break   
    case "georgea":
      cena = 1.2;
      break   
    case "turcia":
      cena = 1.3;
      break 
   default:
      cena = 1;
      break
}
dlina  = document.getElementById('dlina').value;
ves  = document.getElementById('ves').value;

if(dlina == ""){
alert("Вы не указали расстояние");
} else if(ves == ""){
alert("Вы не указали вес груза");
} else if(ves >= 23){
alert("Перегруз. Укажите, пожалуйста, вес до 23 тонн, либо оформите заказа на несколько машин");
}else {
ploschad = (parseFloat (ves) * 0.7 + 20) * parseFloat (dlina);
stoimost = ploschad*cena;
document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" грн.";
}
}


$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top -54
  },1000)
  
 })
var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner(){
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 4000);
var conrole = document.querySelector('.pause');

conrole.onclick = function() {
  if (conrole.className == 'pause'){
    clearInterval(timer);
    conrole.className = 'play';
  }else{
    timer = setInterval(trocaBanner, 4000);
    conrole.className = 'pause';
  }

  return false;
}

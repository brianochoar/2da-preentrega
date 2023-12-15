const pelea = document.getElementById('seiya');

pelea.addEventListener('click', obtenerpelea);

function obtenerpelea(){
  alert ('Genial, ahora eres Seiya el Caballero de Pegaso');
  alert ('Ahora debes vencer a un Caballero Dorado, elije cual');
  window.location.href='seiya.html';
}

// caballeros bronce//

const pelea2 = document.getElementById('shyru');

pelea2.addEventListener('click', peleadorada1);

function peleadorada1(){
  alert ('Genial, ahora eres Shyru el Caballero Dragon');
  alert ('Ahora debes vencer a un Caballero Dorado, elije cual');
  window.location.href='shyru.html';

};

const pelea3 = document.getElementById('hyoga');

pelea3.addEventListener('click', peleadorada2);

function peleadorada2(){
  alert ('Genial, ahora eres hyoga el Caballero del Cisne');
  alert ('Ahora debes vencer a un Caballero Dorado, elije cual');
  window.location.href='hyoga.html';
  
};

const pelea4 = document.getElementById('jhon');

pelea4.addEventListener('click', peleadorada3);

function peleadorada3(){
  alert ('Genial, ahora eres jhon el Caballero de Andromeda');
  alert ('Ahora debes vencer a un Caballero Dorado, elije cual');
  window.location.href='jhon.html';
};

const pelea5 = document.getElementById('iki');

pelea5.addEventListener('click', peleadorada4);

function peleadorada4(){
  alert ('Genial, ahora eres iki el Caballero del Fenix');
  alert ('Ahora debes vencer a un Caballero Dorado, elije cual');
  window.location.href='iki.html';
};









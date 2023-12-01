let nombre;
let caballero;
let caballerodorado;

alert("Empieza la batalla de las 12 casas");

nombre = prompt("por favor escribe tu nombre");
if (nombre == "") {
  prompt("por favor escribe tu nombre");
} else {
  alert(`Comienza la lucha ${nombre}!\n 
Elige tu Caballero favorito`);
}

caballero = +prompt(`Ingrese el numero de tu Caballero favorito\n
1- Seiya (caballero de Pegaso)\n
2- Shiryu (caballero del Dragón)\n
3- Hyoga (caballero del Cisne)\n
4- Shun (caballero de Andrómeda) \n
5- Ikki (caballero de Fénix)`);
if (
  caballero !== 1 &&
  caballero !== 2 &&
  caballero !== 3 &&
  caballero !== 4 &&
  caballero !== 5
) {
  +prompt("ingresa tu caballero favorito");
} else {
  if (caballero == 1) {
    caballero = "caballero de Pegaso";
  }
  if (caballero == 2) {
    caballero = "caballero del Dragón";
  }
  if (caballero == 3) {
    caballero = "caballero del Cisne";
  }
  if (caballero == 4) {
    caballero = "caballero de Andrómeda";
  }
  if (caballero == 5) {
    caballero = "caballero del Fénix";
  }

  alert(`Excelente ${nombre} ahora eres el ${caballero} \n
    Comencemos tu misión`);
}

/// OBJETO CONSTRUCTOR
function CaballeroDorado(nombre, signo, golpe) {
  this.nombre = nombre;
  this.signo = signo;
  this.golpe = golpe;
}

const Aries = new CaballeroDorado("Mu", "Aries", "Extincion de Luz Estelar");
const Geminis = new CaballeroDorado("Saga", "Geminis", "Explosion Galactica");
const Libra = new CaballeroDorado("Doko", "Libra", "Dragones de Rozan");
const Escorpio = new CaballeroDorado("Milo", "Escorpio", "Aguja Escarlata");
const Piscis = new CaballeroDorado("Afrodita", "Piscis", "Rosa Sangrienta");
const Sagitario = new CaballeroDorado("Aioros", "Sagitario", "Flecha Dorada");
const Tauro = new CaballeroDorado("Aldebaran", "Tauro", "El Gran Cuerno");
const Capricornio = new CaballeroDorado("Shura", "Capricornio", "Excalibur");
const Leo = new CaballeroDorado("Aioria", "Leo", "Plasma Relampago");
const Virgo = new CaballeroDorado("Shaka", "Virgo", "El tesoro del cielo");
const Cancer = new CaballeroDorado(
  "Mascara de la Muerte",
  "Cancer",
  "Sekishiki Meikai Ha"
);
const Acuario = new CaballeroDorado("Camus", "Acuario", "Ejecucion Aurora");
const Pegasus = new CaballeroDorado("Seiya", "Sagitario", "Meteoro de Pegasus");
const Dragón = new CaballeroDorado("Shiryu", "Capricornio", "Dragon Naciente");
const Cisne = new CaballeroDorado("Hyoga", "Acuario", "Polvo de Diamante");
const Andrómeda = new CaballeroDorado("Shun", "Piscis", "Cadena de andromeda");
const Fénix = new CaballeroDorado("Ikki", "Virgo", "Ave Fenix");

caballerodorado = +prompt(`Tu primera batalla sera en la casa numero ? \n
1- Aries\n
2- Acuario\n
3- Piscis\n
4- Tauro \n
5- Geminis\n
6- Escorpion\n
7- Leo\n
8- Virgo\n
9- Cancer\n
10-Sagitario\n
11-Capricornio\n
12-Libra \n
`);

if (
  caballerodorado !== 1 &&
  caballerodorado !== 2 &&
  caballerodorado !== 3 &&
  caballerodorado !== 4 &&
  caballerodorado !== 5 &&
  caballerodorado !== 6 &&
  caballerodorado !== 7 &&
  caballerodorado !== 8 &&
  caballerodorado !== 9 &&
  caballerodorado !== 10 &&
  caballerodorado !== 11 &&
  caballerodorado !== 12
) {
  +prompt("Escoge tu rival");
} else {
  if (caballerodorado == 1) {
    caballerodorado = "Aries";
  }
  if (caballerodorado == 2) {
    caballerodorado = "Acuario";
  }
  if (caballerodorado == 3) {
    caballerodorado = "Piscis";
  }
  if (caballerodorado == 4) {
    caballerodorado = "Tauro";
  }
  if (caballerodorado == 5) {
    caballerodorado = "Geminis";
  }
  if (caballerodorado == 6) {
    caballerodorado = "Escorpion";
  }
  if (caballerodorado == 7) {
    caballerodorado = "Leo";
  }
  if (caballerodorado == 8) {
    caballerodorado = "Virgo";
  }
  if (caballerodorado == 9) {
    caballerodorado = "Cancer";
  }
  if (caballerodorado == 10) {
    caballerodorado = "Sagitario";
  }
  if (caballerodorado == 11) {
    caballerodorado = "Capricornio";
  }
  if (caballerodorado == 12) {
    caballerodorado = "Libra";
  }
}

if (caballerodorado === "Aries") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Aries);
}

if (caballerodorado === "Acuario") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Acuario);
}

if (caballerodorado === "Piscis") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Piscis);
}

if (caballerodorado === "Tauro") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Tauro);
}

if (caballerodorado === "Geminis") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Geminis);
}

if (caballerodorado === "Escorpion") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Escorpio);
}

if (caballerodorado === "Leo") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Leo);
}

if (caballerodorado === "Virgo") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Virgo);
}

if (caballerodorado === "Cancer") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Cancer);
}

if (caballerodorado === "Sagitario") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Sagitario);
}

if (caballerodorado === "Capricornio") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Capricornio);
}

if (caballerodorado === "Libra") {
  function Batalla(CaballeroDorado) {
    alert(`Preparate ${caballero}!! el Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te esta esperando \n
     Cuidate de su golpe de ${CaballeroDorado.golpe}`);
  }
  Batalla(Libra);
}

///Metodos

function Ataques(nombre, signo, ataque, sentido) {
  this.caballero = nombre;
  this.casa = signo;
  this.ataque = ataque;
  this.sentido = sentido;

  this.pelea = function(atacado) {
    alert(`El ${this.caballero} logra elevarse a su ${this.ataque} ataca al Caballero de ${caballerodorado} y bloquea su ${this.sentido} \n
venciendo asi al Caballero Dorado de ${atacado} y le roba su armadura` );
    alert(`El ${this.caballero} Ahora es el Caballero Dorado de ${atacado}`);
  };

}

const lucha = new Ataques(
  `${caballero}`,
  "Sagitario",
  "7mo sentido",
  "vista"
);
const atacado = new Ataques(
  `${caballerodorado}`,
  "Sagitario",
  "7mo sentido",
  "vista"
);

lucha.pelea(atacado.caballero);

///Clases

alert(`Tu primera misión ha sido completada ${caballero} Ahora debes asesinar al Patriarca para salvar a Saori`); 

class Patriarca{
  nombre;
  golpe;


  constructor(nombre, golpe){
    this.nombre = nombre;
    this.golpe = golpe;
  }

  pelea = function(patriarca) {
    alert(`El ${this.nombre} ataca con su golpe de ${this.golpe} al patriarca pero es insuficiente`);
    alert(`El ${patriarca} conecta su Capitulación del Cielo y el Demonio al ${caballero} quien cae tendido`);
  };


}

const luchador = new Patriarca(
  `${caballero}`,
  "Flechas mortales"
);

const final = new Patriarca(
  'Patriarca',
  "Flechas mortales"
);

luchador.pelea(final.nombre);



///Arrays

alert(`NO estas solo ${caballero} tus amigos han venido a ayudarte!`)

const bronce= [
  {nombre:"Shiryu", tipo:"Caballero Dragon", grito:"Dragon Naciente"},
  {nombre:"Seiya", tipo:"Caballero Pegasus", grito:"Meteoro de Pegasus"},
  {nombre:"Hyoga", tipo:"Caballero del Cisne", grito:"Polvo de Diamante"},
  {nombre:"Shun", tipo:"Caballero de Andromeda", grito:"Cadena de andromeda"},
  {nombre:"Ikki", tipo:"Caballero del Fenix", grito:"Ave Fenix"}

];


for (let item of bronce){
  alert(`${item.nombre} El ${item.tipo} conecta su golpe de ${item.grito} al Patriarca`); 
}

alert('El patriarca ha muerto'); 
/// FUNCION DE ORDEN SUPERIOR


function Saori(salvar) {
  if (salvar == `${caballero}`) {
    return function (nombre) {
      alert(`Gracias ${nombre} has salvado a Saori de las manos del patriarca`);
    };
  }
}

const Salvacion = Saori(`${caballero}`);
Salvacion(`${caballero}`);


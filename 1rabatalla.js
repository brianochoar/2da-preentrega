let nombre;
let caballero;



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
const Cancer = new CaballeroDorado("Mascara de la Muerte","Cancer","Sekishiki Meikai Ha");
const Acuario = new CaballeroDorado("Camus", "Acuario", "Ejecucion Aurora");
const Pegasus = new CaballeroDorado("Seiya", "Sagitario", "Meteoro de Pegasus");
const Dragón = new CaballeroDorado("Shiryu", "Capricornio", "Dragon Naciente");
const Cisne = new CaballeroDorado("Hyoga", "Acuario", "Polvo de Diamante");
const Andrómeda = new CaballeroDorado("Shun", "Piscis", "Cadena de andromeda");
const Fénix = new CaballeroDorado("Ikki", "Virgo", "Ave Fenix");


const caballerodorado = () => {
  Swal.fire({
    title: 'Tu primera batalla será en la casa de',
    input: 'select',
    inputOptions: {
      '1': 'Aries',
      '2': 'Acuario',
      '3': 'Piscis',
      '4': 'Tauro',
      '5': 'Geminis',
      '6': 'Escorpion',
      '7': 'Leo',
      '8': 'Virgo',
      '9': 'Cancer',
      '10': 'Sagitario',
      '11': 'Capricornio',
      '12': 'Libra'
    },
    inputPlaceholder: 'Selecciona una opción',
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      
      let signoSeleccionado = result.value;

      
      Batalla(obtenerCaballeroPorSigno(signoSeleccionado));
    }
  });
};


const obtenerCaballeroPorSigno = (signo) => {
  switch (signo) {
    case '1': return Aries;
    case '2': return Acuario;
    case '3': return Piscis;
    case '4': return Tauro;
    case '5': return Geminis;
    case '6': return Escorpio;
    case '7': return Leo;
    case '8': return Virgo;
    case '9': return Cancer;
    case '10': return Sagitario;
    case '11': return Capricornio;
    case '12': return Libra;
    default: return null; 
  }
};


const Batalla = (CaballeroDorado) => {
  Swal.fire({
    title: `¡Prepárate Caballero! El Caballero Dorado ${CaballeroDorado.nombre} de ${CaballeroDorado.signo} te está esperando`,
    text: `Cuidate de su golpe de ${CaballeroDorado.golpe}`,
    icon: 'warning',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Has vencido a ${CaballeroDorado.nombre} de ${CaballeroDorado.signo}`,
        text: ` ¿ Preparado para tu segunda batalla ?`,
        icon: "question",
        confirmButtonText: 'Aceptar'
      }).then((final) => {
        if(final.isConfirmed){
      window.location.href = './2dabatalla.html';
      }
    });
    }
  }); 
    
};


caballerodorado()
 



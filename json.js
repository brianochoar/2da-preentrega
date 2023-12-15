const personal = [
  { nombre: "Mu", Signo: "Aries", golpe: "Extincion de Luz Estelar" },
  { nombre: "Saga", Signo: "Geminis", golpe: "Explosion Galactica" },
  { nombre: "Doko", Signo: "Libra", golpe: "Dragones de Rozan" },
  { nombre: "Milo", Signo: "Escorpio", golpe: "Aguja Escarlata" }
];

personal.push({ nombre: "Afrodita", Signo: "Piscis", golpe: "Rosa Sangrienta" });
personal.push({ nombre: "Aioros", Signo: "Sagitario", golpe: "Flecha Dorada" });
personal.push({ nombre: "Aldebaran", Signo: "Tauro", golpe: "El Gran Cuerno" });
personal.push({ nombre: "Shura", Signo: "Capricornio", golpe: "Excalibur" });
personal.push({ nombre: "Aioria", Signo: "Leo", golpe: "Plasma Relámpago" });
personal.push({ nombre: "Mascara de la Muerte", Signo: "Cancer", golpe: "Sekishiki Meikai Ha" });
personal.push({ nombre: "Shaka", Signo: "Virgo", golpe: "El tesoro del cielo" });
personal.push({ nombre: "Mascara de la Muerte", Signo: "Cancer", golpe: "Sekishiki Meikai Ha" });

const personalJSON = JSON.stringify(personal);

localStorage.setItem('personal', personalJSON);

console.log(JSON.stringify(personal));

function peleaCaballero() {
  let personal = JSON.parse(localStorage.getItem('personal'));
  let selectPersonal = document.getElementById('productos');
  
  selectPersonal.innerHTML = '';

  personal.forEach((individuo, index) => {
    let option = document.createElement('option');
    option.textContent = ` Lucharas contra ${individuo.nombre}  El caballero de ${individuo.Signo}`;
    option.value = index;
    selectPersonal.appendChild(option);
  });
}

peleaCaballero();
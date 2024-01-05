  const Ataques = function (nombre, signo, ataque, sentido) {
    this.caballero = nombre;
    this.casa = signo;
    this.ataque = ataque;
    this.sentido = sentido;
  
    this.pelea = function (atacado) {
      Swal.fire({
        title: `${this.caballero} logra elevar su ${this.ataque}`,
        text: `Ataca al Caballero de ${atacado} y bloquea su ${this.sentido}`,
        icon: 'info',
        confirmButtonText: 'Aceptar'
      }).then((clase) => {
        if(clase.isConfirmed){
          window.location.href = './clase.html';
        }
      });
  
    
    };
  };
  

  const atacante = new Ataques("El caballero de Bronce", "Pegaso", "cosmo", "sentido");
  atacante.pelea("Patriarca");
  
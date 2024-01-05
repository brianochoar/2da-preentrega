const mostrarMensajes = async () => {
    await Swal.fire({
      title: `El Patriarca es muy fuerte, pero tus amigos han venido a ayudarte!`,
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
 
  
    const bronce = [
      { nombre: "Shiryu", tipo: "Caballero Dragon", grito: "Dragon Naciente" },
      { nombre: "Seiya", tipo: "Caballero Pegasus", grito: "Meteoro de Pegasus" },
      { nombre: "Hyoga", tipo: "Caballero del Cisne", grito: "Polvo de Diamante" },
      { nombre: "Shun", tipo: "Caballero de Andromeda", grito: "Cadena de andromeda" },
      { nombre: "Ikki", tipo: "Caballero del Fenix", grito: "Ave Fenix" },
    ];

    const mostrarMensajesBronce = async (index) => {
      if (index < bronce.length) {
        await Swal.fire({
          title: `${bronce[index].nombre} El ${bronce[index].tipo} conecta su golpe de ${bronce[index].grito} al Patriarca`,
          icon: 'info',
          confirmButtonText: 'Aceptar'
        });
  
   
        mostrarMensajesBronce(index + 1);
      } else {
       
        await Swal.fire({
          title: 'El patriarca ha muerto',
          text: 'Has salvado a Saori, la Reina Atenas',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    };
  
   
    await mostrarMensajesBronce(0);
  };
  

  mostrarMensajes();
  










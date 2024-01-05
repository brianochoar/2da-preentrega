let contadorClick = 0;

const boton = document.getElementById('botoncito');

boton.addEventListener('click', pelear);

function pelear() {
  Toastify({
    text: 'Haz click y golpea',
    duration: 3000,
    close: true,
    gravity: 'center',
    position: 'center',  
    stopOnFocus: true,
    onClick: function(){
      contadorClick++;
      if (contadorClick === 1){
        Swal.fire({
          title: 'Barbaro, has vencido al caballero Dorado',
          text: ` Finaliza tu mision en la 3ra batalla`,
          icon: "success",
        }).then((proxima) => {
          if(proxima.isConfirmed){
            window.location.href = './3rabatalla.html';
          }
        });
      }
    }
  }).showToast();
}



  

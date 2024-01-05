const boton = document.getElementById('boton');

boton.onclick = async () => {
  const { value: email } = await Swal.fire({
    title: "ingresa tu direccion de correo",
    input: "email",
    inputLabel: "",
    inputPlaceholder: "Enter your email address"
  });

  if (email) {
    
    await new Promise(resolve => setTimeout(resolve,0));

    Swal.fire(`Mail Registrado: ${email}`);
    
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    
    window.location.href = './inicio.html';
  }
};
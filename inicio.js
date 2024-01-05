(async () => {
  const { value: fruit } = await Swal.fire({
      title: "Elige tu Caballero favorito",
      input: "select",
      inputOptions: {
          Caballero: {
              Pegaso: "Seiya",
              Dragon: "Shiryu",
              Cisne: "Hyoga",
              Andromeda: "Shun",
              Fenix: "Ikki",
          },
      },
      inputPlaceholder: "Selecciona",
      showCancelButton: true,
      inputValidator: (value) => {
          return new Promise((resolve) => {
              if (
                  value === "Pegaso" ||
                  value === "Dragon" ||
                  value === "Cisne" ||
                  value === "Andromeda" ||
                  value === "Fenix"
              ) {
                  resolve();
              } else {
                  resolve("Elige un caballero :)");
              }
          });
      },
  });

  if (fruit) {
      await Swal.fire(`Ahora eres el caballero: ${fruit}`);
      
      if (fruit.toLowerCase() === 'pegaso') {
          window.location.href = './1rabatalla.html';
      } else if (fruit.toLowerCase() === 'dragon') {
          window.location.href = './1rabatalla.html';
      } else if (fruit.toLowerCase() === 'cisne') {
          window.location.href = './1rabatalla.html';
      } else if (fruit.toLowerCase() === 'andromeda') {
          window.location.href = './1rabatalla.html';
      } else if (fruit.toLowerCase() === 'fenix') {
          window.location.href = './1rabatalla.html';
      }
  }
})();


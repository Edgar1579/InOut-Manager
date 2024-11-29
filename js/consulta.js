async function consulta2() {
    try {
      let urlApi = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"; // Cambia la URL para obtener Pokémon
      let response = await fetch(urlApi);
      let data = await response.json();
      //console.log(data);
  
      // Capturo el elemento select por su ID
      const selectPosts = document.getElementById("select_posts");
      selectPosts.innerHTML = ""; // Limpiar el select antes de agregar opciones
  
      // Función para crear una opción en el select
      function crearOpcion(pokemon) {
        const option = document.createElement("option");
        option.id = pokemon.name; // Usar el nombre del Pokémon como ID
        option.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); // Capitalizar el nombre
        return option;
      }
  
      // Recorrer el array de resultados y crear las opciones
      data.results.forEach((pokemon) => {
        selectPosts.appendChild(crearOpcion(pokemon));
      });
  
      // Recorrer el array de objetos para capturar la clave name de cada objeto
      data.results.forEach((pokemon) => {
        //console.log("Name: ", pokemon.name);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  consulta2(); 
  
  async function consultaUsuario() {
    try {
      ///capturar dato de input
  
      let numeroDocumento = document.getElementById('input_numero_documento').value;
  
      let fetchConfig = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      let urlApi =
        "https://nodejs-production-9c7b.up.railway.app/api/usuario/numeroDocumento/" + numeroDocumento;
      //let urlApi = "https://jsonplaceholder.typicode.com/posts";
      let response = await fetch(urlApi, fetchConfig);
      let data = await response.json();
      console.log("🚀 ~ consulta ~ data:", data.nombre);
      Swal.fire('El usuario consultado es: '+data.nombre,'','info')
       /*
      document.getElementById("inputDocumento").value = data;
      // Capturo el elemento select por su ID
      const selectPosts = document.getElementById("select_posts");
      selectPosts.innerHTML = ""; // Limpiar el select antes de agregar opciones
  
      // Función para crear una opción en el select
      function crearOpcion(post) {
        const option = document.createElement("option");
        option.id = post.id;
        option.textContent = post.title; // Asumiendo que 'title' es la propiedad del nombre
        return option;
      }
  
      //recorrer el array de posts y crear las opciones
      data.forEach((post) => {
        selectPosts.appendChild(crearOpcion(post));
      });
  
      //recorrer el array de objetos para capturar la clave id de cada oibjeto
      data.forEach((post) => {
        console.log("Title: ", post.title);
      }); */
    } catch (error) {
      console.error("Error:", error);
    }
  }
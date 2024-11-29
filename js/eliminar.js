async function eliminar() {
    try {
      ///capturar dato de input
  
      let numeroDocumento = document.getElementById(
        "input_numero_documento"
      ).value;
  
      let fetchConfig = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      let urlApi = "https://nodejs-production-9c7b.up.railway.app/api/usuario/numeroDocumento/" + numeroDocumento;
      //let urlApi = "https://edgnode.netlify.app/api/usuario/numeroDocumento/" + numeroDocumento;
      //let urlApi = "https://jsonplaceholder.typicode.com/post";
      let response = await fetch(urlApi, fetchConfig);
      if (response.ok) {
        Swal.fire("Usuario eliminado", "", "success");
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      //let data = await response.json();
      /* console.log("🚀 ~ consulta ~ data:", data.nombre);
          Swal.fire('El usuario consultado es: '+data.nombre,'','info') */
      /*
          document.getElementById("inputDocumento").value = data;
          // Capturo el elemento select por su ID
          const selectPosts = document.getElementById("select_post");
          selectPosts.innerHTML = ""; // Limpiar el select antes de agregar opciones
      
          // Función para crear una opción en el select
          function crearOpcion(post) {
            const option = document.createElement("option");
            option.id = post.id;
            option.textContent = post.title; // Asumiendo que 'title' es la propiedad del nombre
            return option;
          }
      
          //recorrer el array de post y crear las opciones
          data.forEach((post) => {
            selectPosts.appendChild(crearOpcion(post));
          });
      
          //recorrer el array de objetos para capturar la clave id de cada oibjeto
          data.forEach((post) => {
            console.log("Title: ", post.title);
          }); */
    } catch (e) {
      console.error("Error:", error);
    }
  }
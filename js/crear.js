async function crear() {
    let nombre = document.getElementById('input_nombre').value;
    let numeroDocumento = document.getElementById('input_numero_documento').value;
    let tipoDocumento = document.getElementById('input_tipo_documento').value;
    let email = document.getElementById('input_email').value;
    let fechaRegistro = document.getElementById('input_fecha_registro').value;
    let fechaExpedicionDocumento = document.getElementById('input_fecha_expedicion_documento').value;
    let juegos = document.getElementById('input_juegos').value;
    try {
        let fetchConfig = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                nombre: nombre,
                numeroDocumento: numeroDocumento,
                tipoDocumento: tipoDocumento,
                fechaExpedicionDocumento: fechaExpedicionDocumento, // Corregido
                email: email, // Corregido
                fechaRegistro: fechaRegistro, // Corregido
                juegos: juegos,
                
            }),
                
        };

        let urlApi = "https://nodejs-production-9c7b.up.railway.app/api/usuario";
        //let urlApi = "https://edgnode.netlify.app/api/usuario"
        let response = await fetch(urlApi, fetchConfig);
        console.log("🚀 ~ actualizar ~ response:", response);
    let status = response.status;
    console.log(typeof status)
    //si la respuesta es ok, parseo el JSON y lo devuelvo
    if (status === 400){
      //console.error(`Error: ${e}`);
      Swal.fire("Usuario ya está creado", "", "warning");
      return;
    }
    if (status === 500) {
      Swal.fire("Usuario no fue creado", "", "error");
      return;
    } 
    if (response.ok) {
      Swal.fire("Usuario creado", "", "success")
return;
    }

    } catch (e) {
        swal.fire("Falla técnica", "Contacte a sistemas", "error");
    }
}
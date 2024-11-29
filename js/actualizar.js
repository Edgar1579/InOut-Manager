async function actualizar(){
    console.log("🚀 ~ actualizar ~ actualizar:", actualizar)
    let nombre = document.getElementById('input_nombre').value;
    let numeroDocumento = document.getElementById('input_numero_documento').value;
    let tipoDocumento = document.getElementById('input_tipo_documento').value;
    let email = document.getElementById('input_email').value;
    let fechaRegistro = document.getElementById('input_fecha_registro').value;
    let fechaExpedicionDocumento = document.getElementById('input_fecha_expedicion_documento').value;
    let juegos = document.getElementById('input_juegos').value;
    try{
        ///Estos son los metadatos
        let fetchConfig ={
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({
                nombre: nombre,
                numeroDocumento: numeroDocumento,
                tipoDocumento: tipoDocumento,
                fechaExpedicionDocumento: fechaExpedicionDocumento,
                email: email,
                fechaRegistro: fechaRegistro,
                
                juegos: juegos,
            }),
        }

        let urlApi = "https://nodejs-production-9c7b.up.railway.app/api/usuario/actualizarUsuario"; 
        ///Aca disparo el fetch
        let response = await fetch(urlApi, fetchConfig);
        console.log("🚀 ~ actualizar ~ response:", response.status)
        
        //si la respuesta es ok, parceo el JSON y la devuelvo
        if (!response.ok){
            swal.fire ("El usuario no fue actualizado", "", "error");
            throw new Error("HTTP error! status:  ${response.status}");
            
        } else if (response.ok){
            swal.fire ("Usuario actualizado", "", "success"); 
        }
    }
    catch(e){
        console.log(e);
        //en este bloque captura los errores
        swal.fire ("Falla tecnica", "contacte a sistemas", "error");
        
    }
}
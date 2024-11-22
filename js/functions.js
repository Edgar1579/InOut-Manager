function submitForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById("inputNombre").value;
    const telefono = document.getElementById("inputTelefono").value;
    const email = document.getElementById("inputEmail").value;
    const select = document.getElementById("inputSelect").value;
    const mensaje = document.getElementById("inputMensaje").value;

    // Verifica si los campos están vacíos
    if (nombre === "" || telefono === "" || email === "" || select === "" || mensaje === "") {
        Swal.fire({
            icon: "error",
            title: "Por favor, completa todos los campos",
            text: "",
        });
    } else {
        // Muestra un Sweet Alert de éxito
        Swal.fire({
            icon: "success",
            title: "Datos de contacto enviados correctamente",
            text: "Gracias por dejarnos tu mensaje.",
        }).then(() => {
            // Muestra los valores en la consola después de que el usuario cierra el Sweet Alert
            console.log(`Nombre: ${nombre}`);
            console.log(`Teléfono: ${telefono}`);
            console.log(`Email: ${email}`);
            console.log(`Dependencia: ${select}`);
            console.log(`Mensaje: ${mensaje}`);

            // Limpiar los campos del formulario
            document.getElementById("inputNombre").value = "";
            document.getElementById("inputTelefono").value = "";
            document.getElementById("inputEmail").value = "";
            document.getElementById("inputSelect").value = "";
            document.getElementById("inputMensaje").value = "";

            // Mensaje final
            Swal.fire({
                icon: "success",
                title: "Estamos atentos",
                text: "Pronto nos contactaremos.",
            });
        });
    }
    return false; // Puedes mantener esto si necesitas que el formulario no se envíe de verdad
}
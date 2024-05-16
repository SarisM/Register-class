import {registrar} from "./session.js";


const render = () => {
    const registro= document.querySelector("#registro");

    registro.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const correo = e.target.correo.value;
        const contraseña = e.target.contraseña.value;
        const confirmarContraseña = e.target.confirmarContraseña.value;

        try {
            registrar(correo, contraseña, confirmarContraseña);
            alert("Usuario registrado exitosamente");
//ahora nos redirigimos al login             
            window.location.href = "./index.html";
        } catch (error) {
            alert(error.message);
        }

    });
}

document.addEventListener("DOMContentLoaded", render);
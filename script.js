// function cartelBienvenida (){

//     alert ("Bienvenidos a EmaNath Productos")
// }


// let capturah2 = document.getElementById("especiales")

// console.log (capturah2)

// console.log (capturah2.textContent)



 let nombreCapturado = document.getElementById("inputNombre")
 let apellidoCapturado = document.getElementById("inputApellido")

 function botonNombre(){

    console.log (nombreCapturado.value)
  console.log (apellidoCapturado.value)
}


// let mainOscuro= document.getElementById("main")

// console.log (mainOscuro)

// function modoOscuro(){

//     mainOscuro.className.add("modoLuna")

// }



// function enableDark(){

//     let main_body = document.body;
//     main_body.classList.toggle("modoOscuro");
    

//    }


const boton = document.querySelector("#botonModo");

boton.addEventListener("click",() =>{
    document.body.classList.toggle("oscuro");
    boton.classList.toggle("activo");


    // ----------Guardado Local----------
    
    if (document.body.classList.contains("oscuro")){
        localStorage.setItem("darkMode" , "true")
        } else{
            localStorage.setItem("darkMode" , "false")
        }

})

if (localStorage.getItem("darkMode") == "true"){
    document.body.classList.add("oscuro");
    boton.classList.add("activo");
} else{
    document.body.classList.remove("oscuro")
    boton.classList.remove("activo");

}
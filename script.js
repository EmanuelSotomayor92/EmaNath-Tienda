// function cartelBienvenida (){

//     alert ("Bienvenidos a EmaNath Productos")
// }


// let capturah2 = document.getElementById("especiales")

// console.log (capturah2)

// console.log (capturah2.textContent)



//  let nombreCapturado = document.getElementById("inputNombre")
//  let apellidoCapturado = document.getElementById("inputApellido")

//  function botonNombre(){

//     console.log (nombreCapturado.value)
//   console.log (apellidoCapturado.value)
// }

// let nombreCapturado = document.getElementById("inputNombre")
// let apellidoCapturado = document.getElementById("inputApellido")
// // let nombreCompleto = nombreCapturado + apellidoCapturado
// // console.log (nombreCompleto.value)

// function botonNombre(nombre,apellido){
    
//     //  console.log ("Bienvenido: "+(nombreCapturado.value) + " " + (apellidoCapturado.value))
//     // alert ("Hola" + nombreCapturado + apellidoCapturado )
//     // console.log(nombreCapturado.value)
//     alert("Hola " + nombre +" "+ apellido)
//     document.write ("Hola " + nombre +" "+ apellido)
    
     
     
 
// }

// let nombreUsuario = prompt("Ingresa tu Nombre:")
// let apellidoUsario = prompt("Ingresa tu Apellido:")
// let fullName =

// botonNombre(nombreUsuario, apellidoUsario)


// function saludarUsuario() {

//     document.write("Bienvenido: "+(nombreCapturado.value) + " " + (apellidoCapturado.value))

// }

// saludarUsuario() 

// let mainOscuro= document.getElementById("main")

// console.log (mainOscuro)

// function modoOscuro(){

//     mainOscuro.className.add("modoLuna")

// }



// function enableDark(){

//     let main_body = document.body;
//     main_body.classList.toggle("modoOscuro");
    

//    }


// ---------------------Nombre de Uusario---------------------------------

// let nombreA = document.getElementById("inputA") 


// function usuario(){
     
//     console.log((nombreA.value))
//     document.getElementById("h2Usuario").textContent =(("Bienvenido ") + (nombreA.value))
    
    
// }


// ------------------------------------------------------------------------


// let h2Bienvenido = document.getElementById("h2Bienvenido")
// let inputNombre = document.getElementById("inputNombre")
// let inputApellido = document.getElementById("inputApellido")
// let usuario = document.getElementById("usuario")

// // usuario.addEventListener("click",function(){

// //     console.log(inputNombre.value)
// //     console.log(inputApellido.value)

// //     h2Bienvenido.textContent=(("Bienvenido ") + (inputNombre.value) + (" ") + (inputApellido.value))
    
// // })














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

// -----------------------------------------------------------------------------------------------------






//-------------------------------------- API-----------------------------------------------------------------


let probandoAPI = document.getElementById("probandoAPI")
console.log(probandoAPI)

let fotoAPI = document.getElementById("fotoAPI")



fetch("https://randomuser.me/api/")
.then((respuesta) => respuesta.json())
.then((datos) => {

    console.log(datos)
    console.log(datos.reults)
    console.log(datos.results[0])
    console.log(datos.results[0].name.first)

  


    datos.results.forEach(elemento => {

        console.log((elemento.name.first + (" ") + elemento.name.last))
        console.log((elemento.location.city) + (": ") + (elemento.location.country))
        console.log(elemento.picture.large)
        
        
        const contenedorAPI = document.createElement("div")

        contenedorAPI.innerHTML= `
        
        <h4> ${(elemento.name.first + (" ") + elemento.name.last)} </h4>
         
        
        <img src="${elemento.picture.large}">
       

        <h4> ${elemento.location.city + (": ") + elemento.location.country}</h4>

        
        
        `;
        

         probandoAPI.append(contenedorAPI)



    


    });


    


    



})




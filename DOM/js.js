//SELECCIONAR ETIQUETAS
//seleccionar por nombre de etiqueta
//forma nueva querySelector(); forma vieja getElementByName();

// let titulo = document.querySelector("h1"); //FORMA NUEVA, ES MEJOR USARLA
// // let titulo = document.getElementsByTagName("h1")[0]; //FORMA VIEJA
// titulo.textContent = "Hoa deesde JS";
// console.log(titulo);

//SELECCIONAR POR NOMBRE DE CLASE(.)

// let titulo = document.querySelector(".titulo"); //FORMA NUEVA
// let titulo = document.getElementsByClassName("titulo"); // FORMA VIEJA
// console.log(titulo);
// titulo[0].style.color = "red";

//SELECCIONAR POR ID (#)

// let titulo = document.querySelector("#titulo"); //FORMA NUEVA
// let titulo = document.getElementById("titulo"); //FORMA VIEJA
// titulo.style.backgroundColor = "red";

//SELECCIONAR ETIQUETA DENTRO DE OTRA

// let span = document.querySelector("h1 span");
// span.style.color = "red";

//SELECCIONAR VARIAS ETIQUETAS

// let ps = document.querySelectorAll("p");
// // for(let x = 0; x < ps.length; x++){
// //     ps[x].style.color = "red";
// // }
// ps.forEach((p)=>{
//     p.style.color = "red"
// });

//CREAR ETIQUETAS

//FORMA CORTA
// let enlace = document.createElement("a");
// enlace.textContent = "Go to youtube";
// enlace.href = "https://pornhub.com";
// enlace.target = "_blank";
// enlace.className = "enlace "
// //ETIQUETA DE REFERENCIA
// let body = document.body;
// //AGREGAR EL ENLACE AL HTML
// body.appendChild(enlace);

// //FORMA LARGA
// let enlace = document.createElement("a");
// let textoEnlace = document.createTextNode("GO TO YOUTUBE");
// enlace.appendChild(textoEnlace); //agregar texto al enlace
// enlace.setAttribute("href", "https://pornhub.com");
// enlace.setAttribute("target", "_blank");
// //etiqueta de referencia
// let body = document.body;
// body.appendChild(enlace);

// // //borrar una etiqueta
// //enlace.remve()
// //borrar un atributo que tenga una etiqueta
// // enlace.removeAttribute("href");

// //REEMPLAZAR O MODIFICAR POR UNA ETIQUETA
// let p = document.createElement("p");
// p.textContent = "Soy otro parrafo";
// enlace.replaceWith(p);

// //ubicar una etiqueta en cualquier lado
// //metodo insertBefore()
// //metodo insertAfter()
// //metodo insertAdjacentElement()

// ps[0].insertAdjacentElement("beforebegin", p);
//beforebegin es antes de el comienzo
//afterbegin es antes de la mitad
//beforeend es despues de la mitad
//afterend es en el final

// //MANIPULAR CLASES DE CSS
// let p = document.querySelector("p.parrafo1");

// //agregar una clase de css
// p.classList.add("fondo", "letra");

// //quitr una clase de css
// p.classList.remove("letra");

// //agregar o quitar clases de css
// p.classList.toggle("fondo");

// //reemplazar una clase
// p.classList.replace("fondo","enlace");

// //comprobar si existe o no una clase en la etiqueta
// let existeClase = p.classList.contains("fondo");
// console.log("la p tiene fondo: "+existeClase);
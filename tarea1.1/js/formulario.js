let jsonPersona=[
    {
        id:1,
        rut:"12.233.365-5",
        nombre:"Carlos",
        comuna:"Puente Alto"
    },
    {
        id:2,
        rut:"15.658.987-1",
        nombre:"Camilo",
        comuna:"Ñuñoa"
    },
    {
        id:3,
        rut:"18.478.156-k",
        nombre:"Omar",
        comuna:"Quilicura"
    },
    {
        id:4,
        rut:"12.233.365-5",
        nombre:"Carlos",
        comuna:"Puente Alto"
    }

];
let tabla = document.getElementById("tabPersona");
let Rut = document.getElementById("inRut");
let Nombre = document.getElementById("inNombre");
let Comuna = document.getElementById("inComuna");
let contenido = document.getElementById("contenido");


function btnAgregar(){
		jsonitem={
			rut:Rut.value,
			nombre:Nombre.value,
			comuna:Comuna.value	
		}
		jsonPersona.push(jsonitem);
		/* esta agregra una persona al presionar el boton */
        completar();
} 
	
    completar();
    
    function completar() {
	contenido.innerHTML= " ";
	for(var x = 0; x < jsonPersona.length; x++) {
	agregarfila(jsonPersona[x]);
	}
}

function agregarfila(item) {
contenido.innerHTML+=`<tr>
						<td>${item.rut}</td>
						<td>${item.nombre}</td>
						<td>${item.comuna}</td>
	  				 </tr>`
}


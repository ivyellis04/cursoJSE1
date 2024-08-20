document.addEventListener("DOMContentLoaded", function() {
    adivinaElemento();
});

const elementos = [
    { símbolo: "H", nombre: "Hidrógeno" },
    { símbolo: "He", nombre: "Helio" },
    { símbolo: "Li", nombre: "Litio" },
    { símbolo: "Be", nombre: "Berilio" },
    { símbolo: "B", nombre: "Boro" },
    { símbolo: "C", nombre: "Carbono" },
    { símbolo: "N", nombre: "Nitrógeno" },
    { símbolo: "O", nombre: "Oxígeno" },
    { símbolo: "F", nombre: "Flúor" },
    { símbolo: "Ne", nombre: "Neón" },
    { símbolo: "Na", nombre: "Sodio" },
    { símbolo: "Mg", nombre: "Magnesio" },
    { símbolo: "Al", nombre: "Aluminio" },
    { símbolo: "Si", nombre: "Silicio" },
    { símbolo: "P", nombre: "Fósforo" },
    { símbolo: "S", nombre: "Azufre" },
    { símbolo: "Cl", nombre: "Cloro" },
    { símbolo: "Ar", nombre: "Argón" },
    { símbolo: "K", nombre: "Potasio" },
    { símbolo: "Ca", nombre: "Calcio" },
    { símbolo: "Sc", nombre: "Escandio" },
    { símbolo: "Ti", nombre: "Titanio" },
    { símbolo: "V", nombre: "Vanadio" },
    { símbolo: "Cr", nombre: "Cromo" },
    { símbolo: "Mn", nombre: "Manganeso" },
    { símbolo: "Fe", nombre: "Hierro" },
    { símbolo: "Co", nombre: "Cobalto" },
    { símbolo: "Ni", nombre: "Níquel" },
    { símbolo: "Cu", nombre: "Cobre" },
    { símbolo: "Zn", nombre: "Zinc" },
    { símbolo: "Ga", nombre: "Galio" },
    { símbolo: "Ge", nombre: "Germanio" },
    { símbolo: "As", nombre: "Arsénico" },
    { símbolo: "Se", nombre: "Selenio" },
    { símbolo: "Br", nombre: "Bromo" },
    { símbolo: "Kr", nombre: "Kriptón" },
    { símbolo: "Rb", nombre: "Rubidio" },
    { símbolo: "Sr", nombre: "Estroncio" },
    { símbolo: "Y", nombre: "Itrio" },
    { símbolo: "Zr", nombre: "Zirconio" },
    { símbolo: "Nb", nombre: "Niobio" },
    { símbolo: "Mo", nombre: "Molibdeno" },
    { símbolo: "Tc", nombre: "Tecnecio" },
    { símbolo: "Ru", nombre: "Rutenio" },
    { símbolo: "Rh", nombre: "Rodio" },
    { símbolo: "Pd", nombre: "Paladio" },
    { símbolo: "Ag", nombre: "Plata" },
    { símbolo: "Cd", nombre: "Cadmio" },
    { símbolo: "In", nombre: "Indio" },
    { símbolo: "Sn", nombre: "Estaño" },
    { símbolo: "Sb", nombre: "Antimonio" },
    { símbolo: "Te", nombre: "Telurio" },
    { símbolo: "I", nombre: "Yodo" },
    { símbolo: "Xe", nombre: "Xenón" },
    { símbolo: "Cs", nombre: "Cesio" },
    { símbolo: "Ba", nombre: "Bario" },
    { símbolo: "La", nombre: "Lantano" },
    { símbolo: "Ce", nombre: "Cerio" },
    { símbolo: "Pr", nombre: "Praseodimio" },
    { símbolo: "Nd", nombre: "Neodimio" },
    { símbolo: "Pm", nombre: "Prometio" },
    { símbolo: "Sm", nombre: "Samario" },
    { símbolo: "Eu", nombre: "Europio" },
    { símbolo: "Gd", nombre: "Gadolinio" },
    { símbolo: "Tb", nombre: "Terbio" },
    { símbolo: "Dy", nombre: "Disprosio" },
    { símbolo: "Ho", nombre: "Holmio" },
    { símbolo: "Er", nombre: "Erbio" },
    { símbolo: "Tm", nombre: "Tulio" },
    { símbolo: "Yb", nombre: "Iterbio" },
    { símbolo: "Lu", nombre: "Lutecio" },
    { símbolo: "Hf", nombre: "Hafnio" },
    { símbolo: "Ta", nombre: "Tántalo" },
    { símbolo: "W", nombre: "Tungsteno" },
    { símbolo: "Re", nombre: "Renio" },
    { símbolo: "Os", nombre: "Osmio" },
    { símbolo: "Ir", nombre: "Iridio" },
    { símbolo: "Pt", nombre: "Platino" },
    { símbolo: "Au", nombre: "Oro" },
    { símbolo: "Hg", nombre: "Mercurio" },
    { símbolo: "Tl", nombre: "Talio" },
    { símbolo: "Pb", nombre: "Plomo" },
    { símbolo: "Bi", nombre: "Bismuto" },
    { símbolo: "Po", nombre: "Polonio" },
    { símbolo: "At", nombre: "Astato" },
    { símbolo: "Rn", nombre: "Radón" },
    { símbolo: "Fr", nombre: "Francio" },
    { símbolo: "Ra", nombre: "Radio" },
];

let indiceElementoActual;
let elementoActual;

function adivinaElemento(){

    indiceElementoActual = Math.floor(Math.random() * elementos.length);
    elementoActual = elementos[indiceElementoActual];

    
    let respuestaUsuario;
    do {
        respuestaUsuario = prompt("¿Cuál es el nombre del elemento con este símbolo " + elementoActual.símbolo + "?");
        respuestaUsuario = respuestaUsuario ? respuestaUsuario.trim().toLowerCase() : null; 
        if (respuestaUsuario === null) return; 
    } while (!esRespuestaValida(respuestaUsuario)); 
    verificarRespuesta(respuestaUsuario);
}

function esRespuestaValida(respuesta) {
    if (!respuesta || /[0-9]/.test(respuesta)) { 
        alert("Por favor, ingresa una respuesta válida sin números.");
        return false;
    }
    return true;
}


function verificarRespuesta(respuestaUsuario){
    if(respuestaUsuario === elementoActual.nombre.toLowerCase()){
        alert("¡Muy bien, respuesta correcta!");
        if(confirm("Querés jugar otra vez?")){
            adivinaElemento(); 
        }
    } else {
        alert("Incorrecto, era " + elementoActual.nombre + ". ¡Prueba de nuevo!");
        adivinaElemento(); // Intentar nuevamente
    }
}


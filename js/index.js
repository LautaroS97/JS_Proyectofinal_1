class Personaje {
    constructor(nombre, nacion, poderes, arma) {
        this.nombre = nombre;
        this.nacion = nacion;
        this.poderes = poderes;
        this.arma = arma;
    }
}
const personajes = [];
personajes.push(new Personaje("NARCISO", "Imperio de las Estrellas.", "Atributos de fénix.", "Guadaña de doble filo."));
personajes.push(new Personaje("LILEN", "Unión de las Cometas.", "Control de la flora.", "Arco y flecha."));
personajes.push(new Personaje("NILAK", "República de la Luna.", "Control del hielo.", "Cuchillas gemelas."));
personajes.push(new Personaje("KENIA", "Confederación del Sol.", "Control de la luz, invisibilidad.", "Lanza de marfil."));
personajes.push(new Personaje("CIRO", "Protectorado de los Meteoritos.", "Control de la arena.", "Espada curva."));
personajes.push(new Personaje("SHURA", "Zarato del Rayo.", "Campos de fuerza, magnetismo.", "Hachas arrojadizas."));


alert("Bienvenido al inventario de personajes de la novela ORBIS TERRARUM");
alert("La base de datos contiene información de los siguientes personajes : \n - CIRO \n - KENIA \n - LILEN \n - NARCISO \n - NILAK \n - SHURA");

function buscarPersonaje(info, personaje) {
    if(personaje.toUpperCase() != "ESC"){
        return info.find(objeto => objeto.nombre === personaje.toUpperCase());
    } else {
        return none;
    }
}

let consulta = buscarPersonaje(personajes, prompt('Ingrese el nombre del personaje que desee o ESC para salir'));
    if(consulta != undefined) {
    alert(`${consulta.nombre}\n NACIÓN: ${consulta.nacion}\n PODERES: ${consulta.poderes}\n ARMA: ${consulta.arma}`);
    } else {
    alert("No existe ese personaje, intente de nuevo.");
}

while (consulta != "ESC") {
    consulta = buscarPersonaje(personajes, prompt('Ingrese el nombre del personaje que desee o ESC para salir'));
    if(consulta != undefined) {
        alert(`${consulta.nombre}\n NACIÓN: ${consulta.nacion}\n PODERES: ${consulta.poderes}\n ARMA: ${consulta.arma}`);
    } else {
        alert("No existe ese personaje, intente de nuevo.");
    }
}
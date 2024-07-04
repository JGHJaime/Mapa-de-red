const coches = require('./coches.json');
//console.log(coches[0]);
let imprimir = (coche) => {
console.log("------------------------------")
console.log(coche.marca)
console.log(coche.modelo)
console.log("Nombre: " + coche.modelo)
console.log("Marca: " + coche.marca)
console.log("Color: " + coche.color)
console.log("Año: " + coche.año)
}
imprimir(coches[0]);

coches.forEach(coche => {
        imprimir(coche)
    }
)




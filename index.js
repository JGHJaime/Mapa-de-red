const fs = require("node:fs");

const FILENAME = "mapa-de-red.json";

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const parametrosRed = {
  wifi: "wifiArriba",
  red: "192.168.1.0",
  mask: "255.255.255.0",
  enlace: "192.168.1.1",
  dns: ["8.8.8.8", "8.8.4.4", "1.1.1.1"],
};

nuestraRed = [];

personas = [
  "Jaime",
  "Vivi",
  "Chris",
  "Cristian",
  "Yessi",
  "Debbie",
  "Nico",
  "Hermes",
  "StabboDaKrabbo",
  "JuanRa",
  "Aarón",
  "Abel (given name)",
  "Abelardo",
  "Abraham (given name)",
  "Abundio",
  "Adalberto",
  "Adan (given name)",
  "Ademar",
  "Adrià",
  "Adrian",
  "Adriano",
  "Afonso",
  "Agapito",
  "Agripino",
  "Agustín",
  "Alberto",
  "Alejandro",
  "Alfredo",
  "Alonso",
  "Alphons",
  "Álvaro",
  "Amado",
  "Amador (name)",
  "Amancio",
  "Americo",
  "Amílcar",
  "Anacleto",
  "Andres (name)",
  "Angel (given name)",
  "José Ángel (given name)",
  "Aníbal",
  "Antero",
  "Antonin (name)",
  "Antonio",
  "Apolinar",
  "Apolinario",
  "Arcadio",
  "Armando (given name)",
  "Arnaldo",
  "Arnulfo",
  "Arsenio",
  "Arturo",
  "Atanasio",
  "Augusto",
  "Aurelio",
  "Aznar",
  "B",
  "Baldomero",
  "Balthazar (given name)",
  "Bartolo (given name)",
  "Bartolomé",
  "Benito (name)",
  "Benjamin (name)",
  "Bernabé",
  "Bernardo",
  "Beto",
  "Bonifacio (name)",
  "Borja (name)",
  "Braulio",
  "Brigido",
  "Bruno (name)",
  "C",
  "Calixto",
  "Camilo",
  "Carlito (name)",
  "Carlo (name)",
  "Carlos (given name)",
  "Carlos Alberto",
  "Carlos Eduardo",
  "Carmelo",
  "Casimiro (given name)",
  "Cayetano",
  "Cecilio",
  "Ceferino",
  "Celedonio",
  "Cesar",
  "Cesario",
  "Charli (name)",
  "Cipriano (given name)",
  "Claudio",
  "Clemente",
  "Climaco",
  "Cornelio",
  "Corsino",
  "Crisologo",
  "Cristhian",
  "Cristian",
  "Cristóbal",
  "Cuauhtémoc",
  "D",
  "Danilo",
  "Dámaso",
  "Damián",
  "Daniel (given name)",
  "Dante (name)",
  "Dario",
  "David (name)",
  "Delfino (name)",
  "Diego",
  "Diosdado",
  "Domingo (name)",
  "Donaldo",
  "E",
  "Edgardo",
  "Edmundo",
  "Eduardo",
  "Efraín",
  "Eladio",
  "Elbio",
  "Elias",
  "Eligio",
  "Eliseo",
  "Eloy (given name)",
  "Elpidio",
  "Emanuel (name)",
  "Emiliano",
  "Emilio (given name)",
  "Enrique",
  "Enzo",
  "Ernesto",
  "Estanislau",
  "Esteban",
  "Esterio",
  "Eugenio",
  "Ezequiel",
  "F",
  "Fabio",
  "Fabricio",
  "Faustino (name)",
  "Fausto",
  "Federico",
  "Feliciano (name)",
  "Felipe",
  "Felix (name)",
  "Fermin (name)",
  "Fernando",
  "Fernando José",
  "Fidel (given name)",
  "Filemón",
  "Filomeno",
  "Flavio (name)",
  "Florencio",
  "Florentin",
  "Floriano",
  "Francisco",
  "Fulgencio",
  "G",
  "Gabriel (given name)",
  "Gamaliel (disambiguation)",
  "Gaspar",
  "Gavino",
  "Genaro (given name)",
  "Genovevo",
  "Gerardo",
  "Germán",
  "Geronimo (name)",
  "Gilberto",
  "Ginés",
  "Gonzalo (name)",
  "Graciano (disambiguation)",
  "Gregorio",
  "Guido",
  "Guillermo",
  "Gustavo",
  "Gutierre",
  "H",
  "Hector (given name)",
  "Heriberto",
  "Herminio",
  "Hermogenes",
  "Hernán",
  "Hernándo",
  "Higinio",
  "Hilario",
  "Hipólito",
  "Hiro (given name)",
  "Horacio",
  "Huáscar (given name)",
  "Hugo (name)",
  "Humberto",
  "I",
  "Ignacio",
  "Inigo",
  "Isaac (name)",
  "Isaias (given name)",
  "Isidoro",
  "Isidro",
  "J",
  "Jacinto",
  "Jaime",
  "Jairo",
  "Javier (name)",
  "Jerónimo (name)",
  "Jesus (name)",
  "Jhon",
  "Jimeno",
  "Joaquín",
  "Joel (given name)",
  "Jorge",
  "José",
  "José Carlos",
  "José Enrique",
  "José María",
  "José Ramón",
  "Juan José (given name)",
  "Josu (name)",
  "Juan",
  "Juanfran",
  "Juanma",
];

contador = 1;
personas.forEach((persona) => {
  equipo = Object.assign(
    {
      alumno : contador,
      nombre: "PC-" + persona,
      ip: "192.168.1." + (50 + ++contador),
      password: makeid(6),
    },
    parametrosRed
  );
  nuestraRed.push(equipo);
});

fs.writeFile(FILENAME, JSON.stringify(nuestraRed, null, 4), (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

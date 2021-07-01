const chalk = require("chalk");
const { writeFile } = require("fs");

const guardarSaludo = (texto) => {
  stringSaludo = `Hola, ${texto}. Encantado de saludarte.`;
  writeFile("./textos/saludo.txt", stringSaludo, (err) => {
    if (err) {
      console.log(
        chalk.red.bold("Ha habido un error, cerrando el programa...")
      );
      process.exit(1);
    }
  });
};

exports.guardarSaludo = guardarSaludo;

// module.exports = {
//   guardarSaludo,
// };

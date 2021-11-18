const {Sequelize} = require('sequelize');
require('dotenv').config();

let db = process.env.DATABASE;
let user = process.env.DATABASE_USER;
let pass = process.env.DATABASE_PASS;


const sequelize = new Sequelize(db, user, pass, {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate()
  console.log('Conectado com sucesso')
}catch(err) {
  console.log(`Não foi possivel conectar ${err}`)
}

module.exports = sequelize
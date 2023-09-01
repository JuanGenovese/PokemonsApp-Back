require('dotenv').config();
const { Sequelize } = require('sequelize');
const pokemonModel = require("./models/Pokemon");
const typeModel = require("./models/Type");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL, DB_PORT } = process.env;


const sequelize = new Sequelize(
  DATABASE_URL,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
)


//const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
//   {logging: false}
//)


pokemonModel(sequelize);
typeModel(sequelize);


const { Pokemon, Type} = sequelize.models;


Pokemon.belongsToMany(Type,{through: "pokemonType"});
Type.belongsToMany(Pokemon, {through: "pokemonType"});

module.exports = {
   ...sequelize.models,
   sequelize,
};

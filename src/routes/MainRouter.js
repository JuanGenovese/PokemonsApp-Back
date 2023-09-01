const { Router } = require('express');
const pokemonRouter = require("./PokemonRoutes");
const typesRouter = require('./TypesRoutes');


const mainRouter = Router();


mainRouter.use("/pokemons", pokemonRouter);
mainRouter.use("/types", typesRouter )


module.exports = mainRouter;

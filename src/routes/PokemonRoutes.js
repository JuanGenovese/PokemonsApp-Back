const { Router } = require("express");
const { 
    getPokemonsHandler , 
    getPokemonsIdHandler, 
    postPokemonsHandler 
} = require("../handlers/pokemonsHandlers");


const pokemonRouter = Router();


pokemonRouter.get("/", getPokemonsHandler );
pokemonRouter.get("/:id", getPokemonsIdHandler );
pokemonRouter.post("/", postPokemonsHandler);


module.exports = pokemonRouter;
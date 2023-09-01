const { 
    getAllPokemons,
    searchPokemonByName,
    getPokemonById,
    createPokemon
} = require("../constrollers/pokemonsController");



const getPokemonsHandler = async ( req , res ) => { //funciona correctamente
    try {
        const { name } = req.query;
        const results = name ? await searchPokemonByName(name) : await getAllPokemons();

        res.status(200).json(results);
  
    } catch (error) {
        console.log(error);
        res.status(400).send( error.message )
  
    };
};



const getPokemonsIdHandler = async ( req , res ) => { //funciona correctamente
    const { id } = req.params;
    const source = isNaN( id ) ? "bdd" : "api";
    try {
        const Pokemon = await getPokemonById( id , source);
        res.status(200).json( Pokemon );
  
    } catch (error) {
      
        res.status(400).send( error.message );

    };
};





const postPokemonsHandler = async ( req , res ) => { //funciona correctamente
    const {nombre , imagen , vida , ataque , defensa , velocidad , altura , peso, tipo } = req.body;

    try {
  
       await createPokemon(nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipo);
        res.status(200).json("creado exitosamente")
  
  
    } catch (error) {
        console.log(error)
        res.status(400).send( error.message );
  
    }
};


module.exports = {
    getPokemonsHandler,
    getPokemonsIdHandler,
    postPokemonsHandler
}

const { 
    getTypes
} = require("../constrollers/typeControllers");



const getTypesHandler = async ( req , res ) => {
    try {

        const allTypes = await getTypes();
        
        res.status(200).json(allTypes);

    } catch (error) {
        console.log(error)
        res.status(400).send( error.message );
  
    }
};

module.exports = {
    getTypesHandler
}
const { Type } = require("../db");
const axios = require("axios");

const cleanArray = (arr) => {
    arr.map(elem => {
        return {
            id: elem.id,
            tipo: elem.tipo
        }
    })
}  


const getTypes = async () => {
    let allTypes = await Type.findAll();
        
    if(allTypes.length === 0){
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        const typesAPI = response.data.results.map(type => type.name);
        
        for(const type of typesAPI) {
            await Type.create({tipo: type});
        }

        allTypes = await Type.findAll();

    }
    return allTypes;

}


module.exports = {
    getTypes
}
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull: false
    },
    vida:{
      type: DataTypes.DECIMAL,
      allowNull: false

    },
    ataque:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    defensa:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    velocidad:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    altura:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    peso:{
      type: DataTypes.DECIMAL,
      allowNull: false
    }, 
  },{
    timestamps: false,
  }
  )};

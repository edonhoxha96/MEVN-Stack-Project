var bcrypt = require("bcrypt");

module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Costumer',
    {
      id:{
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      firstName:{
          type: type.STRING,
          allowNull: false
      },
      lastName:{
          type: type.STRING,
          allowNull: false
      },
      email:{
          type: type.STRING,
          allowNull: false
      },
      password:{
          type: type.STRING,
          allowNull:false
      },
      address:{
          type: type.STRING,
          allowNull: false
      },
      phone:{
          type: type.STRING
      },
      bank:{
          type: type.STRING,
          allowNull: false
      }
    }
  )
}

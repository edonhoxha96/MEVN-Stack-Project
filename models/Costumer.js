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
          type: type.STRING,
          allowNull: false
      }
    },
    {
        hooks:{
            beforeCreate: async function(user, options) {
                const salt = await bcrypt.genSalt(10); //whatever number you want
                user.password = await bcrypt.hash(user.password, salt);
            }
          },
          instanceMethods:{
              validPassword:async function (password){
                return await bcrypt.compare(password, this.password);
              }
          } 
    }
  )
}

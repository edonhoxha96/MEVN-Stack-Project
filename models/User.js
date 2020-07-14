const Role = require('./Role')
const Store = require('./Store')

module.exports = (sequelize, type) => { 
    return sequelize.define(
    'User',
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
        }
    }
  )
}

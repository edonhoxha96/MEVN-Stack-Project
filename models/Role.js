module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Role',
    {
      id:{
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      name:{
          type: type.STRING,
          allowNull: false
      }
    }
  )
}
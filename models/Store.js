module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Store',
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
      },
      logo:{
          type: type.BLOB
      }
    }
  )
}
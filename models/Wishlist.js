module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Wishlist',
    {
      id:{
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      }
    }
  )
}

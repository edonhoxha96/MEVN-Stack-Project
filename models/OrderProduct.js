// const Order = require('./Order')
// const Product = require('./Product')

module.exports = (sequelize, type) => { 
  return sequelize.define(
  'OrderProducts',
  {
    id:{
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    OrderId:{
        type: type.INTEGER,
        references: {
          model: 'Orders',
          key: 'id'
        },
        allowNull: false
    },
    ProductId:{
      type: type.INTEGER,
      references: {
        model: 'Products',
        key: 'id'
      },
      allowNull: false
    }
  }
)
}

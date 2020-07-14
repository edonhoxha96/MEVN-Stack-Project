const Order = require('./Order')
const Product = require('./Product')

module.exports = (sequelize, type) => { 
    return sequelize.define(
    'OrderProduct',
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
            model: Order,
            key: 'id'
          },
          allowNull: false
      },
      ProductId:{
        type: type.INTEGER,
        references: {
          model: Product,
          key: 'id'
        },
        allowNull: false
      }
    }
  )
}

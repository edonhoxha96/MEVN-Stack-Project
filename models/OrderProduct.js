const Order = require('./Order')
const Product = require('./Product')

module.exports = (sequelize, type) => { 
    return sequelize.define(
    'OrderProduct',
    {
      OrderId:{
          type: type.INTEGER,
          references: {
            model: Order,
            key: 'id'
          }
      },
      ProductId:{
        type: type.INTEGER,
        references: {
          model: Product,
          key: 'id'
        }
      }
    }
  )
}

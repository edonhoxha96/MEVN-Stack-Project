const Costumer = require('./Costumer')
const Product = require('./Product')

module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Wishlist',
    {
      CostumerId:{
          type: type.INTEGER,
          references: {
            model: Costumer,
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

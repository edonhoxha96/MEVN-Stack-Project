// const Costumer = require('./Costumer')
// const Product = require('./Product')

module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Wishlist',
    { 
      id:{
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      CostumerId:{
          type: type.INTEGER,
          references: {
            model: 'Costumers',
            key: 'id'
          }
      },
      ProductId:{
        type: type.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        }
      }
    }
  )
}

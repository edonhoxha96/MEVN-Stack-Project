module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Order',
    {
      id:{
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      shippingAddress:{
          type: type.STRING,
          allowNull: false
      },
      totalPrice:{
          type: type.DOUBLE,
          allowNull: false
      },
      date:{
          type: type.DATE,
          allowNull: false
      },
      status:{
          type: type.ENUM('New','Hold', 'Shipped', 'Delivered', 'Closed')
      }
    }
  )
}
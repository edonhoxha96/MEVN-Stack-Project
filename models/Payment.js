const Order = require('./Order')

module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Payment',
    {
      id:{
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      bankNumber:{
          type: type.STRING
      },
      totalPrice:{
          type: type.DOUBLE,
          allowNull: false
      },
      paymentMethod:{
        type: type.ENUM('Cash','Online')
      },
      status:{
          type: type.ENUM('Done','Pending', 'Failed')
      }
    }
  )
}
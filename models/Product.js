module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Product',
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
      image:{
        type: type.STRING,
        allowNull: false
    },
      price:{
          type: type.DOUBLE,
          allowNull: false
      },
      color:{
          type: type.STRING
      },
      size:{
          type: type.STRING
      },
      rating:{
        type: type.STRING
      },
      stock:{
        type: type.STRING
      },
      brand:{
          type: type.STRING,
          allowNull: false
      }
  
    }
  )
}
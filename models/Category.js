    

    module.exports = (sequelize, type) => { 
    return sequelize.define(
    'Category',
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
      subcategories:{
          type: type.STRING
        //   get() {
        //     return this.getDataValue('subcategories').split(';')
        //   },
        //   set(val) {
        //    this.setDataValue('subcategories',val.join(';'));
        // },
      }
    }
  )
} 

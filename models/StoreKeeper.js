module.exports = (sequelize, type) => { 
    return sequelize.define(
    'StoreKeeper',
    {
      id:{
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      firstName:{
          type: type.STRING,
          allowNull: false
      },
      lastName:{
          type: type.STRING,
          allowNull: false
      },
      email:{
          type: type.STRING,
          allowNull: false
      },
      password:{
          type: type.STRING,
          freezeTableName: true,
          instanceMethods: {
              generateHash(password) {
                  return bcrypt.hash(password, bcrypt.genSaltSync(8));
              },
              validPassword(password) {
                  return bcrypt.compare(password, this.password);
              }
          },
          allowNull:false
      }
    }
  )
}
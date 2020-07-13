module.exports = (sequelize, type) => {
  return sequelize.define(
    'Category',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: type.STRING,
        allowNull: false
      },
      parentId: {
        type: type.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }
      }
    }
  )
} 

const Sequelize = require('sequelize')
const sequelize = new Sequelize('emall', 'sa', 'databaza', {
    host: 'localhost',
    dialect: 'mssql',
  })

  

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Category=  sequelize.define(
  'category',
  {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    subcategories:{
        type: Sequelize.STRING,
        get() {
          return this.getDataValue('subcategories').split(';')
        },
        set(val) {
         this.setDataValue('subcategories',val.join(';'));
      },
    }
  }
)  

const Product=  sequelize.define(
  'product',
  {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    color:{
        type: Sequelize.STRING
    },
    size:{
        type: Sequelize.STRING
    },
    brand:{
        type: Sequelize.STRING,
        allowNull: false
    }

  }
)

const Store=  sequelize.define(
  'store',
  {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    logo:{
        type: Sequelize.BLOB
    }
  }
)

const Costumer=  sequelize.define(
  'Costumer',
  {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
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
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false
    }
  }
) 

const Administrator=  sequelize.define(
  'Administrator',
  {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
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

const StoreKeeper=  sequelize.define(
  'StoreKeeper',
  {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
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

const Wishlist=  sequelize.define(
  'Wishlist',
  {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
  }
)

const Order=  sequelize.define(
  'Order',
  {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    shippingAddress:{
        type: Sequelize.STRING,
        allowNull: false
    },
    totalPrice:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    date:{
        type: Sequelize.DATE,
        allowNull: false
    },
    status:{
        type: Sequelize.ENUM('New','Hold', 'Shipped', 'Delivered', 'Closed')
    }
  }
) 

Product.belongsTo(Category)
Product.hasMany(Store)
Store.hasOne(StoreKeeper)
Costumer.hasOne(Wishlist)
Wishlist.belongsToMany(Product,{through: 'ProductWishlist'})
Costumer.hasOne(Order)
Order.belongsToMany(Product,{through: 'OrderProduct'})

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`);

Category.bulkCreate([
    { name: 'Sport', subcategories: 'Basketball' },
    { name: 'Technology', subcategories: 'Laptops' },
    { name: 'Clothes', subcategories: 'Men' }
  ]).then(function() {
    return Category.findAll();
  }).then(function(notes) {
    console.log(notes);
  });
})
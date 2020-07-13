const Sequelize = require('sequelize')
const AdministratorModel = require('../models/Administrator')
const CostumerModel = require('../models/Costumer')
const CategoryModel = require('../models/Category')
const OrderModel = require('../models/Order')
const ProductModel = require('../models/Product')
const StoreModel = require('../models/Store')
const StoreKeeperModel = require('../models/StoreKeeper')
const WishlistModel = require('../models/Wishlist')
const OrderProductModel = require('../models/OrderProduct')
const PaymentModel = require('../models/Payment')
const ReviewModel = require('../models/Review')



const sequelize = new Sequelize('emall', 'sa', '1234', {
    host: 'localhost',
    dialect: 'mssql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const Administrator = AdministratorModel(sequelize, Sequelize)
const Costumer = CostumerModel(sequelize, Sequelize)
const Category = CategoryModel(sequelize, Sequelize)
const Order = OrderModel(sequelize, Sequelize)
const Product = ProductModel(sequelize, Sequelize)
const Store = StoreModel(sequelize, Sequelize)
const StoreKeeper = StoreKeeperModel(sequelize, Sequelize)
const Wishlist = WishlistModel(sequelize, Sequelize)
const OrderProduct = OrderProductModel(sequelize, Sequelize)
const Payment = PaymentModel(sequelize, Sequelize)
const Review = ReviewModel(sequelize, Sequelize)


Product.belongsTo(Category)
Product.belongsTo(Store)
StoreKeeper.belongsTo(Store)
Costumer.belongsToMany(Product,{through: 'Wishlist'})
Order.belongsTo(Costumer)
Order.belongsToMany(Product,{through:'OrderProduct'})
Product.belongsToMany(Order,{through:'OrderProduct'})
Costumer.belongsToMany(Product,{through:'Review'})
Product.belongsToMany(Costumer,{through:'Review'})
Payment.belongsTo(Order)



sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`);
})

module.exports = {
  Administrator,
  Product,
  Category,
  Costumer,
  Order,
  Store,
  StoreKeeper,
  Wishlist,
  OrderProduct,
  Payment,
  Review
}
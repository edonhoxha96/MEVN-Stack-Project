<template>
<div>
    <div>
    <btn btnColor="btn btn-small btn-info btn-popup"
         :cartIcon="true"
         @click.native="showPopupCart()">
         Cart
        <span class="btn-circle" v-if="hasProduct()">
           {{ getProductsInCart.length }}
        </span>
      </btn>
      <transition name="appear">
        <popupcart class="cart" v-if="getPopupCart"/>
      </transition>
      <transition name="leave">
      <router-view></router-view>
    </transition>
    <maskBg v-if="getPopupCart" @click.native="showPopupCart()"/>
    </div>    
    <ul class="listOfProducts">
        <li v-for="(product, index) in products" :key="index" class="product">
        <img :src="getPath(product.image)" alt="">
        <router-link to="/product-details">
            <h2 class="product-name" @click="addCurrentProduct(product)">
            {{ product.name }}
            </h2>
        </router-link>
        <div class="product-price">
          <div v-if="product.oldPrice == null">
            <span>€ {{ product.price }}</span>
          </div>
          <div v-else>
            <span style="color:green;">€ {{ product.price }}</span>
            <span style="color:red; text-decoration: line-through;">€ {{ product.oldPrice }}</span>
          </div>
              <span>Stock: {{product.stock}} </span>
        </div>
        <div v-if="product.stock > 0">
        <btn btnColor="btn btn-large btn-sucess"
            :cartIcon="true"
            @click.native="addProductToCart(product)">
            Add to cart
        </btn>
        </div>
        <div v-else>
          <btn btnColor="btn btn-large btn-secondary">Out of stock</btn>
        </div>
        </li>
    </ul>
</div>    
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import btn from '@/components/Btn';
import popupcart from '@/components/Popupcart';
import maskBg from '@/components/Mask';

export default {
  components: {
    btn,
    popupcart,
    maskBg
  },
  mounted(){
      console.log(this.products)
      if((this.products.length == 0)){
        this.$store.dispatch('loadProducts')
      }
  },
  computed:{
    ...mapGetters([
      'getProductsInCart',
      'getPopupCart',
    ]),
    ...mapState([
      'products'
    ])
  },
  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenPopupCart',
      'currentProduct',
      'removeStock'
    ]),
    addProductToCart(product) {
      this.removeFromStock(product.id)
      this.addProduct(product);
    },
    removeFromStock(id){
      this.removeStock(id)
    },
    getPath(picturepath){
        if(picturepath == null) {
          return
        }
        return require(`../assets/${picturepath}`)
    },
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  }
};
</script>

<style scoped>
    img{
        width:300px;
        height:200px;
    }
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }
  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
  }
  .product-name {
    font-size: 1.2em;
    font-weight: normal;
  }
  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }

    .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }
  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<template>
  <div class="product-box">
    <div class="product-image">
      <img :src="getPath(product.image)" alt="">
      <stars :rate="rated(product.rating)" :totalReviews="product.rating"/>
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ product.name }}</h2>
      <span class="product-price">R$ {{ product.price }}, 00</span>
      <div v-if="product.stock > 0">
      <btn btnColor="btn btn-large btn-sucess" :cartIcon="true"
      @click.native="addProductToCart(product)">
        Buy Now
      </btn>
      </div>
      <div v-else>
          <btn btnColor="btn btn-large btn-secondary">Out of stock</btn>
      </div>
      <btn btnColor="btn btn-large btn-info"
          @click.native="openModal()">
        More Info
      </btn>
    </div>
    <modal>{{ product.description }}</modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import btn from './Btn';
import stars from './Stars';
import modal from './Modal';
export default {
  components: {
    btn,
    stars,
    modal,
  },
  data(){
    return{
      product: {}
    }
  },
  computed: {
    ...mapState([
      'products'
    ]),
  },
  created(){
    this.product = this.products.find(p => p.id == this.$route.params.id)
  },
  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
      this.$router.push('cart-checkout')
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },
    getPath(picturepath){
        if(picturepath == null) {
          return
        }
        return require(`../assets/${picturepath}`)
    },
  },
};
</script>

<style scoped>
  .product-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  img {
    width: 300px;
  }
  .product-info {
    width: 400px;
    align-self: flex-start;
  }
  .product-title {
    font-weight: normal;
  }
  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }
  .product-box button {
    width: 300px;
    margin: .3em 0;
  }
</style>
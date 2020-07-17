<template>
  <div>
    <div class="product-box">
      <div class="product-image">
        <img :src="getPath(currentProduct.image)" alt="">
        <stars :rate="rated(currentProduct.rating)" :totalReviews="currentProduct.rating"/>
      </div>
      <div class="product-info">
        <h2 class="product-title">{{ currentProduct.name }}</h2>
        <span class="product-price">€ {{ currentProduct.price }}</span>
        <div v-if="currentProduct.stock > 0">
        <btn btnColor="btn btn-large btn-sucess" :cartIcon="true"
        @click.native="addProductToCart(currentProduct)">
          Buy Now
        </btn>
        </div>
        <div v-else>
            <btn btnColor="btn btn-large btn-secondary">Out of stock</btn>
        </div>
        <div v-if="loggedIn">
        <btn btnColor="btn btn-large btn-info"
            @click.native="addToWishlist(currentProduct.id)">
          Add to Wishlist
        </btn>
        </div>
        <div v-else>
            <btn btnColor="btn btn-large btn-secondary">Add to Wishlist</btn>
        </div>
      </div>
    </div>
    <h2>Leave a Review:</h2>
    <div v-if="loggedIn">
      <form @submit="postReview">
        <textarea v-model="review" name="test" cols="50" rows="5"></textarea>
        <input type="submit" id="submit" class="btn btn-secondary btn-block" value="Post Review">
      </form>
    </div>
    <h2>Reviews:</h2>
    <div v-for="revs in reviews" :key="revs.id">
        <div>
          <p>{{revs.productReview}}</p>
        </div>
    </div>
  </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import btn from './Btn';
import stars from './Stars';

export default {
  components: {
    btn,
    stars,
  },
  data(){
    return{
      reviews:[],
      review:''
    }  
  },
  created(){
    console.log(this.currentProduct.id)
    axios.get(`http://localhost:3000/emall/api/reviews/${this.currentProduct.id}`)
    .then(response => {
      console.log(response)
      this.reviews = response.data
    }).catch(err => console.log(err))
  },
  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
      userId: 'getUserId',
      loggedIn: 'isLoggedIn'
    }),
  },
  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal',
      'removeStock'
    ]),
    addProductToCart(product) {
      this.removeStock(product.id)
      this.addProduct(product);
      this.$router.push('cart-checkout')
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },
    addToWishlist(productId){
      var newListItem = {
        CostumerId: this.userId,
        ProductId: productId 
        }
      axios.post(`http://localhost:3000/emall/api/wishlists`, newListItem)
      .then(response => console.log(response))
      .catch(err => console.log(err))
    },
    getPath(picturepath){
        if(picturepath == null) {
          return
        }
        return require(`../assets/${picturepath}`)
    },
    postReview(evt){
      evt.preventDefault()
      var rev = {
        productReview: this.review,
        CostumerId: this.userId,
        ProductId: this.currentProduct.id
      }
      
      axios.post(`http://localhost:3000/emall/api/reviews`, rev)
      .then(response => console.log(response))
      .catch(err => console.log(err))
    },
    loadReviews(){
      axios.get(`http://localhost:3000/emall/api/reviews/${this.currentProduct.id}`)
        .then(response => {
        console.log(response)
        this.reviews = response.data
      }).catch(err => console.log(err))
    }
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
  #submit {
    width: 200px;
    height: 50px;
    font-size: 100%;
    margin-left: 20px;
    color:white;
    background-color:#2EA169;
    font-weight: bold;
  }
</style>
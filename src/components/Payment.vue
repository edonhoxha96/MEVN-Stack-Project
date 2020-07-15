<template>
  <div class="container">
    <h1>Pagesa</h1>
    <hr />
    <form @submit="onSubmit">
      <div class="form-group">
        <input class="form-control" type="text" id="title" placeholder="shipping address(optional)" v-model="order.shippingAddress"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="date" id="title" placeholder="date" v-model="order.date"/>
      </div>
      <label for="paymentMethod">Menyra Pageses</label>
          <select name="paymentMethod" v-model="payment.paymentMethod" >
            <option value = "Cash">Cash</option>
            <option value = "Online">Online</option>
          </select>
      <div class="form-group" v-if="payment.paymentMethod == 'Online'">
        <input class="form-control" type="text" id="title" placeholder="bank" v-model="payment.bankNumber"/>
      </div>    
      <span>Total: $ {{ totalPrice() }}, 00</span>
      <!-- <div class="form-group">
          <label for="">Parent Category</label>
          <select name="category/subcategory" v-model="category.parentId" >
            <option v-for="category in categories" :key="category.id" :value = "category.id">{{category.name}}</option>
          </select>
      </div> -->
      <br/>
      <input type="submit" id="submit" class="btn btn-secondary btn-block" value="Pay">
    </form>
    <br/>  
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters, mapState, mapActions} from 'vuex'

export default {
  name: 'Payment',
  components:{
  },
  data(){
    return {
      order:{},
      payment:{}
    }
  },
  computed:{
      ...mapGetters([
      'getProductsInCart',
      'getUserId'
    ]),
    ...mapState([
      'products'
    ])
  },
  methods:{
    ...mapActions([
      'removeProduct'
    ]),
    async onSubmit (evt) {
      evt.preventDefault()
      this.order.totalPrice = this.totalPrice()
      this.order.status = 'New'
      this.order.CostumerId = this.getUserId
      await axios.post('http://localhost:3000/emall/api/orders', this.order)
      .then(response => {
          this.payment.OrderId= response.data.id
      })
      var productsordered = this.getProductsInCart
      productsordered.forEach(async element => {
          var ord = {OrderId: this.payment.OrderId, ProductId: element.id}
          await axios.post('http://localhost:3000/emall/api/orderproducts', ord)
          .then(response => {console.log(response)})

          var product = this.products.find(p => p.id == element.id)
          await axios.put(`http://localhost:3000/emall/api/products/update/${product.id}`, product)
          .then(response => {
            console.log(response)
            })
          var objIndex = this.getProductsInCart.findIndex(obj => obj.id = element.id)
          await this.remove(objIndex)
      });
      
      this.payment.totalPrice = this.totalPrice()
      this.payment.status = 'Done'
      await axios.post('http://localhost:3000/emall/api/payments', this.payment)
      .then(response => {
          console.log(response)
      }) 
      
      alert('Falemnderit!')
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.price, 0);
    },
    async remove(id) {
      await this.removeProduct(id);
    },
  }
}

</script>

<style scoped>
    div {
    color: inherit;
    }
    input {
    width: 400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
    }
    #submit {
    width: 400px;
    height: 75px;
    font-size: 100%;
    margin-left: 20px;
    color:white;
    background-color:#2EA169;
    font-weight: bold;
    }
    .container{
        align-self: center;
    }
    h1{
        margin-left:150px
    }
</style>
var eventBus = new Vue()

Vue.component('product', {
    props: {
        logged: {
            type: Boolean,
            requiered: true
        }
    },
    template: `
    <div class="product">

    <div class="product-image">
      <img v-bind:src="image">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <h1>{{ product }}</h1>
      <p> {{ description }} </p>
      <a :href="link" target="_blank"> More products like this</a>
     
      <p v-show="inStock">Available in stock</p>
      <p v-show="!inStock">Out of stock</p>
      <p>User {{ shipping }}</p>


      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      
  
      <div v-for="(variant, index) in variants" 
      :key="variant.variantId"
      class="color-box"
      :style="{ backgroundColor: variant.variantColor }"
      @mouseover="updateProduct(index)">
      </div>
      <button v-on:click="addToCart"
      :disabled="!inStock"
      :class="{ disabledButton: !inStock}"      
      
      >Add to Cart</button>

      <button v-on:click="subToCart"
      :disabled=" cart <= 0"
      :class="{ disabledButton: cart <= 0}"
      
      >Subtract from Cart</button> 

    </div>

    <product-tabs :reviews="reviews"></product-tabs>


  </div>
  `,
    data() {
        return {
            brand: 'Product',
            product: 'Laptop',
            description: 'Best gaming laptop',
            selectedVariant: 0,
            link: 'https://gjirafamall.com',
            details: ["Amd ryzen 5", "16 GB RAM"],
            variants: [
                {
                    variantId: 1,
                    variantColor: "Grey",
                    variantImage: './images/laptop_2.jpg',
                    variantQuantity: 12
                },
                {
                    variantId: 2,
                    variantColor: "Silver",
                    variantImage: './images/laptop_3.jpg',
                    variantQuantity: 0


                }
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        subToCart() {
            this.$emit('sub-to-cart', this.variants[this.selectedVariant].variantId)

        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index);
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.logged) {
                return "logged in"
            }
            return "is not logged in"
        }
    },
    // Mounted - life cycle hook. Place to put code that you want to run 
    // as soon as the component is mounted to the DOM. 
    mounted() {
        eventBus.$on('review-submitted', productReview => {
          this.reviews.push(productReview)
        })
      }
  })


  Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">

    <p>
      <label for="name">Name:</label>
      <input class="name" v-model="name">
    </p>
    
    <p>
      <label for="review">Review:</label>      
      <textarea class="review" v-model="review"></textarea>
    </p>
    
    <p>
      <label for="rating">Rating:</label>
      <select class="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>
        
    <p>
      <input type="submit" value="Submit">  
    </p>    
  
   </form>
    `,
    data() {
      return {
        name: null,
        review: null,
        rating: null,
        errors: []
      }
    },
    methods: {
      onSubmit() {
        this.errors = []
        if (this.name && this.review && this.rating) {
          let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating
          }
          eventBus.$emit('review-submitted', productReview)
          this.name = null
          this.review = null
          this.rating = null
        }
        else {
          if(!this.name) this.errors.push("Name required.")
          if(!this.review) this.errors.push("Review required.")
          if(!this.rating) this.errors.push("Rating required.")
        }
      }
    }
  })

  Vue.component('product-tabs', {
    props: {
      reviews: {
        type: Array,
        required: false
      }
    },
    template: `
      <div>
      
        <div>
          <span class="tabs" 
                :class="{ activeTab: selectedTab === tab }"
                v-for="(tab, index) in tabs"
                :key="index"
                @click="selectedTab = tab"
          >{{ tab }}</span>
        </div>

        <div v-show="selectedTab === 'Reviews'">
            <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul v-else>
                <li v-for="review in reviews">
                  <p>{{ review.name }}</p>
                  <p>Rating:{{ review.rating }}</p>
                  <p>{{ review.review }}</p>
                </li>
            </ul>
        </div>

        <div v-show="selectedTab === 'Make a Review'">
          <product-review></product-review>
        </div>
    
      </div>
    `,
    data() {
      return {
        tabs: ['Reviews', 'Make a Review'],
        selectedTab: 'Reviews'
      }
    }
  })


var app = new Vue({
    el: '#app',
    data: {
        logged: true,
        cart: []
    },
    methods: {
        addCart(id) {
            this.cart.push(id)
        },
        subCart(id) {
            for (var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
})

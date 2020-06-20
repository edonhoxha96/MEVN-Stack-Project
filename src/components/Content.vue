<script>
export default {
  data() {
    return {
      title: "This is from vue.js"
    };
  },

  methods: {
      pressed (){
          alert('pressed')
      }
  },

  render(h) {
    return (
        <div>
            hello from JSX 
            <h1>{this.title}</h1>
            <button class="button" on-click={this.pressed}>Press me</button>
        </div>
    )
  }
};
</script>

<style lang="scss" scoped>
.button{
    color: red;
    background-color: white;
}
</style>
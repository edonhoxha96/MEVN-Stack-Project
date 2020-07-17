<script>
export default {
  data() {
    return {
      title: "This is from vue.js"
    };
  },

  methods: {
    pressed() {
      alert("This is a short parapgraph telling that the react framework is being used on this page as well as vue, and this is happening through eslint");
    }
  },

  render() {
    return (
      <div>
        <h2>{this.title}</h2>
        <h1>About Page</h1>
        <button class="button" on-click={this.pressed}>
          Notify me about react
        </button>
      </div>
    );
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: red;
  background-color: white;
}
</style>
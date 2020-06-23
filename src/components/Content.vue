<script>
export default {
  data() {
    return {
      title: "This is from vue.js"
    };
  },

  methods: {
    pressed() {
      alert("pressed");
    }
  },

  render(h) {
    return (
      <div>
        <h2>{this.title}</h2>
        <h1>hello from JSX</h1>
        <button class="button" on-click={this.pressed}>
          Press me
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
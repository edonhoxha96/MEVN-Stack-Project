<template>
  <footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
    />

    <div class="page-footer">
      <div class="footer">
        <div class="footer-row">
          <div class="col-md-3 col-sm-6 col-xs 12 segment-one">
            <h3>Our company!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptate, totam tenetur consequatur voluptatem repudiandae,
              officia numquam quam laudantium eius architecto blanditiis,
              corporis rem maxime illo dolor esse. Ipsum, maiores!
            </p>
          </div>
          <div class="col-md-3 col-sm-6 col-xs 12 segment-two">
            <h3>Navigate through pages!</h3>
            <ul>
              <ul>
                <router-link class="nav-link" to="/about">
                  <a>About Page</a>
                </router-link>
              </ul>
              <ul>
                <router-link class="nav-link" to="/politikat">
                  <a>Politikat e privatesis</a>
                </router-link>
              </ul>
              <ul>
                <router-link class="nav-link" to="/about">
                  <a>Kushtet e perdorimit</a>
                </router-link>
              </ul>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs 12 segment-three">
            <h3>Follow Us</h3>
            <p>Social sites where you can follow us!</p>
            <a href="https://www.facebook.com"><i class="fa fa-facebook"> </i></a>
            <a href="https://www.instagram.com"><i class="fa fa-instagram"> </i></a>
            <a href="https://www.twitter.com"><i class="fa fa-twitter"> </i></a>
          </div>
          <div class="col-md-3 col-sm-6 col-xs 12 segment-four">
            <h3>Our news</h3>
            <form action="">
              <input type="email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      title: "Webapp",
    };
  },
};
</script>

<style lang="scss" scoped>

.page-footer {
  background-color: #111;
  padding: 80px 0;
  bottom: 0%;
  position: absolute;
  font-family: Poppins;

}
.footer-row {
  display: flex;
  flex-direction: row;
}
.p {
  color: rgb(159, 156, 187);
  line-height: 25px;
  font-size: 15px;
}

h3 {
  color: #fff;
 justify-content: center;
  font-family: Poppins;
}
.segment-three a{
  padding: 10px;
  font-size: 30px;
}
.segment-two h3{
  padding-left:15%
}


</style>

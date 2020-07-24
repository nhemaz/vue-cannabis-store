<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title" style="color:white">
                  <img class="words" src="../assets/gw.png" width="200">Store (Beta)
                </h1>
                <p style="color:white">
                  This is a <strong>Beta Version </strong> of our store and so will be unstable. Functionality will be added on a stage by stage basis to bring you a seamless shopping experience.Thank you for your support.
                 
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4" href="../sections/ProductList.vue">Explore</button>
                    <!-- <button class="btn custom-btn btn-outline-secondary"  href="../sections/products.vue">Products</button> -->
                </div>
              </div>
            </div>
           <div class="container">
  <div class="social-menu">
    <ul>
      <li>
        <a href="https://www.facebook.com/" class="fa fa-facebook" style="color:#61FF2F"></a>
      </li>
      <li>
        <a href="https://www.twitter.com/" class="fa fa-twitter" style="color:#61FF2F"></a>
      </li>
      <li>
        <a href="https://www.instagram.com/goatfarmsa/" class="fa fa-instagram" style="color:#61FF2F"></a>
      </li>
    </ul>
  </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Products from "../sections/ProductList"
import products from "../sections/products"
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }
  .words {
    width: 100;
  }
  .social-menu {
  position: absolute;
  right: 10px;
  top: 200px;
}
.social-menu ul li {
  margin: 20px 0px;
}

</style>

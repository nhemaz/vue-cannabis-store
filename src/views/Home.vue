<template>
  <div class="home">
    <Navbar></Navbar>
      <Hero/>
     <!--  <products-list> --> <!-- </products-list>
 -->
      <!-- <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img class="thick-green-border" src="/img/gallery/3.jpg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3 style="color:white">Learn More About us</h3>
            <p style="color:white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
             <button class="btn custom-btn btn-info mr-4" href="../sections/products.vue">Browse Products</button>
          </div>
        </div>
      </div> -->
      <login></login>

      <mini-cart></mini-cart>
      <footer></footer>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/hero.vue";
import Products from "@/sections/products.vue";
import Login from "@/components/Login.vue";
import Footer from "@/components/footer.vue"

export default {
  name: "home",
  components: {
    Hero,Products,Login
  }
};
</script>

<style>
.thick-green-border {
    border-color: #61FF2F;
    border-width: -1px;
    border-style: solid;
    border-radius: 10px;
  }
</style>


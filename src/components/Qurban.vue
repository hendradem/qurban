<template>
<div>
  <div class="container pb-5">
       <div class="qurbanHeading">
              <h3 class="choiceHeading"> Silahkan pilih paket hewan qurban dibawah ini </h3>
              <p>
                Silahkan pilih paket hewan qurban yang tersedia. Kami akan berusaha mencarikan <br> hewan qurban yang sesuai dengan kriteria yang telah anda pilih
              </p>
        </div>

          <div class="row">
                  <div v-for="item in items" :key="item.productTitle"  class="col-md-4">
                        <div class="card my-card">
                          <div class="card-body m-2 mb-3">
                            <div class="package-title pt-4">
                                <h4 class="px-2"> {{ item.productTitle }} </h4>
                                <p> {{ item.productSubTitle }} </p>
                            </div>
                            <div class="package-features pt-2">
                                <ul class="list-group list-group-flush px-5">
                                  <li v-for="feature in item.productFeatures" :key="feature" class="list-group-item p-2"> <fa-icon :icon="['fas', 'check']" style="color:green;" /> <span class="pl-1 font-weight-medium feature-text"> {{ feature }} </span> </li>
                                </ul>
                            </div>
                            <div class="package-price text-center mt-4">
                                <h3 class="pricing-text"> <small> Rp. </small> {{ item.price }} </h3>  
                            </div>
                            <div class="package-footer mt-5">
                                <a v-bind:href="item.checkout" class="btn btn-info btn-block mx-auto btn-pesan"> Pesan Hewan </a>
                            </div>
                          </div>
                        </div>
                      </div>
          </div>  
  </div>  
</div>
</template>

<script>
export default {
  name: 'Qurban',
  data: function () {
  return {
    items: [
        { 
          productId: 1,
          productTitle : "Qurban Kambing Tipe A (Premium)",
          productSubTtile : "Kami pilihkan kambing ukuran standar",
          productFeatures : ["Kambing / Domba", "Berat +- 20-30 KG", "Usia 1-2 Tahun"],
          price : "1.500.000",
          image : [require("@/assets/images/hero1.jpg")],
          checkout : "http://checkout.masjidpogungraya.com/qurban-kambing-standar"     
        },
        { 
          productId: 2,
          productTitle: "Qurban Kambing B (Medium)",
          productSubTtile: "Kami pilihkan kambing ukuran medium",
          productFeatures : ["Kambing / Domba", "Berat +- 30-45 KG", "Usia 1-2 Tahun"],
          price : "1.700.000",
          image: [require("@/assets/images/hero3.jpg")],
          checkout : "http://checkout.masjidpogungraya.com/qurbankambingmedium"
          
        },
        { 
          productId: 3,
          productTitle: "Qurban kambing C (Standar)",
          productSubTtile: "Kami pilihkan kambing ukuran besar",
          productFeatures : ["Kambing / Domba", "Berat +- 40-50 KG", "Usia 1-3 Tahun"],
          price : "3.000.000",
          image: [require("@/assets/images/hero3.jpg")],
          checkout : "http://checkout.masjidpogungraya.com/kurban-kambing-premium"
          
        },
    ]
  }
}




}
</script>



<style>

  .qurbanHeading {
    text-align: center;
    margin-bottom: 50px;
    color: #1f0a79;
  }
  .choiceHeading {
    font-weight: bold;
    color: #1f0a79;
  }
  .my-card {
    border: none;
    /* box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    /* box-shadow: 0 5px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); */
    border-radius: 15px;
    height: auto;
    margin-bottom: 20px;
  }
  .my-card:hover{
    transition: 0.5s ease-out;
     transform: translate(0, -10px);
  }
  .package-title {
    text-align: center;
  } .package-title > h4 {
    color: #1f0a79;
    font-weight: 800;
  }
  .feature-text {
    color: #5a41c7;
  }
  .pricing-text {
    font-weight: 800;
    color: #5a41c7;
  }
  .btn-pesan {
    font-weight: bold;
    border-radius: 15px;
    background-color: #f1f1ff;  
    color: #5a41c7;
    border: none;
    font-size: 18px;
    padding: 13px 5px 13px 5px;
  }
  .btn-pesan:hover {
    background-color: #5a41c7;  
  }





</style>

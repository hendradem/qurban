<template>
<div>
  <div class="container pb-5">
      <div class="qurbanHeading">
        <h3 class="choiceHeading"> Silahkan pilih paket hewan qurban dibawah ini </h3>
        <p>
          Silahkan pilih paket hewan qurban yang tersedia. Kami akan berusaha mencarikan <br> hewan qurban yang sesuai dengan kriteria yang telah anda pilih
        </p>
      </div>     

      <div>
        <b-tabs pills align="center">
              <b-tab title="Qurban Kambing" active>
                <b-card-text>
                  
                  <div class="row pt-5">
                    <div v-for="item in kambing" :key="item.productTitle" class="col-md-4">
                      <div class="card my-card">
                          <div class="card-body">
                              <div class="package-title px-3 pt-4">
                                  <h4> {{ item.productTitle }} </h4>
                                  <p> {{ item.productSubTitle }} </p>
                              </div>
                              <div class="package-price text-center mt-3">
                                  <h4 class="pricing-text">   {{ item.price }} </h4>  
                              </div>
                              <div class="package-features mt-4">
                                  <ul class="list-unstyled align-content-center feature-list">
                                      <li v-for="feature in item.productFeatures" :key="feature" class="p-1"> <i class="fas fa-check-circle" style="color: green;"></i> <span class="pl-1 font-weight-medium feature-text"> {{ feature }} </span> </li>
                                  </ul>
                              </div>        
                              <div class="package-footer mt-5">
                                  <a v-bind:href="item.checkout" class="btn btn-info btn-block mx-auto btn-pesan"> Pesan Hewan </a>
                              </div>
                          </div>                     
                      </div>                       
                    </div>
                  </div>

                </b-card-text>
              </b-tab>
              <b-tab title="Qurban Sapi">
                <b-card-text>
                    <div class="row pt-5">
                    <div v-for="item in sapi" :key="item.productTitle" class="col-md-4">
                      <div class="card my-card">
                          <div class="card-body">
                              <div class="package-title px-3 pt-4">
                                  <h4> {{ item.productTitle }} </h4>
                                  <p> {{ item.productSubTitle }} </p>
                              </div>
                              <div class="package-price text-center mt-3">
                                  <h4 class="pricing-text"> - {{ item.price }} </h4>  
                              </div>
                              <div class="package-features mt-4">
                                  <ul class="list-unstyled align-content-center feature-list">
                                      <li v-for="feature in item.productFeatures" :key="feature" class="p-1"> <i class="fas fa-check-circle" style="color: green;"></i> <span class="pl-1 font-weight-medium feature-text"> {{ feature }} </span> </li>
                                  </ul>
                              </div>        
                              <div class="package-footer mt-5">
                                  <a v-bind:href="item.checkout" class="btn btn-info btn-block mx-auto btn-pesan"> Pesan Hewan </a>
                              </div>
                          </div>                     
                      </div>                       
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
        </b-tabs>        
      </div>

  </div>  
</div>
</template>

<script>
export default {
  name: 'Qurban',
  data: function () {
  return {
    kambing : [
        { 
          productId: 1,
          productTitle : "Qurban Kambing Tipe A (Premium)",
          productSubTtile : "Kami pilihkan kambing ukuran standar",
          productFeatures : ["Kambing / Domba", "Berat > 38 KG", "Usia 2 Tahun"],
          price : "3.100.000 - 3.300.000",
          image : [require("@/assets/images/hero1.jpg")],
          checkout : "https://qurbanmpdmpr.orderonline.id/qurban-kambing-tipe-a"     
        },
        { 
          productId: 2,
          productTitle: "Qurban Kambing Tipe B (Medium)",
          productSubTtile: "Kami pilihkan kambing ukuran medium",
          productFeatures : ["Kambing / Domba", "Berat > 33 KG", "Usia 1.5 Tahun"],
          price : "2.800.000 - 3.000.000",
          image: [require("@/assets/images/hero3.jpg")],
          checkout : "https://qurbanmpdmpr.orderonline.id/qurban-kambing-b"
          
        },
        { 
          productId: 3,
          productTitle: "Qurban kambing Tipe C (Standar)",
          productSubTtile: "Kami pilihkan kambing ukuran besar",
          productFeatures : ["Kambing / Domba", "Berat > 28 KG", "Usia > 1 Tahun"],
          price : "2.600.000 - 2.700.000",
          image: [require("@/assets/images/hero3.jpg")],
          checkout : "https://qurbanmpdmpr.orderonline.id/qurban-kambing-c"
          
        },
    ],
    sapi : [
        { 
          productId: 1,
          productTitle : "Qurban Sapi Tipe A (Premium)",
          productSubTtile : "Kami pilihkan kambing ukuran standar",
          productFeatures : ["Sapi Jantan", "Berat 380-400 KG", "Usia > 2 Tahun"],
          price : "3.300.000 /orang  23.100.000 /sapi",
          image : [require("@/assets/images/hero1.jpg")],
          checkout : "https://qurbanmpdmpr.orderonline.id/qurban-sapi-a"     
        },
        { 
          productId: 2,
          productTitle: "Qurban Sapi Tipe B (Medium)",
          productSubTtile: "Kami pilihkan kambing ukuran medium",
          productFeatures : ["Sapi Jantan", "Berat 360-380 KG", "Usia > 2 Tahun"],
          price : "3.150.000 /orang  22.050.000 /sapi",
          image: [require("@/assets/images/hero3.jpg")],
          checkout : "https://qurbanmpdmpr.orderonline.id/qurban-sapi-b"
          
        },
        { 
          productId: 3,
          productTitle: "Qurban Sapi Tipe C (Standar)",
          productSubTtile: "Kami pilihkan kambing ukuran besar",
          productFeatures : ["Sapi Jantan", "Berat 340-360 KG", "Usia > 2 Tahun"],
          price : "3.000.000 /orang  21.000.000 /sapi",
          image: [require("@/assets/images/hero3.jpg")],
          checkout : "https://qurbanmpdmpr.orderonline.id/qurban-sapi-c"
          
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
    color: #505050;
  }
  .choiceHeading {
    font-weight: bold;
    color: #505050;
  }
  .my-card {
    border: 1px solid #dddddd;
    /* box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
    /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
    /* box-shadow: 0 5px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); */
    border-radius: 10px;
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
    color: #505050;
    font-weight: 700;
    font-size: 22px;
  }
  .feature-text {
    color: #505050;
  }
  .feature-list {
    padding: 0px 70px 0px 70px;
  }
  .pricing-text {
    font-weight: 800;
    color: #5a41c7;
    font-size: 22px;
  }
  .btn-pesan {
    font-weight: bold;
    border-radius: 10px;
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

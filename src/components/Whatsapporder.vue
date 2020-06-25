<template name="Whatsapporder">
  <div>
    <div class="whatsapporder-wrapper py-5">
      <div class="whatsapporder-container"></div>
      <center class="whatsapporder-content py-5">
            <h2 class="text-white font-weight-bold">Masih bingung cara pemesanan <br> via website ?</h2>
            <p class="text-white"> Anda bingung cara pemesanan via website ?  silahkan hubungi kami <br> di whatsapp dengan mengklik tombol dibawah ini </p>
            <a target="_blank" href="https://wasap.at/ILrQxh" class="btn btn-default btn-whatsapporder"> Pesan hewan via whatsapp </a>
        </center>
    </div>    
  </div>
</template>

<script>
import backgroundUrl from '@/assets/images/bghero.jpg'
export default {
    data(){
        return {
            backgroundUrl
        }
    }
}
</script>


<style scoped>
   .whatsapporder-wrapper {
       height: 400px;
       width: 100%;
       position: relative;
       background-image: url('../assets/images/bghero3.jpg');
       background-repeat: no-repeat;
       background-size: cover;
       background-attachment: fixed;
       background-position: left-center;
   } 
   .whatsapporder-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #6730e3;
      opacity: 0.8;
   }
   .whatsapporder-content  {
     position: relative;
   }
   .btn-whatsapporder {
     background-color: #fff;
     font-weight: 700;
     padding: 12px 20px 12px 20px;
     border-radius: 60px;
     margin-top: 10px;
   }
</style>
<template name="Whatsapporder">
  <div>
    <div class="whatsapporder-wrapper py-5" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="container">
          
      </div>
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
       height: 300px;
       width: 100%;
       /* background-image: url("@/assets/images/bghero.jpg"); */
   } 
</style>
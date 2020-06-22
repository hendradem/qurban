<template>
  <div>
      <header>
          <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <h4 class="heading-text align-middle mt-5 mb-4"> Website Qurban <br> Masjid Pogung Dalangan <br> Masjid Pogung Raya </h4>
                    <p class="heading-paragraph"> Layanan pemesanan hewan qurban dari panitia qurban Masjid Pogung Dalangan - Masjid Pogung Raya </p>
                     <countdown :time="18 * 24 * 60 * 60 * 1000">
                        <template slot-scope="props">
                            <div class="count-down mt-5">
                                <p class="count-down-text text-white">Menuju hari raya qurban</p>
                                <div class="row">
                                    <div class="timer-col d-flex justify-content-center align-items-center">
                                        <span class="timer-text my-auto mr-1">  {{ props.days }} </span> Hari
                                    </div>
                                    <div class="timer-col d-flex justify-content-center align-items-center">
                                        <span class="timer-text my-auto mr-1"> {{ props.hours }} </span> Jam
                                    </div>
                                    <div class="timer-col d-flex justify-content-center align-items-center">
                                        <span class="timer-text my-auto mr-1"> {{ props.minutes }} </span> Menit
                                    </div>
                                    <div class="timer-col d-flex justify-content-center align-items-center">
                                        <span class="timer-text my-auto mr-1"> {{ props.seconds }} </span> Detik
                                    </div>
                                </div>
                            </div>
                        </template>
                    </countdown>

                </div>

                <div class="col-md-7">
                    <img width="800" class="img-fluid" src="../assets/images/qurbanhero2.png" />
                </div>


            </div>
          </div>
      </header>
  </div>
</template>

<script>
    export default {
        name : "Header"
    }
</script>

<style scoped>
    header {
        background: #8E2DE2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        height: auto;
        margin-bottom: 50px;
        padding-top: 100px;
        padding-bottom: 50px;
    }
    .heading-text {
        font-weight: 800;
        color: #fff;
        font-size: 30px;
        line-height: 40px;
    }
    .heading-paragraph {
        color: #fff;
        font-size: 20px;
    }
    .timer-col {
        background-color: #fff;
        margin: 10px;
        padding: 12px;
        border-radius: 6px;
    }
    .timer-text {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        color: #0D47A1;
    }
    .count-down-text {
        font-size: 20px;
    }
    
</style>
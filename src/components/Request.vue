<template name="Request">
    <div class="container">
         <div class="qurbanHeading">
              <h3 class="choiceHeading pt-5"> Info penyaluran daging qurban </h3>
              <p>
                  Silahkan klik menu dibawah ini untuk penyaluran daging qurban
              </p>
        </div>
       <div class="row">
           <div class="col-md-5">
                <img class="img-fluid" src="../assets/images/request.png" />
           </div>
           <div class="col-md-7 d-flex justify-content-center">
               
                   <div class="row">
                   <div class="card card-penyaluran bg-warning card-p-1 p-3 border-0">
                        <div class="card-body">
                            <h4 class="card-title"> <strong> Pengajuan Penyaluran </strong> </h4>
                            <p class="card-text">
                                Klik disini untuk mengajukan proposal permintaan daging qurban
                            </p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmkwLGqHL2O9EaEJTqijQL5ra77nzW1rvq0U67lxCHTYoHzg/viewform" class="btn btn-default btn-penyaluran btn-block mt-4"> Kirim proposal </a>
                        </div>
                    </div>
                    <div class="card card-penyaluran card-p-2 p-3 border-0">
                        <div class="card-body">
                            <h4 class="card-title"> <strong> Dokumentasi Qurban </strong> </h4>
                            <p class="card-text">
                                Untuk Dokumentasi kegiatan qurban silahkan klik tombol dibawah ini
                            </p>
                            <a href="" class="btn btn-default btn-penyaluran btn-block mt-4"> Lihat dokumentasi </a>
                        </div>
                    </div>
                    </div>
   
           </div>
       </div>
    </div>
</template>

<style scoped>
    .card-penyaluran {
        width: 250px;
        height: 300px;
        margin: 10px;
        margin-top: 100px;
        border-radius: 10px;
    }
    .card-p-1 {
        -webkit-box-shadow: 0px 5px 22px 4px rgba(255, 204, 21, 0.329); 
        box-shadow: 0px 5px 22px 4px rgba(255, 204, 21, 0.329);
    }
    .card-p-2 {
        background-color: #673AB7;
        color: #fff;
        -webkit-box-shadow: 0px 5px 22px 4px rgba(91,0,255,0.329); 
        box-shadow: 0px 5px 22px 4px rgba(91,0,255,0.329);
    }
    .card-penyaluran:hover {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        transition: box-shadow 0.5s ease-in-out;
    }
    .btn-penyaluran {
        background-color: #fff;
        font-weight: 700;
        border-radius: 60px;
    }
</style>
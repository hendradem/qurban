<template name="Request">
  <div class="container p-5">
    <div class="qurbanHeading text-center">
      <h3 class="choiceHeading pt-3">
        <strong>Info penyaluran daging qurban</strong>
      </h3>
      <p>
        Silahkan klik menu dibawah ini untuk penyaluran daging qurban
      </p>
    </div>
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <div class="row">
          <div class="card card-penyaluran bg-warning card-p-1 p-3 border-0">
            <div class="card-body">
              <h4 class="card-title">
                <strong> Pengajuan Penyaluran </strong>
              </h4>
              <p class="card-text">
                Klik disini untuk mengajukan proposal permintaan daging qurban
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfmkwLGqHL2O9EaEJTqijQL5ra77nzW1rvq0U67lxCHTYoHzg/viewform"
                class="btn btn-default btn-penyaluran btn-block mt-4"
              >
                Kirim proposal
              </a>
            </div>
          </div>
          <div class="card card-penyaluran card-p-2 p-3 border-0">
            <div class="card-body">
              <h4 class="card-title"><strong> Dokumentasi Qurban </strong></h4>
              <p class="card-text">
                Untuk Dokumentasi kegiatan qurban silahkan klik tombol dibawah
                ini
              </p>
              <a href="" class="btn btn-default btn-penyaluran btn-block mt-4">
                Lihat dokumentasi
              </a>
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
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
}
.card-p-2 {
  background-color: #673ab7;
  color: #fff;
  -webkit-box-shadow: 0px 5px 22px 4px rgba(91, 0, 255, 0.329);
  box-shadow: 0px 5px 22px 4px rgba(91, 0, 255, 0.329);
}
.card-penyaluran:hover {
  -webkit-box-shadow: 0px 5px 22px 4px rgba(255, 204, 21, 0.329);
  box-shadow: 0px 5px 22px 4px rgba(255, 204, 21, 0.329);
  transition: box-shadow 0.5s ease-in-out;
}
.btn-penyaluran {
  background-color: #fff;
  font-weight: 700;
  border-radius: 60px;
}
</style>

<template>
  <div>
    <div class="header-container">
      <div class="col-md-12 header-col">
        <h2 class="heading-text text-center">
          Website Qurban Online MPD-MPR
        </h2>
        <div class="header-cta">
          <button
            class="btn btn-default custom-btn mr-2 btn-daftar-qurban"
            @click="showShohibulList"
          >
            List Shohibul Qurban
          </button>
          <a href="https://bit.ly/qurbanmprmpd1442h" target="_blank">
            <button class="btn btn-default custom-btn btn-cek-status">
              <b-spinner
                variant="danger"
                small
                label="Small Spinner"
                type="grow"
              ></b-spinner>
              <span class="ml-2">Live Streaming Qurban </span>
            </button>
          </a>
        </div>
      </div>
    </div>

    <div>
      <b-modal
        ref="find-shohibul"
        size="md"
        hide-footer="true"
        hide-header="true"
        centered
        no-fade
        class="custom-modal"
      >
        <div class="order-header">
          <span class="order-header-title">Pilih jenis qurban</span>
          <span class="order-header-close" @click="hideShohibulList"
            ><ion-icon name="close-circle"></ion-icon
          ></span>
        </div>

        <div class="modal-body">
          <a target="_blank" href="https://bit.ly/datashohibulqurbansapi">
            <div class="card-body product-card">
              <img src="@/assets/images/sapi-icon.png" alt="" />
              <h5 class="card-text__title">Sapi</h5>
            </div>
          </a>

          <a target="_blank" href="https://bit.ly/datashohibulqurbankambing">
            <div class="card-body product-card">
              <img src="@/assets/images/kambing-icon.png" style="width: 45%" />
              <h5 class="card-text__title">Kambing</h5>
            </div>
          </a>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qurbanDay: false,
    };
  },
  mounted() {
    const fullDate = new Date();
    const date = fullDate.getDate();

    if (date == 21) {
      this.qurbanDay = true;
    }
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },

    showShohibulList() {
      this.$refs["find-shohibul"].show();
    },
    hideShohibulList() {
      this.$refs["find-shohibul"].hide();
    },
  },
};
</script>

<style scoped>
.header-container {
  width: 100vw;
  height: 100vh;
  background-color: #7513f2; /* fallback for old browsers */
  display: flex;
}
.heading-text {
  color: #fff;
  font-size: 28;
  font-weight: bold;
}

.header-col {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header-cta {
  margin-top: 30px;
}
.custom-btn {
  padding: 15px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: #424242;
}

/* card */
.product-card {
  background-color: #fff;
  width: 95%;
  height: 200px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 0px 0 rgba(0, 0, 0, 0.06);
}
.product-card > img {
  width: 60%;
  align-content: center;
}
.card-text__title {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 0;
  color: #4b5563;
  font-weight: 600;
  font-size: 17px;
}
a {
  text-decoration: none;
}

/* modal */
.modal-body {
  display: flex;
  justify-content: space-evenly;
}

/* footer */
.footer {
  width: 80%;
  margin-top: -120px;
}

.custom-alert {
  background-color: #fff;
  padding: 20px;
  border: none;
  border-radius: 10px;
}

@media only screen and (max-width: 450px) {
  .header-container {
    padding: 10px;
  }
  .custom-btn {
    width: 100%;
    margin-top: 8px;
  }
}
</style>

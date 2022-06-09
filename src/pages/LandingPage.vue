<template>
  <div>
    <div class="header-container">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <nav class="nav nav-masthead justify-content-center float-md-end">
              <a
                class="nav-link fw-bold py-1 px-0 active"
                aria-current="page"
                href="/"
                >Home</a
              >
              <a
                class="nav-link fw-bold py-1 px-0"
                href="https://wa.me/6285643172430"
                target="_blank"
                >Kontak</a
              >
            </nav>
          </div>
        </header>

        <main class="px-4">
          <h1 class="heading">
            Qurban <br />
            MPD MPR 1443H
          </h1>

          <div class="mt-4">
            <button
              class="btn btn-default custom-btn mr-2 btn-daftar-qurban"
              @click="showQurbanType"
            >
              Pilih hewan qurban
            </button>
            <button class="btn btn-default custom-btn mr-2 btn-daftar-qurban">
              List Shohibul Qurban
            </button>
          </div>
        </main>

        <footer class="mt-auto text-white-50">
          <center>
            <small> Masjid Pogung Dalangan - Masjid Pogung Raya </small>
          </center>
        </footer>
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
          <span class="order-header-close" @click="hideQurbanType"
            ><ion-icon name="close-circle"></ion-icon
          ></span>
        </div>

        <div class="modal-body">
          <a href="/detail/sapi">
            <div class="card-body product-card">
              <img src="@/assets/images/sapi-icon.png" alt="" />
              <h5 class="card-text__title">Sapi</h5>
            </div>
          </a>

          <a href="/detail/kambing">
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

    showQurbanType() {
      this.$refs["find-shohibul"].show();
    },
    hideQurbanType() {
      this.$refs["find-shohibul"].hide();
    },
  },
};
</script>

<style scoped>
.header-container {
  width: 100vw;
  height: 100vh;
  background-color: #2563eb;
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

/* new homepage style */
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}

/*
 * Base structure
 */

body {
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}

.cover-container {
  max-width: 42em;
}

/*
 * Header
 */

.nav-masthead .nav-link {
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

/* neww */
.heading {
  font-weight: bold;
  color: white;
}
</style>

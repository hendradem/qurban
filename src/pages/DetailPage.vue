<template>
  <div class="container product-container">
    <div class="card product-card p-0">
      <div class="card-header-action">
        <router-link to="/" class="btn-back"
          ><i class="fas fa-angle-left"></i>
        </router-link>
        <span class="card-heading-title">Kurban {{ productParam }}</span>
      </div>
      <div class="product-img p-0">
        <img :src="selectedImg" class="card-img-top" />
      </div>
      <div class="card-body">
        <div class="product-spec p-3">
          <h4>{{ productParam }} tipe {{ isProductTypeSelected }}</h4>
        </div>

        <div class="product-type">
          <div class="product-type-wrapper px-3 pb-2">
            <span class="product-type-title"
              >Pilih tipe {{ productParam }}</span
            >
            <div v-if="productParam === 'sapi'" class="product-type-card mt-1">
              <div
                v-for="item in sapiList"
                :key="item.type"
                class="card card-product-type"
                :class="{ selected: isProductTypeSelected == item.type }"
                @click="
                  {
                    (isProductTypeSelected = item.type),
                      (isProductTypeChecked = item.type),
                      (selectedImg = item.img),
                      (selectedPrice = item.price[0]),
                      (selectedItem.jenisHewan = item.type),
                      (selectedItem.hargaHewan = item.price[0]);
                  }
                "
              >
                <div class="form-check">
                  <input
                    class="form-check-input custom-radio-bullet"
                    type="radio"
                    value="option1"
                    @change="isProductTypeChecked = item.type"
                    :checked="isProductTypeChecked == item.type"
                  />
                  <label class="form-check-label label-tipe-hewan">
                    Tipe {{ item.type }}
                  </label>
                </div>
              </div>
            </div>

            <div v-else class="product-type-card mt-1">
              <div
                v-for="item in kambingList"
                :key="item.type"
                class="card card-product-type"
                :class="{ selected: isProductTypeSelected == item.type }"
                @click="
                  {
                    (isProductTypeSelected = item.type),
                      (isProductTypeChecked = item.type),
                      (selectedImg = item.img),
                      (selectedPrice = item.price),
                      (selectedItem.jenisHewan = item.type),
                      (selectedItem.hargaHewan = item.price);
                  }
                "
              >
                <div class="form-check">
                  <input
                    class="form-check-input custom-radio-bullet"
                    type="radio"
                    value="option1"
                    @change="isProductTypeChecked = item.type"
                    :checked="isProductTypeChecked == item.type"
                  />
                  <label class="form-check-label label-tipe-hewan">
                    Tipe {{ item.type }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="qurban-type mt-3">
          <div class="qurban-type-wrapper px-3 pb-2">
            <form>
              <div class="form-row mb-0">
                <div class="form-group col-md-6">
                  <label class="form-label">Nama lengkap</label>
                  <input
                    type="text"
                    class="form-control form-control-sm custom-form"
                    v-model="selectedItem.namaLengkap"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4" class="form-label"
                    >Nomor Whatsapp</label
                  >
                  <input
                    type="text"
                    class="form-control form-control-sm custom-form"
                    v-model="selectedItem.nomorWA"
                  />
                </div>
              </div>
              <div class="form-group mt--3">
                <label for="inputAddress" class="form-label"
                  >Alamat lengkap</label
                >
                <input
                  type="text"
                  class="form-control form-control-sm custom-form"
                  v-model="selectedItem.alamatLengkap"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="btn-order-wrapper">
        <div class="row">
          <div class="col-sm-5">
            <p class="text-muted total-price-title">Harga hewan:</p>
            <h5 class="total-price">
              Rp. {{ selectedPrice.toLocaleString() }}
            </h5>
          </div>
          <div class="col-sm-7">
            <a
              @click="addProduct()"
              :href="convertedLink"
              target="_blank"
              class="btn btn-primary btn-block btn-order"
              >Pesan {{ productParam }} tipe {{ isProductTypeChecked }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tipe"],
  data() {
    return {
      productParam: this.$route.params.tipe,
      sapiList: [
        {
          type: "A",
          weight: "200-230",
          price: [23800000, 3400000],
          img:
            "https://images.unsplash.com/photo-1602489646892-f866fde016f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          type: "B",
          weight: "180-200",
          price: [22750000, 3250000],
          img:
            "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          type: "C",
          weight: "150-180",
          price: [21700000, 3100000],
          img:
            "https://images.unsplash.com/photo-1593063162225-2d311e7a8a0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
      kambingList: [
        {
          type: "A",
          weight: "35-40",
          price: "3.2 - 3.5 juta",
          img: "https://i.imgur.com/57Ok49R.jpg",
        },
        {
          type: "B",
          weight: "32-34",
          price: "2.9 - 3.1 juta",
          img: "https://i.imgur.com/Ys8rLb8.jpg",
        },
        {
          type: "C",
          weight: "28-31",
          price: "2.6 - 2.8 juta",
          img: "https://i.imgur.com/H6eLPQx.jpg",
        },
      ],

      qurbanType: ["sendiri", "rombongan"],
      isProductTypeChecked: "",
      isProductTypeSelected: "",
      isQurbanTypeCheced: "",
      isQurbanTypeSelected: "",
      selectedImg: "",
      selectedPrice: "",
      selectedItem: [
        {
          namaLengkap: "",
          nomorWA: "",
          alamatLengkap: "",
          jenisHewan: "",
          hargaHewan: "",
          jenisQurban: "rombongan",
          mauMenerimaDaging: "ya",
        },
      ],
      convertedLink: "",
    };
  },
  mounted() {
    if (this.productParam === "sapi") {
      this.selectedImg =
        "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y293fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    } else if (this.productParam === "kambing") {
      this.selectedImg =
        "https://images.unsplash.com/photo-1588164207355-8b81e4a8d351?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbWJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    }
  },
  methods: {
    addProduct() {
      let item = this.selectedItem;

      let url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        item.nomorWA
      )}&text=*Halo%2C%20saya%20mau%20pesan%20hewan%20qurban*%0A%0A*Nama*%20%3A%20${encodeURIComponent(
        item.namaLengkap
      )}%0A*HP*%20%3A%20${encodeURIComponent(
        item.nomorWA
      )}%0A*Alamat*%20%3A%20${encodeURIComponent(
        item.alamatLengkap
      )}%0A*Tipe%20Hewan*%20%3A%20${encodeURIComponent(
        item.jenisHewan
      )}%0A*Tipe%20Qurban*%20%3A%20${encodeURIComponent(
        item.jenisQurban
      )}%0A*Harga*%20%3A%20${encodeURIComponent(
        item.hargaHewan.toLocaleString()
      )}%0A*Mau%20menerima%20daging*%20%3A%20${encodeURIComponent(
        item.mauMenerimaDaging
      )}`;

      this.convertedLink = url;
    },
  },
};
</script>

<style scopped>
.product-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.card-header-action {
  margin: 10px 3px;
}
.btn-back {
  padding: 4px 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #f3f4f695;
  color: #9ca3af;
  border-radius: 5px;
}
.card-heading-title {
  font-size: 15px;
  font-weight: 500;
  color: #374151;
}

.product-card {
  width: 400px;
  /* height: 700px; */
  border: 1px solid #f3f4f6;
  padding-bottom: 0;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); */
}

.card-body {
  /* overflow-y: scroll; */
  padding: 0;
}

.product-img {
  height: 300px;
  padding: 0;
  border-radius: 0px;
}
.product-img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

/* product spec */

.product-spec > h4 {
  font-size: 17px;
}

/* product type */

.product-type {
  border-top: 1px solid #f3f4f6;
  border-bottom: 1px solid #f3f4f6;
}

.product-type-card {
  display: flex;
}
.product-type-card:hover {
  cursor: pointer;
}

.card-product-type {
  width: 100%;
  padding: 2px 10px;
  border: none;
  margin-right: 4px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.custom-radio-bullet {
  margin-top: 6px;
}
.selected {
  border: 1px solid #1a70fb;
}

.product-type-title {
  color: #9ca3af;
  font-size: 12px;
  font-weight: 500;
}
.label-tipe-hewan {
  font-weight: 500;
  color: #6b7280;
  font-size: 12px;
}
.product-spec {
  font-size: 10px;
  margin-bottom: 0;
  margin-top: -3px;
  color: #6b7280;
}

/* User form */
.form-label {
  color: #6b7280;
  font-size: 12px;
  font-weight: 500;
}
.custom-form {
  border-radius: 5px;
  border: 1.5px solid #dce1e7;
}
.custom-form:focus {
  box-shadow: none;
  border-radius: none;
}

/* Card actiom */

.btn-order {
  border: none;
  font-size: 14px;
  padding: 10px;
  background-color: #1a70fb;
  color: #fff;
  font-weight: 500;
}
.btn-order:hover {
  background-color: #1a70fb;
}

.btn-order-wrapper {
  width: 100%;
  padding: 8px 15px;
  margin-top: 10px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 0;
  border-top: 1px solid #e5e7eb;
}
.total-price-title {
  font-size: 12px;
  margin-bottom: 0;
}
.total-price {
  font-size: 15px;
  font-weight: 600;
  color: #f36e2d;
}

/* overflow scroll */
::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #93c5fd;
  cursor: pointer;
}
</style>

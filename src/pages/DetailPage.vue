<template>
  <div class="container product-container">
    <div class="col-md-5 product-col">
      <div class="card product-card">
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
            <h4>{{ productParam }} tipe {{ ProductTypeSelected }}</h4>
            <span class="mr-2 badge-spec"
              ><ion-icon name="scale"></ion-icon> Berat
              {{ selectedWeight }} KG</span
            >
            <span class="badge-spec"
              ><ion-icon name="hourglass"></ion-icon> Usia
              {{ selectedAge }} tahun</span
            >
          </div>

          <div class="product-type">
            <div class="product-type-wrapper px-3 pb-2">
              <span class="product-type-title"
                >Pilih tipe {{ productParam }}</span
              >
              <div
                v-if="productParam === 'sapi'"
                class="product-type-card mt-1"
              >
                <div
                  v-for="item in sapiList"
                  :key="item.type"
                  class="card card-product-type"
                  :class="{ selected: ProductTypeSelected == item.type }"
                  @click="
                    productTypeAct(
                      item.type,
                      item.img,
                      item.price,
                      item.weight,
                      item.age
                    )
                  "
                >
                  <div class="form-check">
                    <input
                      class="form-check-input custom-radio-bullet"
                      type="radio"
                      value="option1"
                      @change="ProductTypeChecked = item.type"
                      :checked="ProductTypeChecked == item.type"
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
                  :class="{ selected: ProductTypeSelected == item.type }"
                  @click="
                    {
                      (ProductTypeSelected = item.type),
                        (ProductTypeChecked = item.type),
                        (selectedImg = item.img),
                        (selectedPrice = item.price),
                        (selectedItem.jenisHewan = item.type),
                        (selectedItem.hargaHewan = item.price);
                      selectedWeight = item.weight;
                      selectedAge = item.age;
                      isQurbanKambingTypeSelected = true;
                    }
                  "
                >
                  <div class="form-check">
                    <input
                      class="form-check-input custom-radio-bullet"
                      type="radio"
                      value="option1"
                      @change="ProductTypeChecked = item.type"
                      :checked="ProductTypeChecked == item.type"
                    />
                    <label class="form-check-label label-tipe-hewan">
                      Tipe {{ item.type }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="isProductTypeSelected" class="qurban-type">
            <div class="qurban-type-wrapper px-3 pb-2">
              <span class="product-type-title">Pilih tipe qurban</span>
              <div
                v-if="productParam === 'sapi'"
                class="qurban-type-card-wrapper mt-1"
              >
                <div
                  class="qurban-type-card"
                  :class="{
                    qurbantypeselectedcard: qurbanTypeSelected == 'sendiri',
                  }"
                  @click="qurbanTypeAct('sendiri')"
                >
                  <ion-icon name="person"></ion-icon>
                  <span class="ml-2">Sendiri</span>
                </div>
                <div
                  class="qurban-type-card"
                  :class="{
                    qurbantypeselectedcard: qurbanTypeSelected == 'rombongan',
                  }"
                  @click="qurbanTypeAct('rombongan')"
                >
                  <ion-icon name="people"></ion-icon>
                  <span class="ml-2">Rombongan</span>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="isQurbanTypeSelected || isQurbanKambingTypeSelected"
            class="qurban-data mt-3"
          >
            <div class="qurban-data-wrapper px-3 pb-2">
              <form class="form-data-user">
                <div class="form-row mb-0">
                  <div class="form-group col-md-6">
                    <label class="form-label">Nama lengkap</label>
                    <input
                      type="text"
                      class="form-control form-control-sm custom-form"
                      :state="isValidated.namaEmpty"
                      @keyup="validationSuccess"
                      id="feedback-user"
                      v-model="selectedItem.namaLengkap"
                    />
                    <b-form-invalid-feedback :state="!isValidated.namaEmpty">
                      Masukkan nama lengkap
                    </b-form-invalid-feedback>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4" class="form-label"
                      >Nomor Whatsapp</label
                    >
                    <input
                      type="text"
                      class="form-control form-control-sm custom-form"
                      v-model="nomorWA"
                      @keyup="validationSuccess"
                    />
                    <b-form-invalid-feedback :state="!isValidated.waEmpty">
                      Masukkan nomor WA
                    </b-form-invalid-feedback>
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
                    @keyup="validationSuccess"
                  />
                  <b-form-invalid-feedback :state="!isValidated.alamatEmpty">
                    Masukkan alamat lengkap
                  </b-form-invalid-feedback>
                </div>
                <label
                  class="form-check-label form-label"
                  for="autoSizingCheck2"
                  v-if="productParam === 'sapi'"
                >
                  ** Harga sudah termasuk biaya potong
                </label>
                <label
                  class="form-check-label form-label"
                  for="autoSizingCheck2"
                  v-if="productParam === 'kambing'"
                >
                  ** Harga belum termasuk biaya potong 75.000 /ekor
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input custom-checkbox"
                    type="checkbox"
                    v-model="mauMenerimaDaging"
                    true-value="mau"
                    false-value="tidak"
                  />
                  <label
                    class="form-check-label form-label"
                    for="autoSizingCheck2"
                  >
                    Saya mau menerima daging qurban
                  </label>
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
              <b-button
                @click="validateOrder"
                class="btn btn-primary btn-block btn-order text-white"
                >Pesan {{ productParam }} tipe
                {{ ProductTypeChecked }}</b-button
              >
            </div>
          </div>
        </div>

        <div>
          <b-modal
            ref="my-modal"
            size="sm"
            hide-footer="true"
            hide-header="true"
            centered
            class="custom-modal"
          >
            <div class="order-header">
              <span class="order-header-title">Checkout pesanan anda</span>
              <span class="order-header-close" @click="hideModal"
                ><ion-icon name="close-circle"></ion-icon
              ></span>
            </div>
            <div class="order-body">
              <div class="card card-product-overview">
                <div class="card-img-overview">
                  <img :src="selectedImg" />
                </div>
                <div class="card-content-overview">
                  <h5 class="card-title">
                    {{ productParam + " tipe " + ProductTypeSelected }}
                  </h5>
                  <p class="card-text product-type">
                    Kruban {{ qurbanTypeSelected }}
                  </p>
                  <p class="card-text product-price">
                    Rp {{ selectedPrice.toLocaleString() }}
                  </p>
                </div>
              </div>

              <div class="user-info">
                <div class="div">
                  <span class="user-info-title"> Nama:</span>
                  <span class="user-info-value float-right">
                    {{ selectedItem.namaLengkap }}
                  </span>
                </div>
                <div class="div">
                  <span class="user-info-title"> Mau menerima daging:</span>
                  <span class="user-info-value float-right">
                    {{ mauMenerimaDaging }}
                    <span v-if="mauMenerimaDaging == 'tidak'">
                      ( disalurkan panitia)</span
                    >
                  </span>
                </div>
                <div v-if="mauMenerimaDaging == 'mau'" class="div">
                  <span class="user-info-title"> Alamat pengiriman:</span>
                  <span class="user-info-value float-right">{{
                    selectedItem.alamatLengkap
                  }}</span>
                </div>
              </div>
            </div>
            <div class="order-action">
              <button class="btn btn-primary btn-confirm" @click="addProduct()">
                <ion-icon name="bag-check"></ion-icon> Pesan hewan
              </button>
            </div>
          </b-modal>
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
          weight: "390-400",
          age: "+- 2",
          price: [24500000, 3500000],
          img:
            "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y293fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          type: "B",
          weight: "370-400",
          age: "+- 2",
          price: [23450000, 3350000],
          img:
            "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y293fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          type: "C",
          weight: "350-370",
          age: "+- 2",
          price: [22750000, 3250000],
          img:
            "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y293fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
      kambingList: [
        {
          type: "A",
          weight: "35-40",
          age: "+- 1",
          price: "3.2 - 3.6 juta",
          img:
            "https://firebasestorage.googleapis.com/v0/b/qurban-f58a1.appspot.com/o/kambing-A.jpeg?alt=media&token=63681cdb-43f3-4abf-a1bb-42d3d45c225d",
        },
        {
          type: "B",
          weight: "32-35",
          age: "+- 1",
          price: "2.9 - 3.1 juta",
          img:
            "https://firebasestorage.googleapis.com/v0/b/qurban-f58a1.appspot.com/o/kambing-B.jpeg?alt=media&token=fd62434d-7d13-46e3-9551-3c5a3c5dbdf3",
        },
        {
          type: "C",
          weight: "29-32",
          age: "+- 1",
          price: "2.6 - 2.8 juta",
          img:
            "https://firebasestorage.googleapis.com/v0/b/qurban-f58a1.appspot.com/o/kambing-C.jpeg?alt=media&token=5dc0c41c-6d57-4beb-bc58-4fc0e2555a60",
        },
      ],

      ProductTypeChecked: "",
      ProductTypeSelected: "",
      selectedImg: "",
      selectedPrice: "",
      selectedWeight: "",
      selectedAge: "",

      isProductTypeSelected: false,
      isQurbanTypeSelected: false,
      qurbanTypeSelected: "",

      isQurbanKambingTypeSelected: false,

      toggle: "",
      nomorWA: "",
      mauMenerimaDaging: "tidak",

      whatsAppAdmin: "6285643172430",

      selectedItem: [
        {
          namaLengkap: "",
          nomorWA: "",
          alamatLengkap: "",
          jenisHewan: "",
          hargaHewan: "",
          jenisQurban: "",
        },
      ],

      isValidated: {
        status: false,
        namaEmpty: false,
        waEmpty: false,
        alamatEmpty: false,
      },
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
    productTypeAct(type, img, price, weight, age) {
      this.isProductTypeSelected = true;
      if (this.qurbanTypeSelected == "sendiri") {
        this.selectedPrice = price[0];
        this.selectedItem.hargaHewan = price[0];
      } else if (this.qurbanTypeSelected == "rombongan") {
        this.selectedPrice = price[1];
        this.selectedItem.hargaHewan = price[1];
      }
      this.ProductTypeSelected = type;
      this.ProductTypeChecked = type;
      this.selectedImg = img;
      this.selectedItem.jenisHewan = type;
      this.selectedWeight = weight;
      this.selectedAge = age;
    },

    qurbanTypeAct(tipe) {
      this.qurbanTypeSelected = tipe;
      this.isQurbanTypeSelected = true;
      this.selectedItem.jenisQurban = tipe;
      let temp = this.ProductTypeSelected;

      if (this.qurbanTypeSelected == "sendiri") {
        switch (temp) {
          case "A":
            this.selectedPrice = this.sapiList[0].price[0];
            this.selectedItem.hargaHewan = this.sapiList[0].price[0];
            break;
          case "B":
            this.selectedPrice = this.sapiList[1].price[0];
            this.selectedItem.hargaHewan = this.sapiList[1].price[0];
            break;
          case "C":
            this.selectedPrice = this.sapiList[2].price[0];
            this.selectedItem.hargaHewan = this.sapiList[2].price[0];
            break;
          default:
            return false;
        }
      } else if (this.qurbanTypeSelected == "rombongan") {
        switch (temp) {
          case "A":
            this.selectedPrice = this.sapiList[0].price[1];
            this.selectedItem.hargaHewan = this.sapiList[0].price[1];
            break;
          case "B":
            this.selectedPrice = this.sapiList[1].price[1];
            this.selectedItem.hargaHewan = this.sapiList[1].price[1];
            break;
          case "C":
            this.selectedPrice = this.sapiList[2].price[1];
            this.selectedItem.hargaHewan = this.sapiList[2].price[1];
            break;
          default:
            return false;
        }
      }
    },

    addProduct() {
      let item = this.selectedItem;

      let url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        this.whatsAppAdmin
      )}&text=*Halo%2C%20saya%20mau%20pesan%20hewan%20qurban*%0A%0A*Nama*%20%3A%20${encodeURIComponent(
        item.namaLengkap
      )}%0A*HP*%20%3A%20${encodeURIComponent(
        item.nomorWA
      )}%0A*Alamat*%20%3A%20${encodeURIComponent(
        item.alamatLengkap
      )}%0A*Tipe%20Hewan*%20%3A%20${encodeURIComponent(
        this.productParam + " tipe " + item.jenisHewan
      )}%0A*Tipe%20Qurban*%20%3A%20${encodeURIComponent(
        item.jenisQurban
      )}%0A*Harga*%20%3A%20${encodeURIComponent(
        item.hargaHewan.toLocaleString()
      )}%0A*Mau%20menerima%20daging*%20%3A%20${encodeURIComponent(
        this.mauMenerimaDaging
      )}`;

      window.open(`${url}`, "_blank");
    },

    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },

    validateOrder() {
      let nama = this.selectedItem.namaLengkap;
      let wa = this.selectedItem.nomorWA;
      let alamat = this.selectedItem.alamatLengkap;

      if (!nama) {
        this.isValidated.namaEmpty = true;
      }
      if (!wa) {
        this.isValidated.waEmpty = true;
      }
      if (!alamat) {
        this.isValidated.alamatEmpty = true;
      }

      if ((nama, wa, alamat)) {
        this.showModal();
      }
    },

    validationSuccess() {
      let nama = this.selectedItem.namaLengkap;
      let wa = this.nomorWA;
      let alamat = this.selectedItem.alamatLengkap;

      let idCode = "62";
      let selectedNumb = wa.substring(1);
      this.selectedItem.nomorWA = idCode + selectedNumb;

      if (nama) {
        this.isValidated.namaEmpty = false;
      }
      if (wa) {
        this.isValidated.waEmpty = false;
      }
      if (alamat) {
        this.isValidated.alamatEmpty = false;
      }
    },
  },
};
</script>

<style scopped>
.product-container {
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  height: 100vh;
  border: 1px solid #f3f4f6;
  padding-bottom: 0;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); */
}

.card-body {
  padding: 0;
  overflow-y: auto;
}

.product-img {
  height: 250px;
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
  font-size: 16px;
  color: #374151;
}

.product-spec > span {
  font-size: 11px;
  color: #4b5563;
}
.badge-spec {
  background-color: #f3f4f6;
  padding: 3px;
  border-radius: 4px;
}

/* product type */
.product-type-card {
  display: flex;
}
.product-type-card:hover {
  cursor: pointer;
}

.card-product-type {
  width: 100%;
  padding: 4px 10px;
  border: none;
  margin-right: 4px;
  border: 2px solid #f3f4f6;
}
.custom-radio-bullet {
  margin-top: 3px;
}
.selected {
  border: 2px solid #1a70fb;
  color: #1a70fb;
  background-color: #f6faff;
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

/* Qurban type */
.qurban-type-card-wrapper {
  display: flex;
}
.qurban-type-card {
  width: 100%;
  padding: 5px 10px;
  border: none;
  margin-right: 4px;
  border: 2px solid #f3f4f6;
  border-radius: 5px;
  font-weight: 500;
  color: #6b7280;
  font-size: 12px;
}
.qurban-type-card:hover {
  cursor: pointer;
}
.qurbantypeselectedcard {
  border: 2px solid #1a70fb;
  color: #1a70fb;
  background-color: #f6faff;
}

/* User form */
.form-data-user {
  border-top: 1px solid #e5e7eb;
  padding-top: 10px;
}
.form-label {
  color: #9ca3af;
  font-size: 12px;
  font-weight: 500;
}
.custom-form {
  border-radius: 4px;
  border: 1px solid #dce1e7;
  font-size: 11px;
  height: 30px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.custom-form:focus {
  box-shadow: none;
  border-radius: none;
  border: 2px solid #1a70fb;
}
.custom-checkbox {
  margin-top: 7px;
}

/* Card actiom */
.btn-order {
  border: none;
  font-size: 13px;
  padding: 10px;
  background-color: #0066ff;
  color: #fff;
  font-weight: 500;
  border-radius: 7px;
}
.btn-order:hover {
  background-color: #1a70fb;
}
.btn-order:focus {
  background-color: #0066ff;
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

/* Order details */

.order-detail {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.692);
  position: fixed;
  z-index: 99;
}

.order-details {
  width: 100%;
  height: auto;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: absolute;
  bottom: 0;
  padding: 15px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.order-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.order-header-title {
  color: #000;
  font-weight: 500;
}
.order-header-close {
  color: #6b7280;
  font-weight: 500;
  padding: 0px 6px;
  padding-top: 4px;
  border-radius: 50px;
  background-color: #e5e7eb;
}
.order-header-close:hover {
  cursor: pointer;
}

.order-body {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}
.card-product-overview {
  display: flex;
  flex-direction: row;
  border: none;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #f3f4f6;
}
.card-img-overview {
  width: 25%;
  height: 60px;
}
.card-img-overview > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.card-content-overview {
  padding-top: 3px;
  padding-left: 10px;
}

.card-title {
  font-size: 13px;
  margin: 0;
}
.product-type {
  font-size: 11px;
  color: #6b7280;
}
.product-price {
  font-size: 11px;
  font-weight: 600;
  color: #f36e2d;
  margin-top: -10px;
}

.user-info-title {
  font-size: 13px;
  color: #6b7280;
}
.user-info-value {
  font-size: 13px;
  color: #4b5563;
  font-weight: 500;
  margin-top: 2px;
}

.order-action {
  width: 100%;
  display: flex;
}
.order-action > button {
  width: 100%;
}
.btn-cancel {
  background-color: #edf1f7;
  margin-right: 8px;
  border: none;
  color: #6b7280;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
}
.btn-confirm {
  background-color: #0066ff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
  padding: 8px;
}

/* init */
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
.emptyForm {
  border: 2px solid red;
}

/* Responsive */
@media screen and (max-width: 450px) {
  .product-container {
    background-color: coral;
    padding: 0px;
    margin: 0px;
  }
  .product-col {
    margin: 0;
    padding: 0;
  }
  .product-card {
    margin: 0px;
    border-radius: 0;
  }
}
</style>

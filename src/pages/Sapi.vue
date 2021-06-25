<template>
  <div class="container product-container">
    <div class="card product-card">
      <div class="card-body">
        <div class="card-header-action">
          Kurban sapi
        </div>
        <div class="product-img">
          <img
            src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y293fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            class="card-img-top"
          />
        </div>
        <!-- <div class="card-title-wrapper">
          <h5 class="card-title mt-3">Qurban Sapi</h5>
          <h5 class="card-title mt-3 product-price">3.1 - 3.3 Juta</h5>
        </div> -->
        <div class="card-text">
          <span class="product-type-title">Pilih tipe hewan</span>

          <div class="product-type-wrapper">
            <div
              v-for="item in items"
              :key="item.type"
              class="card card-product-type"
              :class="{ selected: isSelected == item.type }"
              @click="
                {
                  (isSelected = item.type), (isChecked = item.type);
                }
              "
            >
              <div class="form-check">
                <input
                  class="form-check-input custom-radio-bullet"
                  type="radio"
                  value="option1"
                  @change="isChecked = item.type"
                  :checked="isChecked == item.type"
                />
                <label
                  class="form-check-label label-tipe-hewan"
                  for="exampleRadios1"
                >
                  Tipe {{ item.type }}
                </label>
                <p class="product-spec">Berat {{ item.weight }} KG</p>
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-primary btn-block btn-order"
            >Pesan Sapi tipe {{ isChecked }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          type: "A",
          weight: "200-230",
          price: [23800000, 3400000],
        },
        {
          type: "B",
          weight: "180-200",
          price: [22750000, 3250000],
        },
        {
          type: "C",
          weight: "150-180",
          price: [21700000, 3100000],
        },
      ],
      isChecked: "",
      isSelected: "",
    };
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
.product-card {
  width: 400px;
  border: 1px solid #fafbfb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.product-img {
  height: 300px;
}
.product-img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.card-title-wrapper {
  display: flex;
  justify-content: space-between;
}
.product-price {
  color: coral;
  font-weight: 600;
}

.card-text {
  display: flex;
  flex-direction: column;
}

.product-type-wrapper {
  display: flex;
}
.product-type-wrapper:hover {
  cursor: pointer;
}

.card-product-type {
  padding: 2px 10px;
  border: none;
  margin-top: 2px;
  margin-right: 2px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.custom-radio-bullet {
  margin-top: 8px;
}
.selected {
  border: 1px solid #1a70fb;
}

.product-type-title {
  color: #374151;
  font-size: 15px;
}
.label-tipe-hewan {
  font-weight: 500;
  color: #374151;
  font-size: 12px;
}
.product-spec {
  font-size: 10px;
  margin-bottom: 0;
  margin-top: -3px;
  color: #6b7280;
}

.btn-order {
  border: none;
  font-size: 14px;
  padding: 10px;
  margin-top: 15px;
  background-color: #754ee4;
  color: #fff;
  font-weight: 500;
}
.btn-order:hover {
  background-color: #754ee4;
}
</style>

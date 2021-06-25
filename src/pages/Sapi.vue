<template>
  <div class="container product-container">
    <div class="card product-card">
      <div class="card-body">
        <div class="product-img">
          <img
            src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y293fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            class="card-img-top"
          />
        </div>
        <div class="card-title-wrapper">
          <h5 class="card-title mt-3">Qurban Sapi</h5>
          <h5 class="card-title mt-3 product-price">3.1 - 3.3 Juta</h5>
        </div>
        <div class="card-text">
          <span>Pilih tipe hewan</span>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              Default radio
            </label>
          </div>
        </div>
        <a href="#" class="btn btn-primary btn-block btn-order"
          >Pesan {{ selectedItem }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: "Sapi tipe A",
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
  width: 200px;
}
.btn-tipe-hewan {
  font-size: 12px;
}

.btn-order {
  border: none;
  font-size: 14px;
  padding: 10px;
  margin-top: 30px;
  background-color: #5256c5;
}
</style>

<template>
  <div>
    <div class="container">
      <div class="row p-5">
        <div class="col-sm-6">
          <router-link to="/sapi">
            <div class="card product-card">
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Qurban Sapi</strong>
                </h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <img
                  src="https://media.flaticon.com/dist/min/img/home/cards-products-section/icons.png"
                  alt=""
                />
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-sm-6">
          <router-link to="/kambing">
            <div class="card product-card">
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Qurban Kambing</strong>
                </h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <img
                  src="https://media.flaticon.com/dist/min/img/home/cards-products-section/stickers.png"
                  alt=""
                />
              </div></div
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  background-color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
}
.card-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 30vh;
}
.product-card {
  background-color: #fff;
  border: none;
  border: 1px solid #fafbfb;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-decoration: none;
}

.card-body > img {
  width: 100%;
}
</style>

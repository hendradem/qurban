<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 p-0 custom-col">
          <router-link to="/detail/sapi">
            <div class="card menu-card orange">
              <div class="menu-icon orange-dark">
                <ion-icon name="layers-outline"></ion-icon>
              </div>
              <div class="menu-text">
                <h5>Qurban Sapi</h5>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-sm-3 p-0 custom-col">
          <router-link to="/detail/kambing">
            <div class="card menu-card purple">
              <div class="menu-icon purple-dark">
                <ion-icon name="copy-outline"></ion-icon>
              </div>
              <div class="menu-text">
                <h5>Qurban Kambing</h5>
              </div>
            </div>
          </router-link>
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
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-card {
  width: 200px;
  height: 200px;
  margin: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
.menu-card:hover {
  cursor: pointer;
}
.menu-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 10px;
  color: #fff;
  border-radius: 8px;
}
.menu-text > h5 {
  font-weight: 600;
  color: #fff;
  font-size: 18px;
}

a {
  text-decoration: none;
}
.orange {
  background-color: #f36e2d;
}
.orange-dark {
  background-color: #e16134;
}
.purple {
  background-color: #754ee4;
}
.purple-dark {
  background-color: #5943bd;
}
</style>

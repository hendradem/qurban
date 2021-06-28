<template>
  <div>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-sm-3 p-0 custom-col no-gutters">
          <router-link to="/detail/sapi">
            <div class="card menu-card orange">
              <div class="menu-card-overlay-orange"></div>
              <img
                src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y293fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div class="menu-text">
                <h5>Qurban Sapi</h5>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-sm-3 p-0 custom-col no-gutters">
          <router-link to="/detail/kambing">
            <div class="card menu-card purple">
              <div class="menu-card-overlay-purple"></div>
              <img
                src="https://images.unsplash.com/photo-1589300719527-1b9246315064?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
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
  padding: 0px;
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
.menu-card > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.menu-card:hover {
  cursor: pointer;
}
.menu-card-overlay-purple {
  width: 100%;
  height: 100%;
  background-color: #764ee4c7;
  z-index: 99;
  position: absolute;
  border-radius: 10px;
}

.menu-card-overlay-orange {
  width: 100%;
  height: 100%;
  background-color: #f36f2dd2;
  z-index: 99;
  position: absolute;
  border-radius: 10px;
}

.menu-text {
  position: absolute;
  z-index: 99;
}
.menu-text > h5 {
  font-weight: 600;
  color: #fff;
  font-size: 18px;
  margin-top: 100px;
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

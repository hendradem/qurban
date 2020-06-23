<template>
   <div>
       <nav class="navbar my-nav navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
            <div class="container">
            <a class="navbar-brand" href="#">
                <img src="@/assets/images/logo/mpd.png" width="90">
                <img class="ml-3" src="@/assets/images/logo/mpr.png" width="70">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"> HOME </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="dokumentasi"> DOKUMENTASI </router-link>
                    </li>
                    
                </ul>
            </div>
            </div>
        </nav>

   </div>
</template>

<script>
export default {
    name : "Navbar"
}
</script>

<style scoped>
    .my-nav {
        margin-bottom: 100px;
    }
    .nav-link {
        font-size: 14px;
        font-weight: 800;
        color: #5a41c7;
    }
</style>
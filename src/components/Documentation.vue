<template name="Documentation">
    <div class="container doumentation-container" >

    <div>
        <b-jumbotron header="Dokumentasi Qurban" lead="Dokumentasi dan daftar shohibul qurban">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit iste, molestiae, fugiat nostrum eligendi necessitatibus quis, consectetur suscipit velit ut dolore voluptatibus quidem reprehenderit animi mollitia natus. Totam, quo.</p>
            <b-button class="btn btn-success"> Lihat dokumentasi </b-button>
        </b-jumbotron>
    </div>

    <div class="shohibul-qurban-search">
        <b-form-input @keyup="fetchUserData" id="input-2" required placeholder="Masukkan nama anda"></b-form-input>
    </div>

    <div class="shohibul-qurban mt-4">
        <div class="container">
            <div class="row bg-dark p-0">
                <div class="col-md-4">
                    <b-card>
                        <b-card-title>Title</b-card-title>
                        <b-card-text>
                            This card has supporting text below as a natural lead-in to additional content.
                        </b-card-text>
                        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
                    </b-card>
                    <b-card>
                        <b-card-title>Title</b-card-title>
                        <b-card-text>
                            This card has supporting text below as a natural lead-in to additional content.
                        </b-card-text>
                        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
                    </b-card>
                </div>
            </div>
        </div>
    </div>

    

    </div>
</template>

<style scoped>
    .doumentation-container {
        padding-top: 100px;
    }
</style>

<script>
    export default {
        methods : {
            fetchUserData(){
                
            }
        }
    }
</script>
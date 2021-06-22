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
           <div class="row">
            <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 m-2"
            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
            <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 m-2"
            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
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
<template>
    <div>
        <Header/>
        <Qurban/>
        <Step/>
        <Whatsapporder/>
        <Request/>
    </div>
</template>

<script>
    import '@/vendor.js'
    import Header from '@/components/Header.vue'
    import Qurban from '@/components/Qurban.vue'
    import Step from '@/components/Step.vue'
    import Whatsapporder from '@/components/Whatsapporder.vue'
    import Request from '@/components/Request.vue'

    export default {
        name: 'Home',
        components: {
            Header, Qurban, Step, Whatsapporder, Request
        }
    }

</script>
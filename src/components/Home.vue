<template>
    <div id="home">
        <!--轮播图-->
       <mt-swipe :auto="4000" class="swipe">
            <mt-swipe-item v-for="item in imgsList" :key="item.id">
                <img :src="item.imgUrl"/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name:"Home",
        data() {
            return {
                imgsList:[
                    {imgUrl: require('../assets/banner1.jpg'),id: '1'},
                     {imgUrl: require('../assets/banner2.jpg'),id: '2'}
                ]
            }
        },
        created() {
            // this.$axios.get("getlunbo")
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        },
    }
</script>

<style scoped>
.swipe{
    height: 250px;
}
.swipe img{
    width: 100%;
}
</style>
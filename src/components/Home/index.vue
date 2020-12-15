<template>
    <div id="home">
        <!--轮播图-->
       <mt-swipe :auto="4000" class="swipe">
            <mt-swipe-item v-for="img in bannerImgs" :key="img.id">
                <img :src="img.imgUrl"/>
            </mt-swipe-item>
        </mt-swipe>
        <div class="home-grid">
            <ul>
                <li v-for="grid in grids" :key="grid.id">
                    <router-link :to="grid.router">
                        <img :src="grid.src"/>
                    </router-link>
                    <p>{{grid.title}}</p>
                </li>
            </ul>
        </div>


    </div>
</template>

<script>
    import src1 from '../../assets/img/home/news.png'
    import src2 from '../../assets/img/home/graphic.png'
    import src3 from '../../assets/img/home/product.png'
    import src4 from '../../assets/img/home/news1.png'
    import src5 from '../../assets/img/home/leave.png'
    import src6 from '../../assets/img/home/contact.png'


    const grids = [
        {id:1,src:src1,title:"新闻资讯",router:{name:'news.list'}},
        {id:2,src:src2,title:"图文分享",router:{name:'news.list'}},
        {id:3,src:src3,title:"商品展示",router:{name:'news.list'}},
        {id:4,src:src4,title:"资讯",    router:{name:'news.list'}},
        {id:5,src:src5,title:"在线留言",router:{name:'news.list'}},
        {id:6,src:src6,title:"联系我们",router:{name:'news.list'}}
]
    export default {
        name:"Home",
        data() {
            return {
                bannerImgs:[
                    {imgUrl: require('../../assets/img/home/banner1.jpg'),id: '1'},
                    {imgUrl: require('../../assets/img/home/banner2.jpg'),id: '2'}
                ],
                grids
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
    width: auto;
    max-width: none !important;
    height: 100%;
}
.home-grid{
    margin-top: 10px;
   
}
.home-grid ul{
    display: flex;
    flex-wrap: wrap;
}
.home-grid li{
    width: 33.3%;
    text-align: center;
    padding-top: 20px;
}
.home-grid li img{
    width: 36px;
    margin-bottom: 5px;

}

</style>
<template>
    <div>
        <p><span class="gopage" @click="$router.go(-1)"></span>我是新闻详情页</p>
        <h2>{{detail.title}}</h2>
        <p>{{detail.content}}</p>
    </div>
</template>

<script>
    export default {
        name:"newsdetail",
        data() {
            return {
                detail:""      
            }
        },
        created() {
            var id= this.$route.query.id;
            var url = "newsdetail?id="+id+"";
            this.$axios.get(url)
            .then(res=>{
                this.detail = res.data.data[0];
                console.log(res);
            })
            .catch(err=>{
                console.log("新闻详情加载失败");
            })
        }
    }
</script>

<style scoped>
.gopage{
    width: 10px;
    height: 10px;
    display: inline-block;
    background: red;
}
</style>
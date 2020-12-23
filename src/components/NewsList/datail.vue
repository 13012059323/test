<template>
    <div>
        <nav-bar title="新闻详情"/>
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
    width: 20px;
    height: 20px;
    display: inline-block;
    background: #000000;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
}
</style>
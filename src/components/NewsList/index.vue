<template>
    <div class="new-list">
        <nav-bar title="新闻列表"/>
        <ul>
            <li v-for="news in newslist" :key="news.id">
                <div class="img-box">
                    <router-link :to="{name:'news.datail',query:{id:news.id}}">
                        <img :src="news.img"/>
                    </router-link>
                </div>
                <div class="content">
                    <p class="title">{{news.title}}</p>
                    <p>{{news.descript}}</p>
                    <p>价格：{{news.price}}</p>
                    <p>上传时间：{{news.time | coverTime("YYYY-MM-DD")}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"newslist",
        data() {
            return {
                newslist:''
            }
        },
        created() {
            this.$axios.get("newlist")
            .then( (response)=> {
                let data = response.data.data["list"];
                this.newslist = data;
            })
            .catch((error)=> {
                console.log(error);
            });
        }
    }
</script>

<style scoped>
.new-list{
}
.new-list li{
    overflow: hidden;
    padding: 10px 20px;
}
.new-list li .img-box{
    width: 80px;
    height: 80px;
    float: left;
    margin-right: 15px;
    text-align: center;
    border: 1px solid #ccc;
    line-height: 80px;
}
.new-list .content{
    overflow: hidden;
    text-align: left;
}
.new-list .title{
    font-size: 18px;
    padding-bottom: 5px;
}
</style>
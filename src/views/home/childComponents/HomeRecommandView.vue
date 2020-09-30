<template>
    <div class="recommand">
        <div v-for="item in recommands" :key="item.img" class="recommand-item">
            <a :href="item.link">
                <img :src="item.img" alt="">
            <p>{{item.title}}</p>
            </a>            
        </div>
    </div>
</template>
<script>
export default {
    name : "HomeRecommandView",
    props:{
        recommands:{
            type:Array,
            default(){
                return[];
            }
        }
    }
    
}
</script>
<style scoped>
    .recommand{
        display: flex;
        width: 100vw;
        text-align: center;
        justify-content: space-around;
        font-size: 15px;
        padding: 10px 0px 10px 0px;
        border-bottom: 10px solid rgba(189, 190, 199, 0.5);
    }
    .recommand img{
        width: 50px;
        height: 50px;
    }
</style>
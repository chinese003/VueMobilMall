<template>
    <div class="goodslist">
        <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item">

        </goods-list-item>
    </div>
</template>
<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem'

export default {
    name:'GoodsList',
    components:{
        GoodsListItem,
    },
    props:{
        goods:{
            type: Array,
            default(){
                //id,title,link,img,price,discountPrice,orgPrice,
                return []
            }
        }
    }
}
</script>
<style scoped>
    #goods-list {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
   }
</style>
<template>
    <div id="tab-control">
        <!-- :class表示： active这个class存在与否取决于后面的条件 -->
        <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active:currentIndex==index}" @click="itemClick(index)">         
            <span>{{item}}</span>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"TabControl",
    data(){
        return{
            currentIndex:0,
            
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        itemClick(index){            
            this.currentIndex=index;            
            //将点击的元素下标传回父元素,$emit 触发父组件的自定义事件
            this.$emit('tabClick',index);
        }
    }
}
</script>
<style scoped>
    #tab-control{
        display: flex;
        justify-content: space-around;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        
        background-color: #fff;
        
    }
    #tab-control .tab-control-item span{
        padding: 6px;
    }
    .active{
        color: var(--color-tint);  
        font-weight: 30;     
    }
    .active span{
        border-bottom: 2px solid var(--color-tint);
    }
</style>
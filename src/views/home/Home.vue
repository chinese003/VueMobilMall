<template>
    <div class="home">
        <nav-bar class="home-nav-bar">
            <div slot="nav-bar-center">Home Nav</div>
        </nav-bar>

        <!-- <div v-show="isShowRefreshMsg" class="refreshMsg">{{msg}}</div> -->

        <tab-control v-show="isTabFixed" class="tab-control tab-control2" :titles="['pop','new','sell']" @tabClick="tabClick" refs="tabControl1"/>        
        <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
        <home-recommand-view :recommands="recommands"/>
        <home-feature-view></home-feature-view>
        <goods-list :goods="showGoods"/>
    </div>
</template>
<script>
//子组件
import HomeSwiper from '@/views/home/childComponents/HomeSwiper';
import HomeRecommandView from '@/views/home/childComponents/HomeRecommandView';
import HomeFeatureView from '@/views/home/childComponents/HomeFeatureView';

//公共组件
import NavBar from '@/components/common/navbar/NavBar';
import TabControl from '@/components/content/tabControl/TabControl';
import GoodsList from '@/components/content/goods/GoodsList';

//封装的工具函数
import {getHomeMultidata,getHomeGoods} from "@/network/home";

export default {
    name:'Home',
    components:{
        NavBar,
        TabControl,
        HomeSwiper,
        HomeRecommandView,
        HomeFeatureView,
        GoodsList,

    },
    data(){
        return{
            msg:'下拉刷新',
            isShowRefreshMsg:true,
            isTabFixed:true,
            banners:[],
            recommands:[],
            currentType:'pop',
            goods:{
                'pop':{page: 0,list:['']},
                'new':{page: 0,list:['']},
                'sell':{page: 0,list:['']}
            },



        }
    },
    methods:{
        tabClick(index){
            //Home组件无法直接对子组件中data里面的变量赋值            
            this.$refs.TabControl1.currentIndex=index;
            //this.$refs.TabControl2.currentIndex=index;
        },
        swiperImgLoad(){
            //this.mixinRefresh();
            
        },
        /**
         * 网络请求相关的方法
         */
        getHomeMultidata(){            
            getHomeMultidata().then(res=>{
                console.log(res);
                this.banners=res;
                this.recommands=res;
                // this.recommends=res.data.recommend.list;
            })            
        },
        getHomeGoods(type){
            //请求商品数据
            const page=this.goods[type].page+1;
            getHomeGoods(type,page).then(res=>{
                console.log('getHomeGoods function output:');                
                this.goods[type].list.push(...res);
                console.log(type);
                console.log(this.goods[type].list);
                this.goods[type].page+=1;
            })
        }
    },
    computed:{
        showGoods(){                                    
            return this.goods[this.currentType].list
        },
        
    },
    //组件创建好就请求数据
    created(){
        //请求轮播图数据
        this.getHomeMultidata();
        //请求商品数据
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },
    //离开本组件触发
    deactivated(){
        
        //2.取消全局时间的监听
        // this.$bus.$off('itemImageLoad',this.itemImgListener)
    }
    
    
}
</script>

<style scoped>
    #home{
        margin-bottom: 49px;
        overflow: hidden;
    }
    .home-nav-bar{
        color: white;
        background-color: var(--color-tint);
    }
    .tab-control{
        
    }
</style>
<template>
    <div class="main-tab-bar">
        <TabBar class="tab-bar">
            <TabBarItem path='/home' activeColor='blue'>
                <img slot="item-icon" src='@/assets/img/Home.svg'>
                <img slot="item-icon-active" src='@/assets/img/Home_active.svg'>
                <div slot="item-text">
                    Home
                </div>
            </TabBarItem>
            <TabBarItem path='/Category' activeColor='blue'>
                <img slot="item-icon" src='@/assets/img/Category.svg'>
                <img slot="item-icon-active" src='@/assets/img/Category_active.svg'>
                <div slot="item-text">
                    Category
                </div>
            </TabBarItem>
            <TabBarItem path='/Detail' activeColor='blue'>
                <img slot="item-icon" src='@/assets/img/Detail.svg'>
                <img slot="item-icon-active" src='@/assets/img/Detail_active.svg'>
                <div slot="item-text">
                    Detail
                </div>
            </TabBarItem>            
            <TabBarItem path='/Profile' activeColor='blue'>
                <img slot="item-icon" src='@/assets/img/Profile.svg'>
                <img slot="item-icon-active" src='@/assets/img/Profile_active.svg'>
                <div slot="item-text">
                    Profile
                </div>
            </TabBarItem>
        </TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
require('@/assets/iconfont/iconfont.js/')

export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>
<style scoped>
    
.tab-bar{
  display: flex;
  background-color: #f2f2f2;

  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, -2);
}

.tab-bar-item{
  flex: auto;
  text-align: center;
  height: 49px;
  font-size: 20px;
}
.tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>
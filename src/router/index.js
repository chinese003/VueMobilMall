import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:()=>import('@/views/home/Home'),
        meta:{
            title:'首页'
        }
    },
    {
        path:'/Category',
        component:()=>import('@/views/category/Category'),
        meta:{
            title:'分类'
        }
    },
    {
        path:'/shopCart',
        component:()=>import('@/views/shopCart/ShopCart'),
        meta:{
            title:'购物车'
        }
    },
    {
        path:'/Profile',
        component:()=>import('@/views/profile/Profile'),
        meta:{
            title:'购物车'
        }
    },
    {
        path:'/Detail',
        component:()=>import('@/views/detail/Detail'),
        meta:{
            title:'购物车'
        }
    },
]

const router= new Router({
    routes,
    base:process.env.BASE_URL,
    mode:'history',
    // linkActiveClass:'active'
})

// 前置钩子：从from跳转到to
// from 来的路由
// to 要去的路由

router.beforeEach((to,from,next)=>{
    document.title=to.matched[0].meta.title//给目标路由的页面的title赋值
    next()//必须调用，不调用不会跳转
})
/**
 * 后置钩子
 */
router.afterEach((to, from) => {
    // console.log('后置钩子调用了----')
})

export default router



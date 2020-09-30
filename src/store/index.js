import Vue from 'vue'
import Vuex from 'vuex'
import { UPDATEINFO } from './mutation-type'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store=new Vuex.Store({
    state:{//状态集合
        count:0,//具体的状态数据
        students:[
            {id:1,name:'aaa',age:'18'},
            {id:2,name:'bbb',age:'30'},
            {id:3,name:'ccc',age:'25'},
            {id:4,name:'ddd',age:'37'}
        ],
        user:{
            name:'zhangsan',
            sex:'男'
        }
    },
    getters:{
        getStudents:state=>{
            return state.students.filter(s=>s.age>26)
        },
        getStudentsCount:state=>{
            return state.students.filter(s=>s.age>20).length
        },
        getStuById:state=>id=>{
            return state.students.find(s=>s.id==id)
        }
    },
    mutations:{//操作修改state（状态）,不要在mutation中进行异步操作，否则vue-tools无法跟踪状态
        increment(state){//add
            state.count++
        },
        decrement(state){//substract
            state.count--
        },
        //普通提交风格
        addCount(state,count){//第二个参数count，第一个参数始终是state
            state.count+=count
        },
        //特殊提交风格，传过去一个payload(载荷)
        addCount(state,payload){//此时传入的就不是一个count值了，而是一个对象
            state.count+=payload.count
        },
        addStu(state,stu){
            state.students.push(stu)//向数组添加指定的stu
            console.log(state.students.find(s=>s.id==stu.id)) //输出打印查看 state中是否增加了添加的stu
        },
        updateInfo(state,age){
            //state.user.age=age //Vuex的store的state是响应式的，当state中的数据发生改变时，Vue组件会自动更新
            Vue.set(state.user,'age',age)
            Vue.delete(state.user,age)//响应式删除
        },
        updateName(state,name){
            //state.user.name=name
            Vue.set(state.name,name)
        }

    },
    actions:{
        //context :上下文
        aUpdateInfo(context,name){
            let msg='响应成功'
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    context.commit(UPDATEINFO,102)
                    resolve(msg)
                }, 1000);
            })
            // setTimeout(() => {
            //     context.commit(UPDATEINFO,112);
            //     //context.commit(updateName,name)?报错
            // }, 1000);
        }
    }
})

//3、导出
export default store
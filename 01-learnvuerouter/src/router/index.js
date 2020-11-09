import Vue from 'vue'
import Router from 'vue-router'
// import HomeMessage from "../components/HomeMessage";
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User"

//一个懒加载会对应一个js文件
const Home=()=>import('../components/home')
const About=()=>import('../components/About')
const User=()=>import('../components/User')
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
const Profile=()=>import('../components/Profile')

//1.通过vue.use(插件)，安装插件
Vue.use(Router)

//2.创建Router对象
const router = new Router({
  //配置路由和组件之间的应用关系
  routes: [
    {
      //属于默认路径
      path: '',
      // redirect重定向
      redirect:()=>import('../components/home')
    },
    {
      path: '/home',
      // name: 'HelloWorld',
      component: Home,
      meta:{
        title:'首页'
      },
      children:[
        // {
        //   path:'',
        //   redirect:'news'
        // },
        {
          path:'news',
          component:HomeNews
        },{
          path:'message',
          component:HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta:{
        title:'关于'
       },
      // beforeEnter:(to,from,next)=>{
      //     // console.log("打印老太太")
      // }
    },
    {
      path: '/user/:userid',
      component: User,
      meta:{
        title:'用户'
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        title:'档案'
      },
    }
  ],
  mode:'history',
  linkActiveClass:'active'
})

//前置的守卫guard
router.beforeEach((to,from,next)=>{
  //从from跳转to
  // document.title=to.meta.title
  // console.log('--------')
  // console.log(to)
  if (to.matched.length!=0){
    document.title = to.matched[0].meta.title;
  }
  next()  //可以查看路由连接内容
})

//后置钩子（hook）
router.afterEach((to,from)=>{

})
//3. 将router对象传入到vue实例
export default router

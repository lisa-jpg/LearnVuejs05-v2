<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      messages:'你好吗',
      path:'/home/news'
    }
  },
  created() {
    //进入就创建
    console.log('home created');
  },
  destroyed() {
    //进入就销毁
    console.log('home destroyed')
  },
  //这两个函数，只有该组件被保持了状态应用keep-alive时，才是有效的
  activated() {
    console.log('activated')
    this.$router.push(this.path)
  },
  // beforeRouteLeave(to,from,next){
  //    console.log(this.$route.path)
  //   this.path = this.$route.path;
  //   next()
  // },
  deactivated() {
    // console.log(this.$route.path)
    console.log('deactivated')
    // this.path = this.$route.path
  }
  // created() {
  //   // 创建组件后的会回调的
  //   console.log('created')
  //   document.title='首页'
  // },
  // mounted() {
  //   // template挂在到整个dom上会回调的
  //   console.log('mounted')
  // },
  // updated() {
  //   // 界面刷新进行回调的
  //   console.log('updated')
  // }
}
</script>

<style scoped>

</style>

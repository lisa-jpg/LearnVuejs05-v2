<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是童虎相关挂信息哈哈哈哈</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userid}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "user",
  created() {
    console.log('user created')
  },
  destroyed() {
    console.log('user destroyed')
  },
  computed:{
    userId(){
      //this.$route  当前那个路由处于活跃状态就是指哪个路由
      //this.$route.params.userId中的uerid是和index.js里的path后的一样
      return this.$route.params.userId
    }
  },
  methods:{
    btnClick(){
      //所有的组件都继承自vue的原型
      console.log(this.$router)
      console.log(this.$route)
    }
  }
}
</script>

<style scoped>

</style>

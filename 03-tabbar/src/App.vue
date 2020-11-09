<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <TabBarItem path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/qwe.jpg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/qwe.jpg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/qwe.jpg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/qwe.jpg" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>
<!--      <div class="tab-bar-item">-->
<!--        <img src="../../assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">-->
<!--        <div>首页</div>-->
<!--      </div>-->
<!--      <div class="tab-bar-item">-->
<!--        <img src="../../assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">-->
<!--        分类-->
<!--      </div>-->
<!--      <div class="tab-bar-item">-->
<!--        <img src="../../assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">-->
<!--        购物车-->
<!--      </div>-->
<!--      <div class="tab-bar-item">-->
<!--        <img src="../../assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">-->
<!--        我的-->
<!--      </div>-->
    </tab-bar>
  </div>
</template>

<script>
// 引入另一个页
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'App',
  // 注册引入的文件名
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
/*引入css文件*/
@import "./assets/css/base.css";

</style>

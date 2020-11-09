<template>
  <div id="app">
    <tab-bar>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/t01aff729fea4a7cc85.jpg" alt="">
        <div slot="item-text">首页</div>
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
@import "./assets/css/base.css"

</style>

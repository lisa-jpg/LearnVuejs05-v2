<template>
<!--  所有的item都展示同一个图片，同一个文字-->
  <div class="tab-bar-item"  @click="itemClick">
    <div  v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
<!--    <div :class="{active:isActive}">-->
<!--      <slot name="item-text"></slot>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive () {
      // return this.$route.path.indexOf(this.path)  选中的是红色的图片
      // return this.$route.path.indexOf(this.path) !== -1  选中的是机器人的图片
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar {
  display:flex ;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow:0 -1px 1px rgba(100,100,100,0.1);
}
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-buttom: 2px;
}
/*.active{*/
/*  color: #42b983;*/
/*}*/
</style>

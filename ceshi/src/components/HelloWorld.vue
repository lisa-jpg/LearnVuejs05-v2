<template>
  <div class="hello">
    <button @click="send">12312321</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    send(){
      axios({//格式a
        method:'get',
        url:'http://192.168.2.88/consumer/payment/get/31',
        param:{
          name:'123',
          age:19
        }
      }).then(function(resp){
        console.log(resp.data);
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.statusText);
      });
    }
  //   getdata: function() {
  //     var url = "http://192.168.2.88/consumer/payment/get/31";
  //     // 发送请求:将数据返回到一个回到函数中
  //     var that = this;
  //     // 并且响应成功以后会执行then方法中的回调函数
  //     axios.get(url).then(function(result) {
  //       // result是所有的返回回来的数据
  //       // 包括了响应报文行
  //       // 响应报文头
  //       // 响应报文体
  //       console.log(result.data);
  //       that.goodlist = result.data.data;
  //
  //     });
  //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

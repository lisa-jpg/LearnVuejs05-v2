<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="paymentid" placeholder="paymentid"/>
    <button @click="getPayment">获取</button>
    <input type="text" v-model="paymentForm.serial" placeholder="serial"/>
    <button @click="savePayment">添加</button>
    <div v-for="item in result" :key="item.id" v-text="item.id"></div>
    <div v-for="item in result" :key="item.serial" v-text="item.serial"></div>
    <div v-text="result.code"></div>
    <div v-text="result.message"></div>
  </div>
</template>

<script>

export default {
  name: 'Payment',
  data(){
    return{
      paymentForm:{
        serial:""
      },
      paymentid:"",
      result:[]
    };
  },
  props: {
    msg: String,
  },
  methods: {
    getPayment: function () {
      this.axios({
        method: 'get',
        url: 'http://192.168.2.88/consumer/payment/get/'+this.paymentid
      }).then(res => {
        console.log(res.data);
        this.result = res.data;
      }).catch(error => {
        console.log(error);
      });
    },
    savePayment: function () {
      let _this = this;
      console.log(_this.paymentForm.serial)
      this.axios({
        method: 'get',
        url: 'http://192.168.2.88/consumer/payment/create',
        params: {serial:_this.paymentForm.serial},
        timeout: 1000
      }).then(res => {
        console.log(res.data);
        this.result = res.data;
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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

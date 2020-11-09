
import request from '@/utils/request'


//获取数据
const get = (param) => {
  return request({
    url: 'http://192.168.2.88/consumer/payment/get/31',//接口url
    method: 'get',
    params: param
  })
}

export default {
  get,
}

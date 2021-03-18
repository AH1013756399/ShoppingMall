import axios from 'axios'

export function request(config) {
  return new Promise((resolve,reject) => {
    const instance = axios.create({
          baseURL: 'http://123.207.32.32:8000',
          baseURL: 'http://106.54.54.237:8000',
          timeout: 1000
        })

        instance.interceptors.request.use(config => {
          // console.log(config);
          return config
        },err => {
          // console.log(err);
        })
        instance.interceptors.response.use(res => {
          // console.log(res);
          return res.data
        },err => {
          console.log('网址错误啦！！！！！');;
        })
      
        instance(config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
  })

}


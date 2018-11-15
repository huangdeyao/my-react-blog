import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://miniapps.markor.net'
// miniapps.markor.net
// axios.defaults.baseURL = 'https://markorwechat.markor.net'
// axios.defaults.baseURL = 'http://118.24.147.11:8888'
// axios.defaults.baseURL = 'http://39.107.85.146:8080'
// 添加请求拦截器 http://39.107.85.146:8080

axios.interceptors.request.use(
  config => {
    let token = store.state.user.token
    // console.log('=token===========>' + token)
    // console.log(token)
    // console.log(Util.isEmpty(token))
    if (Util.isEmpty(token)) {
      console.log('=token====urlencoded=======>' + token)
      config.auth = {username: 'devglan-client', password: 'devglan-secret'}
      config.headers = {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'}
    } else {
      console.log('=token=====json======>' + token)
      // config.headers = {'Content-type': 'application/json; charset=utf-8'}
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })

// 添加响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error && error.response) {
      console.log('-----status-------->' + error.response.status)
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break

        case 401:
          // refreshToken()
          error.message = '未授权，请登录'
          break

        case 403:
          error.message = '拒绝访问'
          break

        case 404:
          // router.replace({
          //   name: 'page404',
          //   query: {
          //     redirect: router.currentRoute.fullPath
          //   }
          // })
          error.message = `请求地址出错: ${error.response.config.url}`
          break

        case 408:
          error.message = '请求超时'
          break

        case 500:
          error.message = '服务器内部错误'
          break

        case 501:
          error.message = '服务未实现'
          break

        case 502:
          error.message = '网关错误'
          break

        case 503:
          error.message = '服务不可用'
          break

        case 504:
          error.message = '网关超时'
          break

        case 505:
          error.message = 'HTTP版本不受支持'
          break

        default:
      }
      console.log('-----error.message-------->', error.message)
      const messageConf = {
        showClose: true,
        message: error.message,
        type: 'error',
        duration: 3000
      }
      Message(messageConf)
    } else {
      error.message = '服务器出错'
      // router.replace({
      //   name: 'page404',
      //   query: {
      //     redirect: router.currentRoute.fullPath
      //   }
      // })
    }
    return Promise.reject(error)
  }
)
// 刷新token的请求方法
function refreshToken () {
  console.log('-------------')
  console.log(store.state.user)
  console.log('token----' + store.state.user.token)
  console.log('refreshToken-----' + store.state.user.refreshToken)
  let params = new URLSearchParams()
  params.append('grant_type', 'refresh_token')
  params.append('refresh_token', store.state.user.refreshToken)
  let url = '/oauth/token'
  store.state.user.token = ''
  axios.post(url, params).then(res => {
    console.log('-------succes--------')
    store.state.user.token = res.data.access_token
    store.state.user.refreshToken = res.data.refresh_token
    // console.log('-------succes----token----' + store.state.user.token)
    // console.log('-------succes----token----' + store.state.user.refreshToken)
  }).catch(error => {
    // console.log('------axios-----error-->' + error.response.status)
    console.log(error)
    router.replace({
      name: 'login',
      query: {
        redirect: router.currentRoute.fullPath
      }
    })
  })
}

export default {
  fetchGet (url, params = {}) {
    let token = store.state.user.token
    if (token !== '') {
      url = url + '?access_token=' + token
    }
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        console.log('------fetchGet-----error')
        console.log(error)
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    let token = store.state.user.token
    if (token !== '') {
      url = url + '?access_token=' + token
    }
    console.log(url)

    // console.log('============>' + token)
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res)
      }).catch(error => {
        console.log('------fetchPost-----error')
        console.log(error)
        reject(error)
      })
    })
  },
  fetchUpload (url, params = {}) {
    let token = store.state.user.token
    if (token !== '') {
      url = url + '?access_token=' + token
    }
    console.log(url)
    // console.log('============>' + token)
    return new Promise((resolve, reject) => {
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      //  添加请求头
      axios.post(url, params, config).then(res => {
        resolve(res)
      }).catch(error => {
        console.log('------fetchPost-----error')
        console.log(error)
        reject(error)
      })
    })
  }
}

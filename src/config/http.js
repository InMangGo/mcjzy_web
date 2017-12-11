import axios from 'axios'

if (process.env.NODE_ENV === 'production') {
  var baseURL = 'http://api.ricks.cn/v1'
} else {
  baseURL = 'http://localhost:3000/v1'
}

const config = {
  baseURL: baseURL,
  timeout: 5000
}

var Http = axios.create(config)

// 添加请求拦截器
Http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
Http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default Http

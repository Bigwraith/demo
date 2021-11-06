import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios"
import { TIMEOUT, baseURL, prod } from './config'
import { getSession } from './storage'


import { notification  } from "antd"

interface ResponseData<T> {
  code: number;

  data: T;

  message?: string;

  success?: boolean;
  
  timestamp?: number
}

axios.defaults.baseURL = `${baseURL}/${prod}/` 

axios.defaults.timeout = TIMEOUT

axios.defaults.headers.post = {
  'Content-Type': 'application/json;charset=utf-8'
}

const setDefaultHeaders = (data: any) => {
  for (const key in data) {
    axios.defaults.headers.common[key] = data[key]
  }
}

const openNotification = (type: string, message: string) => {
  notification[type]({
    message: message,
    description: message,
  });
};

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  
  const getToken = getSession('token')
  if( getToken ) { 
    config.headers = { 
      'token': getToken,
      'X-Access-Token': getToken 
    }
  }
  return config
},
  (error: AxiosError) => Promise.reject(error),
)

axios.interceptors.response.use((res: AxiosResponse<ResponseData<any>>) => {
  const code = res.data.code
  
  
  return res.data
  // return Promise.reject(new Error(res.data?.msg))
},
  (error: AxiosError) => {
    const message = error.message
    openNotification('success', message)

    return Promise.reject(error)
  }
)
const request = (options: AxiosRequestConfig) => {
  return axios.request(options);
}

export { setDefaultHeaders, request }
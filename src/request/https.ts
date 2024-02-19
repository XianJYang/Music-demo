/* 
 简单封装axios 声明类
 定义拦截器、错误返回、过期时间等配置 
 */

/*
AxiosInstance —— axios实例的类型
AxiosResponse —— 响应的数据类型
AxiosRequestConfig —— 传入配置config的类型\发送请求传递参数的类型  
 */
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig,InternalAxiosRequestConfig } from 'axios'
import type  {ResType} from './types'
export class _Http {
    axiosInstance:AxiosInstance
    // 基础配置
    baseConfig:AxiosRequestConfig = {
        // 所有的请求地址前缀部分
        // baseURL: import.meta.env.VITE_API_URL,
        baseURL:'/api',
        timeout: 10000,
    
        // 异步请求是否携带cookie
        withCredentials: true,
    
        // 设置后端需要的传参类型
        headers: {
            'Content-Type': 'application/json',
            'token': 'your token',
            'X-Requested-With': 'XMLHttpRequest',
        },

    }

    constructor(public config:AxiosRequestConfig) {
        this.axiosInstance = axios.create(Object.assign(this.baseConfig,config))   // 初始化配置 

        // 单个实例拦截器

        //所有实例都有的拦截器
        this.initInterceptors();
    }

    // 拦截器
    private initInterceptors() {
        /**
         * 请求拦截器
         * 1、每次请求前，如果存在token则在请求头中携带token
         * 2、请求过长，设置Loading
         * 3、错误提示框
         */
        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 设置token
                // let token = ''
                // if (token && config) {
                //     config.headers!['token'] = token
                // }

                return config
            },
            (error: any) => {
                console.log('服务器异常')
                return Promise.reject(error)
            }
        )


         /*
         * 响应拦截
         * 1、转换数据格式
         * 2、移除loading
        */
        this.axiosInstance.interceptors.response.use(
            (response:any): any => {
                // 对响应数据做点什么
                return response
            },
            (error: any) => {
                // 处理响应错误
                // return Promise.reject(error);
                this.errorHandle(error).then((error:any)=>{
                  console.log(error)
                })
            }

        )
    }

    // 错误信息处理
    private errorHandle(error: any): any {
        let message =''
        // 状态码判断
        switch (error.respon) {
            case 400:
                message = "请求错误(400)";
                break;
              case 401:
                message = "未授权，请重新登录(401)";
                // 这里可以做清空storage并跳转到登录页的操作
                break;
              case 403:
                message = "拒绝访问(403)";
                break;
              case 404:
                message = "请求出错(404)";
                break;
              case 408:
                message = "请求超时(408)";
                break;
              case 500:
                message = "服务器错误(500)";
                break;
              case 501:
                message = "服务未实现(501)";
                break;
              case 502:
                message = "网络错误(502)";
                break;
              case 503:
                message = "服务不可用(503)";
                break;
              case 504:
                message = "网络超时(504)";
                break;
              case 505:
                message = "HTTP版本不受支持(505)";
                break;
              default:
                message = `连接出错(${error.response.status})!`;
        }
        return Promise.reject(error.response)
    }


     // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.request(config);
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return this.axiosInstance.get(url, config);
  }


  public post<T = any>(
    url: string ,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return this.axiosInstance.post(url, data, config);
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return this.axiosInstance.put(url, data, config);
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return this.axiosInstance.delete(url, config);
  }
}


export default new _Http({})

//定义响应结构
export interface ResType<T = any> {
    code: number
    data?: T
    msg: string
    err?: string
}

// 自定义错误类型
export interface ApiError {
    code: number;
    message: string;
}

export interface _Response {
    get<T>(url: string, params: unknown, server: any): Promise<ResType<T>>
    post<T>(url: string, params: unknown, server: any): Promise<ResType<T>>
    put<T>(url: string, params: unknown, server: any): Promise<ResType<T>>
    delete<T>(url: string, params: unknown, server: any): Promise<ResType<T>>
    download(url: string, params: unknown, server: any): void
}

// 类型注解
import  {  AxiosResponse, AxiosRequestConfig } from 'axios'

// 声明拦截器接口-主要是为了interceptor拦截器能从类实例化的时候自己声明一个外部的拦截器
export interface AllAxiosInstance<T = AxiosResponse> {
    interceptorsRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig
    interceptorsRequestError?: (error: any) => any
    interceptorsResponse?: (res: T) => T
    interceptorsResponseError?: (error: any) => any
}

// 声明响应接口
// 声明接口 HYRequestConfig 是继承于Axios的类 AxiosRequestConfig 然后将我们需要的接口在写进接口
// 例如 interceptors , showLoading 后期就可以有需求就往里面加接口
// <T = AxiosResponse>泛型：后期可以传入自己的类型
export interface axiosResponseConfig<T = AxiosResponse> extends AxiosResponse {

    interceptorsConfig?: AllAxiosInstance<T>


}



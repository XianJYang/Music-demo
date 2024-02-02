// 简单封装axios
/**
 * AxiosInstance —— axios实例的类型
AxiosResponse —— 响应的数据类型
InternalAxiosRequestConfig —— 传入配置config的类型/请求的数据类型
 */
import { AxiosInstance,AxiosResponse,InternalAxiosRequestConfig} from 'axios'

//响应结构
interface ResType<T> {
    code: number
    data?: T
    msg: string
    err?: string
}

interface Http {
    get<T>(url: string, params?: unknown): Promise<ResType<T>>

    post<T>(url: string, params?: unknown): Promise<ResType<T>>

    upload<T>(url: string, params: unknown): Promise<ResType<T>>

    download(url: string): void
}
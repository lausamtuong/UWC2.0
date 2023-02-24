import axios,{AxiosInstance} from 'axios'
import { TIMEOUT } from 'dns'

class Http{
    instance: AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL:"https://weatherapi-com.p.rapidapi.com/",
            timeout:10000,
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
}
const http = new Http().instance
export default http
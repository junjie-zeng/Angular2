import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  /*
      测试专用公共服务
  */


  // pormise 版本
  get_data_promise_typeRight(){
    return new Promise((resovle:any,reject:any)=>{
      setTimeout(() => {
          let res = {
            name:'promise 版本获取异步数据 ...'
          }
          resovle(res)
      }, 1000);
    })
  }

  // rxjs 版本
  get_data_rxjs_typeRight(){
    return new Observable((observe:any)=>{
      setTimeout(() => {
        let res = {
          name:'Rxjs 版本获取异步数据 ...'
        }
        observe.next(res)
      }, 1000);
    })
  }


  // rxjs订阅后多次执行
  get_data_rxjs_multiple_execution(){
    let count = 0
    return new Observable((observe:any)=>{
      setInterval(()=>{
        count ++ 
        observe.next(count)
      },1000)
    })
  }




}

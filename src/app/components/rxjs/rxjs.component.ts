import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service'
import { map, filter, throttleTime } from 'rxjs/operators'
import { fromEvent } from 'rxjs'
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnInit {

  constructor(public common: CommonService) { }

  ngOnInit(): void {

    this.rxjsDomFlow()
  }

  // promise 版获取异步数据
  getDatePromiseTypeRight() {
    console.log('请求中...')
    this.common.get_data_promise_typeRight().then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  // Rxjs 版本
  getDataRxjsTypeRight() {
    console.log('请求中...')
    this.common.get_data_rxjs_typeRight().subscribe((res) => {
      console.log(res)
    })
  }

  // Rxjs 订阅后中途取消
  getDataRxjsTypeRightHalfwayCancel() {
    console.log('请求中...')
    let stream = this.common.get_data_rxjs_typeRight()
    let d = stream.subscribe((res) => {
      console.log(res)

    })
    // 取消订阅
    d.unsubscribe()

  }

  // 订阅后多次执行
  getDataRxjsMultipleExecution() {
    console.log('请求中...')
    let stream = this.common.get_data_rxjs_multiple_execution()
    let d = stream.subscribe((res) => {
      console.log(res)
    })

    // 5秒后取消订阅
    setTimeout(() => {
      console.log("取消订阅...")
      d.unsubscribe()
    }, 5000)
  }

  // 使用rxjs工具函数
  getDataRxjsToolFun() {
    console.log('请求中...')
    let stream = this.common.get_data_rxjs_typeRight()
    stream.pipe(
      // 把数据处理好
      map((value: any) => {
        return value.name
      })
    ).subscribe(res => {
      // 订阅处理好了的数据
      console.log(res)
    })
  }

  // rxjs dom流
  rxjsDomFlow() {
    console.log('rxjs dom流...')
    var button = document.querySelector('#domFlowbtn')
    // 每隔三秒后才会触发该按钮事件（节流）
    fromEvent(button,'click').pipe(
      throttleTime(3000)
    ).subscribe(()=>{
      console.log('click')
    })
  }
}

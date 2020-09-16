import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-operation',
  templateUrl: './dom-operation.component.html',
  styleUrls: ['./dom-operation.component.less']
})
export class DomOperationComponent implements OnInit {
  // dom
  @ViewChild('h1dom') h1dom:any
  // 组件实例
  @ViewChild('appTest') appTest:any
  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(){
    
  //   console.log()
  // }

  getYsDom(){
    let ysDom = document.getElementById('ysDom')
    ysDom.style.color = "#3c9cc9"
  }
  
  updateColor(){
    // 操作dom
    this.h1dom.nativeElement.style.color = "#3c9cc9"
  }

  getCompomentExample(){
    console.log(this.appTest)
    // 调用子组件的方法
    this.appTest.test()
  }

}

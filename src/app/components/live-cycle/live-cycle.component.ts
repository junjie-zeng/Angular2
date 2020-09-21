import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-cycle',
  templateUrl: './live-cycle.component.html',
  styleUrls: ['./live-cycle.component.less']
})
export class LiveCycleComponent implements OnInit {
  public flag:boolean
  public name:string | undefined
  // angular中的每个组件都是typescript中一个加了@Component装饰器的类，所以在组件实例化时最先执行constructor()
  constructor() {
    console.log('constructor ...')
  }

  // 主要用于父子组件传值或者父组件改变传值的数据时会被触发
  ngOnChanges(): void {
    console.log('ngOnChanges ...')
  }
  // 它会在 Angular 初始化完了该指令的所有数据绑定属性之后调用
  ngOnInit(): void {
    console.log('ngOnInit ...')
  }
  // 在ngOnchange和ngOnInit之后触发，主要用于定义一些自定义操作
  ngDoCheck(): void {
    console.log('ngDoCheck ...')
  }
  // 它会在 Angular 完全实例化了指令的所有内容之后调用
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit ...')
  }
  // 它会在默认的变更检测器对指令的所有内容完成了变更检查之后调用
  ngAfterContentChecked():void{
    console.log('ngAfterContentChecked ...')
  }
  // 在 Angular 完全初始化了组件的视图后调用(一般用于Dom操作)
  ngAfterViewInit():void{
    console.log('ngAfterViewInit ...')
  }
  // 它会在默认的变更检测器完成了对组件视图的变更检测之后调用
  ngAfterViewChecked():void{
    console.log('ngAfterViewChecked ...')
  }
  // 组件销毁时触发
  ngOnDesotry():void{
    console.log('ngOnDesotry ...')
  }



  // 事件
  handleFlag(){
    this.flag = !this.flag
  }
}

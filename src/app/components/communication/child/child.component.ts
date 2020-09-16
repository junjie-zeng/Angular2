import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  // 接收父组件传递的值
  @Input() info:Object

  // 子组件传值触发父组件
  @Output() private outer = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    //console.log(this.info)
  }

  
  // 子事件广播数据给父组件
  triggerParentMethod(){
    this.outer.emit('我来子 child...')
  }

}

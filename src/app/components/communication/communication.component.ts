import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.less']
})
export class CommunicationComponent implements OnInit {
  public info = {
    _from:'我来自父组件'
  }
  constructor() { }

  ngOnInit(): void {
  }

  parentMethods(info:any){
    console.log(info)
  }



}

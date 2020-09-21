import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  @Input() flag:boolean
  constructor() { }


  // ngOnChanges(): void {
  //   console.log('ngOnChanges ...')
  // }


  ngOnInit(): void {
  }
  

  test(){
    console.log('test ...')
  }
  

}

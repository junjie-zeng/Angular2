import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-grammar',
  templateUrl: './basic-grammar.component.html',
  styleUrls: ['./basic-grammar.component.less']
})
export class BasicGrammarComponent implements OnInit {

  public pageInfo = {
    city:'北京',
    cityList:['北京','上海','广州'],
    cityStr:"北京\n天津\n广州\n",
    radioCity:'株洲',
    radioCityList:['西安','长沙','株洲'],
    checkboxCityList:[
      {name:'中国',isChecked:false},
      {name:'香港',isChecked:true},
      {name:'澳门',isChecked:false}],
    condition:2,
    str:'<p>hello word</p>',
    list:[
      {id:0,name:'列表1'},
      {id:1,name:'列表2'},
      {id:2,name:'列表3'},
    ],
    active:true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

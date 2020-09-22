import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.less']
})
export class HttpComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    // get请求
    this.getRequest()
    // jsonp请求
    this.jsonpRequest()
  }

  // get 请求
  getRequest() {
    let url = `https://focussend.com/EditorTemp/getFieldList`
    this.http.get(url).subscribe(res => {
      console.log(res)
    })
  }
  
  // post 请求
  postRequest() {
    let url = ''
    let options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    
    this.http.post(url, {}, options).subscribe(res => {
      console.log(res)
    })
  }

  // jsonp 请求
  jsonpRequest() {
    let url = `https://focussend.com/EditorTemp/getFieldList`
    this.http.jsonp(url, 'callback').subscribe((res) => {
      console.log(res)
    })
  }



}

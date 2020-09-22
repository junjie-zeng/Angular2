import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicGrammarComponent } from './components/basic-grammar/basic-grammar.component';
import { DomOperationComponent } from './components/dom-operation/dom-operation.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { LiveCycleComponent } from './components/live-cycle/live-cycle.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HttpComponent } from './components/http/http.component';
const routes: Routes = [
  // 基本语法组件
  {
    path:"basic",component:BasicGrammarComponent
  },
  {
    path:"dom",component:DomOperationComponent
  },
  {
    path:"communication",component:CommunicationComponent
  },
  {
    path:"liveCycle",component:LiveCycleComponent
  }
  ,
  {
    path:"rxjs",component:RxjsComponent
  },
  {
    path:'http',component:HttpComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicGrammarComponent } from './components/basic-grammar/basic-grammar.component';
import { DomOperationComponent } from './components/dom-operation/dom-operation.component';
const routes: Routes = [
  // 基本语法组件
  {
    path:"basic",component:BasicGrammarComponent
  },
  {
    path:"dom",component:DomOperationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

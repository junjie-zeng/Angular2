import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicGrammarComponent } from './components/basic-grammar/basic-grammar.component';
const routes: Routes = [
  // 基本语法组件
  {
    path:"basic",component:BasicGrammarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

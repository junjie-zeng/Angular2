import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule ,HttpClientJsonpModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicGrammarComponent } from './components/basic-grammar/basic-grammar.component';
import { DomOperationComponent } from './components/dom-operation/dom-operation.component';
import { TestComponent } from './components/test/test.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { ChildComponent } from './components/communication/child/child.component';
import { LiveCycleComponent } from './components/live-cycle/live-cycle.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HttpComponent } from './components/http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicGrammarComponent,
    DomOperationComponent,
    TestComponent,
    CommunicationComponent,
    ChildComponent,
    LiveCycleComponent,
    RxjsComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

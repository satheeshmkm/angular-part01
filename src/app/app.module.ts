import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SampleComponent } from './sample/sample.component';
import {Sample2Component} from './sample2/sample2.component';
import { BasicVariablesComponent } from './basic-variables/basic-variables.component';
import { Angular004PipesComponent } from './angular004-pipes/angular004-pipes.component';
import { Angular005StructuralDirectivesComponent } from './angular005-structural-directives/angular005-structural-directives.component';
import { ChangeHtmlElementDirective } from './change-html-element.directive';
import { Angular007AddSubTitlePipe } from './angular007-add-sub-title.pipe';
import { Angular008HomeComponent } from './angular008-home/angular008-home.component';
import { Angular008AboutComponent } from './angular008-about/angular008-about.component';
import { Angular008ServicesComponent } from './angular008-services/angular008-services.component';
import { Angular008ContactsComponent } from './angular008-contacts/angular008-contacts.component';
import { Angular008ComponentOneComponent } from './angular008-component-one/angular008-component-one.component';
import { Angular008ComponentTwoComponent } from './angular008-component-two/angular008-component-two.component';
import { Angular008PageNotFoundComponent } from './angular008-page-not-found/angular008-page-not-found.component';
import { LazyservicesparentComponent } from './lazyservicesparent/lazyservicesparent.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample2Component,
    BasicVariablesComponent,
    Angular004PipesComponent,
    Angular005StructuralDirectivesComponent,
    ChangeHtmlElementDirective,
    Angular007AddSubTitlePipe,
    Angular008HomeComponent,
    Angular008AboutComponent,
    Angular008ServicesComponent,
    Angular008ContactsComponent,
    Angular008ComponentOneComponent,
    Angular008ComponentTwoComponent,
    Angular008PageNotFoundComponent,
    LazyservicesparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

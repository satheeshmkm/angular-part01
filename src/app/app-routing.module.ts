import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Angular008HomeComponent} from './angular008-home/angular008-home.component';
import {Angular008ServicesComponent} from './angular008-services/angular008-services.component';
import {Angular008AboutComponent} from './angular008-about/angular008-about.component';
import {Angular008ContactsComponent} from './angular008-contacts/angular008-contacts.component';
import { Angular008ComponentOneComponent } from './angular008-component-one/angular008-component-one.component';
import { Angular008ComponentTwoComponent } from './angular008-component-two/angular008-component-two.component';
import { Angular008PageNotFoundComponent } from './angular008-page-not-found/angular008-page-not-found.component';
import { LazyloadingModule } from './lazyloading.module';

const routes: Routes = [
{path:'',component:Angular008HomeComponent}, //default route
  {path:'about-me',component:Angular008AboutComponent},
  {path:'my-services',component:Angular008ServicesComponent,children:[
    {path:'services-one',component:Angular008ComponentOneComponent},
    {path:'services-two',component:Angular008ComponentTwoComponent}
  ]},
  {path:'contact-me',component:Angular008ContactsComponent},
 // {path:'lazyloading-module',loadChildren:'./lazyloading.module#LazyloadingModule'}, this is used in versions below angular10
 {path:'lazyloading-module',loadChildren:()=>LazyloadingModule},
 //{path:'lazyloading-module',loadChildren:()=>{return LazyloadingModule}}, this is alternate way of writing anonymous function
  {path:'**',component:Angular008PageNotFoundComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export class LazyloadingModule{}

import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LazyservicesparentComponent } from './lazyservicesparent/lazyservicesparent.component';


const routes:Routes=[
  {path:'lazyservices-parent',component:LazyservicesparentComponent}
]

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LazyloadingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from './page/java/java.component';
import { MainComponent } from './page/main/main.component';
import { PythonComponent } from './page/python/python.component';
import { RustComponent } from './page/rust/rust.component';

const routes: Routes = [
  { path: 'java', component: JavaComponent },
  { path: 'python', component: PythonComponent },
  { path: 'rust', component: RustComponent }, 

  { path: '', component: MainComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

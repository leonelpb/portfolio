import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CoreComponent } from './core.component';



const routes: Routes =[
  {path: 'core',
  component:CoreComponent,
  children: [
    { path: 'about-me', component:AboutMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent }
  ] }
]

@NgModule({
  declarations: [
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CoreModule { }

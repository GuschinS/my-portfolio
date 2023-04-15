import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionsComponent } from './pages/descriptions/descriptions.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'app-about', component: AboutComponent },
  { path: 'app-projects', component: ProjectsComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-descriptions', component: DescriptionsComponent },
  { path: '', redirectTo: 'app-about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

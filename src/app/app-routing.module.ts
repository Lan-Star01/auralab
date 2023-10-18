import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { StoriesComponent } from './components/stories/stories.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { isHome: true } },
  { path: 'about', component: AboutComponent, data: { isHome: false } },
  { path: 'projects', component: ProjectsComponent, data: { isHome: false } },
  { path: 'services', component: ServicesComponent, data: { isHome: false } },
  { path: 'news', component: NewsComponent, data: { isHome: false } },
  { path: 'stories', component: StoriesComponent, data: { isHome: false } },
  { path: 'contact', component: ContactComponent, data: { isHome: false } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

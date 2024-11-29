import { Routes } from '@angular/router';
import { HomeComponent } from '@routes/home/home.component';
import { ProjectsComponent } from '@routes/projects/projects.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },

];

import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutusComponent} from "./pages/aboutus/aboutus.component";
import {EditComponent} from "./pages/edit/edit.component";
import {NewRoseComponent} from "./pages/new-rose/new-rose.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'edit/:id', component: EditComponent},
  { path: 'new-rose', component: NewRoseComponent},
  { path: '**/*', redirectTo: 'home'}
];

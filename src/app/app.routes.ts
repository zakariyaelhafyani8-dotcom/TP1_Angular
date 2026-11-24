import { Routes } from '@angular/router';
import { MainComponent } from './composants/main/main.component';
import { HomeComponent } from './composants/home/home.component';
import { ContactComponent } from './composants/contact/contact.component';
import { StudentsComponent } from './composants/students/students.component';
import { ProfsComponent } from './composants/profs/profs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'profs', component: ProfsComponent },
  { path: 'main', component: MainComponent },
  { path: '**', redirectTo: '' }
];

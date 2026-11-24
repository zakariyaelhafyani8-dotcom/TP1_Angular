import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  etudiants = [
    { id: 1, nom: 'Amine', filiere: 'ILIA' },
    { id: 2, nom: 'Salma', filiere: 'ILIA' },
    { id: 3, nom: 'Yassine', filiere: 'ILIA' }
  ];
}

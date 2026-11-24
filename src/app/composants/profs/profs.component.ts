import { Component } from '@angular/core';

@Component({
  selector: 'app-profs',
  standalone: true,
  imports: [],
  templateUrl: './profs.component.html',
  styleUrl: './profs.component.css'
})
export class ProfsComponent {
  profs = [
    { id: 1, nom: 'Pr. Youness IDRISSI KHAMLICHI', module: 'Angular' },
    { id: 2, nom: 'Pr. Exemple', module: 'Bases de données' }
  ];
}

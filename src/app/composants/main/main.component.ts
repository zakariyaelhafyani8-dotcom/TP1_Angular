import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  // 1) @for simple
  items = [10, 11, 12, 13, 14];

  // 2) @for avec track + @empty
  personne = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
  ];

  ajouterPersonne() {
    this.personne = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
      { id: 3, name: 'Bob', age: 35 },
      { id: 4, name: 'Youness', age: 25 },
      { id: 5, name: 'Sanae', age: 30 }
    ];
  }

  supprimerPeronne(id: number) {
    this.personne = this.personne.filter(p => p.id !== id);
  }

  // 3) @if
  user = {
    name: 'John',
    isLoggedIn: true,
    role: 'admin' // "user", ""
  };

  setRole(role: string) { this.user.role = role; }
  toggleLogin() { this.user.isLoggedIn = !this.user.isLoggedIn; }

  // 4) @if avec une classe User
  selectedUser: User | null = null;
  bob = new User('Bob', 'bob@example.com', 'bob456');
  selectionner() { this.selectedUser = this.bob; }
  deselectionner() { this.selectedUser = null; }
}

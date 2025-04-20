import { Component, input } from '@angular/core';
import { User } from '../../interfaces/store.interface';

@Component({
  selector: 'app-card-user',
  imports: [],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.css'
})
export default class CardUserComponent {
  user = input.required<User>();
}

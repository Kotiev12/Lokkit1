import { Component, Input } from '@angular/core';
import { User } from '../../../core/services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userr',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserrComponent {
  @Input() user!: User;
}

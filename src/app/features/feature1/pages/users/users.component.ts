import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { HighlightDirective } from '../../../../shared/directives/highlight.directive'

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NavbarComponent, HighlightDirective],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}

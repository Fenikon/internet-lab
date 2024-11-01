import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component'

@Component({
  selector: 'app-inspiration-box',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './inspiration-box.component.html',
  styleUrl: './inspiration-box.component.scss'
})
export class InspirationBoxComponent {

}

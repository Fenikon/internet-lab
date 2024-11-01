import { Component, Input } from '@angular/core';
import { IconsComponent } from '../icons/icons.component'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IconsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public image: string = '';
  @Input() public secondaryDescription: string = '';
}

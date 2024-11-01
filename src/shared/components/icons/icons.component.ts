import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  @Input() public iconName: string | undefined;

  public staticUrl = '/static/icons/';
}
import { Component } from '@angular/core';
import { IconsComponent } from '../../shared/components/icons/icons.component';
import { INTRO_TEXT } from './constans/constans'

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [IconsComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  public Title: string = INTRO_TEXT.title;
  public Image: string = INTRO_TEXT.image;
  public description: string = INTRO_TEXT.description;
  public secondaryDescription: string = INTRO_TEXT.secondaryDescription;
}

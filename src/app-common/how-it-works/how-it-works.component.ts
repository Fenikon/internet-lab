import { Component, inject } from '@angular/core';
import { BreakpointsService } from '../../app-core/services/breakpoints.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';
import { Step } from './config/types';
import { HOW_IT_WORKS } from './config/constans';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {
  public title: string = HOW_IT_WORKS.title;
  public steps: Step[] = HOW_IT_WORKS.steps;
  public breakpointsService = inject(BreakpointsService);
}

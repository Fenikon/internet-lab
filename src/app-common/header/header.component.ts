import { BreakpointsService } from './../../app-core/services/breakpoints.service';
import { Component, inject } from '@angular/core';
import { IconsComponent } from '../../shared/components/icons/icons.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy } from '@angular/core';
import { TuiButton, TuiDataList, TuiDropdown } from '@taiga-ui/core';
import { TuiStep } from '@taiga-ui/kit';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IconsComponent,
    CommonModule,
    MatIconModule,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiStep,
    TuiIcon,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public breakpointsService = inject(BreakpointsService);

  protected readonly groups: string[][] = [
    ['Как это работает'],
    ['3-й блок'],
    ['Вопросы и ответы'],
    ['Форма'],
  ];

  protected open: boolean = false;

  protected onClick(): void {
    this.open = false;
  }
}

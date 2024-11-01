import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { BreakpointsService } from '../app-core/services/breakpoints.service';
import { CommonModule } from '@angular/common';
import { AdministrativeComponent } from './app-general/components/administrative/administrative.component';
import { TuiRoot } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AdministrativeComponent, TuiRoot, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title = 'internetLab';

  public breakpointsService = inject(BreakpointsService);
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../../app-common/header/header.component';
import { IconsComponent } from '../../../../shared/components/icons/icons.component';
import { BreakpointsService } from '../../../../app-core/services/breakpoints.service';
import { HowItWorksComponent } from '../../../../app-common/how-it-works/how-it-works.component';
import { FooterComponent } from '../../../../app-common/footer/footer.component';
import { IntroComponent } from '../../../../app-common/intro/intro.component';
import { CarouselComponent } from '../carousel/carousel.component'
import { InspirationBoxComponent } from '../../../../app-common/inspiration-box/inspiration-box.component'

@Component({
  selector: 'app-administrative',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    IconsComponent,
    HowItWorksComponent,
    FooterComponent,
    IntroComponent,
    CarouselComponent,
    InspirationBoxComponent
  ],
  templateUrl: './administrative.component.html',
  styleUrl: './administrative.component.scss',
})
export class AdministrativeComponent {
  public breakpointsService = inject(BreakpointsService);
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'fireflow-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

  @Input() menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      link: '/'
    }
  ];
  @Input() title = 'Home';

  toggleSideNav(sideNavComp: HTMLElement) {
    sideNavComp.classList.toggle('show');
  }
}

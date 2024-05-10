import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  standalone: true,
  imports: [ LayoutComponent ],
  selector: 'fireflow-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      link: '/'
    },
    {
      label: 'About',
      icon: 'pi pi-info',
      link: '/about'
    }
  ];
}

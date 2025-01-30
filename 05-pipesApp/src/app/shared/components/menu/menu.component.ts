import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  imports: [
    PrimeNgModule
  ],
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent {
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Texto y Fechas',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Números',
            icon: 'pi pi-fw pi-dollar'
          },
          {
            label: 'No coumunes',
            icon: 'pi pi-fw pi-globe'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Otros elementos',
            icon: 'pi pi-fw pi-cog'
          }
        ]
      }
    ]
  }
}

//TODO: Cambiar todo a MENUBAR

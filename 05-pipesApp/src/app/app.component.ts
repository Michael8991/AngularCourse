import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PrimeNgModule,
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})
export class AppComponent {

}

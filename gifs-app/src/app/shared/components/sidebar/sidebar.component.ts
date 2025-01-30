import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifServices: GifsService) { }

  get tags(): string[] {
    return this.gifServices.tagsHistory;
  }

  searchTag(tag: string): void {
    this.gifServices.searchTag(tag);
  }
}

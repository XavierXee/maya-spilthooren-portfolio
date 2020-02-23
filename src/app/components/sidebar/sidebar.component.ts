import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private offsetPosition: number;
  private overviewSectionOffsetTop: number;

  get logoColor(): string {
    if (this.offsetPosition < this.overviewSectionOffsetTop) {
      return '#DB3056';
    }
    return '#000000';
  }

  @HostListener('window:scroll', ['$event'])
  getWindowPageYOffset() {
    this.offsetPosition = window.pageYOffset;
  }

  constructor() { }

  ngOnInit(): void {
    if (document.getElementById('overview')) {
      this.overviewSectionOffsetTop = document.getElementById('overview').offsetTop;
    } else {
      this.overviewSectionOffsetTop = 0;
    }
  }

}

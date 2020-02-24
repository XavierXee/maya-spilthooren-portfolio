import { Component, HostListener, OnInit } from '@angular/core';
import {ContentService} from '../../services/content.service';
import {ActivatedRoute} from '@angular/router';
import {AppInitializerService} from '../../app-initializer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private offsetPosition: number;
  private overviewSectionOffsetTop: number;

  projects: any;
  quickNavEnabled: boolean;

  get logoColor(): string {
    if (!this.offsetPosition) {
      return '#DB3056';
    }
    if (this.offsetPosition < this.overviewSectionOffsetTop) {
      return '#DB3056';
    }
    return '#2A2A2A';
  }

  @HostListener('window:scroll', ['$event'])
  getWindowPageYOffset() {
    this.offsetPosition = window.pageYOffset;
  }

  constructor(
    private appInitializerService: AppInitializerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.projects = this.appInitializerService.getData().projects;
    this.quickNavEnabled = this.route.snapshot.url[0].path === 'project';
    this.offsetPosition = 0;
    if (document.getElementById('overview')) {
      this.overviewSectionOffsetTop = document.getElementById('overview').offsetTop;
    } else {
      this.overviewSectionOffsetTop = 0;
    }
  }

  isCurrentProject(id: number): boolean {
    return this.route.snapshot.params.id === id.toString();
  }
}

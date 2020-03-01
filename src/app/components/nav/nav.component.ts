import { Component, OnInit } from '@angular/core';
import {ProjectData} from '../../models/data.model';
import {AppInitializerService} from '../../app-initializer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  panelOpen = false;
  projectData: ProjectData[];

  constructor(
    private initService: AppInitializerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.projectData = this.initService.getData().projects;
  }

  openPanel(): void {
    this.panelOpen = true;
  }

  closePanel(): void {
    this.panelOpen = false;
  }

  isCurrentProject(id: number): boolean {
    return this.route.snapshot.params.id === id.toString();
  }
}

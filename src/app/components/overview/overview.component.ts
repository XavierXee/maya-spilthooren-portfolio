import { Component, OnInit } from '@angular/core';
import { AppInitializerService } from '../../app-initializer.service';
import { ProjectData } from '../../models/data.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  projectList: ProjectData[];

  constructor(
    private appInitializerService: AppInitializerService,
  ) { }

  ngOnInit(): void {
    this.projectList = this.appInitializerService.getData().projects;
  }

}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AppInitializerService } from '../../app-initializer.service';
import {ActivatedRoute} from '@angular/router';

interface ProjectDataSection {
  title?: string;
  text?: string;
  img?: string;
  carousel?: string[];
}

interface ProjectData {
  projectTitle: string;
  role: string;
  header: ProjectDataSection;
  sections: ProjectDataSection[];
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectComponent implements OnInit {
  projectData: ProjectData;

  constructor(
    private initService: AppInitializerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.projectData = this.initService.getData().projects[Number(this.route.snapshot.params.id)];
  }

}

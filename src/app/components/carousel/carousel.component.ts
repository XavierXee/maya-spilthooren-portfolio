import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { ProjectData } from '../../models/data.model';
import { AppInitializerService } from '../../app-initializer.service';
import * as Flickity from 'flickity';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() showDotNav: boolean;
  @Input() modeSlider: boolean;

  projectList: ProjectData[];
  currentProject = 0;

  constructor(
    private appInitializerService: AppInitializerService
  ) { }

  ngOnInit(): void {
    this.projectList = this.appInitializerService.getData().projects;
  }

  ngAfterViewInit(): void {
    const flkty = new Flickity( '.gallery', {
      cellAlign: 'center',
      wrapAround: true,
      contain: true
    });
  }
}

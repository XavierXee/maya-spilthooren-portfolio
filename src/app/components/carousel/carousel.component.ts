import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { ProjectData } from '../../models/data.model';
import { AppInitializerService } from '../../app-initializer.service';
import * as Flickity from 'flickity';

export interface GallerySlide {
  asset: string;
  route: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() showDotNav: boolean;
  @Input() modeProjects: boolean;

  projectList: ProjectData[];
  gallerySlides: GallerySlide[];

  constructor(
    private appInitializerService: AppInitializerService
  ) { }

  ngOnInit(): void {
    this.projectList = this.appInitializerService.getData().projects;
    this.gallerySlides = [
      {
        asset: 'slide_0',
        route: '0'
      },
      {
        asset: 'slide_1',
        route: '1'
      },
      {
        asset: 'slide_2',
        route: '2'
      }
    ];
  }

  ngAfterViewInit(): void {
    const homeGallery = new Flickity( '.gallery', {
      cellAlign: 'center',
      wrapAround: true,
      contain: true,
      autoPlay: true,
      pageDots: false,
      prevNextButtons: false
    });

    const projectsGallery = new Flickity( '.projects', {
      cellAlign: 'center',
      wrapAround: true,
      contain: true,
      autoPlay: true,
      pageDots: true,
      prevNextButtons: false
    });
  }
}

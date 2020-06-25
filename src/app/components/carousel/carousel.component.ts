import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { ProjectData } from '../../models/data.model';
import { AppInitializerService } from '../../app-initializer.service';
import * as Flickity from 'flickity';
import { GalleryOptions, GallerySlide } from '../../models/interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() showDotNav: boolean;
  @Input() modeProjects: boolean;
  @Input() gallerySlides: GallerySlide[];
  @Input() galleryOptions: GalleryOptions;

  projectList: ProjectData[];

  constructor(
    private appInitializerService: AppInitializerService
  ) { }

  ngOnInit(): void {
    this.projectList = this.appInitializerService.getData().projects;
  }

  ngAfterViewInit(): void {
    if (this.galleryOptions && this.galleryOptions.className) {
      const homeGallery = new Flickity( `.${this.galleryOptions.className}`, this.galleryOptions);
    }

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

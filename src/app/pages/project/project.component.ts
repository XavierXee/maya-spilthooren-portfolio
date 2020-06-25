import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppInitializerService } from '../../app-initializer.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectData } from '../../models/data.model';
import {GallerySlide} from '../../models/interfaces';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectComponent implements OnInit {
  projectData: ProjectData;
  galleryOptions = {
    className: 'main-gallery',
    cellAlign: 'center',
    wrapAround: true,
    contain: true,
    autoPlay: true,
    pageDots: true,
    prevNextButtons: true,
  };

  constructor(
    private initService: AppInitializerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.projectData = this.initService.getData().projects[Number(this.route.snapshot.params.id)];
  }

  makeGallerySlides(carousel: any[]): GallerySlide[] {
    return carousel.map((carouselItem: any) => {
      return {
        asset: carouselItem
      };
    });
  }
}

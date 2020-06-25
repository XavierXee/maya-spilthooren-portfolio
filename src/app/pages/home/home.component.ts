import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GalleryOptions, GallerySlide} from '../../models/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private readonly mobileMaxWidth: number = 992;

  gallerySlides: GallerySlide[];
  galleryOptions: GalleryOptions;

  get isMobile(): boolean {
    return window.innerWidth <= this.mobileMaxWidth;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.galleryOptions = {
      className: 'gallery',
      cellAlign: 'center',
      wrapAround: true,
      contain: true,
      autoPlay: true,
      pageDots: false,
      prevNextButtons: false
    };

    this.gallerySlides = [
      {
        asset: 'carousel/slide_0.png',
        route: '0'
      },
      {
        asset: 'carousel/slide_1.png',
        route: '1'
      },
      {
        asset: 'carousel/slide_2.png',
        route: '2'
      }
    ];
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment === 'overview') {
        const overviewOffsetY = document.getElementById('overview').offsetTop;
        window.scrollTo(0, overviewOffsetY);
      }
    });
  }

}

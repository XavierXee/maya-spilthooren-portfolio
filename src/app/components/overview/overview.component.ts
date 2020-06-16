import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AppInitializerService } from '../../app-initializer.service';
import { ProjectData } from '../../models/data.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit {
  projectList: ProjectData[];

  @ViewChild('overview') overviewElement;
  @ViewChildren('overview', {read: ElementRef}) tref: ElementRef;


  constructor(
    private appInitializerService: AppInitializerService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.projectList = this.appInitializerService.getData().projects;
  }

  ngAfterViewInit() {
    console.log(this.overviewElement);
    console.log(this.tref);
    console.log(this.elementRef.nativeElement.querySelector('#overview').getBoundingClientRect().width);
    console.log(this.elementRef.nativeElement.getBoundingClientRect().width);
  }
}

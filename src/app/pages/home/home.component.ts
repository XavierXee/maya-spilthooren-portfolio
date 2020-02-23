import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute) { }

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

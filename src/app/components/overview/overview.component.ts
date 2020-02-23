import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  readonly projectList = [
    {
      id: 0,
      image: 'Card-arpengo.png',
      title: 'Arpengo',
    },
    {
      id: 1,
      image: 'Card-baseplay.png',
      title: 'baseplay',
    },
    {
      id: 2,
      image: 'Card-Costock.png',
      title: 'Costocking',
    },
    {
      id: 3,
      image: 'Card-Dipro.png',
      title: 'Diproclean',
    },
    {
      id: 4,
      image: 'Card-FP.png',
      title: 'Full Performance',
    },
    {
      id: 5,
      image: 'Card-GS.png',
      title: 'GatherSquare',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

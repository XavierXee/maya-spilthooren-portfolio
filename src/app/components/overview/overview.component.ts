import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  readonly projectList = [
    'Project 01',
    'Project 02',
    'Project 03',
    'Project 04',
    'Project 05',
    'Project 06',
    'Project 07',
    'Project 08',
    'Project 09',
    'Project 10',
    'Project 11',
    'Project 12',
    'Project 13',
    'Project 14',
    'Project 15',
    'Project 16',
    'Project 17',
    'Project 18'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

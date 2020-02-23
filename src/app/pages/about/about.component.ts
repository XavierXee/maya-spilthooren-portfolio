import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  professionalExperience = [
    {
      company: 'SwipeGuide',
      role: 'Senior UX Designer',
      date: '09.2019 - now',
      location: 'Amsterdam, The Netherlands'
    },
    {
      company: 'Basebone',
      role: 'UX/UI Designer',
      date: '02.2019 - 09.2019',
      location: 'Marbella, Spain'
    },
    {
      company: 'Freelancer',
      role: 'UX/UI Designer',
      date: '08.2018 - 02.2019',
      location: 'Remote, Spain, France'
    },
    {
      company: 'Tadaris',
      role: 'Freelance UX/UI Designer',
      date: '05.2017 - 12.2018',
      location: 'Aubagne, France'
    },
    {
      company: 'Cabesto',
      role: 'UX/UI Designer',
      date: '09.2017 - 08.2018',
      location: 'Aubagne, France'
    },
    {
      company: 'Costocking',
      role: 'UX/UI Designer',
      date: '09.2017 - 08.2018',
      location: 'Aubagne, France'
    },
    {
      company: 'Full Performance',
      role: 'Web Designer',
      date: '08.2016 - 08.2017',
      location: 'Aix en Provence, France'
    }
  ];

  education = [
    {
      degree: 'Master degree SupDeWeb, Valedictorian',
      domain: 'Design, Code & Digital Marketing',
      date: '2016 - 2018',
      location: 'Marseille, France'
    },
    {
      degree: 'Bachelor of Arts, Aix Marseille University',
      domain: 'Digital Arts',
      date: '2014 - 2016',
      location: 'Aix en Provence, France'
    },
    {
      degree: 'Graphic Design, ESA St Luc',
      domain: 'Graphic Design',
      date: '2012 - 2014',
      location: 'Tournai, Belgium'
    },
    {
      degree: 'Ecole Superieure des Beaux Arts',
      domain: 'Visual Design',
      date: '2011 - 2012',
      location: 'Angers, France'
    },
    {
      degree: 'Prepart Paris',
      domain: 'Design preparatory Class',
      date: '2010 - 2011',
      location: 'Paris, France'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

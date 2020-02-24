import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mailData = {
    name: null,
    mail: null,
    message: null
  };

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  sendMail(): void {

  }

}

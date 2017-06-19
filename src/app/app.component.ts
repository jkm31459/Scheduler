import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  timeSlots: any[] = [
    {
      "name": '',
      "phoneNumber": '',
      "time": '9 AM'
    },
    {
      "name": '',
      "phoneNumber": '',
      "time": '10 AM'
    },
    {
      "name": '',
      "phoneNumber": '',
      "time": '11 AM'
    },
    {
      "name": '',
      "phoneNumber": '',
      "time": '12 AM'
    },
    {
      "name": '',
      "phoneNumber": '',
      "time": '1 PM'
    },
    {
      "name": '',
      "phoneNumber": '',
      "time": '2 PM'
    },
    {
      "name": '',
      "phoneNumber": '',
      "time": '3 PM'
    },
    {
      "name": '',
      "phoneNumber": '',
      "time": '4 PM'
    },
    {
      "name": '',
      "phoneNumber": '',
      "time": '5 PM'
    }
  ];
}

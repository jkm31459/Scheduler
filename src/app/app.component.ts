import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Appointment Scheduler';
  slotId: number = 0;
  timeSlots: any[] = [
    {
      "id": 0,
      "name": '',
      "phoneNumber": '',
      "time": '9 AM',
      "isAvailable": true
    },
    {
      "id": 1,
      "name": '',
      "phoneNumber": '',
      "time": '10 AM',
      "isAvailable": true
    },
    {
      "id": 2,
      "name": '',
      "phoneNumber": '',
      "time": '11 AM',
      "isAvailable": true
    },
    {
      "id": 3,
      "name": '',
      "phoneNumber": '',
      "time": '12 AM',
      "isAvailable": true
    },
    {
      "id": 4,
      "name": '',
      "phoneNumber": '',
      "time": '1 PM',
      "isAvailable": true
    },
    {
      "id": 5,
      "name": '',
      "phoneNumber": '',
      "time": '2 PM',
      "isAvailable": true
    },
    {
      "id": 6,
      "name": '',
      "phoneNumber": '',
      "time": '3 PM',
      "isAvailable": true
    },
    {
      "id": 7,
      "name": '',
      "phoneNumber": '',
      "time": '4 PM',
      "isAvailable": true
    },
    {
      "id": 8,
      "name": '',
      "phoneNumber": '',
      "time": '5 PM',
      "isAvailable": true
    }
  ];
  openModal(id): void {
    this.slotId = id;
  };
  submit(): void {
    console.log('submit');
    if (this.timeSlots[this.slotId].name && this.timeSlots[this.slotId].phoneNumber) {
      this.timeSlots[this.slotId].isAvailable = false;
    } else {
      this.timeSlots[this.slotId].isAvailable = true;
    }
  };
}

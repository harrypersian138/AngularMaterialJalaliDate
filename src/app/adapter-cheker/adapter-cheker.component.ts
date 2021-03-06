import { JalaliMomentDateAdapter } from './../mat-core/jalali-moment-date-adapter';
import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
import { MatDatepickerInputEvent } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-adapter-cheker',
  templateUrl: './adapter-cheker.component.html',
  styleUrls: ['./adapter-cheker.component.css']
})
export class AdapterChekerComponent implements OnInit {
  adapter: JalaliMomentDateAdapter; 
  
  startDate = moment('2017-01-01', 'YYYY-MM-DD');
  
  // minDate = moment('2017-10-02', 'YYYY-MM-DD');
  minDate = moment.from('2017-10-02', 'en');

  // maxDate = moment('1396-07-29', 'jYYYY-jMM-jDD');
  maxDate = moment.from('1396-07-29', 'fa');

  jsonDate = '2018-01-08T20:21:29.4674496';
  // jsonMomentDate = jmoment(this.jsonDate, 'YYYY-MM-DD');
  dateControl = new FormControl(this.jsonDate);
  
  weeksInJalali = [
    { enName: 'Saturday', faName: 'شنبه', faAbbr: 'ش', order: 0 },
    { enName: 'Sunday', faName: 'یکشنبه', faAbbr: 'ی', order: 1 },
    { enName: 'Monday', faName: 'دوشنبه', faAbbr: 'د', order: 2 },
    { enName: 'Tuesday', faName: 'سه شنبه', faAbbr: 'س', order: 3 },
    { enName: 'Wednesday', faName: 'چهارشنبه', faAbbr: 'چ', order: 4 },
    { enName: 'Thursday', faName: 'پنجشنبه', faAbbr: 'پ', order: 5 },
    { enName: 'Friday', faName: 'جمعه', faAbbr: 'ج', order: 6 }
  ];

  monthsInJalali = [
    { faName: 'فروردین', order: 0 },
    { faName: 'اردیبهشت', order: 1 },
    { faName: 'خرداد', order: 2 },
    { faName: 'تیر', order: 3 },
    { faName: 'مرداد', order: 4 },
    { faName: 'شهریور', order: 5 },
    { faName: 'مهر', order: 6 },
    { faName: 'آبان', order: 7 },
    { faName: 'آذر', order: 8 },
    { faName: 'دی', order: 9 },
    { faName: 'بهمن', order: 10 },
    { faName: 'اسفند', order: 11 }
  ];
  myFilter = (d: moment.Moment): boolean => {
    const day: number = d.day();
    // Prevent Thursday and Friday from being selected.
    return day !== 5 && day !== 4;
  }

  constructor() { }

  ngOnInit() {
    this.adapter = new JalaliMomentDateAdapter();
  }

  onInput(event: MatDatepickerInputEvent<moment.Moment>) {
    console.log('onInput: ', event.value);
  }
  onChange(event: MatDatepickerInputEvent<moment.Moment>) {
    const x = moment(event.value).format('jYYYY/jMM/jDD');
    console.log('onChange: ', x);
  }
}

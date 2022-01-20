import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contacts';
  constructor() { }
  dtOptions: any = {};
  is_lucot_first_register = true;
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json'
      },
    };
  }
}

import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

@Injectable({ providedIn: 'root' })

export class HomeComponent implements OnInit {

  constructor() { 

  }
  ngOnInit(): void {
    
  }

}

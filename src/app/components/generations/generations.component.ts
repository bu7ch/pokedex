import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  generations= [
    'Génerations I',
    'Génerations II',
    'Génerations III',
    'Génerations VI',
    'Génerations V',
    'Génerations VI',
    'Génerations VII',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

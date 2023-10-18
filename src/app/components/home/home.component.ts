import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { IntersectionObserverService } from '../intersection-observer.service';
// import * as ScrollMagic from 'scrollmagic';
// import { TweenMax } from 'gsap';
// import AOS from 'aos';
import * as AOS from 'aos';


const THRESHOLD = 20;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit, AfterViewInit {

  ngAfterViewInit() {
    AOS.init();
  }

  cars: any[] = [];


  constructor() { }


  ngOnInit() {



    this.cars = [
      {
        id: '1',
        name: 'Commercial',
        description: 'OFFICE COMPLEX',
      },
      {
        id: '2',
        name: 'Residental',
        description: 'NEXT Address',
      },
      {
        id: '3',
        name: 'Residental',
        description: 'Private House',
      },
      {
        id: '4',
        name: 'Hospitality',
        description: 'Radisson Blu',
      },
      {
        id: '5',
        name: 'Ferrari',
        description: 'The Prancing Horse',
      },
      {
        id: '3',
        name: 'Porsche',
        description: 'Full spectrum',
        price: 10000,
      },
    ];
  }


}


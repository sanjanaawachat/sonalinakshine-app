import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  ngAfterViewInit() {
    // const options = {
    //   strings: ['Designer', 'Developer', 'Podcaster', 'Brand Strategist'],
    //   typeSpeed: 100,
    //   backSpeed: 60,
    //   loop: true,
    // };
    const options = {
      strings: ['Image Consultant', 'Brand Strategist', 'Podcaster'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };
    new Typed(this.typedElement.nativeElement, options);
  }

   highlights = [
    {
      icon: 'bi-person-badge',
      title: 'Industry Experience',
      text: '15+ years  diverse industry experience'
    },
    {
      icon: 'bi-shield-check',
      title: 'Trusted Advisor',
      text: 'Trusted by CXOs, entrepreneurs & changemakers'
    },
    {
      icon: 'bi-megaphone',
      title: 'Voice Villa',
      text: 'Founder of Voice Villa, a creative powerhouse'
    },
    {
      icon: 'bi-mic',
      title: 'Podcast Host',
      text: 'Host & producer of influential podcasts'
    },
    {
      icon: 'bi-star',
      title: 'Brand Consultant',
      text: 'Personal branding consultant for high-profile leaders'
    }
  ];

  
  title = 'sonalinakshine-app';
}

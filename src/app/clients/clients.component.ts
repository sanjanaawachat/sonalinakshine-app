import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper, { Autoplay } from 'swiper';

Swiper.use([Autoplay]);
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    new Swiper('.mySwiper', {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 3000, // smooth scrolling speed
    });
  }
}

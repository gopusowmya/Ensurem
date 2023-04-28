import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { EnsurmService } from 'src/app/services/ensurm.service';
import Swiper, { Navigation, Pagination, EffectCube } from 'swiper';
Swiper.use([Navigation, Pagination, EffectCube]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  swiper !: Swiper;
  canApplyNegativeZIndex = false;


  constructor(private elementRef: ElementRef,
              private service: EnsurmService) { }

  ngOnInit(): void {
    this.loadSwiper();
    this.service.SearchEnable.subscribe(res => {
      this.canApplyNegativeZIndex = res;
    })
  }

  loadSwiper() {
    const swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, EffectCube],
      // direction: 'vertical',
      enabled: true,
      // observer:true,
      // observeParents:true,
      allowSlideNext: true,
      touchStartPreventDefault: false,
      allowSlidePrev: true,
      allowTouchMove: true,
      // parallax:true,
      // grabCursor: true,
      loop: true,
      effect: 'cube',
      grabCursor: true,
      speed: 2500,
      autoplay: {
        delay: 100,

      },
      cubeEffect: {
        shadow: false,
        slideShadows: false,
        // shadowOffset: 20,
        // shadowScale: 0.94,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      init: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-h',
        prevEl: '.swiper-button-prev-h',
      },
    });

    const swiper1 = new Swiper('.swiper-container-v', {
      modules: [Navigation, Pagination, EffectCube],
      direction: 'vertical',
      enabled: true,
      // observer:true,
      // observeParents:true,
      allowSlideNext: true,
      touchStartPreventDefault: false,
      allowSlidePrev: true,
      allowTouchMove: true,
      // parallax:true,
      // grabCursor: true,
      loop: true,
      effect: 'cube',
      grabCursor: true,
      speed: 2500,
      autoplay: {
        delay: 100,

      },
      cubeEffect: {
        shadow: false,
        slideShadows: false,
        //  shadowOffset: 20,
        //  shadowScale: 0.94,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
      },
      init: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-v',
        prevEl: '.swiper-button-prev-v',
      },
    });
    this.swiper = swiper1
    swiper.enable();
    swiper1.enable();
  }

  navToNext() {
    console.log('coming here')
    this.swiper.slideNext();
  }
  naveToBack() {
    this.swiper.slidePrev();
  }

  mouseScrolledEventHandler(ev : any) {
    if (ev === 'up') {
      this.navToNext()
    }
    else{
      this.naveToBack()
    }
  }
}








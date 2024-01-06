import { Component } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        query('.card', [
          style({ transform: 'translateX(-100%)' }),
          stagger(1000, [
            animate('2s ease-in-out', style({ transform: 'translateX(0%)' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AboutComponent {
  cardData: any[] = [
    {
      imgSrc: '../../../assets/icons/frontend.png',
      Text: 'Frontend Developer',
    },
    {
      imgSrc:'../../../assets/icons/backend.png',
      Text: 'Backend Developer',
    },
    {
      imgSrc: '../../../assets/icons/UIUX.png',
      Text: 'UI/UX Design',
    },
    {
      imgSrc: '../../../assets/icons/prototyping.png',
      Text: 'Software Prototyping',
    },
  ];
}

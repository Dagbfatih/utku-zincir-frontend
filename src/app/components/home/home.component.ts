import { allTranslates } from 'src/app/services/translation.service';
import { Component, OnInit } from '@angular/core';
import { RandomSlideGeneratorService } from 'src/app/services/random-slide-generator.service';
import { SlideService } from 'src/app/services/slide.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  baseUrl = 'assets/';
  constructor(private slideService: SlideService) {}

  ngOnInit(): void {}

  get slidesByLg() {
    return this.slideService.getAll().data.filter((s) => s.type === 'lg');
  }

  get slidesBySm() {
    return this.slideService.getAll().data.filter((s) => s.type === 'sm');
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}

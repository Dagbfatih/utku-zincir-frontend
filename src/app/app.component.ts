import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SettingsService } from './services/settings.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.translationService.getAllTranslatesByCode(this.getLanguageCode());
  }
  getLanguageCode(): string {
    return this.settingsService.getLanguageCodeFromLocalStorage();
  }
}

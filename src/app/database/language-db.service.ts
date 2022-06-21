import { Language } from './../models/entities/language';
import { DbServiceRepositoryBase } from './../core/database/db.service.repository.base';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageDbService extends DbServiceRepositoryBase<Language> {
  data: Language[] = [
    {
      id: 1,
      code: 'tr-TR',
      languageName: 'Türkçe',
      flagCode: 'tr',
    },
    {
      id: 2,
      code: 'en-US',
      languageName: 'English',
      flagCode: 'us',
    },
  ];
}

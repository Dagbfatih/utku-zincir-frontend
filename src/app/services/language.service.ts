import { LanguageDbService } from './../database/language-db.service';
import { Injectable } from '@angular/core';
import { ServiceRepositoryLocalBase } from '../core/services/local-database/service.repository.base.local';
import { Language } from './../models/entities/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService extends ServiceRepositoryLocalBase<Language> {
  constructor(protected dbService: LanguageDbService) {
    super(dbService);
  }

  getByCode(code: string): Language | undefined {
    return this.dbService.getAll().data.find((l) => l.code === code);
  }
}

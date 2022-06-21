import { Injectable } from '@angular/core';
import { DbServiceRepositoryBase } from '../core/database/db.service.repository.base';
import { Slide } from '../models/entities/slide';

@Injectable({
  providedIn: 'root',
})
export class SlideDbService extends DbServiceRepositoryBase<Slide> {
  data: Slide[] = [
    {
      id: 1,
      path: 'assets/slides-lg/chain1.png',
      title: 'Zincir üretiminde yılların tecrübesi',
      description: '',
      type: 'lg',
    },
    {
      id: 1,
      path: 'assets/slides-lg/chain1.png',
      title: 'Zincir üretiminde yılların tecrübesi',
      description: '',
      type: 'lg',
    },
    {
      id: 1,
      path: 'assets/slides-lg/chain1.png',
      title: 'Zincir üretiminde yılların tecrübesi',
      description: '',
      type: 'lg',
    },
  ];
}

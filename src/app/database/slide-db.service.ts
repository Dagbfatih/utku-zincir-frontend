import { Injectable } from '@angular/core';
import { DbServiceRepositoryBase } from '../core/database/db.service.repository.base';
import { Slide } from '../models/entities/slide';

@Injectable({
  providedIn: 'root',
})
export class SlideDbService extends DbServiceRepositoryBase<Slide> {
  data: Slide[] = [
    // LG START
    {
      id: 1,
      path: 'slides-lg/chain-1.png',
      title: 'Zincir Üretiminde Yılların Tecrübesi',
      description: '',
      type: 'lg',
    },
    {
      id: 2,
      path: 'slides-lg/chain-2.png',
      title: 'Pim Çıkıntılı Zincir',
      description: '',
      type: 'lg',
    },
    {
      id: 3,
      path: 'slides-lg/chain-3.png',
      title: 'S55 Tarım Zinciri',
      description: '',
      type: 'lg',
    },
    {
      id: 4,
      path: 'slides-lg/chain-4.png',
      title: 'Pim Delikli Zincir',
      description: '',
      type: 'lg',
    },
    {
      id: 5,
      path: 'slides-lg/chain-5.png',
      title: 'Konveyör Zincir',
      description: '',
      type: 'lg',
    },

    // SM START
    {
      id: 6,
      path: 'slides-sm/chain-1.png',
      title: 'Zincir Üretiminde Yılların Tecrübesi',
      description: '',
      type: 'sm',
    },
    {
      id: 7,
      path: 'slides-sm/chain-2.png',
      title: 'Pim Çıkıntılı Zincir',
      description: '',
      type: 'sm',
    },
    {
      id: 8,
      path: 'slides-sm/chain-3.png',
      title: 'S55 Tarım Zinciri',
      description: '',
      type: 'sm',
    },
    {
      id: 9,
      path: 'slides-sm/chain-4.png',
      title: 'Pim Delikli Zincir',
      description: '',
      type: 'sm',
    },
    {
      id: 10,
      path: 'slides-sm/chain-5.png',
      title: 'Konveyör Zincir',
      description: '',
      type: 'sm',
    },
  ];
}

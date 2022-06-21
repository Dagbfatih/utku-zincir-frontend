import { ChainDbService } from './../database/chain-db.service';
import { Chain } from './../models/entities/chain';
import { Injectable } from '@angular/core';
import { ServiceRepositoryLocalBase } from '../core/services/local-database/service.repository.base.local';

@Injectable({
  providedIn: 'root',
})
export class ChainService extends ServiceRepositoryLocalBase<Chain> {
  constructor(protected dbService: ChainDbService) {
    super(dbService);
  }
}

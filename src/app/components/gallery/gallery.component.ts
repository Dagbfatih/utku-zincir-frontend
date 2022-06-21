import { ChainService } from './../../services/chain.service';
import { Component, OnInit } from '@angular/core';
import { Chain } from 'src/app/models/entities/chain';
import { allTranslates } from 'src/app/services/translation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  currentPhotoPath: string;
  chains: Chain[] = [];

  constructor(private chainService: ChainService,private modalService:NgbModal) {}

  ngOnInit(): void {
    this.getAllChains();
  }

  getAllChains() {
    this.chains = this.chainService.getAll().data;
  }

  open(path: string, content: any) {
    this.currentPhotoPath = path;
    this.modalService.open(content, { centered: true, size: 'xl' });
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}

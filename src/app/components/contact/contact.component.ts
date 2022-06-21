import { Component, OnInit } from '@angular/core';
import { faPhone, faPhoneAlt, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  faPhone = faPhoneAlt;
  constructor() {}

  ngOnInit(): void {}

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}

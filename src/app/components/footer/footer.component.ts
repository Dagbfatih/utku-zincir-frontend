import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faMapMarker = faMapMarkerAlt;
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(url: string, fragment: string) {
    this.router.navigate([url], {
      fragment: fragment,
    });
  }

  navigateWithElement(url: string, elementId: string) {
    this.router.navigate([url]);
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}

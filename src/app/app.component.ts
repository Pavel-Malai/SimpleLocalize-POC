import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'SimleLocalizePOC';
  
  languages = [
    { code: 'en-gb', name: 'English (UK)' },
    { code: 'es-es', name: 'Español' },
    { code: 'fr-fr', name: 'Français' },
    { code: 'de-de', name: 'Deutsch' }
  ];
  
  currentLanguage = 'en-gb';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('en-gb');
    this.translate.use('en-gb');
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { delay, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { IMoment } from '../../../../interfaces/imoment';
import { MomentsService } from '../../../../services/moments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class HomeComponent implements OnInit {
  faSearch = faSearch;

  public searchTerm = '';
  public allMoments: IMoment[] = [];
  public moments: IMoment[] = [];
  public baseApiUrl = environment.baseApiUrl;
  public isLoading = false;

  constructor(private momentsService: MomentsService) {
    registerLocaleData(localePt);
  }

  public ngOnInit(): void {
    this.isLoading = true;

    this.momentsService
      .getMoments()
      .pipe(
        delay(2000),

        catchError((error) => {
          if (error) {
            this.isLoading = false;
            this.moments = [];
          }

          return throwError(() => error);
        })
      )

      .subscribe((items) => {
        const data = items.data;

        this.allMoments = data;
        this.moments = data;
        this.isLoading = false;
      });
  }

  public searchMoment(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.moments = this.allMoments.filter((item) => {
      return item.title.toLowerCase().includes(value);
    });
  }
}

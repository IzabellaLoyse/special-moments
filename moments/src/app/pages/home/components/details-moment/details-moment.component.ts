import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IMoment } from '../../../../interfaces/imoment';
import { MomentsService } from '../../../../services/moments.service';

@Component({
  selector: 'app-details-moment',
  templateUrl: './details-moment.component.html',
  styleUrls: ['./details-moment.component.scss'],
})
export class DetailsMomentComponent implements OnInit {
  public moment?: IMoment;
  public baseApiUrl = environment.baseApiUrl;
  public isLoading = false;

  constructor(
    private momentsService: MomentsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.isLoading = true;

    this.momentsService
      .getMomentById(id)
      .pipe(delay(2000))

      .subscribe((item) => {
        this.moment = item.data;
        this.isLoading = false;
      });
  }
}

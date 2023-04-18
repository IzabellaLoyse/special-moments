import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IMoment } from '../../../../interfaces/imoment';
import { MomentsService } from '../../../../services/moments.service';

import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-details-moment',
  templateUrl: './details-moment.component.html',
  styleUrls: ['./details-moment.component.scss'],
})
export class DetailsMomentComponent implements OnInit {
  public faTimes = faTimes;
  public faEdit = faEdit;

  public moment?: IMoment;
  public baseApiUrl = environment.baseApiUrl;
  public isLoading = false;

  constructor(
    private momentsService: MomentsService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
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

  public onDelete(momentId: number): void {
    this.momentsService.deleteMoment(momentId).subscribe();
    this.messageService.setMessage('Momento excluído com sucesso ;)');

    this.router.navigate(['/']);
  }
}

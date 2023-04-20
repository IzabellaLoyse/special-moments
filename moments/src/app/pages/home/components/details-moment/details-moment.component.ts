import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  Subscription,
  catchError,
  delay,
  throwError,
} from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IMoment } from '../../../../interfaces/imoment';
import { MomentsService } from '../../../../services/moments.service';

import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IComment } from '../../../../interfaces/icomment';
import { MessageService } from '../../../../services/message.service';
import { MomentsCommentService } from '../../../../services/moments-comment.service';

@Component({
  selector: 'app-details-moment',
  templateUrl: './details-moment.component.html',
  styleUrls: ['./details-moment.component.scss'],
})
export class DetailsMomentComponent implements OnInit, OnDestroy {
  private submitSubscription: Subscription | undefined;

  public faTimes = faTimes;
  public faEdit = faEdit;

  public moment?: IMoment;
  public baseApiUrl = environment.baseApiUrl;
  public isLoading = false;

  constructor(
    private momentsService: MomentsService,
    private commentService: MomentsCommentService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.isLoading = true;

    this.momentsService
      .getMomentById(id)
      .pipe(
        delay(2000),
        catchError((error) => {
          if (error) {
            this.isLoading = false;
            this.moment = undefined;
          }

          return throwError(() => error);
        })
      )
      .subscribe((item) => {
        this.moment = item.data;
        this.isLoading = false;
      });
  }

  public onSubmit(comment$: BehaviorSubject<IComment>): void {
    this.submitSubscription = comment$.subscribe((data) => {
      const momentId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

      const commentForm = {
        username: data.username,
        text: data.text,
        momentId,
      };

      this.commentService.createComment(commentForm).subscribe((data) => {
        this.moment!.comments!.push(data.data);
      });

      this.messageService.setMessage('Comentário criado com sucesso ;)');
    });
  }

  public onDelete(momentId: number): void {
    this.momentsService.deleteMoment(momentId).subscribe();
    this.messageService.setMessage('Momento excluído com sucesso ;)');

    this.router.navigate(['/']);
  }

  public ngOnDestroy(): void {
    this.submitSubscription?.unsubscribe();
  }
}

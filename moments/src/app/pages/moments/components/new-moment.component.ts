import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IMoment } from '../../../interfaces/imoment';
import { MessageService } from '../../../services/message.service';
import { MomentsService } from '../../../services/moments.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss'],
})
export class NewMomentComponent implements OnInit, OnDestroy {
  private submitSubscription: Subscription | undefined;
  public btnText = 'Compartilhar';
  public isLoading = false;

  constructor(
    private momentsService: MomentsService,
    private messageService: MessageService,
    private router: Router
  ) {}

  public ngOnInit(): void {}

  public onSubmit(momentData$: BehaviorSubject<IMoment>) {
    this.isLoading = true;
    this.submitSubscription = momentData$.subscribe((data) => {
      const momentForm = {
        title: data.title,
        description: data.description,
        image: data.image,
      };

      this.momentsService.createMoment(momentForm).subscribe();

      this.messageService.setMessage('Momento criado com sucesso ;)');

      this.isLoading = false;

      this.router.navigate(['/']);
    });
  }

  public ngOnDestroy(): void {
    this.submitSubscription?.unsubscribe();
  }
}

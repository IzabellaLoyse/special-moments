import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IMoment } from '../../../interfaces/imoment';
import { MomentsService } from '../../../services/moments.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss'],
})
export class NewMomentComponent implements OnInit, OnDestroy {
  private submitSubscription: Subscription | undefined;
  public btnText = 'Compartilhar';

  constructor(private momentsService: MomentsService) {}

  public ngOnInit(): void {}

  public onSubmit(momentData$: BehaviorSubject<IMoment>) {
    this.submitSubscription = momentData$.subscribe((data) => {
      const momentForm = {
        title: data.title,
        description: data.description,
        image: data.image,
      };

      this.momentsService.createMoment(momentForm).subscribe();
    });
  }

  public ngOnDestroy(): void {
    this.submitSubscription?.unsubscribe();
  }
}

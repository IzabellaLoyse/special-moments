import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IMoment } from '../../../../interfaces/imoment';
import { MessageService } from '../../../../services/message.service';
import { MomentsService } from '../../../../services/moments.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.scss'],
})
export class EditMomentComponent implements OnInit {
  private submitSubscription: Subscription | undefined;

  public moment!: IMoment;
  public btnText = 'Editar';
  public isLoading = false;

  constructor(
    private momentService: MomentsService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentService.getMomentById(id).subscribe((item) => {
      this.moment = item.data;
    });
  }

  public onEdit(momentData$: BehaviorSubject<IMoment>) {
    this.isLoading = true;

    this.submitSubscription = momentData$.subscribe((data) => {
      const momentForm = {
        id: data.id,
        title: data.title,
        description: data.description,
        image: data.image,
      };

      this.momentService.updateMoment(this.moment.id!, momentForm).subscribe();

      this.messageService.setMessage(
        `Momento ${this.moment.title} editado com sucesso ;)`
      );

      this.isLoading = false;

      this.router.navigate(['/']);
    });
  }
}

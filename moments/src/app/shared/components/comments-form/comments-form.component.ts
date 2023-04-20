import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IComment } from '../../../interfaces/icomment';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss'],
})
export class CommentsFormComponent implements OnInit, OnDestroy {
  @Output() onSubmitEvent = new EventEmitter<BehaviorSubject<IComment>>();

  private submitSubscription: Subscription | undefined;
  public commentsForm!: UntypedFormGroup;
  public btnText = 'Comentar';
  public usernameField!: AbstractControl;
  public commentField!: AbstractControl;

  constructor() {}

  public ngOnInit(): void {
    this.commentsForm = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.required]),
      text: new UntypedFormControl('', [Validators.required]),
    });

    this.usernameField = this.commentsForm.get('username')!;
    this.commentField = this.commentsForm.get('text')!;
  }

  public onSubmit(): void {
    if (this.commentsForm.invalid) {
      this.commentsForm.markAllAsTouched();
      return;
    }

    const commentsData = this.commentsForm.value as IComment;
    const commentsData$ = new BehaviorSubject<IComment>(commentsData);

    this.submitSubscription = this.onSubmitEvent.subscribe();

    this.onSubmitEvent.emit(commentsData$);

    this.commentsForm.reset();
  }

  public ngOnDestroy(): void {
    this.submitSubscription?.unsubscribe();
  }
}

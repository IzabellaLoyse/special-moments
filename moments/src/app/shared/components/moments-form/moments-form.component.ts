import {
  Component,
  EventEmitter,
  Input,
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
import { IMoment } from '../../../interfaces/imoment';

@Component({
  selector: 'app-moments-form',
  templateUrl: './moments-form.component.html',
  styleUrls: ['./moments-form.component.scss'],
})
export class MomentsFormComponent implements OnInit, OnDestroy {
  @Input() btnText!: string;
  @Input() momentData: IMoment | null = null;
  @Output() onSubmitEvent = new EventEmitter<BehaviorSubject<IMoment>>();

  private submitSubscription: Subscription | undefined;
  public momentForm!: UntypedFormGroup;
  public titleField!: AbstractControl;
  public descriptionField!: AbstractControl;
  public imageField!: AbstractControl;

  constructor() {}

  ngOnInit(): void {
    this.momentForm = new UntypedFormGroup({
      id: new UntypedFormControl(''),
      title: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required]),
      image: new UntypedFormControl('', [Validators.required]),
    });

    if (this.momentData) {
      this.momentForm.patchValue(this.momentData);
    }

    this.titleField = this.momentForm.get('title')!;
    this.descriptionField = this.momentForm.get('description')!;
    this.imageField = this.momentForm.get('image')!;
  }

  public onFileUpload(event: any): void {
    const files: FileList | null = event.target.files[0];

    if (files && files.length > 0) {
      const file: File = files[0];
      this.momentForm.patchValue({ image: file });
    }
  }

  public onSubmit(): void {
    if (this.momentForm.invalid) {
      this.momentForm.markAllAsTouched();
      return;
    }

    const momentData = this.momentForm.value as IMoment;
    const momentData$ = new BehaviorSubject<IMoment>(momentData);

    this.submitSubscription = this.onSubmitEvent.subscribe();

    this.onSubmitEvent.emit(momentData$);
  }

  public ngOnDestroy(): void {
    this.submitSubscription?.unsubscribe();
  }
}

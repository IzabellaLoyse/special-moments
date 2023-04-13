import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-moments-form',
  templateUrl: './moments-form.component.html',
  styleUrls: ['./moments-form.component.scss'],
})
export class MomentsFormComponent implements OnInit {
  @Input() btnText!: string;

  public momentForm!: FormGroup;
  public titleField!: AbstractControl;
  public descriptionField!: AbstractControl;
  public imageField!: AbstractControl;

  constructor() {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });

    this.titleField = this.momentForm.get('title')!;
    this.descriptionField = this.momentForm.get('description')!;
    this.imageField = this.momentForm.get('image')!;
  }

  public onSubmit(): void {
    if (this.momentForm.invalid) {
      this.momentForm.markAllAsTouched();
      return;
    }
  }
}

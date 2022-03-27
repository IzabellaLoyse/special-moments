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

  constructor() {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title(): AbstractControl {
    return this.momentForm.get('title')!;
  }

  get description(): AbstractControl {
    return this.momentForm.get('description')!;
  }

  public onSubmit(): void {
    if (this.momentForm.invalid) return;
  }
}

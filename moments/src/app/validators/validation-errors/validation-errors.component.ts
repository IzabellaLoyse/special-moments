import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
})
export class ValidationErrorsComponent implements OnInit {
  @Input() control!: AbstractControl;

  constructor() {}

  public ngOnInit(): void {}

  get errors(): string[] {
    const errors: string[] = [];

    if (!this.control || !this.control.errors) return errors;

    for (const key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key)) {
        errors.push(this.getErrorMessage(key, this.control.errors[key]));
      }
    }

    return errors;
  }

  private getErrorMessage(key: string, value: any): string {
    const messages: { [key: string]: string } = {
      required: 'Este campo é obrigatório',
    };

    return messages[key];
  }
}

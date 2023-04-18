import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponent } from './components/loader/loader.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MomentsFormComponent } from './components/moments-form/moments-form.component';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { FieldErrorDirective } from './directives/field-error.directive';

@NgModule({
  declarations: [
    MomentsFormComponent,
    FieldErrorDirective,
    ValidationErrorsComponent,
    MessagesComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    MomentsFormComponent,
    FieldErrorDirective,
    ValidationErrorsComponent,
    MessagesComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}

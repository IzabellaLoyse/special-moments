import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appFieldError]',
})
export class FieldErrorDirective implements OnInit {
  @Input('appFieldError') control!: AbstractControl;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.renderer.listen(this.el.nativeElement, 'blur', () => {
      if (this.control) {
        this.control.markAsTouched();

        this.control.invalid && (this.control.touched || this.control.dirty)
          ? this.renderer.addClass(this.el.nativeElement, 'is-invalid')
          : this.renderer.removeClass(this.el.nativeElement, 'is-invalid');
      }
    });
  }
}

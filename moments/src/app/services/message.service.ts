import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSubject = new BehaviorSubject<string>('');
  public message$ = this.messageSubject.asObservable();

  constructor() {}

  public setMessage(message: string): void {
    this.messageSubject.next(message);
    timer(1100)
      .pipe(delay(0))
      .subscribe(() => {
        this.clearMessage();
      });
  }

  public clearMessage(): void {
    this.messageSubject.next('');
  }
}

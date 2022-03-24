import { Observable } from 'rxjs';

export class SomeObservableDto {
  constructor(public observable: Observable<any>) { }
}

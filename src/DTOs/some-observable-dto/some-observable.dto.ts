import { Observable } from 'rxjs';

export class SomeObservableDto {
  // По сути под каждую дтоху которую гонять будем через ноды надо бы
  // сделать отдельный класс и в обсёрвабл передавать тип который должен получиться на выходе
  constructor(public observable: Observable<any>) { }
}

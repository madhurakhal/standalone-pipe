import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  constructor() { }

  sayHi() {
    return 'Hi from Hello Services';
  }

}

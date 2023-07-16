import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
  ) {}
  //* Ahora este valor inyectado se puede usar en toda la app

  getHello(): string {
    console.log(this.tasks);
    return `Hello World! -> ${this.apiKey}`;
  }
}

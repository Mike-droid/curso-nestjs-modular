import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private apiKey: string) {}
  //* Ahora este valor inyectado se puede usar en toda la app

  getHello(): string {
    return `Hello World! -> ${this.apiKey}`;
  }
}

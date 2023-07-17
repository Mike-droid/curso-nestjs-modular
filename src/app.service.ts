import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    private configService: ConfigService,
  ) {}
  //* Ahora este valor inyectado se puede usar en toda la app

  getHello(): string {
    const apiKey = this.configService.get('MY_API_KEY');
    const dbName = this.configService.get('DATABASE_NAME');
    return `Hello World! -> ${apiKey} and DB name -> ${dbName}`;
  }
}

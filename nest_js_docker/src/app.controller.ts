import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return {
      message: 'welcome nest js',
    };
  }

  @Get('/api/protected')
  getHellos(): any {
    return {
      message: 'You is here login.',
      code: 200,
    };
  }

  @Get('/api/protected-name')
  async protectedName() {
    // TODO: for loop 1 to 10

    const responses = this.appService.getHello();

    return {
      response: responses,
      data: '22',
    };
  }
}

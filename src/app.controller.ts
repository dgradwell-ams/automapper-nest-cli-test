import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './user/models/user.dto';
import { User } from './user/models/user.model';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser() {
    const user = new User();
    user.firstName = 'John';
    user.lastName = 'Smith';
    return this.mapper.map(user, User, UserDto);
  }
}

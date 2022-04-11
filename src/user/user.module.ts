import { Module } from '@nestjs/common';
import { UserMapperProfile } from './models/user.mapper-profile';

@Module({
  providers: [UserMapperProfile],
})
export class UserModule {}

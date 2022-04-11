import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.model';

@Injectable()
export class UserMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        User,
        UserDto,
        forMember(
          (destination) => destination.fullName,
          mapFrom((source) => source.firstName + ' ' + source.lastName),
        ),
      );
    };
  }
}

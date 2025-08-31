import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from 'shared/dto/user/create-user.dto';
import { UpdateUserDto } from 'shared/dto/user/update-user.dto';

@Injectable()
export class UserService {

  constructor(@Inject('USER_SERVICE') private userClient: ClientProxy) { }

  create(createUserDto: CreateUserDto) {
    return this.userClient.send('create', createUserDto);
  }

  findAll() {
    return this.userClient.send('findAll', {});
  }

  findOne(id: string) {
    return this.userClient.send('findOne', id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userClient.send('create', { id, updateUserDto });
  }

  remove(id: string) {
    return this.userClient.send('remove', id);
  }
}

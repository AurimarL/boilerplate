import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from 'shared/dto/user/create-user.dto';
import { UpdateUserDto } from 'shared/dto/user/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('create')
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern('findAll')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('findOne')
  findOne(@Payload() id: number) {
    return this.userService.findOne(id);
  }

  @MessagePattern('update')
  update(@Payload() id:string, updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @MessagePattern('remove')
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}

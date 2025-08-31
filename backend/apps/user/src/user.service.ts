import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'shared/dto/user/create-user.dto';
import { UpdateUserDto } from 'shared/dto/user/update-user.dto';
import { GetAllUserUseCase } from './usecases/get-all-user.usecase';
import { CreateUserUseCase } from './usecases/create-user.usecase';

@Injectable()
export class UserService {

  constructor(
    private readonly getAllUserUseCase: GetAllUserUseCase,
    private readonly createUserUseCase: CreateUserUseCase
  ) {

  }
  create(createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto)
  }

  findAll() {
    return this.getAllUserUseCase.execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

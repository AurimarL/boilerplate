import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTodoDto } from 'shared/dto/todo/create-todo.dto';
import { UpdateTodoDto } from 'shared/dto/todo/update-todo.dto';

@Injectable()
export class TodoService {

  constructor(@Inject('TODO_SERVICE') private todoClient: ClientProxy) { }

  create(createTodoDto: CreateTodoDto) {
    return this.todoClient.send('create', createTodoDto);
  }

  findAll() {
    return this.todoClient.send('findAll', {});
  }

  findOne(id: string) {
    return this.todoClient.send('findOne', id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoClient.send('update', { id, updateTodoDto });
  }

  remove(id: string) {
    return this.todoClient.send('remove', id);
  }
}

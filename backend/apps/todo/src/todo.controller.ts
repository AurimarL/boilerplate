import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TodoService } from './todo.service';
import { CreateTodoDto } from 'shared/dto/todo/create-todo.dto';
import { UpdateTodoDto } from 'shared/dto/todo/update-todo.dto';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @MessagePattern('create')
  create(@Payload() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @MessagePattern('findAll')
  findAll() {
    return this.todoService.findAll();
  }

  @MessagePattern('findOne')
  findOne(@Payload() id: number) {
    return this.todoService.findOne(id);
  }

  @MessagePattern('update')
  update(@Payload() id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @MessagePattern('remove')
  remove(@Payload() id: number) {
    return this.todoService.remove(id);
  }
}

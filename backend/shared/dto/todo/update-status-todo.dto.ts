import { PickType } from '@nestjs/swagger';
import { Todo } from 'shared/entities/todo/todo.entity';

export class UpdateStatusTodoDto extends PickType(Todo, ['status'] as const) { }

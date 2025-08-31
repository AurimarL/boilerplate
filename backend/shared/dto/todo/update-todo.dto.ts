import { PickType } from '@nestjs/swagger';
import { Todo } from 'shared/entities/todo/todo.entity';


export class UpdateTodoDto extends PickType(Todo, ['title', 'description']) {

}
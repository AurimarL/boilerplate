import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([{
      name: "TODO_SERVICE",
      transport: Transport.TCP,
      options: {
        port: 3002
      }
    }])
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule { }

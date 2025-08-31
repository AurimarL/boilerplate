import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ApiProperty, ApiTags, } from '@nestjs/swagger';
import { TodoStatus } from 'shared/enum/todo/TodoStatus.enum';

@ApiTags('todos')
@Entity()
export class Todo extends BaseEntity {

    @Column()
    @ApiProperty()
    title: string;

    @Column({ type: 'text', nullable: true })
    @ApiProperty({ nullable: true })
    description: string;

    @Column({ type: 'enum', default: TodoStatus.PENDING, enum: TodoStatus })
    @ApiProperty()
    status: TodoStatus;

    @Column()
    creatorId: string;
}


import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base.entity";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('users')
@Entity()
export class User extends BaseEntity {
    @Column({ type: 'text', nullable: false })
    firstName: string
}
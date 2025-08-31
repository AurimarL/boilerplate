import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "shared/dto/user/create-user.dto";
import { User } from "shared/entities/user/user.entity";
import { Repository } from "typeorm";

export class CreateUserUseCase {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>,
    ) { }

    execute(payload: CreateUserDto) {
        return this.repo.create(payload)
    }

}
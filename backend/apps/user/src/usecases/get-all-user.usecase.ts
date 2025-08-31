import { InjectRepository } from "@nestjs/typeorm";
import { User } from "shared/entities/user/user.entity";
import { Repository } from "typeorm";

export class GetAllUserUseCase {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>,
    ) { }

    execute() {
        return this.repo.find();
    }

}
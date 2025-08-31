import { PickType } from "@nestjs/swagger";
import { User } from "shared/entities/user/user.entity";

export class CreateUserDto extends PickType(User, ['firstName']) {

}
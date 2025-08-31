import { PickType } from "@nestjs/swagger";
import { User } from "shared/entities/user/user.entity";

export class UpdateUserDto extends PickType(User, [
    'id',
    'firstName'
]) {
}
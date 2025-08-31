import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum UserStatus {
    ACTIVE,
    BAN
}

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ enum: UserStatus })
    status: UserStatus;
}


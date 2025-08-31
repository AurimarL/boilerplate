import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { User } from 'shared/entities/main/user/user.entity';
import { Auth } from 'shared/entities/main/auth/auth.entity';


const MainModulesList = [
  UserModule, AuthModule
]

const MainEntitiesList = [
  User, Auth
]

const mainDbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [...MainEntitiesList],
  synchronize: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(mainDbConfig),
    ...MainModulesList],
  controllers: [],
  providers: [],
})
export class MainModule { }

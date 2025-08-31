import { Module } from '@nestjs/common';
import { UserModule } from './modules/main/user/user.module';
import { AuthModule } from './modules/main/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class GatewayModule {}

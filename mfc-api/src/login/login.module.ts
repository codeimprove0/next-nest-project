import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadStatusEntity } from './entities/status.entity'
import { LoginService } from './login.service'
import { User } from './entities/user.entity';
import { ResponseUtil } from '../common/response.util'
import { LocalStrategy } from '../auth/strategy/local.strategy';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from '../auth/auth.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([User, LeadStatusEntity]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: parseInt(
            configService.getOrThrow<string>(
              'JWT_TOKEN_LIFE',
            ),
          ),
        },
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [LoginController],
  providers: [LoginService, ResponseUtil, LocalStrategy, JwtStrategy,AuthService],
})
export class LoginModule { }

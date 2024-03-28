import { Module,NestModule,MiddlewareConsumer,RequestMethod,CacheModule  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';   
import { LoginModule } from './login/login.module';    
import { DashboardModule } from './dashboard/dashboard.module'

import {AuthMiddleware} from './middleware/auth' 
  
import {APP_FILTER, APP_GUARD, APP_INTERCEPTOR} from '@nestjs/core'
import { HttpExceptionFilter } from './exception/http.filter';
import { AuthGuard } from './guards/auth.guard';  
import { MulterModule } from '@nestjs/platform-express';
 
import {TypeOrmModule} from '@nestjs/typeorm' 
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';  
import { RedisModule } from '@nestjs-modules/ioredis';


@Module({
  imports: [  
    RedisModule.forRoot({
      type: 'single',
      url: 'redis://localhost:6379',
    }),
    ConfigModule.forRoot({
      load    : configuration,
      isGlobal: true,
    }), 
    LoginModule,
    DashboardModule,
    MulterModule.register({
      dest:'./uploads'
    }),
       TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) =>({
            type: 'mysql',
            host: configService.get<string>("DB_HOST"),
            port: configService.get<number>("DB_PORT"),
            username: configService.get<string>("DB_USER"),
            password: configService.get<string>("DB_PASS"),
            database: configService.get<string>("DB_NAME"),
            entities: [__dirname+'/**/*.entity.{ts,js}'],
            subscribers: [__dirname+'/**/*.subscriber.{ts,js}'],
            logging: configService.get<boolean>("QUERY_LOG"),
            timezone:configService.get<string>("DB_TIMEZONE"),
            synchronize: false,
        }),
        inject:[ConfigService]
    }),
],
  controllers: [AppController ],
/*   providers: [AppService,{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter
  },{
    provide: APP_GUARD,
    useClass: AuthGuard
  } ], */
  providers: [AppService ],
})

//export class AppModule {}

export class AppModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
    .exclude({
      path:'posts/post-list',method:RequestMethod.GET
    })
    .forRoutes('posts')
 // .forRoutes(PostsController)
//  .forRoutes({
//    path:'posts/post-list',method:RequestMethod.GET
//  })
    
  }
}
 

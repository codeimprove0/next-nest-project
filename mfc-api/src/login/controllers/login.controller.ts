import { Controller,Get,Body,Post,ValidationPipe,UsePipes, Request,UseGuards } from '@nestjs/common';
import {LoginService} from '../login.service';
import { AppLogin,verifyLogin } from '../dto/LoginDto';
import { ResponseUtil } from '../../common/response.util'; 
import * as svgCaptcha from 'svg-captcha';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis'; 
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { AuthService } from '../../auth/auth.service'

@Controller('login')
export class LoginController {
 
    constructor(private loginService : LoginService,
        private readonly responseUtil : ResponseUtil,
        @InjectRedis() private readonly redis: Redis,
        private authService: AuthService,
        ){}


    @Get('getCaptchaImage')
    async getCaptchaImage(){  
        // Generate captcha
        const captcha = svgCaptcha.create({
            size: 5, // number length
            width: 100,
            height: 65,
            fontSize: 50,
            //background: '#000',
            noise: 1,
            charPreset: 'abcdefghijklmnopqrstuvwxyz0123456789'
        }); 
        /* await this.redis.set('keey', 'Redis data!');
        const redisData = await this.redis.get("keey"); */ 
        const payload = { email: 'vishnu@gmail.com', id: 12 };
        let hash = this.authService.generateToken(payload)

        await this.redis.set(hash, captcha.text);
        let response = {
            image:captcha.data,
            value: hash
        }
        return this.responseUtil.successResponse(response,'captcha_load_successfully')  
    }

    @Post('verifyLogin')
    async  verifyLoginUser(@Body() reqData : verifyLogin):Promise <any>{   
        const checkCaptchaValue = await this.redis.get(reqData['hash']);  
        console.log('checkCaptchaValue---',checkCaptchaValue)
        if(checkCaptchaValue){
            if(checkCaptchaValue != reqData['captcha']){
                return this.responseUtil.errorResponse('Captcha not matched',400)  
            }else{
                return this.responseUtil.successResponse([])  
            } 
        }else{
            return this.responseUtil.errorResponse('Captcha code expired',400)   
        } 
    }
 
    @Post('app-login')  
    async detailById(@Body() reqData : AppLogin): Promise<any> {  
 
        const payload = { email: reqData.email, id: 19 };
        let token = this.authService.generateToken(payload)
        let response = { 
            token
        }
        return this.responseUtil.successResponse(response,'login successfully') 
    } 

    @Get('app-list')
    @UseGuards(AuthGuard('jwt')) 
    appList(): any{
        return this.responseUtil.successResponse([])  
    }
    
    @UseGuards(AuthGuard('local'))
    @Post('web-login')
    async login(@Request() req): Promise<any> { 
        const payload = { email: req.user.email, id: req.user.id }; 
        let token = this.authService.generateToken(payload) 
        let response = { 
            ...req.user,
            token
        }
        return this.responseUtil.successResponse(response)   
    }

    @Get('list-new') 
    @UseGuards(JwtAuthGuard)
    listNew(): any{ 
        return this.responseUtil.successResponse([])  
    }
}

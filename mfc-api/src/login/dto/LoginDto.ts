import {IsString,IsInt,IsNotEmpty,IsNumber, IsEmail} from 'class-validator'

export class AppLogin{

    // @IsInt()
    // @IsNumber({},{ message: 'Username should be a string' })
    // @IsNotEmpty()
    // id:Number;

    @IsString()
    email: string; 

    @IsString()
    password: string;
}

export class verifyLogin{ 

    @IsString()
    captcha: string; 

    @IsString()
    @IsEmail({},{ message: 'Email must be valid email' })
    email: string; 

    @IsString()
    hash: string; 

    @IsString()
    password: string; 
 
}
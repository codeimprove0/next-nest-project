import {IsString,IsInt,IsNotEmpty,IsNumber} from 'class-validator'

export class CreatePostDto{

    @IsInt()
    @IsNumber({},{ message: 'Username should be a string' })
    @IsNotEmpty()
    id:Number;

    @IsString()
    firstname: string; 

    @IsString()
    lastname: string;
}
import {IsString,IsInt} from 'class-validator'

export class CreatePostDto{

    @IsInt()
    id:Number;

    @IsString()
    firstname: string; 

    @IsString()
    lastname: string;
}
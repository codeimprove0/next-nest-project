import {Injectable,CanActivate,ExecutionContext,UnauthorizedException} from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // const request = context.switchToHttp().getRequest();
        const request = context.switchToHttp().getRequest();

        console.log(request.headers.authorization,'ooooooooooooo')
       // throw new UnauthorizedException();
        return true;
    }
}
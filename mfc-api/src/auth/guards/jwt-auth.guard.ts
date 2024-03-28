import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { LoginService } from '../../login/login.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly jwtService: JwtService,
    private readonly loginService: LoginService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.split(' ')[1];
 
    // Check if the token is about to expire (within 5 minutes)
    const { exp } = this.jwtService.verify(token);
    const now = Date.now() / 1000;
    const fiveMinutes = 5 * 60;
 

    if (exp - now < fiveMinutes) {
      // Generate a new access token and refresh token
      const user = this.jwtService.decode(token); // Assuming you stored user information in the token
   
      const newAccessToken = this.jwtService.sign(user); // Adjust the expiration time 
      const newRefreshToken = this.loginService.generateRefreshToken(user);
      

      // Update the response with the new tokens
      request.res.setHeader('Authorization', `Bearer ${newAccessToken}`);
      request.res.setHeader('Refresh-Token', newRefreshToken);
    }

    return true;
  }
}
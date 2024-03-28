import { Injectable,BadRequestException } from '@nestjs/common'; 
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm'
import { Repository,EntityManager } from 'typeorm'
import { User } from './entities/user.entity'
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'; 

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        @InjectEntityManager() private entityManager: EntityManager,
        private jwtService: JwtService,
    ) {

    }
    private readonly blogs: any[] = [{
        id: 1, data: 'NA'
    }];

    create(data: any) {
        this.userRepo.save(data);
        this.blogs.push(data);
    }

    findData(): Promise<any[]> {
        let query = `SELECT * from user where id = ?`;
        let params = ['2'];
        return this.entityManager.query(query,params);
       // return this.userRepo.find(); 
    }

    async validateUser(email: string, password: string): Promise<User> {
        const user: User = await this.userRepo.findOneBy({email});  
        console.log('user===',user)
        if (!user) {
          throw new BadRequestException('User not found');
        }
        // const isMatch: boolean = bcrypt.compareSync(password, user.password);
        // if (!isMatch) {
        //   throw new BadRequestException('Password does not match');
        // }
        return user;
    }

    generateRefreshToken(payload: any): string {
        return this.jwtService.sign(payload, { expiresIn: '7d' }); // Set a longer expiration time for refresh tokens
      }
}

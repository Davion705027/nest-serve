import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { log } from 'console';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
    constructor( private jwtService : JwtService,
        private userService:UserService
        ){}
    auth(){
        console.log('atuh');
        return 'auth auth 被user掉用';
    }

    async login({name,password}){
        const findUser = await this.userService.findOne({name,password});
        console.log(findUser);
        if(!findUser)return null;
        
        const payload = { sub: findUser.id, name: findUser.name }
        const token = await this.jwtService.signAsync(payload)
        return token
    }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor( private jwtService : JwtService){}
    auth(){
        console.log('atuh');
        return 'auth auth 被user掉用';
    }

    async login(name?,pass?){
        const payload = { sub: 12345, name:'davion' }
        const token = await this.jwtService.signAsync(payload)
        return token
    }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    auth(){
        console.log('atuh');
        return 'auth auth 被user掉用';
    }
}

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {

    }

    @Post()
    async login(@Body() params){
        const res = await this.authService.login(params);
        return res;
    }
}

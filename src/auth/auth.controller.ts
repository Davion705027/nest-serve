import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {

    }

    @Post()
    async login(@Body() params){
        const res = await this.authService.login(params);
        return res;
    }

    @UseGuards(AuthGuard)
    @Get()
    auth(@Request() req){
        return 123;
    }
    // @UseGuards(AuthGuard)
    @Get('b')
    auth2(@Request() req){
        return 1234;
    }
}

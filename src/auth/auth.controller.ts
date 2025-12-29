import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { LoginCredential } from './types/types';
import { Public } from './decorators/public.decorators';

@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly appService:AuthService){}
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() loginDto:LoginCredential){
        return this.appService.login(loginDto)
        
    }
}

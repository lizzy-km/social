import { BadRequestException, Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { LoginCredential } from './types/types';
import { Public } from './decorators/public.decorators';

@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly appService: AuthService) { }



    @Public()
    @Post('login')
    async login(@Body() loginDto?: LoginCredential) {
        if (loginDto)
            if (await this.appService.isCorrect(loginDto)) { //Check user credentials
                return this.appService.login(loginDto)  // correct credentials
            }
            else {                                  // incorrect credentials
                throw new UnauthorizedException({
                    data: this.appService.loginFail(loginDto)
                })
            }



        else
            throw new BadRequestException({ // empty credrentials
                status: 400,
                message: 'Credentials data should be provide',

            })

    }

    @Post('checkMail')
    checkMail(@Body() checkMailData: { email: string }) {

        if (this.appService.isEmailExist(checkMailData.email)) {
            throw new BadRequestException({
                status: 400,
                message: 'Email already registered'
            })
        }
        else {
            return ({
                status: 200,
                message: 'Email does not exist in registered accounts list'
            })
        }
    }


}

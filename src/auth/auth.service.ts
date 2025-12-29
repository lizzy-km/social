import { Injectable } from '@nestjs/common';
import { LoginCredential, LoginResponse, LoginUserData } from './types/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }
    async login(loginData: LoginCredential): Promise<LoginResponse> {

        const payload = {
            email: loginData.email,
            sub: loginData.email
        }
        return {
            status: 200,
            isSuccess: true,
            isError: false,
            loginAt: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
            message: 'Login success',
            token: {
                accessToken: await this.jwtService.signAsync(payload),
            },
            data: {
                email: loginData.email,
                name: 'string'
            }
        }
    }

    loginSuccess(loginData: LoginUserData): object {
        return {
            status: 200,
            message: 'User login successfully',
            key: {
                accessToken: '',
                refreshToken: ''
            },
            userData: {
                name: loginData.name,
                email: loginData.email,
            }


        }
    }
    loginFail(loginData: LoginCredential): object {
        return {
            status: 200,
            message: 'User login failed',
            loginInfo: {
                email: loginData.email,
                passsword: loginData.password
            }


        }
    }

}

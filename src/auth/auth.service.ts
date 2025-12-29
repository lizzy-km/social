import { Injectable } from '@nestjs/common';
import { LoginCredential, LoginResponse, SignupDataType } from './types/types';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/common/utils/password.utils';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    async isCorrect(userCredential: LoginCredential) { //Credential checker function
        const correctCredential = {
            email: 'test@gmail.com',
            password: '$2b$10$52Sm27E.BY6mv1ISnyNIh.beTo9wL0LL3q1/6fwxDve/RskwEEgxK'
        }

        return (await comparePassword(userCredential.password, correctCredential.password) && userCredential.email === correctCredential.email)



    }
    async login(loginData: LoginCredential): Promise<LoginResponse> { // login success response

        const payload = {
            email: loginData.email,
            sub: loginData.password
        }
        return {
            status: 201,
            isSuccess: true,
            isError: false,
            loginAt: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
            message: 'Login success',
            _token: {
                accessToken: await this.jwtService.signAsync(payload),
            },
            data: loginData
        }
    }

    loginFail(loginData: LoginCredential): object { //login failed due to incorrect credentials
        return {
            status: 401,
            message: 'incorrect email or password',
            loginInfo: {
                email: loginData.email,
                passsword: loginData.password
            }


        }
    }

    async signup(signupData: SignupDataType) {

        const payload = {
            email: signupData.email,
            sub: signupData.password
        }

        return ({
            status: 201,
            message: '',
            _token: {
                accessToken: await this.jwtService.signAsync(payload)
            },
            data: {
                signupData
            }
        })

    }

    isEmailExist(email: string) {
        const emailList: string[] = ['test@gmail.com']


        return emailList.includes(email)

    }



}

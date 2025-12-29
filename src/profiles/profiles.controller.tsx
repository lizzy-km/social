import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private readonly appService: ProfilesService) { }

    @HttpCode(HttpStatus.OK)
    @Get('me')  

    getProfiles(): {
        name: string,
    } {
        
        return {
            name: 'Quix Profile',
            
        }
    }
}

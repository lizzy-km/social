import { Controller, Get } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { JSX } from 'react';

@Controller('profiles')
export class ProfilesController {
    constructor(private readonly appService: ProfilesService) { }

    @Get('me')
    getProfiles(): {
        name: string,
        Element: JSX.Element
    } {
        return {
            name: 'ProfileCard',
            Element: this.appService.getProfiles({
                width: 60,
                height: 120,
                text: 'Quix`s Profile',
                pfUrl:'url'
            })
        }
    }
}

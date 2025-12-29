import { Injectable } from '@nestjs/common';
import type { JSX } from 'react';
import ProfileCard from './components/ProfileCard';

@Injectable()
export class ProfilesService {
    getProfiles({ width, height, text,pfUrl }: { width: number, height: number, text: string ,pfUrl:string}): JSX.Element {
        return ProfileCard({ width, height, text,pfUrl }) 
    }
}

import { USER_LIST } from './user.mocks';
import { User } from './../models/user.interface';
import { Repository } from './../models/repository.interface';
const repositoryList : Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This repository shows the use of camera functionality within ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Sms',
        description: 'This repository shows the use of Sms functionality within ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Geolocation',
        description: 'This repository shows the use of Geolocation functionality within ionic 3',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 QR code',
        description: 'This repository shows the use of QR code functionality within ionic 3',
        owner: USER_LIST[1]
    },

]

export const REPOSITORY_LIST = repositoryList;
import { IUser } from './user.model';

export const USER_DATA: IUser[] = [{
  firstName: 'Bill',
  lastName: 'Gates',
  income: 50000,
  isWorking: true,
  company: 'Microsoft Inc',
  dob: new Date('Dec 12, 1965'),
  image: './assets/images/bill.jpg',
  votes: 120
}, {
  firstName: 'Steve',
  lastName: 'Jobs',
  income: 0,
  isWorking: false,
  company: 'Apple',
  dob: new Date('Aug 12, 1965'),
  image: './assets/images/steve.png',
  votes: 160
}, {
  firstName: 'Tim B.',
  lastName: 'Lee',
  income: 30000,
  isWorking: true,
  company: 'World Wide Web',
  dob: new Date('Jan 1, 1965'),
  image: './assets/images/tim.jpg',
  votes: 110
}];

import { IStatus, ITicket } from './types';

export const mockFilter = {
  title: true,
  description: true,
  assignee: true,
  publishDate: true,
};

export const mockStatuses: IStatus[] = [
  {
    color: 'white',
    title: 'Open',
    type: 'open',
  },
  {
    color: 'red-300',
    title: 'In progress',
    type: 'in-progress',
  },
  {
    color: 'yellow-400',
    title: 'Published',
    type: 'published',
  },
];

export const mockTickets: ITicket[] = [
  {
    id: 1,
    title: 'WD-5000',
    description: 'We need to create meth.',
    assignee: 'Wito Divaro',
    publishDate: new Date(),
    statusType: mockStatuses[0].type,
  },
  {
    id: 2,
    title: 'WD-5001',
    description: 'We need to create more meth.',
    assignee: 'Wito Divaro',
    publishDate: new Date(),
    statusType: mockStatuses[1].type,
  },
  {
    id: 3,
    title: 'WD-5002',
    description: 'We need to create math.',
    assignee: 'Wito Divaro',
    publishDate: new Date(),
    statusType: mockStatuses[1].type,
  },
  {
    id: 4,
    title: 'WD-5003',
    description: 'Destroy meth',
    assignee: 'Wito Divaro',
    publishDate: new Date(),
    statusType: mockStatuses[1].type,
  },
  {
    id: 5,
    title: 'WD-5003',
    description: 'Destroy meth',
    assignee: 'Wito Divaro',
    publishDate: new Date(),
    statusType: mockStatuses[1].type,
  },
  {
    id: 6,
    title: 'WD-5003',
    description: 'Destroy meth',
    assignee: 'Wito Divaro',
    publishDate: new Date(),
    statusType: mockStatuses[1].type,
  },
  {
    id: 7,
    title: 'WD-5003',
    description: 'Destroy meth',
    assignee: 'Wito Divaro',
    publishDate: new Date(),
    statusType: mockStatuses[1].type,
  },
  {
    id: 8,
    title: 'WD-5003',
    description: 'Destroy meth',
    assignee: 'Wito Divaro',
    publishDate: new Date(),
    statusType: mockStatuses[1].type,
  },
  {
    id: 9,
    title: 'WD-5003',
    description: 'Destroy meth',
    assignee: 'Wito Divaro',
    publishDate: new Date(),
    statusType: mockStatuses[2].type,
  },
];

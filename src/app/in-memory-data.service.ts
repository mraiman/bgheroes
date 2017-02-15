import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
  { id: 1, name: 'Mihelt' },
  { id: 2, name: 'Sarevok' },
  { id: 3, name: 'Imoen' },
  { id: 4, name: 'Jaheira' },
  { id: 5, name: 'Hexxat' },
  { id: 6, name: 'Kagain' },
];
    return {heroes};
  }
}

import { User } from '../model/User';

export class UserDatabase {
  private users: User[];

  constructor(users: User[]) { 
    this.users = users;
  }

  public async getUserById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.getId() === id);
  }

  public async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
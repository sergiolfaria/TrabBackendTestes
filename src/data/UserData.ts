import { ThenMarques, harp, rubens, tinker } from "../../tests/Mock/UserMock";
import {  User } from "../model/User";



export class UserDatabase {
   private users: User[];

   constructor() {
    
      this.users = [rubens, tinker, harp, ThenMarques];
   }

   public async getUserById(id: string): Promise<User | undefined> {
      return this.users.find(user => user.getId() === id);
   }
   public async getAllUsers(): Promise<User[]> {
      return this.users;
   }
}

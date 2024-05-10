import {  User } from "../../src/model/User";
import { USER_ROLES } from "../../src/model/UserRoles";




export class UserDatabase {
   private users: User[];

   constructor() {
    
      this.users = [
         new User("35b62ff4-64af-4721-a4c5-d038c6f730cf", "Rubens", "rubens@gmail.com", USER_ROLES.ADMIN),
         new User("35b62ff4-64af-4721-a4c5-d038c6f730ce", "tinker",  "tinker@cad.com", USER_ROLES.ADMIN),
         new User("35b62ff4-64af-4721-a4c5-d038c6f730cg", "harp", "harp@ai.com", USER_ROLES.NORMAL),
         new User("35b62ff4-64af-4721-a4c5-d038c6f730ch", "ThenMarques", "ThenMarques@ai.com", USER_ROLES.NORMAL),
        
      ];
   }

   public async getUserById(id: string): Promise<User | undefined> {
      return this.users.find(user => user.getId() === id);
   }
   public async getAllUsers(): Promise<User[]> {
      return this.users;
   }
}

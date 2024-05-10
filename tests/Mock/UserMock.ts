import { USER_ROLES, User } from "../../src/model/User";




export class UserDatabase {
   private users: User[];

   constructor() {
    
      this.users = [
         new User("35b62ff4-64af-4721-a4c5-d038c6f730cf", "Rubens", "rubens@gmail.com", USER_ROLES.ADMIN),
        
      ];
   }

   public async getUserById(id: string): Promise<User | undefined> {
      return this.users.find(user => user.getId() === id);
   }
}

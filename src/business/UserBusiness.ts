
import { UserDatabase } from '../data/UserData';
import { User } from '../model/User';
import { USER_ROLES } from '../types/UserRoles';

export class UsersBusiness {
   private userDatabase: UserDatabase;

   constructor(userDatabase: UserDatabase) {
      this.userDatabase = userDatabase;
   }

   public async getUserById(id: string) {
      const user = await this.userDatabase.getUserById(id);
      if (!user) {
         throw new Error("User not found");
      }
      return {
         id: user.getId(),
         name: user.getName(),
         email: user.getEmail(),
         role: user.getRole(),
      };
   }
   public async getAllUsers(currentUser: User) {
      if (currentUser.getRole() !== USER_ROLES.ADMIN) {
         throw new Error("Unauthorized access");
      }
      const allUsers = await this.userDatabase.getAllUsers();
      return allUsers.map(user => ({
         id: user.getId(),
         name: user.getName(),
         email: user.getEmail(),
         role: user.getRole(),
      }));
   }

}

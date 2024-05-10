
import { UserDatabase } from '../../tests/Mock/UserMock';

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
}

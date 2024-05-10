export enum USER_ROLES {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN",
}

export class User {
   constructor(
      private id: string,
      private name: string,
      private email: string,
      private role: USER_ROLES
   ) { }

   public getId(): string {
      return this.id;
   }

   public getName(): string {
      return this.name;
   }

   public getEmail(): string {
      return this.email;
   }

   public getRole(): USER_ROLES {
      return this.role;
   }
}

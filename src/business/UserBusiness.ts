
import { UserDatabase } from './../testes/Mock/UserMock';

export class UsersBusiness {
    nstructor(private UserDatabase: IUserDatabase) {}


    public async getUserById(id: string) {
        const user = await this.UserDatabase.getUserById(id);
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

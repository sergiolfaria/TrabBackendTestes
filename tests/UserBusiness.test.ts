import { UsersBusiness } from "../src/business/UserBusiness";
import { User } from "../src/model/User";
import { USER_ROLES } from "../src/model/UserRoles";
import { UserDatabase } from "./Mock/UserMock";

describe('testando usuários com dados mockados', () => {
  const userId = "35b62ff4-64af-4721-a4c5-d038c6f730cf";
  const expectedUser = new User(userId, "Rubens", "rubens@gmail.com", USER_ROLES.ADMIN);
  const adminUser = new User("35b62ff4-64af-4721-a4c5-d038c6f730cf", "Rubens", "rubens@gmail.com", USER_ROLES.ADMIN);
  const normalUser = new User("35b62ff4-64af-4721-a4c5-d038c6f730cg", "harp", "harp@ai.com", USER_ROLES.NORMAL);
  const allUsers = [adminUser, normalUser];

  it('obtém um usuário por ID com sucesso', async () => {
    const userDbMock = new UserDatabase();
    jest.spyOn(userDbMock, 'getUserById').mockResolvedValueOnce(expectedUser);

    const usersBusiness = new UsersBusiness(userDbMock);
    const user = await usersBusiness.getUserById(userId);

    expect(user).toEqual({
      id: expectedUser.getId(),
      name: expectedUser.getName(),
      email: expectedUser.getEmail(),
      role: expectedUser.getRole(),
    });
  });

  it('lança um erro quando o usuário não é encontrado', async () => {
    const userDbMock = new UserDatabase();
    jest.spyOn(userDbMock, 'getUserById').mockResolvedValueOnce(undefined);

    const usersBusiness = new UsersBusiness(userDbMock);

    await expect(usersBusiness.getUserById(userId)).rejects.toThrowError('User not found');
  });

  it('lança um erro quando o usuário não é administrador', async () => {
    const userDbMock = new UserDatabase();
    jest.spyOn(userDbMock, 'getAllUsers').mockResolvedValueOnce(allUsers);

    const usersBusiness = new UsersBusiness(userDbMock);

    await expect(usersBusiness.getAllUsers(normalUser)).rejects.toThrowError('Unauthorized access');
  });

  it('retorna todos os usuários quando o usuário é administrador', async () => {
    const userDbMock = new UserDatabase();
    jest.spyOn(userDbMock, 'getAllUsers').mockResolvedValueOnce(allUsers);

    const usersBusiness = new UsersBusiness(userDbMock);
    const users = await usersBusiness.getAllUsers(adminUser);

    expect(users).toEqual(allUsers.map(user => ({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    })));
  });
});

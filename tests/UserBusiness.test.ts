import { UsersBusiness } from "../src/business/UserBusiness";
import { USER_ROLES, User } from "../src/model/User";
import { UserDatabase } from "./Mock/UserMock";



describe('testando usuários com dados mockados', () => {
  const userId = "35b62ff4-64af-4721-a4c5-d038c6f730cf";
  const expectedUser = new User(userId, "Rubens", "rubens@gmail.com", USER_ROLES.ADMIN);

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
});

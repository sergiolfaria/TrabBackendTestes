import { UsersBusiness } from "../business/UserBusiness";
import { User } from "../model/User";

describe('testando usuarios com dados mockados ', () => {


it('obtém um usuário por ID com sucesso', async () => {
  const expectedUser = {
    id:   "35b62ff4-64af-4721-a4c5-d038c6f730cf",
    name: "Rubens",
    email: "rubens@gmail.com",
    role: 'ADMIN',
  };

  
  (UserDatabase.prototype as any).getUserById.mockResolvedValueOnce(expectedUser);

  const usersBusiness = new UsersBusiness(new User());
  const user = await usersBusiness.getUserById(userId);

  expect(user).toEqual(expectedUser);
});

it('lança um erro quando o usuário não é encontrado', async () => {
  const userId = '35b62ff4-64af-4721-a4c5-péqlpekqpodjpoq'; 

  (UserDatabase.prototype as any).getUserById.mockResolvedValueOnce(null); 

  const usersBusiness = new UsersBusiness(new User());

  await expect(usersBusiness.getUserById(userId)).rejects.toThrowError('Usuário não encontrado');
});

});
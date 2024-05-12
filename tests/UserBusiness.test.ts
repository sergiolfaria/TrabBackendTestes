import { UsersBusiness } from '../src/business/UserBusiness';
import { UserDatabase } from '../src/data/UserData';
import { rubens, tinker, harp, ThenMarques } from './Mock/UserMock';


describe('Testes para UsersBusiness', () => {
  const userId = "35b62ff4-64af-4721-a4c5-d038c6f730cf"; 
  const expectedUser = rubens; 
  const allUsers = [rubens, tinker, harp, ThenMarques];
  const userDbMock = new UserDatabase(allUsers);
 

  it('obtém um usuário por ID com sucesso', async () => {
    
        const usersBusiness = new UsersBusiness(userDbMock);
        const user = await usersBusiness.getUserById(userId);
      
      expect(user).toEqual({
        id: expectedUser.getId(),
        name: expectedUser.getName(),
        email: expectedUser.getEmail(),
        role: expectedUser.getRole(),
      });
  });

  it('lança um erro com a mensagem de erro quando o usuário não é encontrado', async () => {
    const usersBusiness = new UsersBusiness(userDbMock);
    await expect(usersBusiness.getUserById("IdQueClaramenteNãoEstáCerto")).rejects.toThrow("User not found"); 
  });


  it('lança um erro quando o usuário não é administrador', async () => {
    const usersBusiness = new UsersBusiness(userDbMock);
    await expect(usersBusiness.getAllUsers(ThenMarques)).rejects.toThrow("Unauthorized access");
  });

  it('retorna todos os usuários quando o usuário é administrador', async () => {
    const usersBusiness = new UsersBusiness(userDbMock);
    const users = await usersBusiness.getAllUsers(rubens);

    expect(users).toEqual(allUsers.map(user => ({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    })));
  });
});


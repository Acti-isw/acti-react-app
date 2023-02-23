import UserService from '../../service/UserService';

export function recordPractice(user, idPractice){
  const practices = user.practicas;
  practices.push(idPractice);
  const data = {
    "practicas": practices
  }
  UserService.updateUser(user.id, data)
}
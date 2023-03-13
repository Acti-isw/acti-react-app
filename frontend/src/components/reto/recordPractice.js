import UserService from '../../service/UserService'; 
import fireworks from '../../utils/fireworks'

export function recordPractice(user, idPractice, updateUser){
  fireworks()
  fireworks()
  fireworks()
  const practices = user.practicas;
  practices.push(idPractice);
  const data = {
    "practicas": practices
  }
  UserService.updateUser(user.id, data).then(updateUser)
;
  
}
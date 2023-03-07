import { loggedUser } from '../../UserContext';
import { useContext } from 'react';
import NotAllowed from '../../routes/NotAllowed';

function ValidateAccess({children}){
  const { currentUser } = useContext(loggedUser);

  if(currentUser.rol.id==1){
    return children
  }else{
    return <NotAllowed/>
  }
  
}

export default ValidateAccess
function password (password){
  let passcode = '';
  for(let i = 0; i < password.length; i++) {
      passcode+='*';
  }
  return passcode;
}

export default password;
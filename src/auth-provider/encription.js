export default function makeEncryptPassword ({bcrypt}){
  return function encryptPassword(password) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPass = bcrypt.hashSync(password, salt);
    return hashPass;
  }
}

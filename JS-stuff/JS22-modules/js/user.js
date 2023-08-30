export default class User {
  constructor(email, userName){
    this._id = email;
    this._name = userName
  }
  greeting(){
    return `Hi, my name is ${this._name}`
  }
}
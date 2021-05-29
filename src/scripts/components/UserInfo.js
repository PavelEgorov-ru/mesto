export default class UserInfo{
  constructor(data) {
    this.data = data;   
    this.userName = document.querySelector(this.data.name);
    this.UserCommit = document.querySelector(this.data.about); 
  }

  getUserInfo() {
    return {name: this.userName.textContent, about: this.UserCommit.textContent}
  }

  setUserInfo({name, about}) {
    this.userName.textContent= name;
    this.UserCommit.textContent = about;
  }
}

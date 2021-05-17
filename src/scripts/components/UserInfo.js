export default class UserInfo{
  constructor(data) {
    this.data = data;   
    this.userName = document.querySelector(this.data.name);
    this.UserCommit = document.querySelector(this.data.commit); 
  }

  getUserInfo() {
    return {name: this.userName.textContent, commit: this.UserCommit.textContent}
  }

  setUserInfo(values) {
    this.userName.textContent= values.name;
    this.UserCommit.textContent = values.link;
  }
}

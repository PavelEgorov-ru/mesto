export default class UserInfo{
  constructor(data) {
    this.data = data;   
    this.userNameElement = document.querySelector(this.data.name);
    this.userCommitElement = document.querySelector(this.data.about);
    this.userAvatarElement = document.querySelector(this.data.avatar)
  }

  getUserInfo() {
    return {name: this.userNameElement.textContent, about: this.userCommitElement.textContent}
  }

  setUserInfo(data) {
    this.userNameElement.textContent= data.name;
    this.userCommitElement.textContent = data.about;
    this.userAvatarElement.src = data.avatar
  }
}

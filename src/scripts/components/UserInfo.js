export default class UserInfo{
  constructor(data) {
    this._data = data;   
    this._userNameElement = document.querySelector(this._data.name);
    this._userCommitElement = document.querySelector(this._data.about);
    this._userAvatarElement = document.querySelector(this._data.avatar)
  }

  getUserInfo() {
    return {name: this._userNameElement.textContent, about: this._userCommitElement.textContent}
  }

  setUserInfo(data) {
    this._userNameElement.textContent= data.name;
    this._userCommitElement.textContent = data.about;
    this._userAvatarElement.src = data.avatar
  }
}

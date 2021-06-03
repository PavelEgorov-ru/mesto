export default class Api {
  constructor({token, cohort}) {
    this.token = token;
    this.cohort = cohort;
  }

  _request(adres, method, info) {
    const pattern = {
      method: method,
      headers: {
       authorization: this.token,
       'Content-Type': 'application/json',
       }
     }
     
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this.cohort}/${adres}`,
      info ? {...pattern, body: JSON.stringify(info)} : pattern
      )
      .then(res => {
        if(res.ok) {
          return res.json()
        } else {
          Promise.reject(`ошибка: ${res.status}`)
        }
     })

  }

  newUserInfo() {
    return this._request('users/me', 'GET')
  }

  editUserInfo(userInfo) {
    return this._request('users/me', 'PATCH', userInfo)
  }

  editAvatar(avatarInfo) {
    return this._request('users/me/avatar', 'PATCH', avatarInfo)
  }

  getUserId() {
    return this._request('users/me', 'GET')
  }

  getCards(){
    return  this._request('cards', 'GET')
  }

  setNewCard(data) {
    return this._request('cards', 'POST', data)
  }

  deleteCard(id) {
    return this._request(`cards/${id}`, 'DELETE')
  }

  like(cardId, isLiked) {
    return this._request(`cards/likes/${cardId}`, isLiked? 'DELETE' : 'PUT') 
  }
}
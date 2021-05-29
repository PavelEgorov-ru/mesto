export default class Api {
  constructor({token, cohort}) {
    this.token = token;
    this.cohort = cohort;
  }

  _request(adres, metod) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this.cohort}/${adres}`,{
        metod: metod,
        headers: {
         authorization: this.token,
         'Content-Type': 'application/json',
         }
       })
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
    return fetch('https://mesto.nomoreparties.co/v1/cohort-24/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(userInfo)
    }
    )
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        Promise.reject(`ошибка: ${res.status}`)
      }
     })
  }

  getCards(){
    return  this._request('cards', 'GET')
  }

  setNewCard(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-24/cards', {
      method: 'POST',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json',
        }, 
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }
    )
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        Promise.reject(`ошибка: ${res.status}`)
      }
     })
  }
}


// {
//   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24/',
//   headers: {
//     authorization: '17967209-61dd-4a29-b076-c48750c9d1ad',
//     'Content-Type': 'application/json',
//   }
// }
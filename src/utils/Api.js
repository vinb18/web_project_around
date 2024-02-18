class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInfo(name, about, avatar) {
    return fetch(this._url + "/users/me", {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "GET",
      body: JSON.stringify({
        name,
        about,
        avatar,
      }),
    }).then((response) => response.json());
  }

  getInitialCards() {
    return fetch(this._url + "/cards", {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then((response) => response.json());
  }

  updateUser(name, job) {
    return fetch(this._url + "/users/me", {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        name,
        job,
      }),
    }).then((response) => response.json());
  }

  addCard(link, name) {
    return fetch(this._url + "/cards", {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        link,
        name,
      }),
    }).then((response) => response.json());
  }

  deleteCard(idCard) {
    return fetch(this._url + "/cards/" + idCard, {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((response) => response.json());
  }

  likeCard(idCard) {
    return fetch(this._url + "/cards/like/" + idCard, {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "PUT",
    }).then((response) => response.json());
  }

  deleteLikeCard(idCard) {
    return fetch(this._url + "/cards/like/" + idCard, {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((response) => response.json());
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "3211f2ac-735f-43eb-baad-2fad40c3f616",
    "Content-Type": "application/json",
  },
});

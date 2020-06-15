import { Injectable } from '@angular/core';
const STORAGE_KEY = 'misterBitcoin'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = {
    name: '',
    coins: 100,
    moves: []
  }

  constructor() {
    this.user.name = localStorage.getItem(STORAGE_KEY) || ''
  }

  getMovesListByContact(contactId) {
    return this.user.moves.filter(move => move.toId === contactId)
  }

  getUser(): Promise<{}> {
    return Promise.resolve(this.user)
  }

  signup(name) {
    localStorage.setItem(STORAGE_KEY, name)
    this.user.name = name
  }

  logout() {
    this.user.name = ''
    localStorage.setItem(STORAGE_KEY, '')
  }

  addMove(contact, amount) {
    this.user.moves.unshift({
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount
    })
  }

}

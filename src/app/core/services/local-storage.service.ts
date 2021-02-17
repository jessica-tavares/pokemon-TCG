import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(fieldName: string, object: any) {
    localStorage.setItem(fieldName, JSON.stringify(object))
  }

  get(fieldName: string) {
    const result = localStorage.getItem(fieldName);
    if (result) {
      return JSON.parse(result);
    }
    return [];
  }

  getDeck(fieldName: string, id: number) {
    const allDecks = this.get(fieldName);
    const deck = allDecks.filter((deck: { id: number; }) => deck.id == id)[0];
    return deck

  }

}

import { Injectable } from '@nestjs/common';
import { Controller, Dependencies, Get, Bind, Query, Param, Body, Post} from '@nestjs/common';

@Injectable()
export class collection{
  #books;

  constructor(){
    this.#books = []
    this.#books.push({"author": "Alex Michaelides", "title": "The Silent Patient"})
    this.#books.push({"author": "Gillian Flynn", "title": "Gone Girl"})
    this.#books.push({"author": "Freida McFadden", "title": "The Housemaid"})
    this.#books.push({"author": "B.A. Paris", "title": "Behind Closed Doors"})
    this.#books.push({"author": "Agatha Christie", "title": "Murder on the Orient Express"})
    this.#books.push({"author": "Agatha Christie", "title": "The A.B.C. Murders"})
    this.#books.push({"author": "Agatha Christie", "title": "Elephants Can Remember"})
    this.#books.push({"author": "Stephen King", "title": "It"})
    this.#books.push({"author": "Agatha Christie", "title": "And Then There Were None"})
    this.#books.push({"author": "Stephen King", "title": "The Shining"})
    this.#books.push({"author": "Stephen King", "title": "The Long Walk"})
    this.#books.push({"author": "Stephen King", "title": "The Running Man"})
  }

  get(){
    return this.#books;
  }

}

@Injectable()
@Dependencies(collection)
export class collection_stats{
  #collection;
  #qtyBooks;

  constructor(collection){
    this.#collection = collection.get()
    this.#qtyBooks = new Array()
  }

  booksByAuthorQty(){
    let authors = new Set()
    for(const book of this.#collection){
      authors.add(book.author)
    }

    for(const author of authors){
      let number = 0;
      for(const book of this.#collection){
        if (author == book.author){
          number = number + 1;
        }
      }
      this.#qtyBooks.push({"author": author, "qty": number})
      number = 0;
    }
    return this.#qtyBooks;
  }
}
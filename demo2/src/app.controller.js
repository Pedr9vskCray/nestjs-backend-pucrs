import { Controller, Dependencies, Get, Bind, Query, Param, Body, Post} from '@nestjs/common';
import { collection } from './app.service';
import { collection_stats } from './app.service';

@Controller("library")
@Dependencies(collection, collection_stats)
export class LibraryController{

  #collection;
  #collection_stats;

  constructor(collection, collection_stats){
    this.#collection = collection.get();
    this.#collection_stats = collection_stats
  }

  @Get()
  getHello(){
    return "welcome to our library API"
  }

  @Get("books")
  getBooks(){
    return this.#collection;
  }

  @Get("authors")
  getAuthors(){
    var authors = new Set();
    for (const book of this.#collection){
      authors.add(book.author)
    }

    return [...authors]
  }

  @Get("titles")
  getTitles(){
    var titles = new Set()
    for (const book of this.#collection){
      titles.add(book.title)
    }

    return [...titles]
  }

  @Get("byAuthor")
  @Bind(Query())
  getBookByAuthor(query){
    console.log(query)
    var data = new Array()
    for (const book of this.#collection){
      if (book.author == query.author){
        data.push(book.title)
      }
    }

    return data;
  }

  @Get("qtyByAuthor")
  getQtyBookByAuthor(){
    return this.#collection_stats.booksByAuthorQty();
  }
}
import { Controller, Dependencies, Get, Bind, Query, Param, Body, Post} from '@nestjs/common';

// if you rename the controllers here, you also have to import and rename them in app.module.js

@Controller("server")
export class MainController{

  // http://localhost:3000/server
  @Get()
  getMain() {
    return "Welcome to the main framework.";
  }

  // http://localhost:3000/server/debug-framework
  @Get("debug-framework")
  getDebugFramework() {
    return "This is where logs and runtime errors are stored.";
  }
}

@Controller("students")
export class SubController{

  // private property of the class, it stores the list of students
  #studentList;

  constructor(){
    this.#studentList = [];
    this.#studentList[0] = {"Name": "Pedro José", "Age": 21}
    this.#studentList[1] = {"Name": "Felipe Borges", "Age": 25}
    this.#studentList[2] = {"Name": "Mário César", "Age": 19}
    this.#studentList[3] = {"Name": "Julia Carvalho", "Age": 27}
    this.#studentList[4] = {"Name": "Vitória Luiz", "Age": 18}
  }

  // http://localhost:3000/students
  @Get()
  getStudents() {
    return this.#studentList;
  }
}

@Controller("library")
export class AltController{

  #books;

  constructor(){
    this.#books = [];
    this.#books[0] = {"Name": "Do Androids Dream of Electric Sheep?", "Author": "Novel by Philip K. Dick"};
    this.#books[1] = {"Name": "1984", "Author": "George Orwell"};
    this.#books[2] = {"Name": "The Book Thief", "Author": "Markus Zusak"};
    this.#books[3] = {"Name": "And Then There Were None", "Author": "Agatha Christie"};
    this.#books[4] = {"Name": "Murder on the Orient Express", "Author": "Agatha Christie"};
  };
  
  // localhost:3000/library/books
  @Get("books")
  getBooks(){
    return this.#books;
  }

  // localhost:3000/library/authors
  @Get("authors")
  getAuthors(){
    var authors = new Set();
    for(const book of this.#books){
      authors.add(book.Author)
    }
    return [...authors];
  }

  // localhost:3000/library/names
  @Get("names")
  getNames(){
    var names = new Set();
    for(const book of this.#books){
      names.add(book.Name)
    }
    return [...names];
  }

  // localhost:3000/library/bookAuthor?Author=Agatha Christie
  @Get("bookAuthor")
  @Bind(Query())
  getBooksByAuthors(query){
    console.log(query)
    var data = []
    for(const book of this.#books){
      if(book.Author == query.Author){
        data.push(book.Name)
      }
    }
    return data;
  }

  // localhost:3000/library/book/name/1984
  @Get("book/name/:Name")
  @Bind(Param())
  getBookByName(param){
    var data = [];
    for(const book of this.#books){
      if (book.Name == param.Name){
        data.push(book)
      }
    }
    return data;
  }

  // localhost:3000/library/test
  /*
  Body: {
    "id": 7548824,
    "text": "data protocol server side checkup successfully started."
  }
  */
  @Post("test")
  @Bind(Body())
  testingPostMethod(dataReceivedThroughPOST){
    console.log(
      "Test Number: " + dataReceivedThroughPOST.id,
      "Text: " + dataReceivedThroughPOST.text 
    );
    return "data received!";
  }
}
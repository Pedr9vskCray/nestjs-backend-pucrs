import { Controller, Dependencies, Get, Bind, Param , Post, Body } from '@nestjs/common';
import { DadosBiblioteca } from './app.service';

@Controller('livros')
@Dependencies(DadosBiblioteca)
export class AppController {

  constructor(dadosBiblioteca) {
    this.dadosBiblioteca = dadosBiblioteca;
  }

  // http://localhost:3000/livros
  @Get()
  async getLivros() {
    return await this.dadosBiblioteca.buscarTodos();
  }

  // http://localhost:3000/livros/7
  @Get(':id')
  @Bind(Param('id'))
  async getLivro(id) {
    return await this.dadosBiblioteca.buscarPorId(id);
  }

  // // http://localhost:3000/cadastraLivro
  @Post('cadastraLivro')
  @Bind(Body())
  async postLivro(livro) {
    await this.dadosBiblioteca.cadastrar(livro);
  }

}
import { Injectable } from '@nestjs/common';
import { query } from "./database_connection";

@Injectable()
export class DadosBiblioteca {
  async buscarTodos() {
    const livros = await query({
      query: 'SELECT * FROM Livro',
      values: []
    });
    return livros;
  }

  async buscarPorId(id) {
    const livro = await query({
      query: 'SELECT * FROM Livro WHERE id = ?',
      values: [id]
    });
    return livro;
  }

  async cadastrar(livro) {
    const resultado = await query({
      query: 'INSERT INTO Livro (autor, titulo, ano, id) VALUES (?, ?, ?, ?)',
      values: [livro.autor, livro.titulo, livro.ano, livro.id]
    });
  }
}
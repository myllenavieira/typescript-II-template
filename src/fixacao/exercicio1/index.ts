/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: CorFavorita
}

enum CorFavorita {
  VERMELHO="vermelho",
  LARANJA="laranja",
  AMARELO="amarelo",
  VERDE="verde",
  AZUL="azul",
  ANIL="anil",
  VIOLETA="violeta"
}

const Pessoa1: Pessoa = {
  nome: "Maria",
  idade: 20,
  corFavorita: CorFavorita.AMARELO
}

const Pessoa2: Pessoa = {
  nome: "José",
  idade: 18,
  corFavorita: CorFavorita.AZUL
}

const Pessoa3: Pessoa = {
  nome: "João",
  idade: 24,
  corFavorita: CorFavorita.LARANJA
}

const Pessoa4: Pessoa = {
  nome: "Júlia",
  idade: 19,
  corFavorita: CorFavorita.VERMELHO
}

console.table([Pessoa1, Pessoa2, Pessoa3, Pessoa4]);

"use strict";
// Type Script
// function somar(a: number, b: number) {
//   return a + b;
// }
// somar(2, 5);
// const produto: string = 'Livro';
// let preco: number = 200;
// const carro: {
//   marca: string;
//   portas: number;
// } = {
//   marca: 'Audi',
//   portas: 5,
// };
// const produto = 'Livro';
// let preco = 200;
// const carro = {
//   marca: 'Audi',
//   portas: 5,
// };
// const barato = preco < 200 ? true : 'produto caro';
// const nitendo = {
//   nome: 'Nitendo',
//   preco: '2000',
// };
// function transformarProduto(produto: { nome: string; preco: string }) {
//   produto.preco = `R$ ${produto.preco}`
//   return produto
// }
// const produtoNovo = transformarProduto(nitendo)
// console.log(produtoNovo)
// function normalizarTexto(texto: String) {
//   return texto.trim().toLowerCase()
// }
// console.log(normalizarTexto('   OLA MUNDO NOVAMENTE  '))
// const input = document.querySelector('input');
// const total = window.localStorage.getItem('bonus');
// if (input && total) {
//   input.value = total;
//   calcularBonus(+input.value);
// }
// function calcularBonus(value: number) {
//   const p = document.querySelector('p');
//   if (p) p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
// }
// function bonus20() {
//   if (input) {
//     window.localStorage.setItem('bonus', input.value);
//     calcularBonus(Number(input.value));
//   }
// }
// if (input) input.addEventListener('keyup', bonus20);
// const frase1: object = new String('Front End');
// const frase2: string = String('Front End');
// const frase3 = 'Front End';
// console.log(typeof frase1)
// console.log(typeof frase2)
// console.log(typeof frase3)
// let total: string | number = 200;
// total = '4000';
// function isNumber(value: string | number) {
//   if (typeof value === 'number') return true;
//   else return false;
// }
// if (isNumber(200)) {
//   console.log('É um numero');
// }
// function boolean(value: boolean) {
//   if (value) {
//     return 'Valor Correto';
//   }
// }
// console.log(boolean(isNumber(200)));
// function toNumber(value: number | string){
//   if(typeof value === 'number') return value
//   else if(typeof value === 'string') return Number(value)
//   else throw ('Value deve ser um número ou uma string')
// }
// console.log(toNumber({}))
// type Produto = {
//   nome: string;
//   preco: number;
//   teclado: boolean;
// };
// function preencherDados(produto: Produto) {
//   document.body.innerHTML += `
//   <div>
//   <h1>Nome: ${produto.nome}<h1>
//   <p>Preço: ${produto.preco}<p>
//   <span>Possui teclado: ${produto.teclado ? 'Sim' : 'Não'}<span>
//   <div/>
//   `;
// }
// preencherDados({ nome: 'Nootbook', preco: 2000, teclado: true });
// const desktop: Produto = { nome: 'Desktop', preco: 4000, teclado: false };
// preencherDados(desktop);
// type Categorias = 'design' | 'codigo' | 'descode';
// function pintarCategoria(categoria: Categorias) {
//   if (categoria === 'design') console.log('Pintar desing');
// }
// pintarCategoria('design');
// interface InterfaceProduto {
//   nome: string;
//   preco: number;
//   teclado: boolean;
// }
// async function fetchProduto() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   const data = await response.json();
//   showProduct(data);
// }
// fetchProduto();
// interface Empresa {
//   nome: string;
//   fundacao: number;
//   pais: string;
// }
// interface InterfaceProduto {
//   nome: string;
//   preco: number;
//   descricao: string;
//   garantia: string;
//   seguroAcidentes: boolean;
//   empresaFabricante: Empresa;
//   empresaMontadora: Empresa;
// }
// function showProduct(data: InterfaceProduto) {
//   document.body.innerHTML += `
//   <div>
//   <h1>Nome: ${data.nome}<h1/>
//   <p>Preço: R$ ${data.preco}<p/>
//   <p>Descrição do produto: ${data.descricao}<p/>
//   <p>Garantia: ${data.garantia} anos<p/>
//   <p>Possui seguro acidentes: ${data.garantia ? 'Sim' : 'Não'}<p/>
//   <div>
//   <h4>Fabricante:<h4/>
//   <p>Nome: ${data.empresaFabricante.nome}<p/>
//   <p>Pais: ${data.empresaFabricante.pais}<p/>
//   <div/>
//   <div>
//   <h4>Montadora:<h4/>
//   <p>Nome: ${data.empresaMontadora.nome}<p/>
//   <p>Pais: ${data.empresaMontadora.pais}<p/>
//   <div/>
//   <div/>
//   `;
// }
// const numeros = [10, 20, 33, 23, 11, 8, 1, 3];
// const valores = [10, 'Taxas', '33', 23, 'Produtos', 8, '1', 3];
// function maiorQ10(dados: number[]) {
//   return dados.filter((n) => n > 10);
// }
// function filterNumber(dados: (number | string)[]) {
//   return dados.filter((item) => typeof item === 'number');
// }
// function filterString(dados: Array<number | string>) {
//   return dados.filter((item) => typeof item === 'string');
// }
// console.log(maiorQ10(numeros));
// console.log(filterNumber(valores));
// console.log(filterString(valores));
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const data = await response.json();
//   mostrarCursos(data);
// }
// fetchCursos();
// interface Curso {
//   nome: string;
//   nivel: 'iniciante' | 'avancado';
// }
// function mostrarCursos(data: Array<Curso>) {
//   data.forEach((curso) => {
//     let color;
//     if (curso.nivel === 'iniciante') {
//       color = 'blue';
//     } else if (curso.nivel === 'avancado') {
//       color = 'red';
//     }
//     document.body.innerHTML += `
// <div>
// <h1 style="color: ${color}">${curso.nome}<h1/>
// <p>${curso.nivel}<p/>
// <div/>
// `;
//   });
// }
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const data = await response.json();
//   mostrarCursos(data);
// }
// fetchCursos();
// interface Cursos {
//   nome: string;
//   gratuito: string;
//   horas: number;
//   idAulas: number[];
//   nivel: 'iniciante' | 'avancado';
//   aulas: number;
//   tags: string[];
// }
// function mostrarCursos(cursos: Array<Cursos>) {
//   cursos.forEach((curso) => {
//     let color;
//     curso.nivel === 'iniciante' ? (color = 'blue') : (color = 'red');
//     document.body.innerHTML += `
//   <div style='backGround: #eee; padding: 0rem 1.2rem'>
//   <h1 style='color: ${color}'>Curso: ${curso.nome}<h1/>
//   <p>Horas: ${curso.horas}<p/>
//   <p>Aulas: ${curso.idAulas.join(' | ')}<p/>
//   <p>Nível: ${curso.nivel}<p/>
//   <p>${curso.aulas} Aulas<p/>
//   <p>Grade: ${curso.tags.join(', ')}<p/>
//   <div/>
//   `;
//   });
// }
// interface Curso {
//   nome: string;
//   horas: number;
// }
// function mostrarCursos(cursos: Curso[]) {
//   cursos.forEach((curso) => {
//     document.body.innerHTML += `
//       <div>
//         <h2>${curso.nome}</h2>
//         <p>Horas: ${curso.horas}</p>
//       </div>
//     `;
//   });
// }
// const dados: any = 'o any gera problemas';
// mostrarCursos(dados);
// const numbers = [
//   10.0, 8.7, 10.0, 10.0, 9.6, 9.9, 9.2, 10.0, 7.9, 7.3, 8.5, 10.0, 10.0, 7.4,
//   8.3, 9.2, 10.0, 10.0, 10.0, 10.0, 7.9, 9.1, 9.9, 8.0, 10.0, 8.1, 10.0, 9.3,
//   8.2, 6.0, 9.0, 10.0, 10.0, 8.3, 9.4, 10.0, 10.0, 9.0, 10.0, 7.5, 10.0, 10.0,
//   10.0, 10.0, 9.0, 10.0, 10.0, 9.1, 7.8, 10.0, 10.0, 9.7, 10.0, 10.0, 10.0,
//   10.0, 8.6, 9.9, 10.0,
// ];
// function media(array: Array<number>) {
//   return +array
//     .reduce((acc, value) => {
//       return acc + value / numbers.length;
//     }, 0)
//     .toFixed(2);
// }
// console.log(media(numbers));
// const funcional = (array: Array<number>) => () => {
//   return +array
//     .reduce((acc, value) => {
//       return acc + value / array.length;
//     }, 0)
//     .toFixed(2);
// };
// console.log(funcional(numbers)())
// interface Product {
//   nome?: string
//   ano?: number
// }
// const jogo: Product = {
//   nome: 'Ragnarok',
//   ano: 2005
// }
// console.log(jogo)
// class Produto {
//   nome?: string;
//   preco?: number;
//   constructor(nome?: string, preco?: number) {
//     this.nome = nome;
//     this.preco = preco;
//   }
//   precoEmReal() {
//     return `R$ ${this.preco}`;
//   }
// }
// const livro = new Produto('Game of Thrones', 200);
// class Livro {
//   autor?: string;
//   constructor(autor?: string) {
//     this.autor = autor;
//   }
// }
// class Jogo {
//   jogadores?: number;
//   constructor(jogadores?: number) {
//     this.jogadores = jogadores;
//   }
//   playersNumber() {
//     return `Jogo para apenas ${this.jogadores} jogadores`;
//   }
// }
// function buscarProduto(busca: string) {
//   if (busca === 'O Hobbit') return new Livro('J. J. R. Tokken');
//   if (busca === 'Call of Duty') return new Jogo(2);
//   if (busca === 'DarkSouls') return new Jogo(1).playersNumber();
//   else return null;
// }
// function buscarNovoProduto(busca: string) {
//   switch (busca) {
//     case 'O Hobbit':
//       return new Livro('J. J. R. Tokken');
//       break;
//     case 'Call of Duty':
//       return new Jogo(2);
//       break;
//     case 'DarkSouls':
//       return new Jogo(1).playersNumber();
//       break;
//     default:
//       return null;
//   }
// }
// const produto = buscarNovoProduto('O Hobbit');
// console.log(produto);
// if (produto instanceof Livro) {
//   console.log(produto.autor);
// }
// const produto = buscarProduto('O Hobbit');
// const produto2 = buscarProduto('Call of Duty');
// const produto3 = buscarProduto('DarkSouls');
// if (produto instanceof Livro) {
//   console.log(produto.autor);
// }
// if (produto2 instanceof Jogo) {
//   console.log(produto2.jogadores);
//   console.log(produto2.playersNumber());
// }
// if (produto3 instanceof Jogo) {
//   console.log(produto3.jogadores);
// }
// class Produto {
//   nome: string;
//   constructor(nome: string) {
//     this.nome = nome;
//   }
// }
// class Livro extends Produto {
//   autor: string;
//   constructor(nome: string, autor: string) {
//     super(nome);
//     this.autor = autor;
//   }
// }
// class Jogo extends Produto {
//   jogadores: number;
//   constructor(nome: string, jogadores: number) {
//     super(nome);
//     this.jogadores = jogadores;
//   }
//   showParms() {
//     return `Este jogo permite ${this.jogadores} jogadores`;
//   }
// }
// const buscarProduto = (nome: string) => {
//   switch (nome) {
//     case 'DarkSouls':
//       return new Jogo('DarkSouls', 1);
//       break;
//     case 'Game of Thrones':
//       return new Livro('Game of Thrones', 'George R.R. Martin');
//       break;
//     default:
//       return null;
//   }
// };
// const produto = buscarProduto('DarkSouls');
// const produto2 = buscarProduto('Game of Thrones');
// if (produto instanceof Produto) console.log(produto);
// if (produto instanceof Jogo) console.log(produto.showParms());
// if(produto2 instanceof Produto) console.log(produto2?.nome)
// if(produto2 instanceof Livro) console.log(produto2)
// const link = document.getElementById('origamid');
// if (link instanceof HTMLAnchorElement)
//   link.href = link.href.replace('http//', 'https//');
// const links = document.querySelectorAll('.link');
// links.forEach((link) => {
//   if (link instanceof HTMLElement) changeElementStyle(link, '#fb5');
// });
// function changeElementStyle(element: HTMLElement, color: string) {
//   element.style.color = color;
//   element.style.border = `2px solid ${color}`;
// }

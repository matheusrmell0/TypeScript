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

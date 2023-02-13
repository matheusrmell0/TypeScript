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
// const btn = document.querySelector('button');
// const events = ['click', 'touchstart', 'mousedown'];
// events.forEach((event) => btn?.addEventListener(event, handleEvent));
// function handleEvent(event: Event) {
//   if (event instanceof MouseEvent) {
//     console.log(event.pageX);
//   }
//   if (event instanceof TouchEvent) {
//     console.log(event.touches.item.name);
//   }
// }
// const btn = document.querySelector('button');
// const events = ['click', 'touchstart', 'mousedown'];
// function typeEvent(element: HTMLElement) {
//   events.forEach((event) => element?.addEventListener(event, handleEvent));
//   function handleEvent(event: Event) {
//     if (event instanceof MouseEvent) {
//       console.log(event.pageX);
//     }
//     if (event instanceof TouchEvent) {
//       console.log(event.touches[0].pageX);
//     }
//   }
// }
// if(btn)typeEvent(btn)
// const btn = document.querySelector('button');
// btn?.addEventListener('click', clickFunf)
// function clickFunf(this: HTMLButtonElement, event: MouseEvent){
//   console.log(this)
// }
// const btn = document.querySelector('button');
// btn?.addEventListener('click', clickFunf);
// function clickFunf(event: MouseEvent) {
//   if (event.currentTarget instanceof HTMLElement) {
//     console.log(event.currentTarget.innerText);
//   }
// }
// const btn = document.getElementById('btn-mobile');
// const nav = document.getElementById('nav');
// function handleClick(event: PointerEvent) {
//   nav?.classList.toggle('active');
//   if (nav?.classList.contains('active')) {
//     if (event.currentTarget instanceof HTMLElement)
//       event.currentTarget.ariaLabel = 'Fechar Menu';
//     if (event.currentTarget instanceof HTMLButtonElement)
//       event.currentTarget.ariaExpanded = 'true';
//   } else if (event.currentTarget instanceof HTMLElement) {
//     event.currentTarget.ariaLabel = 'Abrir Menu';
//     event.currentTarget.ariaExpanded = 'false';
//   }
// }
// btn?.addEventListener('pointerdown', handleClick);
// const btn = document.getElementById('btn-mobile');
// function handleClick(event: PointerEvent) {
//   const nav = document.getElementById('nav');
//   const button = event.currentTarget;
//   if (button instanceof HTMLElement && nav) {
//     nav.classList.toggle('active');
//     if (nav.classList.contains('active')) {
//       button.setAttribute('aria-expanded', 'false');
//       button.setAttribute('aria-label', 'Fechar Menu');
//     } else {
//       button.setAttribute('aria-expanded', 'true');
//       button.setAttribute('aria-label', 'Abrir Menu');
//     }
//   }
// }
// btn?.addEventListener('pointerdown', handleClick);
// function retonarO<TipoDoParametro>(a: TipoDoParametro): TipoDoParametro {
//   return a;
// }
// console.log(retonarO('Ola'));
// console.log(retonarO(300));
// function dadosType<T>(a: T): { dado: T; tipo: string } {
//   return {
//     dado: a,
//     tipo: typeof a,
//   };
// }
// console.log(dadosType('Ola'));
// console.log(dadosType(300));
// console.log(dadosType(true));
// const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
// const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];
// function selectFirstFour<T>(array: T[]): T[] {
//   console.log(array.slice(0, 4));
//   return array.slice(0, 4);
// }
// selectFirstFour(numeros);
// selectFirstFour(frutas);
// function notNull<T>(dado: T) {
//   if (dado !== null) return dado;
//   else return null;
// }
// console.log(notNull('Ola'));
// console.log(notNull(null));
// console.log(notNull(0));
// function returnHTML<T extends HTMLElement>(param: T): string {
//   return param.innerHTML;
// }
// function returnText<T extends HTMLElement>(el: T): string {
//   return el.innerText;
// }
// const btn = document.querySelector('button');
// if(btn) console.log(returnText(btn));
// if(btn) console.log(returnHTML(btn));
// function HTMLElementData<T extends HTMLElement>(
//   param: T,
// ): {
//   dataNome: string;
//   dataHTML: string;
//   data: HTMLElement;
// } {
//   return {
//     dataNome: param.innerText,
//     dataHTML: param.innerHTML,
//     data: param,
//   };
// }
// const btn = document.querySelector('button');
// if (btn) console.log(HTMLElementData(btn).data);
// if (btn) console.log(HTMLElementData(btn));
// function $<T extends Element>(selector: string): T | null {
//   return document.querySelector(selector);
// }
// const button = $('button');
// const link = $<HTMLAnchorElement>('a')?.href;
// console.log(button);
// console.log(link);
// const link = document.querySelector<HTMLAnchorElement>('a');
// if (link instanceof HTMLAnchorElement) {
//   console.log(link?.innerHTML);
// }
// async function getData<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }
// interface Notebook {
//   nome: string;
//   preco: number;
// }
// async function getProduto() {
//   const notebook = await getData<Notebook>(
//     'https://api.origamid.dev/json/notebook.json',
//   );
//   document.body.innerHTML += `
//   <div>
//   <h1>${notebook.nome}<h1/>
//   <p>${notebook.preco} R$<p/>
//   <div/>
//   `;
//   console.log(notebook.preco);
// }
// getProduto();
// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }
// const subtrair = (a: number, b: number) => a - b;
// type Callback = (event: MouseEvent) => void
// function isString(value: any) {
//   if (typeof value === 'string') {
//     return true;
//   }
// }
// console.log(isString('Ola'));
// console.log(isString(1));
// const btn = document.querySelector('button'); // true || undefined
// btn?.click(); // void
// function abort(message: string): never {
//   throw new Error(message)
// }
// abort('Ocorreu um erro!')
// console.log('Never ocorreu')
// interface Quadrado {
//   lado: number;
//   perimetro(lado: number): number;
// }
// function calc(form: Quadrado) {
//   return form.perimetro(7);
// }
// // Overload
// function normalizar(value: string): string;
// function normalizar(value: string[]): string[];
// function normalizar(value: string | string[]): string | string[] {
//   if (typeof value === 'string') {
//     return value.trim().toLowerCase();
//   } else {
//     return value.map((item) => item.trim().toLowerCase());
//   }
// }
// console.log(normalizar('  Ola mUnDo NOvO  ').concat(' novamente'));
// console.log(normalizar([' EaE MuNdO nOvo   ']).filter((l) => (l ? l : null)));
// function arredondar(value: string): string;
// function arredondar(value: number): number;
// function arredondar(value: string | number): string | number | undefined {
//   if (typeof value === 'number') {
//     return Math.ceil(value);
//   } else {
//     return Math.ceil(+value).toString();
//   }
// }
// console.log(arredondar(200.5).toFixed)
// console.log(arredondar('221.44').toLowerCase)
// function typeGuard(value: any) {
//   if (typeof value === 'string') {
//     return value.toLowerCase();
//   }
//   if (typeof value === 'number') {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }
// typeGuard('Mello');
// typeGuard(200);
// typeGuard(document.body);
// function typeGuard(value: unknown) {
//   if (typeof value === 'string') {
//     return value.toLowerCase();
//   }
//   if (typeof value === 'number') {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }
// typeGuard('Mello');
// typeGuard(200);
// typeGuard(document.body);
// const obj = {
//   nome: 'Matheus',
// };
// if ('nome' in obj) {
//   console.log('Sim');
// }
// async function fetchProduto(url: string) {
//   const response = await fetch(url);
//   const json = await response.json();
//   handleProduto(json);
// }
// fetchProduto('https://api.origamid.dev/json/notebook.json');
// interface Produto {
//   nome: string;
//   preco: number;
// }
// function handleProduto(data: Produto) {
//   if ('preco' in data) {
//     document.body.innerHTML += `
// <p>Produto: ${data.nome}<p/>
// <p>Preço: R$ ${data.preco + 150}<p/>
// `;
//   }
// }
// function isString(value: unknown): value is string {
//   return typeof value === 'string';
// }
// function handleData(data: unknown) {
//   if (isString(data)) {
//     console.log(data.toLowerCase());
//   }
// }
// handleData('Ola MUNDO');
// handleData(20022);
// interface Produto {
//   nome: string;
//   preco: number;
// }
// async function fetchProduto<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   const json = await response.json();
//   handleProduto(json);
//   return json;
// }
// fetchProduto<Produto>('https://api.origamid.dev/json/notebook.json');
// function isProduto(value: unknown): value is Produto {
//   if (
//     value &&
//     typeof value === 'object' &&
//     'nome' in value &&
//     'preco' in value
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function handleProduto(data: Produto) {
//   if (isProduto(data)) {
//     document.body.innerHTML += `
//   <p>${data.nome}<p/>
//   <p>${data.preco}<p/>
//   `;
//   }
// }
// interface Cursos {
//   nome: string;
//   horas: number;
//   tags: string[];
// }
// async function getData<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   const json = await response.json();
//   handleData(json);
//   return json;
// }
// getData<Cursos>('https://api.origamid.dev/json/cursos.json');
// function isArray(value: unknown): value is Cursos[] {
//   if (
//     value &&
//     typeof value === 'object' &&
//     value instanceof Array &&
//     'nome' in value[1] &&
//     'horas' in value[1] &&
//     'tags' in value[1]
//   )
//     return true;
//   else return false;
// }
// function handleData(data: unknown) {
//   if (isArray(data)) {
//     data.forEach((curso) => {
//       document.body.innerHTML += `
//     <div>
//     <p>${curso.nome}<p/>
//     <p>${curso.horas}<p/>
//     <p>${curso.tags.join(', ')}<p/>
//     <div/>
//     `;
//     });
//   }
// }
// interface Cursos {
//   nome: string;
//   horas: number;
//   tags: string[];
//   nivel: 'iniciante' | 'avancado';
// }
// async function getData(url: string) {
//   const response = await fetch(url);
//   const json = await response.json() as Promise<Cursos>;
//   handleData(json);
//   return json;
// }
// getData('https://api.origamid.dev/json/cursos.json');
// function isCursos(value: unknown): value is Cursos {
//   if (
//     value &&
//     typeof value === 'object' &&
//     'nome' in value &&
//     'horas' in value &&
//     'tags' in value &&
//     'nivel' in value
//   )
//     return true;
//   else return false;
// }
// function handleData(data: unknown) {
//   if (Array.isArray(data) && data instanceof Array) {
//     data.filter(isCursos).forEach((cursos) => {
//       document.body.innerHTML += `
//       <div>
//       <p>${cursos.nome}<p/>
//       <p>${cursos.horas}<p/>
//       <p>${cursos.tags.join(', ')}<p/>
//       <p>${cursos.nivel}<p/>
//       <div/>
//       `;
//     });
//   }
// }
// const video = document.querySelector('.player') as HTMLVideoElement;
// // erro runtime, não existe volume de null
// video.volume;
// // erro TS, possíveis dados devem ser compatíveis com Element | null
// const link = document.querySelector('.link') as string;
// interface Produto {
//   nome: string;
//   preco: number;
// }
// async function fetchProduto() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   return response.json() as Promise<Produto>;
// }
// // Podemos usar o as em diferentes locais.
// async function handleProduto1() {
//   const produto = await fetchProduto();
//   produto.nome;
// }
// async function handleProduto2() {
//   const produto = (await fetchProduto()) as Produto;
//   produto.nome;
// }
// async function handleProduto3() {
//   const produto = await fetchProduto();
//   (produto as Produto).nome;
// }
// const video1 = document.querySelector('.player') as HTMLVideoElement;
// const video2 = <HTMLVideoElement>document.querySelector('.player');
// const video3 = document.querySelector<HTMLVideoElement>('.player');
// const video4 = document.querySelector('.player');
// video1.volume;
// video2.volume;
// video3?.volume;
// (video4 as HTMLVideoElement).volume;
// const { body }: { body: HTMLElement } = document;
// // interface Produto {
// //   nome: string;
// //   preco?: number;
// // }
// function handleData({ nome, preco }: { nome: string; preco?: number }) {
//   console.log(nome.includes('book'));
//   console.log(preco?.toFixed());
// }
// handleData({
//   nome: 'Notebook',
//   preco: 201.5,
// });
// function eventLog({
//   currentTarget,
//   pageX,
// }: {
//   currentTarget: EventTarget | null;
//   pageX: number;
// }) {
//   if (currentTarget instanceof HTMLElement)
//     currentTarget.innerHTML = `Click do mouse em ${pageX}`;
// }
// document.documentElement.addEventListener('click', eventLog);
// function eventLog({ currentTarget, pageX }: MouseEvent) {
//   if (currentTarget instanceof HTMLElement)
//     currentTarget.innerHTML = `Click do mouse em ${pageX}`;
// }
// document.documentElement.addEventListener('click', eventLog);
// function comparar(tipo: 'maior' | 'menor', ...numeros: number[]) {
//   if (tipo === 'maior') {
//     return Math.max(...numeros);
//   }
//   if (tipo === 'menor') {
//     return Math.min(...numeros);
//   }
// }
// console.log(comparar('maior', 3, 2, 4, 30, 5, 6, 20));
// console.log(comparar('menor', 3, 2, 4, 1, 5, 6, 20));
// type Produto = {
//   preco: number;
// };
// type Carro = {
//   rodas: number;
//   portas: number;
// };
// function handleProdutoCarro(dados: Carro & Produto) {
//   dados.rodas;
//   dados.portas;
//   dados.preco;
// }
// handleProdutoCarro({
//   preco: 20000,
//   rodas: 4,
//   portas: 5,
// });
// Com Interface
// interface InterfaceCarro {
//   rodas: number;
//   portas: number;
// }
// interface InterfaceCarro {
//   preco: number;
// }
// const dado1: InterfaceCarro = {
//   preco: 20000,
//   rodas: 4,
//   portas: 5,
// };
// // Com Type
// type TipoCarro = {
//   rodas: number;
//   portas: number;
// };
// type TipoCarroComPreco = TipoCarro & {
//   preco: number;
// };
// const dado2: TipoCarroComPreco = {
//   preco: 20000,
//   rodas: 4,
//   portas: 5,
// };
// interface Window {
//   userId: number;
// }
// window.userId = 200;
// console.log(window.userId);
//
//
// Desafio Control Flow
const form = document.querySelector('#form');
window.UserData = {};
// Type Guard com instanceof
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('userData', JSON.stringify(window.UserData));
    }
}
form?.addEventListener('keyup', handleInput);
// UserTypeGuard com in & is
function isUserData(obj) {
    if (obj &&
        typeof obj === 'object' &&
        ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else
        return false;
}
// JavaScript para validJSON
function validJSON(string) {
    try {
        JSON.parse(string);
    }
    catch (e) {
        return false;
    }
    return true;
}
// PreencherDados
function preencherDados(data) {
    if (data && validJSON(data)) {
        const userData = JSON.parse(data);
        if (isUserData(userData)) {
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
preencherDados(localStorage.getItem('userData'));

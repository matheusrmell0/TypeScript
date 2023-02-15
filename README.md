# TypeScript
Aprendendo TypeScript


---------------------- TypeScript Básico ---------------------- 


Annotation e Inference ---------------------- 

O TS consegue inferir o tipo de dado de expressões em JavaScript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado.   


Typeof ---------------------- 

Typeof é um operador de JavaScript que retorna uma string indicando o tipo do dado. Os possíveis valores retornados por typeof são: string, number, boolean, function, object, undefined, bigint e symbol. O typeof funciona como um type guard. 


Union Types ---------------------- 

É comum termos funções que podem retornar ou receber tipos diferentes. Para isso usamos a barra vertical string | number | boolean. 


Interface ----------------------  

Interface geralmente da mesma forma que type, porém possui uma sintaxe diferente. As intefaces são geralmente utilizadas para definirmos objetos. 
A diferença será explorada em aulas mais avançadas. Por agora, vamos utilizar Type para tipos primitivos e Interface para objetos. 


Arrays ---------------------- 

Uma array é definida com o tipo de dado(s) que ela possui, seguida por [] 
number[] ou number<Array> 


Any ---------------------- 

O any indica que o dado pode conter qualquer tipo de dado do TypeScript. Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece. 


Null & Undefined & Propriedades Opcionais ---------------------- 

Null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas. 
Undefined representa variáveis/propriedades que foram instanciadas, porém, os seus  
valores ainda não foram definidos. 
Podemos definir propriedades opcionais utilizando opcional?: string. Quando opcional, elas poderão sempre retornar como o valor definido ou undefined. 

  
----- Objetos e Interfaces ----- 

Instanceof ---------------------- 

Em JavaScript, Classes class são funções construtoras que geram objetos. Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma. 

Existem funções que retornam diferentes tipos de objetos. Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class). O instanceof verifica se a função construtora herda de outra (extends).  

O instanceof é um operador que existe no JavaScript. Se você definir a interface de um objeto apenas com o interface e não possuir uma classe construtora do mesmo, não será possível utilizar o instanceof na interface. 
 

Interfaces do DOM ---------------------- 

O querySelectorAll por exemplo retorna uma NodeList de elementos. Não confundir o nome da interface NodeListOf com o nome da classe NodeList. 


Eventos ---------------------- 

Passamos o evento como uma string e uma função de callback no método addEventListener. A função de callback possui um parâmetro que faz referência ao evento executado. 
Event e instanceof: uma função, quando criada para ser executada em diferentes tipos de eventos, deve receber como parâmetro o tipo comum entre elas Event. 
Target e currentTarget: o TypeScript não executa o JavaScript, assim ele não consegue assumir qual será o target ou currentTarget do evento executado. Os elementos são definidos como o tipo EventTarget, pois esse é o tipo mais comum entre os elementos que podem receber um evento. 

  
Generics ---------------------- 

Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>. 
Extends: é possível indicar que o tipo genérico deve herdar de uma interface específica com o extends. 

const link = document.querySelector('a'); 
function extractText<Tipo extends HTMLElement>(el: Tipo): string { 
  return el.innerText; 
} 
if (link) { 
  console.log(extractText(link)); 
  // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string 
} 
  

Métodos: métodos nativos são definidos utilizando generics, assim podemos indicar durante a execução qual será o tipo esperado.  

// Define que o retorno será um HTMLAnchorElement 

const link = document.querySelector<HTMLAnchorElement>('.link'); 
link?.href; 

// Define que o retorno será um HTMLAnchorElement 
const link = document.querySelector<HTMLAnchorElement>('.link'); 
link?.href; 

async function getData<T>(url: string): Promise<T> { 
  const response = await fetch(url); 
  return await response.json(); 
} 
interface Notebook { 
  nome: string; 
} 

async function handleData() { 
  const notebook = await getData<Notebook>( 
    'https://api.origamid.dev/json/notebook.json', 
  ); 
  console.log(notebook.nome); 
} 
  

Functions ---------------------- 


A interface de uma função é definida durante a sua declaração. 
function somar(a: number, b: number, c?: number): number { 
  return a + b + (c ? c : 0); 
} 
somar(3, 4); 
  
  
Void ---------------------- 

No JavaScript, uma função sem return irá retornar undefined. No TypeScript o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno. 
  

Never ---------------------- 

O never é utilizado em casos onde a função gera um erro ou termina a aplicação. 

function abortar(mensagem: string): never { 
  throw new Error(mensagem); 
} 
abortar('Um erro ocorreu'); 

  
Métodos ---------------------- 

Na definição de interfaces podemos definir os métodos indicando o tipo de dado recebido e o seu possível retorno. 

interface Quadrado { 
  lado: number; 
  perimetro(lado: number): number; 
} 
function calcular(forma: Quadrado) {} 

  
Overload ---------------------- 

Existem funções que retornam diferentes dados dependendo do argumento. 
Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome. 
O Overload deve ser compatível com a função original. 

// Exemplo 1 
function arredondar(valor: string): string; 
function arredondar(valor: number): number; 
function arredondar(valor: string | number): string | number { 
  if (typeof valor === 'number') { 
    return Math.ceil(valor); 
  } else { 
    return Math.ceil(Number(valor)).toString(); 
  } 
} 


----- Type Guard e Control Flow -----  

Guard, Safety e Narrowing ---------------------- 

O Type Guard (defesa) garante a Type Safety (segurança) do dado dentro do bloco condicional. Esse processo é chamado de Type Narrowing (estreitamento). 
O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional. 


In ---------------------- 

O operador in verifica se o objeto possui uma propriedade com o mesmo nome da string comparada "propriedade" in obj. 

interface Produto { 
  nome: string; 
  preco: number; 
} 

async function fetchProduto() { 
  const response = await fetch('https://api.origamid.dev/json/notebook.json'); 
  const json = await response.json(); 
  handleProduto(json); 
} 

function handleProduto(data: Produto) { 
  if ('preco' in data) { 
    document.body.innerHTML += ` 
      <p>Nome: ${data.nome}</p> 
      <p>Preço: R$ ${data.preco + 100}</p> 
    `; 
  } 
}

fetchProduto(); 


Unknown ---------------------- 
  
Indica que não sabemos o tipo de dados que pode ser passado. Diferente do any, o unknown só irá permitir o uso de métodos quando a Type Safety estiver garantida. 

function typeGuard(value: unknown) { 
  if (typeof value === 'string') { 
    return value.toLowerCase(); 
  }
  if (typeof value === 'number') { 
    return value.toFixed(); 
  } 
  if (value instanceof HTMLElement) { 
    return value.innerText; 
  } 
} 
 
typeGuard('Matheus'); 
typeGuard(200); 
typeGuard(document.body); 
  

User Type Guard ---------------------- 

TypeScript não executa JavaScript 
Sabemos já que o TS não executa o JS durante a checagem dos tipos. Se isso ocorre, então como a função isArray consegue ser usada como Type Guard? 
Com o Type Predicate :arg is type, podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean) recebeu para ser verdadeira. 
  
function isString(value: unknown): value is string { 
  return typeof value === 'string'; 
} 
  
Objetos: o Type Predicate pode ser especialmente utilizado para criarmos Type Guards para objetos específicos e garantirmos a Type Safety (segurança) do projeto. 

interface Produto { 
  nome: string; 
  preco: number; 
}
  
function isProduto(value: unknown): value is Produto { 
  if ( 
    value && 
    typeof value === 'object' && 
    'nome' in value && 
    'preco' in value 
  ) { 
    return true; 
  } else { 
    return false; 
  } 
} 

function handleProduto(data: unknown) { 
  if (isProduto(data)) { 
    console.log(data); 
  } 
} 
  
  
Type Assertion ---------------------- 

Com o Type Assertion é possível "indicar" ao TypeScript qual o tipo de dado esperado com a palavra-chave as. Só é possível indicar tipos que possuam relação com o tipo original. 

Evitar ao máximo o uso de Type Assertion, pois a segurança (Type Safety) é perdida quando indicamos algo que nem sempre será verdade. 

as : 
const video = document.querySelector('.player') as HTMLVideoElement; 
// erro runtime, não existe volume de null 
video.volume; 
Podemos usar o Type Assertion para definir que um tipo any é qualquer tipo de dado possível, dessa forma fica mais correto sua utilização. 

interface Produto { 
  nome: string; 
  preco: number; 
} 
async function fetchProduto() { 
  const response = await fetch('https://api.origamid.dev/json/notebook.json'); 
  return response.json() as Promise<Produto>; 
} 

  

! non-null operator ---------------------- 
  
Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, pois pode levar a erros no runtime. Use apenas se tiver certeza. 
Esse é um operador de TS !. e não de JS como o ?.. Durante a compilação ele será removido. 

const video = document.querySelector('video')!; 
// erro runtime, não existe volume de null 
video.volume; 
// erro runtime 
document.querySelector('a')!.href = 'https://www.google.com';   

Sintaxe alternativas de Type Assertion 
const video1 = document.querySelector('.player') as HTMLVideoElement; 
const video2 = <HTMLVideoElement>document.querySelector('.player'); 
const video3 = document.querySelector<HTMLVideoElement>('.player'); 
const video4 = document.querySelector('.player'); 
(video4 as HTMLVideoElement).volume; 

video1.volume; 
video2.volume; 
video3?.volume; 
  

Destructuring ---------------------- 

Durante a desestruturação de objetos, podemos indicar o tipo de dado com a sintaxe: { key1, key2 }: { key1: type1; key2: type2; } 

const { body }: { body: HTMLElement } = document; 
function handleData({ nome, preco }: { nome: string; preco: number }) { 
  nome.includes('book'); 
  preco.toFixed(); 
} 
handleData({ 
  nome: 'Notebook', 
  preco: 2000, 
}); 

Conhecer os Dados: durante a desestruturação é necessário indicar o tipo exato do dado esperado pelo TypeScript. Ex: um currentTarget pode ser EventTarget | null. 
  
Rest em TS: 
function comparar(tipo: 'maior' | 'menor', ...numeros: number[]) { 
  if (tipo === 'maior') { 
    return Math.max(...numeros); 
  } 
  if (tipo === 'menor') { 
    return Math.min(...numeros); 
  } 
} 


Intersection ---------------------- 

Funciona em parte como o extends para Interfaces, mas pode ser utilizado em Types. 
Adicionar Propriedades: é possível adicionar uma propriedade a uma interface/tipo que já definido. 
Window: se definimos uma propriedade global, podemos "extender" a interface de Window, apenas redeclarando a interface. 

interface Window { 
  userId: number; 
} 

window.userId = 200; 
console.log(window.userId); 

 

Modificadores ---------------------- 

O TypeScript fornece diversas palavras-chave (Modifiers) que podem ser utilizadas em propriedades de classes modificar o comportamento/uso das mesmas. 

class Produto { 
  // public: é o padrão de qualquer uma 

  // private: só pode ser acessada dentro da classe 
  private tipo = 'produto'; 

  // protected: só pode ser acessada dentro da classe e subclasses 
  protected preco: number; 

  // readonly: só permite leitura 
  readonly nome: string; 
  
  constructor(nome: string, preco: number) { 
    this.nome = nome; 
    this.tipo; 
    this.preco = preco; 
  } 
  getTipo() { 
    return this.tipo; 
  } 
  getPreco() { 
    return Produto.transformarPreco(this.preco); 
  } 
  // [javascript] static: não fará parte do Objeto criado 
  // e sim da função construtora (classe) 
  static transformarPreco(preco: number) { 
    return `R$ ${preco}`; 
  } 
} 

const livro = new Produto('O Senhor dos Aneis', 200); 
console.log(livro.getTipo()); 
console.log(livro.getPreco()); 
console.log(livro.nome); 
console.log(Produto.transformarPreco(100)); 


Class e Interface ---------------------- 

Ao definirmos uma classe, a sua interface é gerada automaticamente pelo TypeScript. A definição da classe é o que utilizamos para verificar se um objeto é uma instância da mesma instanceof class. 

class Quadrado { 
  readonly lados = 4; 
  medida: number; 
  constructor(medida: number) { 
    this.medida = medida; 
  } 
  getPerimetro() { 
    return this.medida * this.lados; 
  } 
  getArea() { 
    return this.medida * this.medida; 
  } 
} 


class Circulo { 
  readonly PI = Math.PI; 
  raio: number; 
  constructor(raio: number) { 
    this.raio = raio; 
  } 
  getPerimetro() { 
    return Math.round(2 * this.PI * this.raio * 100) / 100; 
  } 
  getArea() { 
    return Math.round(this.PI * (this.raio * this.raio) * 100) / 100; 
  } 
} 
  

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => { 
  if (n < 15) { 
    return new Quadrado(n); 
  } else { 
    return new Circulo(n); 
  } 
}); 

formas.forEach((forma) => { 
  if (forma instanceof Quadrado) { 
    console.log(forma.getArea()); 
  } 
  if (forma instanceof Circulo) { 
    console.log(forma.getPerimetro()); 
  } 
}); 
  
Tuples ----------------------  

Tuples são arrays que possuem dados em posições fixas. 

const produto1: (string | number)[] = ['Notebook', 2500]; 
const produto2: [string, number] = ['Notebook', 2500]; 
const nome1 = produto1[0]; // string | number 
const nome2 = produto2[0]; // string 
const [nome, preco] = produto2; 

as const: 
Torna um dado readonly e infere o tipo de dado mais específico possível. Em métodos que retornam Array's, as mesmas são transformadas em Tuples. 

function getText(selector: string) { 
  const el = document.querySelector<HTMLElement>(selector); 
  if (el) { 
    return [el, el.innerText] as const; 
  } else { 
    return null; 
  } 
} 

const button = getText('button'); 
if (button) { 

  const [buttonElement, buttonText] = button; 
} 


Keyof ---------------------- 

Indica que o dado é uma chave de uma Interface/Tipo. 

interface Produto { 
  nome: string; 
  preco: number; 
} 

let chave: keyof Produto; 
// let chave: "nome" | "produto"; 
chave = 'nome'; 
chave = 'preco'; 
  

Typeof ---------------------- 

Já vimos o typeof do JavaScript, responsável por retornar o tipo do dado. No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro. 

function coordenadas(x: number, y: number) { 
  return { x, y }; 
} 

let coord: typeof coordenadas; 
coord = (x: number, y: number) => { 
  return { x, y }; 
}; 
 
É com o keyof que o querySelector consegue associar uma string com a Interface que ela retorna. 

interface Elementos { 
  a: HTMLAnchorElement; 
  video: HTMLVideoElement; 
  div: HTMLElement; 
  body: HTMLBodyElement; 
  audio: HTMLAudioElement; 
} 

function selecionar<Chave extends keyof Elementos>( 
  seletor: Chave, 
): null | Elementos[Chave] { 
  return document.querySelector(seletor); 
} 
selecionar('body'); 

O keyof pode ser utilizado para criarmos funções genéricas utilitárias. 

async function fetchData<T>(url: string): Promise<T> { 
  const base = 'https://api.origamid.dev/json'; 
  const response = await fetch(base + url); 
  return await response.json(); 
} 

interface Jogo { 
  nome: string; 
  ano: number; 
  desenvolvedora: string; 
  plataformas: string[]; 
} 

interface Livro { 
  nome: string; 
  ano: number; 
  autor: string; 
  paginas: number; 
} 

function checkInterface<Interface>( 
  obj: unknown, 
  ...keys: Array<keyof Interface> 
): obj is Interface { 
  if ( 
    obj && 
    typeof obj === 'object' && 
    keys.filter((key) => key in obj).length === keys.length 
  ) { 
    return true; 
  } else { 
    return false; 
  } 
} 

async function handleData() { 
  const jogo = await fetchData('/jogo.json'); 
  if (checkInterface<Jogo>(jogo, 'desenvolvedora')) { 
    console.log(jogo.desenvolvedora); 
  } 
  const livro = await fetchData('/livro.json'); 
  if (checkInterface<Livro>(livro, 'autor')) { 
    console.log(livro.autor); 
  } 
} 

handleData(); 


Duck Typing ---------------------- 

Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface. 
"Se parece com um pato, nada como um pato e grasna como um pato, então provavelmente é um pato." 

interface Produto { 
  nome: string; 
  quantidade: number; 
} 

const produto1 = { 
  nome: 'Notebook', 
  quantidade: 10, 
  cor: 'azul', 
}; 

const produto2 = { 
  nome: 'Geladeira', 
  quantidade: 4, 
  freezer: true, 
}; 

const servico1 = { 
  nome: 'Instalação', 
}; 
  
function mostrarQuantidade(produto: Produto) { 
  console.log(produto.quantidade + 20); 
} 

mostrarQuantidade(produto1); 
mostrarQuantidade(produto2); 

// erro, não possui quantidade 
mostrarQuantidade(servico1); 


Partial ---------------------- 
 
O TypeScript conta com utility types, tipos que podem ser utilizados como funções para a definição de novos tipos. 
Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais. 

interface Produto { 
  nome: string; 
  quantidade: number; 
}  

// Partial<Produto> 
// interface Produto { 
//   nome?: string; 
//   quantidade?: number; 
// } 

const produto1 = { 
  nome: 'Notebook', 
  quantidade: 10, 
  cor: 'azul', 
}; 

const produto2 = { 
  nome: 'Geladeira', 
  quantidade: 4, 
  freezer: true, 
}; 

const produto3 = { 
  nome: 'Instalação', 
}; 
 
function mostrarQuantidade(produto: Partial<Produto>) { 
  // erro, quantidade pode ser undefined 
  console.log(produto.quantidade + 20); 
} 

mostrarQuantidade(produto1); 
mostrarQuantidade(produto2); 
mostrarQuantidade(produto3); 
  
[key: string]: unknown; 
Podemos definir que um objeto poderá conter propriedades/métodos além dos que foram definidos inicialmente. 

interface Post { 
  titulo: string; 
  visualizacoes: number; 
  tags: string[]; 
  [key: string]: unknown; 
} 

const artigo: Post = { 
  titulo: 'Como aprender HTML', 
  visualizacoes: 3000, 
  tags: ['Front End', 'HTML'], 
  autor: 'Matheus', 
}; 

artigo.autor; 
artigo.descricao; 

function handlePost(post: Post) { 
  document.body.innerHTML += `${post.autor}`; 
} 
handlePost(artigo); 


Record ---------------------- 
  
O Record define a interface de um Objeto que possui <chave, tipo>. Pode ser usado para definir a interface de um Objeto Literal genérico. 

type ObjetoLiteral1 = { 
  [key: string]: unknown; 
}; 

type ObjetoLiteral2 = Record<string, unknown>; 

function mostrarTitulo(obj: ObjetoLiteral2) { 
  if ('titulo' in obj) { 
    console.log(obj.titulo); 
  } 
} 
  
// Erros: 
// mostrarTitulo("string"); 
// mostrarTitulo(200); 
// mostrarTitulo([1, 2]); 
// mostrarTitulo(null); 
// mostrarTitulo(undefined); 

mostrarTitulo({ 
  titulo: 'André', 
}); 

Lista completa dos utility types. 
https://www.typescriptlang.org/docs/handbook/utility-types.html 

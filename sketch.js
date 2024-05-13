/* -------------------------------

As VARIAVEIS  declaradas fora de uma função são consideradas GLOBAIS.
Ou seja: elas podem ser utilizadas em qualquer lugar; enquanto que aquelas que são declaradas dentro de uma função só funcionarão dentro daquela função.

----------------------------------- */

let palavra; // cria a variavel GLOBAL palavra

let quantidade; //cria a variavel GLOBAL quantidade

function palavraAleatoria() {  // cria função palavraAleatoria
  let palavras = ["Tecnologia", "Javascript", "Programação", "Alura", "Robótica", "P5JS",                           "Escola"]; 
                // cria uma variavel tipo array   palavras

  return random(palavras); // retorna a palavra sorteada para a chamada da função
}

function setup() {
  createCanvas(800, 600); // cria a tela e define tamanho (x,y)(larguara/altura)
   
  palavra = palavraAleatoria(); // chama a função palavraAleatoria()
}

function inicializaCores(){   //cria afunção inicializaCores
  
  background("#F5E7BD"); // cor de fundo da tela
  fill("black");  // cor da caneta / letra
  textSize(74);    // tamanho da fonte
  textAlign(CENTER, CENTER)    // alinhamento do texto  

}

function palavraParcial(minimo, maximo) {
    // Quando cria a função cria junto duas variaveis (minimo, maximo)
    // E insere os valores enviado para cada uma dela palavraParcial(x, y)
  
  quantidade = map(mouseX, minimo, maximo, 0, palavra.length);
        // cria a variavel quantidade
        // map: Remapeia um número de um intervalo para outro. onde:
        // o 1º valor é o valor a ser remapeado. (mouseX = posição x do mouse)
        // o 2º valor é o limite inferior do intervalo atual do valor. (0)
        // o 3º valor é o limite superior do intervalo atual do valor.(width - largura da tela)
        // o 4º valor é o limite inferior do intervalo alvo do valor.(1)
        // o 5º valor é o limite superior do intervalo de destino do valor. (tamanho da palavra)
        // o 6º valor é opcional e restrinja o valor ao intervalo recém-mapeado. (true / false) 
  
  let parcial = palavra.substring(0, quantidade);
                //cria a variavel parcial
                // O método substring irá capturar a letra por letra da palavra, 
                //  nesse caso de 0 até a quantidade total.
  
   return parcial;
}


function draw() {  
  inicializaCores();  //chama a função inicializaCores()

  let texto = palavraParcial(0, width);
  
  text(texto,400,300);  // a função text() insere a variável (parcial) na posição X e Y:
  
    if(quantidade < 1){ //quando a tela não tiver nada sorteia palavra.
      palavra = palavraAleatoria(); // chama a função palavraAleatoria()  
    } 
      
} 

/*FAZER UM EM JS
PASSOS:
- *sempre se ligar em responsiveness e style.
- Single player
- Multplayer local
- Multplayer online
    

*Depois saber como fazer para Mobile com JS.   


*** marketing ***
- Fazer viralizar como meme
- Patrocinar influencers IG/TWITCH/YT

*** publicidade ***
- anuncio no rodapé
- assistir um anuncio = 10min livre no jogo. assistir 3(max) anuncios seguidos = 45min. +3 ads = 60min. limite de hrs = 5/d.
- *comprar VIP anual = 1 dolar = sem anuncios
-->



/*
 * obtem disparo do click em uma das 9 caixas = por class
 *
 * atribuir variavel boolean pra cada time
 *
 * time azul,
 * time vermelho,
 * azul começa
 *
 *
 * const round = 0                             // quantidade de rounds
 * const player = false                        // qual player joga
 *      *player azul = true
 *      *player vermelho = false
 *
 *  click{
 *       if (round == 9)
 *            jogo acabou
 *           resetar cores
 *          for{}
 *               for{}
 *
 *      else if (round == 0 || player == false){    // SE  round igual a zero=(primeiro round) OR     player=false(ultimo a jogar=vernelho) == player blue joga
 *          backgroundcolor.div = blue              // pinta div de blue
 *          return player = true                    // retorna ultimo player a jogar = blue(true)
 *      }
 *      else{
 *          backgroundcolor.div = red               // pinta div de red
 *          return player = false                   // retorna ultimo time a jogar = red(false)
 *      ++round                                     // adiciona +1 round.
 *
 */

// contador de click (impar par)
// click():
// aux = true
// check aux == true
// return aux
// x = aux == true
//     print(x)
//     aux == false
//
// o = aux == false
//     print(o)
//     aux == true

function start() {
  rodada(click());
  if (status_partida == false) reset();

  if (time >= 5) {
    /*
        verificação de campeão

        Aij     comparação da msm cor: 

        todos os i iguais && cores iguais == winner
        todos os j iguais && cores iguais == winner
        todos os i == j && cores iguais == winner
        todos os (i + j == 4) && cores iguais == winner      
        */
  }
}
function click() {
  // recebe id da div
}
function reset() {
  // winner = null
  // reseta todas as divs || press F5
}
function rodada() {
  ++round;

  if (round == 9 && winner == null) {
    // prompt =  'O jogo empatou e será resetado'
    return (status_partida = false);
  } else if (round == 0 || player == false) {
    // SE  round igual a zero=(primeiro round) OR     player=false(ultimo a jogar=vernelho) == player blue joga
    //backgroundcolor = blue                     // pinta div de

    // window.document.getElementById('11').style.borderRadius = ('50%'), window.document.getElementById('11').style.backgroundColor = ('blue')

    return (player = true); // retorna ultimo player jogado = blue(true)
  } else {
    //backgroundcolor = player                    // pinta div de red
    // window.document.getElementById('11').style.borderRadius = ('50%'), window.document.getElementById('11').style.backgroundColor = ('blue')
    return (player = false); // retorna ultimo player jogado = red(false)
  }
}

console.log(rodada());
console.log(`Rodada: ${round}`);
console.log(`Status da partida: ${status_partida}`);
console.log(`Jogaor: ${player}`);

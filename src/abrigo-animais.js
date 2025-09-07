import dadosAnimais from "./dadosAnimais.js";
import Animal from "./animal.js";

class AbrigoAnimais {

  //cria a coleção de animais com o tipo Animal e cria um vetor de brinquedos
  constructor() {
    this.animais = dadosAnimais.map(a => {
      return new Animal(a.nome, a.especie, a.brinquedos);
    })
    this.brinquedos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];
  }

  //Se o número de animais for <= 3 retorna true, senão retorna false
  verificarNumeroAnimais(animaisArr) {
    return animaisArr.length <= 3 //&& animaisArr.length >= 0;
  }

  //Se haver repetição no vetor, retorna true, se não tiver retorna false
  verificarRepetidos(vetor) {
    const verificacao = new Set(vetor).size == vetor.length;
    return !verificacao;
  }

  //se animal não existir na coleção de animais, retorna false + chamada de verificações
  verificarAnimais(animaisArr) {
    const arrAux = this.animais.map(a => a.nome)

    animaisArr.forEach(a => {
      if (!arrAux.includes(a))
        return false;
    })
    return this.verificarNumeroAnimais(animaisArr) && !this.verificarRepetidos(animaisArr);
  }

  //verifica se os brinquedos passados são permitidos
  verificarBrinquedos(brinquedosArr) {
    this.brinquedos.forEach(b => {
      if (!brinquedosArr.includes(b))
        return false
    })
    return this.verificarRepetidos(brinquedosArr)
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animaisArr = ordemAnimais.split(",");
    const brinquedosP1 = brinquedosPessoa1.split(",");
    const brinquedosP2 = brinquedosPessoa2.split(",");
  }

}

const teste = new AbrigoAnimais();
teste.encontraPessoas("BOLA,LASER", "BOLA,NOVELO,RATO,LASER", "Mimi,Rex,Bola");
export { AbrigoAnimais as AbrigoAnimais };


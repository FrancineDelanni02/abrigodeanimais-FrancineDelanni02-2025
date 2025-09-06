import dadosAnimais from "./dadosAnimais.js";
import Animal from "./animal.js";

class AbrigoAnimais {

  //cria a coleção de animais com o tipo Animal
  constructor() {
    this.animais = dadosAnimais.map(a => {
      return new Animal(a.nome, a.especie, a.brinquedos);
    })
    this.brinquedos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];
  }

  verificarNumeroAnimais(animaisArr) {
    return animaisArr.length <= 3;
  }

  //verifica se a coleção de animais possui os nomes que foram passados como argumento
  verificarAnimais(animaisArr) {
    const arrAux = this.animais.map( a => a.nome)
    
    for (let a in animaisArr) {
      if (!arrAux.includes(a)) 
        return false
    }
    return this.verificarNumeroAnimais(animaisArr);
  }

  verificarBrinquedos(brinquedosArr) {
    this.brinquedos.forEach(b => {
      if (!brinquedosArr.includes(b))
        return false
    })
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animaisArr = ordemAnimais.split(",");
    const brinquedosP1 = brinquedosPessoa1.split(",");
    console.log(this.verificarAnimais(animaisArr));
  }

}

const teste = new AbrigoAnimais();
teste.encontraPessoas("BOLA,LASER", "BOLA,NOVELO,RATO,LASER", "Mimi,Pipoca,Bola");
export { AbrigoAnimais as AbrigoAnimais };


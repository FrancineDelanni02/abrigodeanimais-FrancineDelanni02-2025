import dadosAnimais from "./dadosAnimais.js";
import Animal from "./animal.js";

class AbrigoAnimais {

  constructor() {
    this.animais = dadosAnimais.map(a => {
      return new Animal(a.nome, a.especie, a.brinquedos);
    })
    this.brinquedos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];
  }

  verificarRepetidos(vetor) {
    const verificacao = new Set(vetor).size == vetor.length;
    return !verificacao;
  }

  verificarAnimais(animaisArr) {
    const arrAux = this.animais.map(a => a.nome)

    for (let a of animaisArr) {
      if (!arrAux.includes(a))
        return false
    }
    return !this.verificarRepetidos(animaisArr);
  }

  verificarValidadeBrinquedos(brinquedosArr) {
    for (let b of brinquedosArr) {
      if (!this.brinquedos.includes(b))
        return false
    }
    return !this.verificarRepetidos(brinquedosArr)
  }

  adotarGato(brinquedosP1, brinquedosP2, animal, contador) {
    const p1 = animal.verificarBrinquedos(brinquedosP1);
    const p2 = animal.verificarBrinquedos(brinquedosP2);

    if ((p1 == p2)) {
      return (animal.nome + ' - abrigo')
    } else if (p1 && contador.p1 < 3 ) {
      contador.p1 = 3
      return (animal.nome + ' - pessoa 1')
    } else if (p2 && contador.p2 < 3) {
      contador.p2 = 3
      return (animal.nome + ' - pessoa 2')
    }

    return animal.nome + " - abrigo"
  }

  //verifica adotação para qualquer animal que não seja gato
  adotarAnimal(brinquedosP1, brinquedosP2, animal, contador) {
    if (animal.nome == 'Loco') {
      if (contador.p1 > 0 && contador.p2 == 0) {
        contador.p1++
        return (animal.nome + ' - pessoa 1')
      } else if (contador.p2 > 0 && contador.p1 == 0) {
        contador.p2++
        return (animal.nome + ' pessoa 2')
      }
    }

    const p1 = animal.verificarBrinquedos(brinquedosP1);
    const p2 = animal.verificarBrinquedos(brinquedosP2);

    if ((p1 == p2)) {
      return (animal.nome + ' - abrigo')
    } else if (p1 && contador.p1 < 3) {
      contador.p1++
      return (animal.nome + ' - pessoa 1')
    } else if (p2 && contador.p2 < 3) {
      contador.p2++
      return (animal.nome + ' - pessoa 2')
    }
    return animal.nome + " - abrigo"
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animaisArr = ordemAnimais.split(",").map(a => a.trim())
    // const p1 = {
    //   nome: "pessoa 2",
    //   brinquedosOferecidos : brinquedosPessoa1.split(",").map(b => b.trim()),
    //   qtdAnimaisAdotados: 0,
    //   podeAdotarAnimais: true
    // }
    
    // const p2 = {
    //   nome: "pessoa 2",
    //   brinquedosOferecidos : brinquedosPessoa2.split(",").map(b => b.trim()),
    //   qtdAnimaisAdotados: 0,
    //   podeAdotarAnimais: true
    // }

    // const brinquedosP1 = brinquedosPessoa1.split(",").map(b => b.trim())
    // const brinquedosP2 = brinquedosPessoa2.split(",").map(b => b.trim())
    // const contador = { p1: 0, p2: 0 }
    const lista = [];

    if (!this.verificarAnimais(animaisArr)) {
      return { erro: "Animal inválido", lista: false }
    } else if (!this.verificarValidadeBrinquedos(brinquedosP1) || !this.verificarValidadeBrinquedos(brinquedosP2)) {
      return { erro: "Brinquedo inválido", lista: false }
    }

    for (let a of animaisArr) {
      let animal = this.animais.find(an => an.nome == a)
      if (animal.especie == "gato") {
        lista.push(this.adotarGato(p1.brinquedosOferecidos, p2.brinquedosOferecidos, animal))
        continue
      }
      lista.push(this.adotarAnimal(brinquedosP1, brinquedosP2, animal, contador))
    }

    console.log(lista)
    lista.sort();
    return { erro: false, lista: lista }
  }
}

//apagar a DUAS linhas depois
const teste = new AbrigoAnimais();
teste.encontraPessoas('BOLA,RATO,LASER', 'BOLA,LASER', 'Rex,Fofo,Mimi');

export { AbrigoAnimais as AbrigoAnimais };


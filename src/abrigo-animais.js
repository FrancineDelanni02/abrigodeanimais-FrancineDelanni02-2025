import dadosAnimais from "./dadosAnimais.js";
import Animal from "./animal.js";

class AbrigoAnimais {

  //definindo dados para trabalhar
  constructor() {
    this.animais = dadosAnimais.map(a => {
      return new Animal(a.nome, a.especie, a.brinquedos);
    })
    this.brinquedos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];
  }

  //serve tanto para brinquedos quando para animais
  verificarRepetidos(vetor) {
    const verificacao = new Set(vetor).size == vetor.length;
    return !verificacao;
  }

  //Faz a verificação geral (animais repetidos + animais incorretos)
  verificarValidadeAnimais(animaisArr) {
    const arrAux = this.animais.map(a => a.nome)

    for (let a of animaisArr) {
      if (!arrAux.includes(a))
        return false
    }
    return !this.verificarRepetidos(animaisArr);
  }

  //Faz a verificação geral (brinquedos repetidos + brinquedos incorretos)
  verificarValidadeBrinquedos(brinquedosArr) {
    for (let b of brinquedosArr) {
      if (!this.brinquedos.includes(b))
        return false
    }
    return !this.verificarRepetidos(brinquedosArr)
  }

  //gatos não ficam junto com outros animais
  podeAdotar(pessoaObject, animal) {
    if (animal.especie == "gato" && pessoaObject.countAnimais >  0){
      return false
    }else if(animal.especie == "gato" && pessoaObject.countAnimais == 0){
      pessoaObject.podeAdotarAnimais = false
      return true
    }
    if (animal.nome == "Loco" && pessoaObject.countAnimais > 0) return true;
    return pessoaObject.podeAdotarAnimais 
  }

  //Faz designação da pessoa que vai adotar o bichinho
  adotarAnimal(p1, p2, animal) {
    const p1podeAdotar = this.podeAdotar(p1, animal) && animal.verificarBrinquedos(p1.brinquedosOferecidos);
    const p2podeAdotar = this.podeAdotar(p2, animal) && animal.verificarBrinquedos(p2.brinquedosOferecidos);

    if ((p1podeAdotar == p2podeAdotar)) {
      return (animal.nome + ' - abrigo')
    } else if (p1podeAdotar) {
      p1.atualizarContador()
      return (`${animal.nome} - ${p1.nome}`)
    } else if (p2podeAdotar) {
      p2.atualizarContador()
      return (`${animal.nome} - ${p2.nome}`)
    }
    return `${animal.nome} - abrigo`
  }

  //método geral de encontraPessoa
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animaisArr = ordemAnimais.split(",").map(a => a.trim())
    const p1 = {
      nome: "pessoa 1",
      brinquedosOferecidos: brinquedosPessoa1.split(",").map(b => b.trim()),
      countAnimais: 0,
      podeAdotarAnimais: true,
      atualizarContador: function () {
        this.countAnimais++
        if (this.countAnimais >= 3) this.podeAdotarAnimais = false
      }
    }

    const p2 = {
      nome: "pessoa 2",
      brinquedosOferecidos: brinquedosPessoa2.split(",").map(b => b.trim()),
      countAnimais: 0,
      podeAdotarAnimais: true,
      atualizarContador: function () {
        this.countAnimais++
        if (this.countAnimais >= 3) this.podeAdotarAnimais = false
      }
    }
    const lista = [];

    if (!this.verificarValidadeAnimais(animaisArr)) {
      return { erro: "Animal inválido", lista: false }
    } else if (!this.verificarValidadeBrinquedos(p1.brinquedosOferecidos) || !this.verificarValidadeBrinquedos(p2.brinquedosOferecidos)) {
      return { erro: "Brinquedo inválido", lista: false }
    }

    for (let a of animaisArr) {
      let animal = this.animais.find(an => an.nome == a)
      lista.push(this.adotarAnimal(p1, p2, animal))
    }

    lista.sort();
    return { erro: false, lista: lista }
  }
}

export { AbrigoAnimais as AbrigoAnimais };


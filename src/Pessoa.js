class Pessoa{
    constructor(nome,brinquedosOferecidos){
        this.nome = nome;
        this.brinquedosOferecidos = brinquedosOferecidos.split(",").map(a => a.trim())
        this.countAnimais = 0
        this.podeAdotarAnimais = true
    }

    atualizarContador(){
        this.countAnimais++
        if(this.countAnimais >= 3)
            this.podeAdotarAnimais = false
    }
}

export default Pessoa;

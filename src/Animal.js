class Animal {
    constructor(nome, especie, brinquedos) {
        this.nome = nome;
        this.especie = especie;
        this.brinquedos = brinquedos;
    }

    //Se retornar true se todos os brinquedos foram apresentados e na ordem
    verificarBrinquedos(brinquedosPessoa) {
        const brinquedosIguais = [];
        brinquedosPessoa.forEach(b => {
            if (this.brinquedos.includes(b))
                brinquedosIguais.push(b)
        });

        for (let i = 0; i < this.brinquedos.length; i++) {
            if (this.brinquedos[i] != brinquedosIguais[i]) 
                return false
        }
        return true
    }
}

export default Animal;

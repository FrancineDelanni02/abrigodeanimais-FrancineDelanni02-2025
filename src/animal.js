class Animal{
    constructor(nome, especie,brinquedos){
        this.nome = nome;
        this.especie = especie;
        this.brinquedos = brinquedos;
    }

    //Se o bichinho possuir algum requisito especial para os brinquedos, o método deve ser sobrescrito
    verificarBrinquedos(brinquedosPessoa){
        const brinquedosIguais = [];
        brinquedosPessoa.forEach(b => {
            if(this.brinquedos.includes(b))
                brinquedosIguais.push(b)
        });

        for(let i=0;i<this.brinquedos.length;i++){
            if(!this.brinquedos[i] == brinquedosIguais[i])
                return false
        }
        return true
    }
}

export default Animal;
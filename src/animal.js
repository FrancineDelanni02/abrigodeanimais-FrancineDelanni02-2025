class Animal{
    constructor(nome, especie,brinquedos){
        this.nome = nome;
        this.especie = especie;
        this.brinquedos = brinquedos;
    }

    //Se o bichinho possuir algum requisito especial para os brinquedos, o método deve ser sobrescrito
    verificarBrinquedos(brinquedosPessoa){
        //verifica a se possui todos os brinquedos que o bichinho gosta e na ordem que ele gosta
    }
}

export default Animal;
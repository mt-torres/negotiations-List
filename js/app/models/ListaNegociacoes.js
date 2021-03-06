class ListaNegociacoes {
    constructor(){
        this._negociacoes = [];

    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);

    }

    get negociacoes(){

        return [].concat(this._negociacoes);
    }

    deleta(){

        this._negociacoes = [];
        
    }
    
    get totalVolume () {  
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0)

    }  
    
    ordena(criterio){
        this._negociacoes.sort(criterio);
    }
    
    inverteOrdem() {
        this._negociacoes.reverse();
    }
   
}

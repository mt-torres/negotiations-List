class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        
        this._mensagemView = new MensagemView($('#mensagem-concluido'));
        this._mensagemView.update(this._mensagem)
        
        
    }
    
    adiciona (event) {
        event.preventDefault();
        //yyyy-mm-dd
        //2016-11-12 passa p construtor (2016, 10, 12)
    /*     let data = new Date(...this._inputData.value.split('-').map(function(item, indice){
            //return item - item % 2 (também poderia ser usado)
            if (indice == 1) {
                return item -1;
            }
                return item
        })) */
        console.log(this._mensagem)
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adiconada com sucesso!';
        this._mensagemView.update(this._mensagem)

        console.log(this._mensagem)   
        this._limpaFormulario()

    }
    _criaNegociacao(){
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        ) 
    }

    _limpaFormulario(){
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputData.focus();

    }
}
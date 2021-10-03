class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ordemAtual = '';
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView = new NegociacoesView($('#negociacoesView')),
            'adiciona','deleta','ordena','inverteOrdem');
        
        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView = new MensagemView($('#mensagem-concluido')),
            'texto', );
            
        
    }

    adiciona (event) {
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        
        RemoveMensagem.removeMensagem();
        this._limpaFormulario();

    }

    importaNegociacoes() {

        let service = new NegociacaoService();
        service
        .obterNegociacoes()
        .then(negociacoes => {
          negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
          this._mensagem.texto = 'Negociações do período importadas com sucesso';
        })
        .catch(error => this._mensagem.texto = error);  
    }

    apaga(){
        this._listaNegociacoes.deleta()
               
        this._mensagem.texto = 'Negociação excluida com sucesso!';

        RemoveMensagem.removeMensagem();

    }
    _criaNegociacao(){
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        ) 
    }
    ordena(coluna){

        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => b[coluna] - a[coluna]);
        }
        this._ordemAtual = coluna;
    }

    _limpaFormulario(){
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputData.focus();

    }
}
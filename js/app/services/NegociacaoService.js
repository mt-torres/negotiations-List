class NegociacaoService {

    constructor() {

        this._url = new HttpService();
    }

    obterNegociacoesSemana() {

        return this._url
            .get('negociacoes/semana')
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            })
            .catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana.');
                console.log(xhr.responseText);

            })
    }

    obterNegociacoesSemanaAnterior() {

        return this._url
            .get('negociacoes/anterior')
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            })
            .catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana anterior.');
                console.log(xhr.responseText);

            })
    }

    obterNegociacoesSemanaRetrasada() {

        return this._url
            .get('negociacoes/retrasada')
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            })
            .catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana retrasada.');
                console.log(xhr.responseText);

            })
    }


    obterNegociacoes() {

        return Promise.all([
            this.obterNegociacoesSemana(),
            this.obterNegociacoesSemanaAnterior(),
            this.obterNegociacoesSemanaRetrasada()
        ]).then(periodos => {

            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), []);

            return negociacoes;

        }).catch(erro => {
            throw new Error(erro);
        });

    }

/*  let service = new NegociacaoService();

       
       Promise.all([
            service.obterNegociacoesSemana(),
            service.obterNegociacoesSemanaAnterior(),
            service.obterNegociacoesSemanaRetrasada()]
        ).then(negociacoes => {
           negociacoes
           .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
           .forEach(item => this._listaNegociacoes.adiciona(item))
           console.log(negociacoes)
           this._mensagem.texto = 'Negociações importadas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro); */




}
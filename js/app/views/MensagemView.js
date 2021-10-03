class MensagemView extends View{
 
    template(model){
        if(model.texto == ''){

            return `<p></p>`
        }
        return  `<p class="alert alert-info">${model.texto}</p>`  
        
    }

}
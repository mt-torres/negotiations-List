class RemoveMensagem {
    
    static removeMensagem (){

        const mensagem = document.querySelector('.alert-info');
       
        setTimeout(() => {
            
            mensagem.classList.add('mensagem-concluido');
    
        }, 3000);
        setTimeout(()=>{
            mensagem.remove();
        },4000)
    }
}
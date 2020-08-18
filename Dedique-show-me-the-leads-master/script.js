function resultado(){
    //Pontuação de cada opção
    var o1pont = 0;
    var o2pont = 0;
    var o3pont = 0;
    var o4pont = 0;

    //Resgata os inputs do questionário
    var opcao = document.getElementsByName('input');
    //Passa por todas as opções do formulário e incrementa 1 a cada input de uma opção
    for(i=0; i<opcao.length; i++){
         //se a opção for checada   
        if(opcao[i].checked){
            if(opcao[i].value == o1){
                o1pont= o1pont + 1;
            }
            if(opcao[i].value == o2){
                o2pont++;
            }
            if(opcao[i].value == o3){
                o3pont++;
            }
            if(opcao[i].value == o4){
                o4pont++;
            }
        }
    }

    //Cria um resultado dependendo de qual opção teve pontuação máxima
    var maior = Math.max (o1pont, o2pont, o3pont, o4pont);
    var resposta = document.getElementById('resultado');

    alert(maior);
    
    
    if(o1pont == maior){
        resposta.innerHTML = "Você precisa do Psicólogo tipo 1"
    }
    if(o2pont == maior){
        resposta.innerHTML = "Você precisa do Psicólogo tipo 2"
    }
    
    if(o3pont == maior){
        resposta.innerHTML = "Você precisa do Psicólogo tipo 3"
    }
    
    if(o4pont == maior){
        resposta.innerHTML = "Você precisa do Psicólogo tipo 4"
    }


    
}
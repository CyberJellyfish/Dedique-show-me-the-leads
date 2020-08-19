function resultado(){

    //pegando a resposta de cada pergunta
    var p1 = document.perguntas.p1.value;
    var p2 = document.perguntas.p2.value;
    var p3 = document.perguntas.p3.value;
    var p4 = document.perguntas.p4.value;
    var p5 = document.perguntas.p5.value;
    var p6 = document.perguntas.p6.value;
    var p7 = document.perguntas.p7.value;
    var p8 = document.perguntas.p8.value;
    var p9 = document.perguntas.p9.value;
    var p10 = document.perguntas.p10.value;

    //Pontuação de cada opção
    var o1pont = 0;
    var o2pont = 0;
    var o3pont = 0;

    //Adiciona ponto na pergunta 1
    if(p1 == "o1"){
        o1pont++;    
    }
    if(p1 == "o2"){
        o2pont++;   
    }
    if(p1 == "o3"){
        o3pont = o3pont +1;    
    }

    //Adiciona ponto na pergunta 2
    if(p2 == "o1"){
        o1pont++;    
    }
    if(p2 == "o2"){
        o2pont++;    
    }
    if(p2 == "o3"){
        o3pont = o3pont +1;    
    }


    //Adiciona ponto na pergunta 3
    if(p3 == "o1"){
        o1pont++;    
    }
    if(p3 == "o2"){
        o2pont++;    
    }
    if(p3 == "o3"){
        o3pont = o3pont +1;    
    }
    
    //Adiciona ponto na pergunta 4
    if(p4 == "o1"){
        o1pont++;    
    }
    if(p4 == "o2"){
        o2pont++;    
    }
    if(p4 == "o3"){
        o3pont = o3pont +1;    
    }

    //Adiciona ponto na pergunta 5
    if(p5 == "o1"){
        o1pont++;    
    }
    if(p5 == "o2"){
        o2pont++;    
    }
    if(p5 == "o3"){
        o3pont = o3pont +1;    
    }

    //Adiciona ponto na pergunta 6
    if(p6 == "o1"){
        o1pont++;    
    }
    if(p6 == "o2"){
        o2pont++;    
    }
    if(p6 == "o3"){
        o3pont = o3pont +1;    
    }
    
    
    //Adiciona ponto na pergunta 7
    if(p7 == "o1"){
        o1pont++;    
    }
    if(p7 == "o2"){
        o2pont++;    
    }
    if(p7 == "o3"){
        o3pont = o3pont +1;    
    }

    //Adiciona ponto na pergunta 8
    if(p8 == "o1"){
        o1pont++;    
    }
    if(p8 == "o2"){
        o2pont++;    
    }
    if(p8 == "o3"){
        o3pont = o3pont +1;    
    }
    
    //Adiciona ponto na pergunta 9
    if(p9 == "o1"){
        o1pont++;    
    }
    if(p9 == "o2"){
        o2pont++;    
    }
    if(p9 == "o3"){
        o3pont = o3pont +1;    
    }
    
      //Adiciona ponto na pergunta 10
    if(p10 == "o1"){
        o1pont++;    
    }
    if(p10 == "o2"){
        o2pont++;    
    }
    if(p10 == "o3"){
        o3pont = o3pont +1;    
    }
   
    //Torna a caixa de resultado visível
    document.getElementById('resultado').style.visibility="visible"; 
    var resultado = document.getElementById('resultado');

    //Pega a alternativa mais marcada e imprime feedback correspondente na tela
    if(o1pont>o2pont && o1pont>o3pont){
        resultado.innerHTML = "<br><p> No Caminho certo!</p> Você é uma pessoa que cuida da sua saúde mental. Que legal! Continue assim para ter uma vida boa e feliz! Se precisar de uma companhia na sua jornada de autocuidado, conte com a ajuda da Dedique!";
        resultado.style.color="green";
    }
    if(o2pont>o1pont && o2pont>o3pont ){
        resultado.innerHTML = "<br><p> Inspira, expira, não pira!</p>Existem momentos no seu dia em que você se sente desanimado. Quando isso acontecer, pare, e recarregue sua energia fazendo atividades prazerosas. Lembre-se que todos passamos por altos e baixos! Sempre que você precisar, nossos psicólogos estarão à disposição para uma consulta.";
        resultado.style.color="orange";
    }
    
    if(o3pont>o1pont && o3pont>o2pont){
        resultado.innerHTML = "<br><p> Você não está só! </p>Parece que você tem se sentido para baixo ultimamente. Lembre-se que sempre existe alguém para te ajudar. Basta dar o primeiro passo para conversar com alguém. Vamos lá?";
        resultado.style.color="red";
    }
    


}
   
   

//Pegando os elementos
const nomeDoPesquisador = window.document.querySelector("#nome-do-pesquisador");
const nomeDaPublicacao = window.document.querySelector("#nome-da-publicacao");
const textoAserAlterado = window.document.querySelector("#texto-a-ser-alterado");

function ConcluirEdicao(){
    //Nome do pesquisador
    if(nomeDoPesquisador.value === ""){
        window.alert("O pesquisador precisa ter um nome!!!");
        nomeDoPesquisador.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ nomeDoPesquisador.classList.remove("erro"); }

    if(!isNaN(nomeDoPesquisador.value)){
        window.alert("O nome não pode ser um valor numérico!");
        nomeDoPesquisador.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ nomeDoPesquisador.classList.remove("erro"); }
    
    //Título
    if(nomeDaPublicacao.value === ""){
        window.alert("A publicação precisa ter um título!!!");
        nomeDaPublicacao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ nomeDaPublicacao.classList.remove("erro"); }

    if(!isNaN(nomeDaPublicacao.value)){
        window.alert("O título não pode ser um valor numérico!");
        nomeDaPublicacao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ nomeDaPublicacao.classList.remove("erro");}

    if(nomeDaPublicacao.value.length < 4){
        window.alert("O título não pode ter um tamanho inferior à 4 caracteres!");
        nomeDaPublicacao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ nomeDaPublicacao.classList.remove("erro");}

    //Texto a ser alterado
    if(textoAserAlterado.value === ""){
        window.alert("Introduza o texto a ser alterado!!!");
        textoAserAlterado.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ textoAserAlterado.classList.remove("erro"); }

    if(!isNaN(textoAserAlterado.value)){
        window.alert("O texto a publicar não pode ser um valor numérico!");
        textoAserAlterado.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ textoAserAlterado.classList.remove("erro"); }

    if(textoAserAlterado.value.length <= 20){
        window.alert("Introduza um texto com mais de 20 caracteres!!!");
        textoAserAlterado.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ textoAserAlterado.classList.remove("erro"); }

    window.history.back();
}

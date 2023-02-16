//Pegando os elementos

//Inputs
//Passo 1
const inputNomeDoPesquisador = window.document.querySelector("#input-nome-do-pesquisador");
const inputTituloDaPublicacao = window.document.querySelector("#input-titulo-da-publicacao");
//Passo 2.1
const inputNomeDoCongresso = window.document.querySelector("#input-nome-do-congresso");
const inputSiglaDoCongresso = window.document.querySelector("#input-sigla-do-congresso");
const inputAnoEmQueOCongressoOcorreu = window.document.querySelector("#input-ano-do-congresso");
const inputBairroDoCongresso = window.document.querySelector("#input-bairro");
const inputRuaDoCongresso = window.document.querySelector("#input-rua");
const inputEdificioDoCongresso = window.document.querySelector("#input-edificio");
const inputNumeroInicialDePagina = window.document.querySelector("#input-numero-inicial");
const inputNumeroFinalDePagina = window.document.querySelector("#input-numero-final");
//Passo 2.2
const inputNomeDoPeriodico = window.document.querySelector("#input-nome-do-periodico");
const inputNomeDaEditora = window.document.querySelector("#input-nome-da-editora");
const inputNumeroDePaginaInicial = window.document.querySelector("#input-pagina-inicial");
const inputNumeroDePaginaFinal = window.document.querySelector("#input-pagina-final");
const inputVolumeDaEdicao = window.document.querySelector("#input-volume");
const inputNumeroDaEdicao = window.document.querySelector("#input-edicao");
//Passo 3
const textareaTextoASerPublicado = window.document.querySelector("#texto-a-ser-publicado");
//Passo 4
const inputNomeDaPublicacaoReferenciada1 = window.document.querySelector("#input-nome-da-publicacao-1");
const inputNomeDaPublicacaoReferenciada2 = window.document.querySelector("#input-nome-da-publicacao-2");
const inputNomeDaPublicacaoReferenciada3 = window.document.querySelector("#input-nome-da-publicacao-3");
//Botões
const primeiroBotaoAvancar = window.document.querySelector(".primeiro-botao-avancar");  //Passo 1
const segundoBotaoAvancar1 = window.document.querySelector(".segundo-botao-avancar-1"); //Passo 2-1
const segundoBotaoAvancar2 = window.document.querySelector(".segundo-botao-avancar-2"); //Passo 2-2
const botaoRetrocederPasso3 = window.document.querySelector(".botao-retroceder-passo-3"); //Passo 3 retroceder
const terceiroBotaoAvancar = window.document.querySelector(".terceiro-botao-avancar");  //Passo 3 avançar
const quartoBotaoAvancar = window.document.querySelector(".quarto-botao-avancar"); //Passo 4 avançar
//Select
const primeiroSelect = window.document.getElementsByTagName("select")[0];
const segundoSelect = window.document.getElementsByTagName("select")[1];

function getOpcaoSelecionada() {
    const opcaoSelecionada = primeiroSelect.options[primeiroSelect.selectedIndex].value;
    return opcaoSelecionada;
}

//Primeiro passo
primeiroBotaoAvancar.addEventListener("click", ()=>{
    //Título
    if(inputTituloDaPublicacao.value === ""){
        window.alert("A publicação precisa ter um título!!!");
        inputTituloDaPublicacao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputTituloDaPublicacao.classList.remove("erro");}

    if(!isNaN(inputTituloDaPublicacao.value)){
        window.alert("O título não pode ser um valor numérico!");
        inputTituloDaPublicacao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputTituloDaPublicacao.classList.remove("erro");}

    if(inputTituloDaPublicacao.value.length < 4){
        window.alert("O título não pode ter um tamanho inferior à 4 caracteres!");
        inputTituloDaPublicacao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputTituloDaPublicacao.classList.remove("erro");}

    //Opção do select
    if(getOpcaoSelecionada() === "Trabalho Anual"){
        primeiroBotaoAvancar.setAttribute("href", "#passo-2-1");
        primeiroSelect.classList.remove('erro');
        primeiroSelect.style.color = "#304860";
    }
    else if (getOpcaoSelecionada() === "Artigo Periódico"){
        primeiroBotaoAvancar.setAttribute("href", "#passo-2-2");
        primeiroSelect.classList.remove('erro');
        primeiroSelect.style.color = "#304860";
    }
    else{
        primeiroSelect.classList.add("erro");
        primeiroSelect.style.color = "#C21F30";
        window.alert("Selecione um dos tipos de publicações existentes.");
        event.preventDefault();
        return;
    }
})

//Segundo passo (1)
segundoBotaoAvancar1.addEventListener("click", ()=>{
    //Nome
    if(inputNomeDoCongresso.value === ""){
        window.alert("O congresso em que a inspiração surgiu precisa ter um nome!!!");
        inputNomeDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNomeDoCongresso.classList.remove("erro");}

    if(!isNaN(inputNomeDoCongresso.value)){
        window.alert("O nome do congresso não pode ser um valor numérico!");
        inputNomeDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNomeDoCongresso.classList.remove("erro");}

    if(inputNomeDoCongresso.value.length < 4){
        window.alert("O nome do congresso não pode ter um tamanho inferior à 4 caracteres!");
        inputNomeDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNomeDoCongresso.classList.remove("erro");}

    //Sigla
    if(inputSiglaDoCongresso.value === ""){
        window.alert("A sigla do congresso precisa ser introduzida!");
        inputSiglaDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputSiglaDoCongresso.classList.remove("erro");}

    if(!isNaN(inputSiglaDoCongresso.value)){
        window.alert("A sigla do congresso não pode ser um valor numérico!");
        inputSiglaDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputSiglaDoCongresso.classList.remove("erro");}

    //Ano
    if(inputAnoEmQueOCongressoOcorreu.value === ""){
        window.alert("O ano em que o congresso ocorreu precisa ser introduzido!");
        inputAnoEmQueOCongressoOcorreu.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputAnoEmQueOCongressoOcorreu.classList.remove("erro");}

    if(isNaN(inputAnoEmQueOCongressoOcorreu.value)){
        window.alert("O ano do congresso tem de ser um valor numérico!");
        inputAnoEmQueOCongressoOcorreu.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputAnoEmQueOCongressoOcorreu.classList.remove("erro");}

    if(inputAnoEmQueOCongressoOcorreu.value.length !== 4){
        window.alert("O ano tem de ter 4 dígitos!");
        inputAnoEmQueOCongressoOcorreu.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputAnoEmQueOCongressoOcorreu.classList.remove("erro");}

    //Bairro
    if(inputBairroDoCongresso.value === ""){
        window.alert("Introduza o nome do bairro em que o congresso ocorreu!!!");
        inputBairroDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputBairroDoCongresso.classList.remove("erro");}

    if(!isNaN(inputBairroDoCongresso.value)){
        window.alert("O nome do bairro em que ocorreu o congresso não pode ser um valor numérico!");
        inputBairroDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputBairroDoCongresso.classList.remove("erro");}

    if(inputBairroDoCongresso.value.length < 4){
        window.alert("O nome do bairro em que ocorreu o congresso não pode ter um tamanho inferior à 4 caracteres!");
        inputBairroDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputBairroDoCongresso.classList.remove("erro");}

    //Rua
    if(inputRuaDoCongresso.value === ""){
        window.alert("Introduza o nome da rua em que o congresso ocorreu!!!");
        inputRuaDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputRuaDoCongresso.classList.remove("erro");}

    //Edifício
    if(inputEdificioDoCongresso.value === ""){
        window.alert("Introduza o nome do edifício em que o congresso ocorreu!!!");
        inputEdificioDoCongresso.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputEdificioDoCongresso.classList.remove("erro");}

    //Número inicial
    if(inputNumeroInicialDePagina.value === ""){
        window.alert("Introduza o número da página inicial!!!");
        inputNumeroInicialDePagina.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroInicialDePagina.classList.remove("erro");}

    if(isNaN(inputNumeroInicialDePagina.value)){
        window.alert("O número da página inicial deve ser um valor numérico!");
        inputNumeroInicialDePagina.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroInicialDePagina.classList.remove("erro");}

    //Número final
    if(inputNumeroFinalDePagina.value === ""){
        window.alert("Introduza o número da página final!!!");
        inputNumeroFinalDePagina.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroFinalDePagina.classList.remove("erro");}

    if(isNaN(inputNumeroFinalDePagina.value)){
        window.alert("O número da página final deve ser um valor numérico!");
        inputNumeroFinalDePagina.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroFinalDePagina.classList.remove("erro");}
})

//Segundo passo (2)
segundoBotaoAvancar2.addEventListener("click", ()=>{
    //Nome do periódico
    if(inputNomeDoPeriodico.value === ""){
        window.alert("O periódico em que o artigo foi escrito precisa ter um nome!!!");
        inputNomeDoPeriodico.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNomeDoPeriodico.classList.remove("erro");}

    if(!isNaN(inputNomeDoPeriodico.value)){
        window.alert("O nome do periódico não pode ser um valor numérico!");
        inputNomeDoPeriodico.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNomeDoPeriodico.classList.remove("erro");}

    if(inputNomeDoPeriodico.value.length < 4){
        window.alert("O nome do periódico não pode ter um tamanho inferior à 4 caracteres!");
        inputNomeDoPeriodico.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNomeDoPeriodico.classList.remove("erro");}

    //Nome do editora
    if(inputNomeDaEditora.value === ""){
        window.alert("A editora precisa ter um nome!!!");
        inputNomeDaEditora.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNomeDaEditora.classList.remove("erro");}

    if(!isNaN(inputNomeDaEditora.value)){
        window.alert("O nome da editora não pode ser um valor numérico!");
        inputNomeDaEditora.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNomeDaEditora.classList.remove("erro");}
    
    //Número de página inicial
    if(inputNumeroDePaginaInicial.value === ""){
        window.alert("Introduza o número de página inicial!!!");
        inputNumeroDePaginaInicial.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroDePaginaInicial.classList.remove("erro");}

    if(isNaN(inputNumeroDePaginaInicial.value)){
        window.alert("O número de página inicial tem de ser um valor numérico!");
        inputNumeroDePaginaInicial.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroDePaginaInicial.classList.remove("erro");}

    //Número de página final
    if(inputNumeroDePaginaFinal.value === ""){
        window.alert("Introduza o número de página final!!!");
        inputNumeroDePaginaFinal.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroDePaginaFinal.classList.remove("erro");}

    if(isNaN(inputNumeroDePaginaFinal.value)){
        window.alert("O número de página final tem de ser um valor numérico!");
        inputNumeroDePaginaFinal.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroDePaginaFinal.classList.remove("erro");}

    //Volume da edição
    if(inputVolumeDaEdicao.value === ""){
        window.alert("Introduza o volume da edição!!!");
        inputVolumeDaEdicao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputVolumeDaEdicao.classList.remove("erro");}

    if(isNaN(inputVolumeDaEdicao.value)){
        window.alert("O volume da edição tem de ser um valor numérico!");
        inputVolumeDaEdicao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputVolumeDaEdicao.classList.remove("erro");}

    //Número da edição
    if(inputNumeroDaEdicao.value === ""){
        window.alert("Introduza o número da edição!!!");
        inputNumeroDaEdicao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroDaEdicao.classList.remove("erro");}

    if(isNaN(inputNumeroDaEdicao.value)){
        window.alert("O número da edição tem de ser um valor numérico!");
        inputNumeroDaEdicao.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ inputNumeroDaEdicao.classList.remove("erro");}
})

//Terceiro passo
botaoRetrocederPasso3.addEventListener("click", ()=>{
    if(getOpcaoSelecionada() === "Trabalho Anual"){
        botaoRetrocederPasso3.setAttribute("href", "#passo-2-1");
    }
    else{
        botaoRetrocederPasso3.setAttribute("href", "#passo-2-2");
    }
})

terceiroBotaoAvancar.addEventListener("click", ()=>{
    if(textareaTextoASerPublicado.value === ""){
        window.alert("Introduza o texto a ser publicado!!!");
        textareaTextoASerPublicado.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ textareaTextoASerPublicado.classList.remove("erro");}

    if(!isNaN(textareaTextoASerPublicado.value)){
        window.alert("O texto a publicar não pode ser um valor numérico!");
        textareaTextoASerPublicado.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ textareaTextoASerPublicado.classList.remove("erro");}

    if(textareaTextoASerPublicado.value.length <= 20){
        window.alert("Introduza um texto com mais de 20 caracteres!!!");
        textareaTextoASerPublicado.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ textareaTextoASerPublicado.classList.remove("erro");}
})

//Quarto passo
function getOpcaoSelecionadaNoSegundoSelect() {
    const opcaoSelecionada = segundoSelect.options[segundoSelect.selectedIndex].value;
    return opcaoSelecionada;
}

segundoSelect.addEventListener("change", ()=>{
    if(getOpcaoSelecionadaNoSegundoSelect() == 1){
        inputNomeDaPublicacaoReferenciada2.setAttribute("disabled", "");
        inputNomeDaPublicacaoReferenciada3.setAttribute("disabled", "");

        //Esvaziar caixas de texto
        inputNomeDaPublicacaoReferenciada2.value = "";
        inputNomeDaPublicacaoReferenciada3.value = "";
    }
    else if(getOpcaoSelecionadaNoSegundoSelect() == 2){
        inputNomeDaPublicacaoReferenciada2.removeAttribute("disabled");
        inputNomeDaPublicacaoReferenciada3.setAttribute("disabled", "");

        //Esvaziar caixa de texto
        inputNomeDaPublicacaoReferenciada3.value = "";
    }
    else if(getOpcaoSelecionadaNoSegundoSelect() == 3){
        inputNomeDaPublicacaoReferenciada2.removeAttribute("disabled");
        inputNomeDaPublicacaoReferenciada3.removeAttribute("disabled");
    }

    inputNomeDaPublicacaoReferenciada1.classList.remove("erro");
    inputNomeDaPublicacaoReferenciada2.classList.remove("erro");
    inputNomeDaPublicacaoReferenciada3.classList.remove("erro");
})

quartoBotaoAvancar.addEventListener("click", ()=>{
    if(getOpcaoSelecionadaNoSegundoSelect() == 1){
        //Título da publicação referenciada
        if(inputNomeDaPublicacaoReferenciada1.value === ""){
            window.alert("A publicação referenciada precisa ter um título!!!");
            inputNomeDaPublicacaoReferenciada1.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada1.classList.remove("erro");}

        if(!isNaN(inputNomeDaPublicacaoReferenciada1.value)){
            window.alert("O título da publicação referenciada não pode ser um valor numérico!");
            inputNomeDaPublicacaoReferenciada1.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada1.classList.remove("erro");}

        if(inputNomeDaPublicacaoReferenciada1.value.length < 4){
            window.alert("O título da publicação referenciada não pode ter um tamanho inferior à 4 caracteres!");
            inputNomeDaPublicacaoReferenciada1.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada1.classList.remove("erro");}
    }
    else if(getOpcaoSelecionadaNoSegundoSelect() == 2){
        //Título da 1ª publicação referenciada 
        if(inputNomeDaPublicacaoReferenciada1.value === ""){
            window.alert("A primeira publicação referenciada precisa ter um título!!!");
            inputNomeDaPublicacaoReferenciada1.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada1.classList.remove("erro");}

        if(!isNaN(inputNomeDaPublicacaoReferenciada1.value)){
            window.alert("O título da primeira publicação referenciada não pode ser um valor numérico!");
            inputNomeDaPublicacaoReferenciada1.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada1.classList.remove("erro");}

        if(inputNomeDaPublicacaoReferenciada1.value.length < 4){
            window.alert("O título da primeira publicação referenciada não pode ter um tamanho inferior à 4 caracteres!");
            inputNomeDaPublicacaoReferenciada1.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada1.classList.remove("erro");}

        //Título da 2ª publicação referenciada
        if(inputNomeDaPublicacaoReferenciada2.value === ""){
            window.alert("A segunda publicação referenciada precisa ter um título!!!");
            inputNomeDaPublicacaoReferenciada2.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada2.classList.remove("erro");}

        if(!isNaN(inputNomeDaPublicacaoReferenciada2.value)){
            window.alert("O título da segunda publicação referenciada não pode ser um valor numérico!");
            inputNomeDaPublicacaoReferenciada2.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada2.classList.remove("erro");}

        if(inputNomeDaPublicacaoReferenciada2.value.length < 4){
            window.alert("O título da segunda publicação referenciada não pode ter um tamanho inferior à 4 caracteres!");
            inputNomeDaPublicacaoReferenciada2.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada2.classList.remove("erro");}
    }
    else if(getOpcaoSelecionadaNoSegundoSelect() == 3){
        //Título da 1ª publicação referenciada 
        if(inputNomeDaPublicacaoReferenciada1.value === ""){
            window.alert("A primeira publicação referenciada precisa ter um título!!!");
            inputNomeDaPublicacaoReferenciada1.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada1.classList.remove("erro");}

        if(!isNaN(inputNomeDaPublicacaoReferenciada1.value)){
            window.alert("O título da primeira publicação referenciada não pode ser um valor numérico!");
            inputNomeDaPublicacaoReferenciada1.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada1.classList.remove("erro");}

        if(inputNomeDaPublicacaoReferenciada1.value.length < 4){
            window.alert("O título da primeira publicação referenciada não pode ter um tamanho inferior à 4 caracteres!");
            inputNomeDaPublicacaoReferenciada1.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada1.classList.remove("erro");}

        //Título da 2ª publicação referenciada
        if(inputNomeDaPublicacaoReferenciada2.value === ""){
            window.alert("A segunda publicação referenciada precisa ter um título!!!");
            inputNomeDaPublicacaoReferenciada2.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada2.classList.remove("erro");}

        if(!isNaN(inputNomeDaPublicacaoReferenciada2.value)){
            window.alert("O título da segunda publicação referenciada não pode ser um valor numérico!");
            inputNomeDaPublicacaoReferenciada2.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada2.classList.remove("erro");}

        if(inputNomeDaPublicacaoReferenciada2.value.length < 4){
            window.alert("O título da segunda publicação referenciada não pode ter um tamanho inferior à 4 caracteres!");
            inputNomeDaPublicacaoReferenciada2.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada2.classList.remove("erro");}

        //Título da 3ª publicação referenciada
        if(inputNomeDaPublicacaoReferenciada3.value === ""){
            window.alert("A segunda publicação referenciada precisa ter um título!!!");
            inputNomeDaPublicacaoReferenciada3.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada3.classList.remove("erro");}

        if(!isNaN(inputNomeDaPublicacaoReferenciada3.value)){
            window.alert("O título da segunda publicação referenciada não pode ser um valor numérico!");
            inputNomeDaPublicacaoReferenciada3.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada3.classList.remove("erro");}

        if(inputNomeDaPublicacaoReferenciada3.value.length < 4){
            window.alert("O título da segunda publicação referenciada não pode ter um tamanho inferior à 4 caracteres!");
            inputNomeDaPublicacaoReferenciada3.classList.add("erro");
            event.preventDefault();
            return;
        }
        else{ inputNomeDaPublicacaoReferenciada3.classList.remove("erro");}
    }
})

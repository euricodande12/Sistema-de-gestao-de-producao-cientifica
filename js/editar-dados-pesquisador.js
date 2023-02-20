//Pegar os inputs
const nomeCompleto = window.document.querySelector("#nome-do-pesquisador");
const email = window.document.querySelector("#email-do-pesquisador");
const nomeDaInstituicao = window.document.querySelector("#nome-da-instituicao");
const sigla = window.document.querySelector("#sigla");
const pais = window.document.getElementById("pais");
const botaoAlterarDados = window.document.querySelector("#alterar-dados");

//Função para validar e-mail
function validarEmail(email) {
    var regra = /\S+@\S+\.\S+/;
    return regra.test(email);
}

//Função para evitar caracteres especiais
function impedirCaracteresEspeciais(textoASerAnalisado) 
{
	var caracteresEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,ª,º,(,)])/;
  	
    if(textoASerAnalisado.value.match(caracteresEspeciais))
    {            
        window.alert("Não use (~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,ª,º,(,)).");
        textoASerAnalisado.classList.add('erro');
        event.preventDefault();
        return;
    } 
    else {
        textoASerAnalisado.classList.remove('erro');
    }
}

//Função para alterar os dados
botaoAlterarDados.addEventListener('click', ()=>{
//Nome do pesquisador
    //Se não estiver preenchido
    if(nomeCompleto.value === ""){
        window.alert("O pesquisador precisa ter um nome!!!");
        nomeCompleto.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ nomeCompleto.classList.remove("erro"); }

    //Se for um valor numérico
    if(!isNaN(nomeCompleto.value)){
        window.alert("O nome não pode ser um valor numérico!");
        nomeCompleto.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ nomeCompleto.classList.remove("erro"); }
    
    //E-mail
    //Se não estiver preenchido
    if(email.value === ""){
        window.alert("O pesquisador precisa ter um e-mail!!!");
        email.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ email.classList.remove("erro"); }

    //Se for um valor numérico
    if(!isNaN(email.value)){
        window.alert("O e-mail não pode ser um valor numérico!");
        email.classList.add("erro");
        event.preventDefault();
        return;
    }
    else{ email.classList.remove("erro");}

    //Se o e-mail foi válido
    if(validarEmail(email.value)){
        email.classList.remove('erro');
    }
    else{
        email.classList.add('erro');
        window.alert("O seu e-mail é inválido.");
        event.preventDefault();
        return;
    }

    //Se o nome da instituição não for preenchido
    if(nomeDaInstituicao.value === ""){
        nomeDaInstituicao.classList.add('erro');
        window.alert("Introduza o nome da instituição!");
        event.preventDefault();
        return;
    }
    else{
        nomeDaInstituicao.classList.remove('erro');
    }

    //Se o nome da instituição for um número
    if(!isNaN(nomeDaInstituicao.value)){
        nomeDaInstituicao.classList.add('erro');
        window.alert("O nome da instituição não pode ser um número.");
        event.preventDefault();
        return;
    }
    else{
        nomeDaInstituicao.classList.remove('erro');
    }

    impedirCaracteresEspeciais(nomeDaInstituicao);

    //Se a sigla não for preenchida
    if(sigla.value === ""){
        sigla.classList.add('erro');
        window.alert("Introduza a sigla da instituição!");
        event.preventDefault();
        return;
    }
    else{
        sigla.classList.remove('erro');
    }

    //Se a sigla da instituição for um número
    if(!isNaN(inputInstituicaoSigla.value)){
        inputInstituicaoSigla.classList.add('erro');
        window.alert("A sigla da instituição não pode ser um número.");
        event.preventDefault();
        return;
    }
    else{
        sigla.classList.remove('erro');
    }

    impedirCaracteresEspeciais(sigla);

    //Se o país não for preenchido
    if(pais.value === ""){
        pais.classList.add('erro');
        window.alert("Introduza o nome do país!");
        event.preventDefault();
        return;
    }
    else{
        pais.classList.remove('erro');
    }

    //Se o nome do país for um número
    if(!isNaN(pais.value)){
        pais.classList.add('erro');
        window.alert("O nome do país não pode ser um número.");
        event.preventDefault();
        return;
    }
    else{
        pais.classList.remove('erro');
    }

    //Se o nome do país contér um número
    const regex = /[0-9]/;
    if(regex.test(pais.value)){
        pais.classList.add('erro');
        window.alert("O nome do país não pode contér um número.");
        event.preventDefault();
        return;
    }
    else{
        pais.classList.remove('erro');
    }

    impedirCaracteresEspeciais(pais);
})
    

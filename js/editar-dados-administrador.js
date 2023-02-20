//Pegar os inputs
const nomeCompleto = window.document.querySelector("#nome-do-administrador");
const email = window.document.querySelector("#email-do-administrador");

//Função para validar e-mail
function validarEmail(email) {
    var regra = /\S+@\S+\.\S+/;
    return regra.test(email);
}

//Função para alterar os dados
function AlterarDados(){
    //Nome do pesquisador
    //Se não estiver preenchido
    if(nomeCompleto.value === ""){
        window.alert("O administrador precisa ter um nome!!!");
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
        window.alert("O administrador precisa ter um e-mail!!!");
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
}
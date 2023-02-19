//Selecionar os inputs
const inputEmail = window.document.getElementById("input-1");
const inputSenha = window.document.getElementById("input-2");

/* Textos de aviso */
const textoDeAvisoEmail = window.document.querySelector(".texto-de-aviso-1");
const textoDeAvisoSenha = window.document.querySelector(".texto-de-aviso-2");

//Botao
const botaoVerASenha = window.document.querySelector("#botao-ver-a-senha");

/* Ver a senha */
botaoVerASenha.addEventListener('click', ()=>{
    if(inputSenha.getAttribute('type') === 'password'){
        inputSenha.setAttribute('type', 'text');
    }
    else{
        inputSenha.setAttribute('type', 'password');
    }
});

//Função para validar e-mail
function validarEmail(email) {
    var regra = /\S+@\S+\.\S+/;
    return regra.test(email);
}

//Função para validar senha
function validarSenha(senha, textoDeAviso) 
{
	var numeros = /([0-9])/;
	var alfabetoMinusculo = /([a-z])/;
	var alfabetoMaiusculo = /([A-Z])/;
	var caracteresEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;


	if(senha.value.length < 8) 
	{
		textoDeAviso.innerText = "Senha fraca, insira no mínimo 8 caracteres.";
        senha.classList.add('erro');
        senha.focus();
        textoDeAviso.style.display = 'block';
        event.preventDefault();
        return false;
	} 
    else {  	
		if(senha.value.match(numeros) && senha.value.match(alfabetoMinusculo) && senha.value.match(alfabetoMaiusculo) && senha.value.match(caracteresEspeciais))
		{            
			senha.classList.remove('erro');
            textoDeAviso.style.display = 'none';
            return true;
		} else {
			textoDeAviso.innerText = "Tornea a senha mais segura (Ex:#pazHoje2).";
            senha.classList.add('erro');
            senha.focus();
            textoDeAviso.style.display = 'block';
            event.preventDefault();
            return false;
		}
	}
}

function Selecionar(){
    var select = window.document.querySelector("select");
    var opcao = select.options[select.selectedIndex].value;
    return opcao;
}

//Validar E-mail ao mudar o valor
inputEmail.addEventListener('input', ()=>{
    //Se o e-mail não for preenchido
    if(inputEmail.value === ""){
        inputEmail.classList.add('erro');
        inputEmail.focus();
        textoDeAvisoEmail.innerText = "Introduza o seu e-mail!";
        textoDeAvisoEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputEmail.classList.remove('erro');
        textoDeAvisoEmail.style.display = 'none';
    }

    //Se o e-mail for um número
    if(!isNaN(inputEmail.value)){
        inputEmail.classList.add('erro');
        inputEmail.focus();
        textoDeAvisoEmail.innerText = "O seu e-mail é um número? Eu acho que não.";
        textoDeAvisoEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputEmail.classList.remove('erro');
        textoDeAvisoEmail.style.display = 'none';
    }

    //Se o e-mail foi válido
    if(validarEmail(inputEmail.value)){
        inputEmail.classList.remove('erro');
        textoDeAvisoEmail.style.display = 'none';
    }
    else{
        inputEmail.classList.add('erro');
        inputEmail.focus();
        textoDeAvisoEmail.innerText = "O seu e-mail é inválido.";
        textoDeAvisoEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
});

//Senha
inputSenha.addEventListener('input', ()=>{
    //Se a senha não for preenchida
    if(inputSenha.value === ""){
        inputSenha.classList.add('erro');
        inputSenha.focus();
        textoDeAvisoSenha.innerText = "Introduza a sua senha!";
        textoDeAvisoSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputSenha.classList.remove('erro');
        textoDeAvisoSenha.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputSenha.value)){
        inputSenha.classList.add('erro');
        inputSenha.focus();
        textoDeAvisoSenha.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputSenha.classList.remove('erro');
        textoDeAvisoSenha.style.display = 'none';
    }

    validarSenha(inputSenha, textoDeAvisoSenha);
});

//Função para entrar (temporária)


function Entrar(){
    if (Selecionar() == "Pesquisador"){
        //Se o e-mail não for preenchido
        if(inputEmail.value === ""){
            inputEmail.classList.add('erro');
            inputEmail.focus();
            textoDeAvisoEmail.innerText = "Introduza o seu e-mail!";
            textoDeAvisoEmail.style.display = 'block';
            event.preventDefault();
            return;
        }
        else{
            inputEmail.classList.remove('erro');
            textoDeAvisoEmail.style.display = 'none';
        }

        //Se o e-mail for um número
        if(!isNaN(inputEmail.value)){
            inputEmail.classList.add('erro');
            inputEmail.focus();
            textoDeAvisoEmail.innerText = "O seu e-mail é um número? Eu acho que não.";
            textoDeAvisoEmail.style.display = 'block';
            event.preventDefault();
            return;
        }
        else{
            inputEmail.classList.remove('erro');
            textoDeAvisoEmail.style.display = 'none';
        }

        //Se o e-mail foi válido
        if(validarEmail(inputEmail.value)){
            inputEmail.classList.remove('erro');
            textoDeAvisoEmail.style.display = 'none';
        }
        else{
            inputEmail.classList.add('erro');
            inputEmail.focus();
            textoDeAvisoEmail.innerText = "O seu e-mail é inválido.";
            textoDeAvisoEmail.style.display = 'block';
            event.preventDefault();
            return;
        }

        //Se a senha não for preenchida
    if(inputSenha.value === ""){
        inputSenha.classList.add('erro');
        inputSenha.focus();
        textoDeAvisoSenha.innerText = "Introduza a sua senha!";
        textoDeAvisoSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputSenha.classList.remove('erro');
        textoDeAvisoSenha.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputSenha.value)){
        inputSenha.classList.add('erro');
        inputSenha.focus();
        textoDeAvisoSenha.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputSenha.classList.remove('erro');
        textoDeAvisoSenha.style.display = 'none';
    }

    do{
        validarSenha(inputSenha, textoDeAvisoSenha);
    }
    while(!validarSenha(inputSenha, textoDeAvisoSenha));

        window.open('./pagina-inicial-pesquisador.html', 'self');
    }
    
    else if(Selecionar() == "Administrador"){
        //Se o e-mail não for preenchido
        if(inputEmail.value === ""){
            inputEmail.classList.add('erro');
            inputEmail.focus();
            textoDeAvisoEmail.innerText = "Introduza o seu e-mail!";
            textoDeAvisoEmail.style.display = 'block';
            event.preventDefault();
            return;
        }
        else{
            inputEmail.classList.remove('erro');
            textoDeAvisoEmail.style.display = 'none';
        }

        //Se o e-mail for um número
        if(!isNaN(inputEmail.value)){
            inputEmail.classList.add('erro');
            inputEmail.focus();
            textoDeAvisoEmail.innerText = "O seu e-mail é um número? Eu acho que não.";
            textoDeAvisoEmail.style.display = 'block';
            event.preventDefault();
            return;
        }
        else{
            inputEmail.classList.remove('erro');
            textoDeAvisoEmail.style.display = 'none';
        }

        //Se o e-mail foi válido
        if(validarEmail(inputEmail.value)){
            inputEmail.classList.remove('erro');
            textoDeAvisoEmail.style.display = 'none';
        }
        else{
            inputEmail.classList.add('erro');
            inputEmail.focus();
            textoDeAvisoEmail.innerText = "O seu e-mail é inválido.";
            textoDeAvisoEmail.style.display = 'block';
            event.preventDefault();
            return;
        }

        //Se a senha não for preenchida
    if(inputSenha.value === ""){
        inputSenha.classList.add('erro');
        inputSenha.focus();
        textoDeAvisoSenha.innerText = "Introduza a sua senha!";
        textoDeAvisoSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputSenha.classList.remove('erro');
        textoDeAvisoSenha.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputSenha.value)){
        inputSenha.classList.add('erro');
        inputSenha.focus();
        textoDeAvisoSenha.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputSenha.classList.remove('erro');
        textoDeAvisoSenha.style.display = 'none';
    }

        do{
            validarSenha(inputSenha, textoDeAvisoSenha);
        }
        while(!validarSenha(inputSenha, textoDeAvisoSenha));

        window.open('./pagina-inicial-administrador.html', 'self');
    }
    
    else{
        window.alert("Erro, ao selecionar a opção!");
        event.preventDefault();
        return;
    }
    
}
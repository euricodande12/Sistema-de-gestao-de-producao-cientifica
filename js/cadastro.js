/* Selecionando os elementos... */

/* Pesquidador */
/* Inputs */
const inputPesquisadorNomeCompleto = window.document.getElementById("input-1");
const inputPesquisadorEmail = window.document.getElementById("input-2");
const inputPesquisadorSenha = window.document.getElementById("input-3");
const inputPesquisadorSenhaNovamente = window.document.getElementById("input-4");
/* Textos de aviso */
const textoDeAvisoPesquisadorNomeCompleto = window.document.querySelector(".texto-de-aviso-1");
const textoDeAvisoPesquisadorEmail = window.document.querySelector(".texto-de-aviso-2");
const textoDeAvisoPesquisadorSenha = window.document.querySelector(".texto-de-aviso-3");
const textoDeAvisoPesquisadorSenhaNovamente = window.document.querySelector(".texto-de-aviso-4");
/* Botão */
const botaoVerAsSenhas1 = window.document.getElementById("botao-ver-senhas-1");

/* Instituição */
/* Inputs */
const inputInstituicaoNome = window.document.getElementById("input-5");
const inputInstituicaoSigla = window.document.getElementById("input-6");
const inputInstituicaoPais = window.document.getElementById("input-7");
/* Textos de aviso */
const textoDeAvisoInstituicaoNome = window.document.querySelector(".texto-de-aviso-5");
const textoDeAvisoInstituicaoSigla = window.document.querySelector(".texto-de-aviso-6");
const textoDeAvisoInstituicaoPais = window.document.querySelector(".texto-de-aviso-7");
/* Botão */
const botaoCadastrarPesquisador = window.document.getElementsByTagName('button')[1];

/* Administrador */
/* Inputs */
const inputAdministradorNomeCompleto = window.document.getElementById("input-8");
const inputAdministradorEmail = window.document.getElementById("input-9");
const inputAdministradorSenha = window.document.getElementById("input-10");
const inputAdministradorSenhaNovamente = window.document.getElementById("input-11");
const inputAdministradorCodigoAleatorio = window.document.getElementById("input-12");
/* Textos de aviso */
const textoDeAvisoAdministradorNomeCompleto  = window.document.querySelector(".texto-de-aviso-8");
const textoDeAvisoAdministradorEmail = window.document.querySelector(".texto-de-aviso-9");
const textoDeAvisoAdministradorSenha = window.document.querySelector(".texto-de-aviso-10");
const textoDeAvisoAdministradorSenhaNovamente = window.document.querySelector(".texto-de-aviso-11");
const textoDeAvisoAdministradorCodigoAleatorio = window.document.querySelector(".texto-de-aviso-12");
/* Botões */
const botaoVerAsSenhas2 = window.document.getElementById("botao-ver-senhas-2");
const botaoCadastrarAdministrador = window.document.getElementById("botao-do-cadastro-2");

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
        return;
	} 
    else {  	
		if(senha.value.match(numeros) && senha.value.match(alfabetoMinusculo) && senha.value.match(alfabetoMaiusculo) && senha.value.match(caracteresEspeciais))
		{            
			senha.classList.remove('erro');
            textoDeAviso.style.display = 'none';
		} else {
			textoDeAviso.innerText = "Tornea a senha mais segura (Ex:#pazHoje2).";
            senha.classList.add('erro');
            senha.focus();
            textoDeAviso.style.display = 'block';
            event.preventDefault();
            return;
		}
	}
}

//Função para evitar caracteres especiais
function impedirCaracteresEspeciais(textoASerAnalisado, textoDeAviso) 
{
	var caracteresEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,ª,º,(,)])/;
  	
    if(textoASerAnalisado.value.match(caracteresEspeciais))
    {            
        textoDeAviso.innerText = "Não use (~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,ª,º,(,)).";
        textoASerAnalisado.classList.add('erro');
        textoASerAnalisado.focus();
        textoDeAviso.style.display = 'block';
        event.preventDefault();
        return;
    } 
    else {
        textoASerAnalisado.classList.remove('erro');
        textoDeAviso.style.display = 'none';
    }
}

/* Ver as senhas (pesquisador) */
botaoVerAsSenhas1.addEventListener('click', ()=>{
    if(inputPesquisadorSenha.getAttribute('type') === 'password' && inputPesquisadorSenhaNovamente.getAttribute('type') === 'password'){
        inputPesquisadorSenha.setAttribute('type', 'text');
        inputPesquisadorSenhaNovamente.setAttribute('type', 'text');
    }
    else{
        inputPesquisadorSenha.setAttribute('type', 'password');
        inputPesquisadorSenhaNovamente.setAttribute('type', 'password');
    }
});

/* Ver as senhas (administrador) */
botaoVerAsSenhas2.addEventListener('click', ()=>{
    if(inputAdministradorSenha.getAttribute('type') === 'password' && inputAdministradorSenhaNovamente.getAttribute('type') === 'password'){
        inputAdministradorSenha.setAttribute('type', 'text');
        inputAdministradorSenhaNovamente.setAttribute('type', 'text');
    }
    else{
        inputAdministradorSenha.setAttribute('type', 'password');
        inputAdministradorSenhaNovamente.setAttribute('type', 'password');
    }
});

//Validando ao inserir os dados do pesquisador
//Nome
inputPesquisadorNomeCompleto.addEventListener('input', ()=>{
    //Se o nome não for preenchido
    if(inputPesquisadorNomeCompleto.value === ""){
        inputPesquisadorNomeCompleto.classList.add('erro');
        inputPesquisadorNomeCompleto.focus();
        textoDeAvisoPesquisadorNomeCompleto.innerText = "Introduza o seu nome!";
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorNomeCompleto.classList.remove('erro');
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'none';
    }

    //Se o nome for um número
    if(!isNaN(inputPesquisadorNomeCompleto.value)){
        inputPesquisadorNomeCompleto.classList.add('erro');
        inputPesquisadorNomeCompleto.focus();
        textoDeAvisoPesquisadorNomeCompleto.innerText = "O seu nome é um número? Eu acho que não.";
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorNomeCompleto.classList.remove('erro');
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'none';
    }

    //Se o nome contér um número
    const regex = /[0-9]/;
    if(regex.test(inputPesquisadorNomeCompleto.value)){
        inputPesquisadorNomeCompleto.classList.add('erro');
        inputPesquisadorNomeCompleto.focus();
        textoDeAvisoPesquisadorNomeCompleto.innerText = "O seu nome não pode contér um número.";
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorNomeCompleto.classList.remove('erro');
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'none';
    }

    //Se o nome não for composto por no mínimo 6 caracteres
    if(inputPesquisadorNomeCompleto.value.length < 6){
        inputPesquisadorNomeCompleto.classList.add('erro');
        inputPesquisadorNomeCompleto.focus();
        textoDeAvisoPesquisadorNomeCompleto.innerText = "Nome curto demais";
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorNomeCompleto.classList.remove('erro');
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'none';
    }

    impedirCaracteresEspeciais(inputPesquisadorNomeCompleto, textoDeAvisoPesquisadorNomeCompleto);
});

//E-mail
inputPesquisadorEmail.addEventListener('input', ()=>{
    //Se o e-mail não for preenchido
    if(inputPesquisadorEmail.value === ""){
        inputPesquisadorEmail.classList.add('erro');
        inputPesquisadorEmail.focus();
        textoDeAvisoPesquisadorEmail.innerText = "Introduza o seu e-mail!";
        textoDeAvisoPesquisadorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorEmail.classList.remove('erro');
        textoDeAvisoPesquisadorEmail.style.display = 'none';
    }

    //Se o e-mail for um número
    if(!isNaN(inputPesquisadorEmail.value)){
        inputPesquisadorEmail.classList.add('erro');
        inputPesquisadorEmail.focus();
        textoDeAvisoPesquisadorEmail.innerText = "O seu e-mail é um número? Eu acho que não.";
        textoDeAvisoPesquisadorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorEmail.classList.remove('erro');
        textoDeAvisoPesquisadorEmail.style.display = 'none';
    }

    //Se o e-mail foi válido
    if(validarEmail(inputPesquisadorEmail.value)){
        inputPesquisadorEmail.classList.remove('erro');
        textoDeAvisoPesquisadorEmail.style.display = 'none';
    }
    else{
        inputPesquisadorEmail.classList.add('erro');
        inputPesquisadorEmail.focus();
        textoDeAvisoPesquisadorEmail.innerText = "O seu e-mail é inválido.";
        textoDeAvisoPesquisadorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
});

//Senha (primeiro input)
inputPesquisadorSenha.addEventListener('input', ()=>{
    //Se a senha não for preenchida
    if(inputPesquisadorSenha.value === ""){
        inputPesquisadorSenha.classList.add('erro');
        inputPesquisadorSenha.focus();
        textoDeAvisoPesquisadorSenha.innerText = "Introduza a sua senha!";
        textoDeAvisoPesquisadorSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenha.classList.remove('erro');
        textoDeAvisoPesquisadorSenha.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputPesquisadorSenha.value)){
        inputPesquisadorSenha.classList.add('erro');
        inputPesquisadorSenha.focus();
        textoDeAvisoPesquisadorSenha.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoPesquisadorSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenha.classList.remove('erro');
        textoDeAvisoPesquisadorSenha.style.display = 'none';
    }

    validarSenha(inputPesquisadorSenha, textoDeAvisoPesquisadorSenha);
});

//Senha (segundo input)
inputPesquisadorSenhaNovamente.addEventListener('input', ()=>{
    //Se a senha não for reintroduzida
    if(inputPesquisadorSenhaNovamente.value === ""){
        inputPesquisadorSenhaNovamente.classList.add('erro');
        inputPesquisadorSenhaNovamente.focus();
        textoDeAvisoPesquisadorSenhaNovamente.innerText = "Reintroduza a senha!";
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenhaNovamente.classList.remove('erro');
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputPesquisadorSenhaNovamente.value)){
        inputPesquisadorSenhaNovamente.classList.add('erro');
        inputPesquisadorSenhaNovamente.focus();
        textoDeAvisoPesquisadorSenhaNovamente.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenhaNovamente.classList.remove('erro');
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'none';
    }

    validarSenha(inputPesquisadorSenhaNovamente, textoDeAvisoPesquisadorSenhaNovamente);

    if(inputPesquisadorSenha.value !== inputPesquisadorSenhaNovamente.value){
        inputPesquisadorSenhaNovamente.classList.add('erro');
        inputPesquisadorSenhaNovamente.focus();
        textoDeAvisoPesquisadorSenhaNovamente.innerText = "As senhas não coincidem.";
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenhaNovamente.classList.remove('erro');
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'none';
    }
});

//Validando ao inserir os dados da instituição
//Nome
inputInstituicaoNome.addEventListener('input', ()=>{
    //Se o nome da instituição não for preenchido
    if(inputInstituicaoNome.value === ""){
        inputInstituicaoNome.classList.add('erro');
        inputInstituicaoNome.focus();
        textoDeAvisoInstituicaoNome.innerText = "Introduza o nome da instituição!";
        textoDeAvisoInstituicaoNome.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoNome.classList.remove('erro');
        textoDeAvisoInstituicaoNome.style.display = 'none';
    }

    //Se o nome da instituição for um número
    if(!isNaN(inputInstituicaoNome.value)){
        inputInstituicaoNome.classList.add('erro');
        inputInstituicaoNome.focus();
        textoDeAvisoInstituicaoNome.innerText = "O nome da instituição não pode ser um número.";
        textoDeAvisoInstituicaoNome.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoNome.classList.remove('erro');
        textoDeAvisoInstituicaoNome.style.display = 'none';
    }

    impedirCaracteresEspeciais(inputInstituicaoNome, textoDeAvisoInstituicaoNome);
});

//Sigla
inputInstituicaoSigla.addEventListener('input', ()=>{
    //Se a sigla não for preenchida
    if(inputInstituicaoSigla.value === ""){
        inputInstituicaoSigla.classList.add('erro');
        inputInstituicaoSigla.focus();
        textoDeAvisoInstituicaoSigla.innerText = "Introduza a sigla da instituição!";
        textoDeAvisoInstituicaoSigla.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoSigla.classList.remove('erro');
        textoDeAvisoInstituicaoSigla.style.display = 'none';
    }

    //Se a sigla da instituição for um número
    if(!isNaN(inputInstituicaoSigla.value)){
        inputInstituicaoSigla.classList.add('erro');
        inputInstituicaoSigla.focus();
        textoDeAvisoInstituicaoSigla.innerText = "A sigla da instituição não pode ser um número.";
        textoDeAvisoInstituicaoSigla.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoSigla.classList.remove('erro');
        textoDeAvisoInstituicaoSigla.style.display = 'none';
    }

    impedirCaracteresEspeciais(inputInstituicaoSigla, textoDeAvisoInstituicaoSigla);
});

//Pais
inputInstituicaoPais.addEventListener('input', ()=>{
    //Se o país não for preenchido
    if(inputInstituicaoPais.value === ""){
        inputInstituicaoPais.classList.add('erro');
        inputInstituicaoPais.focus();
        textoDeAvisoInstituicaoPais.innerText = "Introduza o nome do país!";
        textoDeAvisoInstituicaoPais.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoPais.classList.remove('erro');
        textoDeAvisoInstituicaoPais.style.display = 'none';
    }

    //Se o nome do país for um número
    if(!isNaN(inputInstituicaoPais.value)){
        inputInstituicaoPais.classList.add('erro');
        inputInstituicaoPais.focus();
        textoDeAvisoInstituicaoPais.innerText = "O nome do país não pode ser um número.";
        textoDeAvisoInstituicaoPais.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoPais.classList.remove('erro');
        textoDeAvisoInstituicaoPais.style.display = 'none';
    }

    //Se o nome do país contér um número
    const regex = /[0-9]/;
    if(regex.test(inputInstituicaoPais.value)){
        inputInstituicaoPais.classList.add('erro');
        inputInstituicaoPais.focus();
        textoDeAvisoInstituicaoPais.innerText = "O nome do país não pode contér um número.";
        textoDeAvisoInstituicaoPais.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoPais.classList.remove('erro');
        textoDeAvisoInstituicaoPais.style.display = 'none';
    }

    impedirCaracteresEspeciais(inputInstituicaoPais, textoDeAvisoInstituicaoPais);
});

//Validando ao inserir os dados do administrador
//Nome
inputAdministradorNomeCompleto.addEventListener('input', ()=>{
    //Se o nome não for preenchido
    if(inputAdministradorNomeCompleto.value === ""){
        inputAdministradorNomeCompleto.classList.add('erro');
        inputAdministradorNomeCompleto.focus();
        textoDeAvisoAdministradorNomeCompleto.innerText = "Introduza o seu nome!";
        textoDeAvisoAdministradorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorNomeCompleto.classList.remove('erro');
        textoDeAvisoAdministradorNomeCompleto.style.display = 'none';
    }

    //Se o nome for um número
    if(!isNaN(inputAdministradorNomeCompleto.value)){
        inputAdministradorNomeCompleto.classList.add('erro');
        inputAdministradorNomeCompleto.focus();
        textoDeAvisoAdministradorNomeCompleto.innerText = "O seu nome é um número? Eu acho que não.";
        textoDeAvisoAdministradorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorNomeCompleto.classList.remove('erro');
        textoDeAvisoAdministradorNomeCompleto.style.display = 'none';
    }

    //Se o nome contér um número
    const regex = /[0-9]/;
    if(regex.test(inputAdministradorNomeCompleto.value)){
        inputAdministradorNomeCompleto.classList.add('erro');
        inputAdministradorNomeCompleto.focus();
        textoDeAvisoAdministradorNomeCompleto.innerText = "O seu nome não pode contér um número.";
        textoDeAvisoAdministradorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorNomeCompleto.classList.remove('erro');
        textoDeAvisoAdministradorNomeCompleto.style.display = 'none';
    }

    //Se o nome não for composto por no mínimo 6 caracteres
    if(inputAdministradorNomeCompleto.value.length < 6){
        inputAdministradorNomeCompleto.classList.add('erro');
        inputAdministradorNomeCompleto.focus();
        textoDeAvisoAdministradorNomeCompleto.innerText = "Nome curto demais";
        textoDeAvisoAdministradorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorNomeCompleto.classList.remove('erro');
        textoDeAvisoAdministradorNomeCompleto.style.display = 'none';
    }

    impedirCaracteresEspeciais(inputAdministradorNomeCompleto, textoDeAvisoAdministradorNomeCompleto);
});

//E-mail
inputAdministradorEmail.addEventListener('input', ()=>{
    //Se o e-mail não for preenchido
    if(inputAdministradorEmail.value === ""){
        inputAdministradorEmail.classList.add('erro');
        inputAdministradorEmail.focus();
        textoDeAvisoAdministradorEmail.innerText = "Introduza o seu e-mail!";
        textoDeAvisoAdministradorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorEmail.classList.remove('erro');
        textoDeAvisoAdministradorEmail.style.display = 'none';
    }

    //Se o e-mail for um número
    if(!isNaN(inputAdministradorEmail.value)){
        inputAdministradorEmail.classList.add('erro');
        inputAdministradorEmail.focus();
        textoDeAvisoAdministradorEmail.innerText = "O seu e-mail é um número? Eu acho que não.";
        textoDeAvisoAdministradorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorEmail.classList.remove('erro');
        textoDeAvisoAdministradorEmail.style.display = 'none';
    }

    //Se o e-mail foi válido
    if(validarEmail(inputAdministradorEmail.value)){
        inputAdministradorEmail.classList.remove('erro');
        textoDeAvisoAdministradorEmail.style.display = 'none';
    }
    else{
        inputAdministradorEmail.classList.add('erro');
        inputAdministradorEmail.focus();
        textoDeAvisoAdministradorEmail.innerText = "O seu e-mail é inválido.";
        textoDeAvisoAdministradorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
});

//Senha (primeiro input)
inputAdministradorSenha.addEventListener('input', ()=>{
    //Se a senha não for preenchida
    if(inputAdministradorSenha.value === ""){
        inputAdministradorSenha.classList.add('erro');
        inputAdministradorSenha.focus();
        textoDeAvisoAdministradorSenha.innerText = "Introduza a sua senha!";
        textoDeAvisoAdministradorSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenha.classList.remove('erro');
        textoDeAvisoAdministradorSenha.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputAdministradorSenha.value)){
        inputAdministradorSenha.classList.add('erro');
        inputAdministradorSenha.focus();
        textoDeAvisoAdministradorSenha.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoAdministradorSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenha.classList.remove('erro');
        textoDeAvisoAdministradorSenha.style.display = 'none';
    }

    validarSenha(inputAdministradorSenha, textoDeAvisoAdministradorSenha);
});

//Senha (segundo input)
inputAdministradorSenhaNovamente.addEventListener('input', ()=>{
    //Se a senha não for reintroduzida
    if(inputAdministradorSenhaNovamente.value === ""){
        inputAdministradorSenhaNovamente.classList.add('erro');
        inputAdministradorSenhaNovamente.focus();
        textoDeAvisoAdministradorSenhaNovamente.innerText = "Reintroduza a senha!";
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenhaNovamente.classList.remove('erro');
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputAdministradorSenhaNovamente.value)){
        inputAdministradorSenhaNovamente.classList.add('erro');
        inputAdministradorSenhaNovamente.focus();
        textoDeAvisoAdministradorSenhaNovamente.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenhaNovamente.classList.remove('erro');
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'none';
    }

    validarSenha(inputAdministradorSenhaNovamente, textoDeAvisoAdministradorSenhaNovamente);

    if(inputAdministradorSenha.value !== inputAdministradorSenhaNovamente.value){
        inputAdministradorSenhaNovamente.classList.add('erro');
        inputAdministradorSenhaNovamente.focus();
        textoDeAvisoAdministradorSenhaNovamente.innerText = "As senhas não coincidem.";
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenhaNovamente.classList.remove('erro');
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'none';
    }
});

//Cadastro de pesquisadores e Instituições
function ValidarCadastroDoPesquisador(){
    //Se o nome não for preenchido
    if(inputPesquisadorNomeCompleto.value === ""){
        inputPesquisadorNomeCompleto.classList.add('erro');
        inputPesquisadorNomeCompleto.focus();
        textoDeAvisoPesquisadorNomeCompleto.innerText = "Introduza o seu nome!";
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorNomeCompleto.classList.remove('erro');
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'none';
    }

    //Se o nome for um número
    if(!isNaN(inputPesquisadorNomeCompleto.value)){
        inputPesquisadorNomeCompleto.classList.add('erro');
        inputPesquisadorNomeCompleto.focus();
        textoDeAvisoPesquisadorNomeCompleto.innerText = "O seu nome é um número? Eu acho que não.";
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorNomeCompleto.classList.remove('erro');
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'none';
    }

    //Se o nome contér um número
    const regex = /[0-9]/;
    if(regex.test(inputPesquisadorNomeCompleto.value)){
        inputPesquisadorNomeCompleto.classList.add('erro');
        inputPesquisadorNomeCompleto.focus();
        textoDeAvisoPesquisadorNomeCompleto.innerText = "O seu nome não pode contér um número.";
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorNomeCompleto.classList.remove('erro');
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'none';
    }

    //Se o nome não for composto por no mínimo 6 caracteres
    if(inputPesquisadorNomeCompleto.value.length < 6){
        inputPesquisadorNomeCompleto.classList.add('erro');
        inputPesquisadorNomeCompleto.focus();
        textoDeAvisoPesquisadorNomeCompleto.innerText = "Introduza um nome com no mínimo 6 caracteres!";
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorNomeCompleto.classList.remove('erro');
        textoDeAvisoPesquisadorNomeCompleto.style.display = 'none';
    }

    //Se o e-mail não for preenchido
    if(inputPesquisadorEmail.value === ""){
        inputPesquisadorEmail.classList.add('erro');
        inputPesquisadorEmail.focus();
        textoDeAvisoPesquisadorEmail.innerText = "Introduza o seu e-mail!";
        textoDeAvisoPesquisadorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorEmail.classList.remove('erro');
        textoDeAvisoPesquisadorEmail.style.display = 'none';
    }

    //Se o e-mail for um número
    if(!isNaN(inputPesquisadorEmail.value)){
        inputPesquisadorEmail.classList.add('erro');
        inputPesquisadorEmail.focus();
        textoDeAvisoPesquisadorEmail.innerText = "O seu e-mail é um número? Eu acho que não.";
        textoDeAvisoPesquisadorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorEmail.classList.remove('erro');
        textoDeAvisoPesquisadorEmail.style.display = 'none';
    }
    
    //Se o e-mail foi válido
    if(validarEmail(inputPesquisadorEmail.value)){
        inputPesquisadorEmail.classList.remove('erro');
        textoDeAvisoPesquisadorEmail.style.display = 'none';
    }
    else{
        inputPesquisadorEmail.classList.add('erro');
        inputPesquisadorEmail.focus();
        textoDeAvisoPesquisadorEmail.innerText = "O seu e-mail é inválido.";
        textoDeAvisoPesquisadorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }

    //Se a senha não for preenchida
    if(inputPesquisadorSenha.value === ""){
        inputPesquisadorSenha.classList.add('erro');
        inputPesquisadorSenha.focus();
        textoDeAvisoPesquisadorSenha.innerText = "Introduza a sua senha!";
        textoDeAvisoPesquisadorSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenha.classList.remove('erro');
        textoDeAvisoPesquisadorSenha.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputPesquisadorSenha.value)){
        inputPesquisadorSenha.classList.add('erro');
        inputPesquisadorSenha.focus();
        textoDeAvisoPesquisadorSenha.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoPesquisadorSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenha.classList.remove('erro');
        textoDeAvisoPesquisadorSenha.style.display = 'none';
    }

    //Se a senha não for reintroduzida
    if(inputPesquisadorSenhaNovamente.value === ""){
        inputPesquisadorSenhaNovamente.classList.add('erro');
        inputPesquisadorSenhaNovamente.focus();
        textoDeAvisoPesquisadorSenhaNovamente.innerText = "Reintroduza a senha!";
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenhaNovamente.classList.remove('erro');
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputPesquisadorSenhaNovamente.value)){
        inputPesquisadorSenhaNovamente.classList.add('erro');
        inputPesquisadorSenhaNovamente.focus();
        textoDeAvisoPesquisadorSenhaNovamente.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenhaNovamente.classList.remove('erro');
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'none';
    }

    validarSenha(inputPesquisadorSenhaNovamente, textoDeAvisoPesquisadorSenhaNovamente);

    if(inputPesquisadorSenha.value !== inputPesquisadorSenhaNovamente.value){
        inputPesquisadorSenhaNovamente.classList.add('erro');
        inputPesquisadorSenhaNovamente.focus();
        textoDeAvisoPesquisadorSenhaNovamente.innerText = "As senhas não coincidem.";
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputPesquisadorSenhaNovamente.classList.remove('erro');
        textoDeAvisoPesquisadorSenhaNovamente.style.display = 'none';
    }

    //Se o nome da instituição não for preenchido
    if(inputInstituicaoNome.value === ""){
        inputInstituicaoNome.classList.add('erro');
        inputInstituicaoNome.focus();
        textoDeAvisoInstituicaoNome.innerText = "Introduza o nome da instituição!";
        textoDeAvisoInstituicaoNome.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoNome.classList.remove('erro');
        textoDeAvisoInstituicaoNome.style.display = 'none';
    }

    //Se o nome da instituição for um número
    if(!isNaN(inputInstituicaoNome.value)){
        inputInstituicaoNome.classList.add('erro');
        inputInstituicaoNome.focus();
        textoDeAvisoInstituicaoNome.innerText = "O nome da instituição não pode ser um número.";
        textoDeAvisoInstituicaoNome.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoNome.classList.remove('erro');
        textoDeAvisoInstituicaoNome.style.display = 'none';
    }

    impedirCaracteresEspeciais(inputInstituicaoNome, textoDeAvisoInstituicaoNome);

    //Se a sigla não for preenchida
    if(inputInstituicaoSigla.value === ""){
        inputInstituicaoSigla.classList.add('erro');
        inputInstituicaoSigla.focus();
        textoDeAvisoInstituicaoSigla.innerText = "Introduza a sigla da instituição!";
        textoDeAvisoInstituicaoSigla.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoSigla.classList.remove('erro');
        textoDeAvisoInstituicaoSigla.style.display = 'none';
    }

    //Se a sigla da instituição for um número
    if(!isNaN(inputInstituicaoSigla.value)){
        inputInstituicaoSigla.classList.add('erro');
        inputInstituicaoSigla.focus();
        textoDeAvisoInstituicaoSigla.innerText = "A sigla da instituição não pode ser um número.";
        textoDeAvisoInstituicaoSigla.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoSigla.classList.remove('erro');
        textoDeAvisoInstituicaoSigla.style.display = 'none';
    }

    impedirCaracteresEspeciais(inputInstituicaoSigla, textoDeAvisoInstituicaoSigla);

    //Se o país não for preenchido
    if(inputInstituicaoPais.value === ""){
        inputInstituicaoPais.classList.add('erro');
        inputInstituicaoPais.focus();
        textoDeAvisoInstituicaoPais.innerText = "Introduza o nome do país!";
        textoDeAvisoInstituicaoPais.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoPais.classList.remove('erro');
        textoDeAvisoInstituicaoPais.style.display = 'none';
    }

    //Se o nome do país for um número
    if(!isNaN(inputInstituicaoPais.value)){
        inputInstituicaoPais.classList.add('erro');
        inputInstituicaoPais.focus();
        textoDeAvisoInstituicaoPais.innerText = "O nome do país não pode ser um número.";
        textoDeAvisoInstituicaoPais.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoPais.classList.remove('erro');
        textoDeAvisoInstituicaoPais.style.display = 'none';
    }

    //Se o nome do país contér um número
    const regExp = /[0-9]/;
    if(regExp.test(inputInstituicaoPais.value)){
        inputInstituicaoPais.classList.add('erro');
        inputInstituicaoPais.focus();
        textoDeAvisoInstituicaoPais.innerText = "O nome do país não pode contér um número.";
        textoDeAvisoInstituicaoPais.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputInstituicaoPais.classList.remove('erro');
        textoDeAvisoInstituicaoPais.style.display = 'none';
    }
    
    impedirCaracteresEspeciais(inputInstituicaoPais, textoDeAvisoInstituicaoPais);
}

//Cadastro de administradores
function ValidarCadastroDoAdministrador(){
    //Validando os dados do administrador
    //Nome
    //Se o nome não for preenchido
    if(inputAdministradorNomeCompleto.value === ""){
        inputAdministradorNomeCompleto.classList.add('erro');
        inputAdministradorNomeCompleto.focus();
        textoDeAvisoAdministradorNomeCompleto.innerText = "Introduza o seu nome!";
        textoDeAvisoAdministradorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorNomeCompleto.classList.remove('erro');
        textoDeAvisoAdministradorNomeCompleto.style.display = 'none';
    }

    //Se o nome for um número
    if(!isNaN(inputAdministradorNomeCompleto.value)){
        inputAdministradorNomeCompleto.classList.add('erro');
        inputAdministradorNomeCompleto.focus();
        textoDeAvisoAdministradorNomeCompleto.innerText = "O seu nome é um número? Eu acho que não.";
        textoDeAvisoAdministradorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorNomeCompleto.classList.remove('erro');
        textoDeAvisoAdministradorNomeCompleto.style.display = 'none';
    }

    //Se o nome contér um número
    const regex = /[0-9]/;
    if(regex.test(inputAdministradorNomeCompleto.value)){
        inputAdministradorNomeCompleto.classList.add('erro');
        inputAdministradorNomeCompleto.focus();
        textoDeAvisoAdministradorNomeCompleto.innerText = "O seu nome não pode contér um número.";
        textoDeAvisoAdministradorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorNomeCompleto.classList.remove('erro');
        textoDeAvisoAdministradorNomeCompleto.style.display = 'none';
    }

    //Se o nome não for composto por no mínimo 6 caracteres
    if(inputAdministradorNomeCompleto.value.length < 6){
        inputAdministradorNomeCompleto.classList.add('erro');
        inputAdministradorNomeCompleto.focus();
        textoDeAvisoAdministradorNomeCompleto.innerText = "Nome curto demais";
        textoDeAvisoAdministradorNomeCompleto.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorNomeCompleto.classList.remove('erro');
        textoDeAvisoAdministradorNomeCompleto.style.display = 'none';
    }

    impedirCaracteresEspeciais(inputAdministradorNomeCompleto, textoDeAvisoAdministradorNomeCompleto);

    //E-mail
    //Se o e-mail não for preenchido
    if(inputAdministradorEmail.value === ""){
        inputAdministradorEmail.classList.add('erro');
        inputAdministradorEmail.focus();
        textoDeAvisoAdministradorEmail.innerText = "Introduza o seu e-mail!";
        textoDeAvisoAdministradorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorEmail.classList.remove('erro');
        textoDeAvisoAdministradorEmail.style.display = 'none';
    }

    //Se o e-mail for um número
    if(!isNaN(inputAdministradorEmail.value)){
        inputAdministradorEmail.classList.add('erro');
        inputAdministradorEmail.focus();
        textoDeAvisoAdministradorEmail.innerText = "O seu e-mail é um número? Eu acho que não.";
        textoDeAvisoAdministradorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorEmail.classList.remove('erro');
        textoDeAvisoAdministradorEmail.style.display = 'none';
    }

    //Se o e-mail foi válido
    if(validarEmail(inputAdministradorEmail.value)){
        inputAdministradorEmail.classList.remove('erro');
        textoDeAvisoAdministradorEmail.style.display = 'none';
    }
    else{
        inputAdministradorEmail.classList.add('erro');
        inputAdministradorEmail.focus();
        textoDeAvisoAdministradorEmail.innerText = "O seu e-mail é inválido.";
        textoDeAvisoAdministradorEmail.style.display = 'block';
        event.preventDefault();
        return;
    }

    //Senha (primeiro input)
    //Se a senha não for preenchida
    if(inputAdministradorSenha.value === ""){
        inputAdministradorSenha.classList.add('erro');
        inputAdministradorSenha.focus();
        textoDeAvisoAdministradorSenha.innerText = "Introduza a sua senha!";
        textoDeAvisoAdministradorSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenha.classList.remove('erro');
        textoDeAvisoAdministradorSenha.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputAdministradorSenha.value)){
        inputAdministradorSenha.classList.add('erro');
        inputAdministradorSenha.focus();
        textoDeAvisoAdministradorSenha.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoAdministradorSenha.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenha.classList.remove('erro');
        textoDeAvisoAdministradorSenha.style.display = 'none';
    }

    validarSenha(inputAdministradorSenha, textoDeAvisoAdministradorSenha);

    //Senha (segundo input)
    //Se a senha não for reintroduzida
    if(inputAdministradorSenhaNovamente.value === ""){
        inputAdministradorSenhaNovamente.classList.add('erro');
        inputAdministradorSenhaNovamente.focus();
        textoDeAvisoAdministradorSenhaNovamente.innerText = "Reintroduza a senha!";
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenhaNovamente.classList.remove('erro');
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'none';
    }

    //Se a senha for um número
    if(!isNaN(inputAdministradorSenhaNovamente.value)){
        inputAdministradorSenhaNovamente.classList.add('erro');
        inputAdministradorSenhaNovamente.focus();
        textoDeAvisoAdministradorSenhaNovamente.innerText = "A sua senha é um número? Não deve.";
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenhaNovamente.classList.remove('erro');
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'none';
    }

    validarSenha(inputAdministradorSenhaNovamente, textoDeAvisoAdministradorSenhaNovamente);

    if(inputAdministradorSenha.value !== inputAdministradorSenhaNovamente.value){
        inputAdministradorSenhaNovamente.classList.add('erro');
        inputAdministradorSenhaNovamente.focus();
        textoDeAvisoAdministradorSenhaNovamente.innerText = "As senhas não coincidem.";
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'block';
        event.preventDefault();
        return;
    }
    else{
        inputAdministradorSenhaNovamente.classList.remove('erro');
        textoDeAvisoAdministradorSenhaNovamente.style.display = 'none';
    }
}
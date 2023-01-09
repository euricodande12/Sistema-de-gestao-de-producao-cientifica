//Função para retroceder
function Retroceder(){
    return window.history.back();
}

function IrPara(){
    window.open('./pagina-inicial-administrador.html', '_self');
}

function Selecionar(){
    var select = window.document.querySelector("select");
    var opcao = select.options[select.selectedIndex].value;
    return opcao;
}
//Função para entrar (temporária)


function Entrar(){
    if (Selecionar() == "Pesquisador")
    window.open('./pagina-inicial-pesquisador.html');
    else if(Selecionar() == "Administrador")
    window.open('./pagina-inicial-administrador.html');
    else
    window.alert("Erro, erro, erro!")
}
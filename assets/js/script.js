/*
Case Sensitive

por tag: getElementTagName()
por Id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*///.assunto -> class

//11 ==="11" ->vai dar falso por que os tres iguais comparam valor(conteúdo) e formato

//posso tanto chamar por window. como direto por document. das duas formas dará certo

let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
//para selecionar por seletor(Selector) tem que usar o # no caso de id, ou . no caso de uma classe
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color ='red'
    }else{
        txtNome.innerHTML='Nome Válido'
        txtNome.style.color ='green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    //indexOf('@') == -1 significa se dentro do valor do email não tiver @
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto digitado é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar')
    }
}

function mapaZoom(){
   mapa.style.width ='800px'
   mapa.style.height ='600px'
}

function mapaNormal(){
    mapa.style.width ='400px'
    mapa.style.height ='250px'
}

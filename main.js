const form=document.getElementById('form-agenda');
const ligar=document.getElementsByClassName('botao-ligar');
const excluir=document.getElementsByClassName('botao-excluir');
const imgTelefone = '<button class="botao-ligar" type="button"><img src="./Imagens/icon-tel.png"></button>'
const imgExcluir = '<button type="button" class="botao-excluir"><img src="./imagens/icon-lix.png"></button>'

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeAgenda = document.getElementById('nome-agenda');
    const numeroAgenda = document.getElementById('numero-agenda');

    let linha = '<tr>';
    linha += `<td>${nomeAgenda.value} </td>`;
    linha += `<td>${numeroAgenda.value} </td>`;
    linha += `<td> ${imgTelefone} </td>`;
    linha += `<td> ${imgExcluir} </td>`;
    linha += '</tr>';

    linhas += linha;

    const listaAgenda = document.querySelector('tbody');
    listaAgenda.innerHTML = linhas;
})

ligar.addEventListener('button', function (c){
    alert ('ligação indisponivel')
})
excluir.addEventListener('button', function(x){
    alert ('excluir indisponivel');
})
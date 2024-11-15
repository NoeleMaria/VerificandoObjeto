//Trecho do código de resposta da Alura
// function verificarObjetoNoArray(arr, objeto) {
//     return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
    
    //.some() verifica se o item (que será "alunos") é exatamente igual ao objeto(que será o "alunoProcurado")
    // JSON.stringinfy() converte valores em javascript para uma String JSON
    //testar posteriormente usar "if" para esse teste
// }

function verificarObjetoNoArray(arrayAlunos, objetoAlunoProcurado) {
    return arrayAlunos.some(item => JSON.stringify(item) === JSON.stringify(objetoAlunoProcurado));
}


let alunos = [
    {id: 1, nome: 'João', idade: 20},
    {id: 2, nome: 'Maria', idade: 22},
    {id: 3, nome: 'Pedro', idade: 21},
    {id: 4, nome: 'Ana', idade: 19}
];

let alunoProcurado = {id: 2, nome: 'Maria', idade: 22};

let alunosJSON = JSON.stringify(alunos);

//ver como resumir o código para fazer uma função servir para os dois botões
function arrayBotaoJS() {
    
    let alunoProcuradoOrganizado = `id: ${alunoProcurado.id}; nome: ${alunoProcurado.nome}; idade: ${alunoProcurado.idade}`;

    let resultado = document.getElementById('objetoProcurado-js');
    resultado.innerHTML = `O objeto procurado é ${alunoProcuradoOrganizado}.`;

    let listaAlunos = document.getElementById('lista-js');
    listaAlunos.innerHTML = `Alunos: <br> ${alunosJSON}`; //verificar como tirar aspas e colocar parágrafo

    let validacao = document.getElementById('validacao-js');
    
    verificacaoArray(alunos, alunoProcurado, validacao)
}

function arrayBotaoUsuario() {
    let idUsuario = document.getElementById('id-usuario').value;
    let nomeUsuario = document.getElementById('nome-usuario').value;
    let idadeUsuario = document.getElementById('idade-usuario').value;

    let alunoArray = {id: Number(idUsuario), nome: `${nomeUsuario}`, idade: Number(idadeUsuario)};

    let alunoArrayJSON = JSON.stringify(alunoArray)

    //console.log("aluno array: ", alunoArray);

    let resultado = document.getElementById('objetoProcurado-usuario');
    resultado.innerHTML = `O objeto procurado é ${alunoArrayJSON}.`;

    let listaAlunos = document.getElementById('lista-usuario');
    listaAlunos.innerHTML = `Alunos: <br> ${alunosJSON}`;

    let validacao = document.getElementById('validacao-usuario');

    verificacaoArray(alunos, alunoArray, validacao)    

}

//ver como colocar validação para cada um dos botões 
function verificacaoArray(aluns, alunProcurado, validacao) {
    let objetoEstaPresente = verificarObjetoNoArray(aluns, alunProcurado);

    if (objetoEstaPresente) {
        validacao.innerHTML = 'O aluno está presente no array.';
    } else {
        validacao.innerHTML = 'O aluno não está presente no array.'
    }
}
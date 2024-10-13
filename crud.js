
$('#frmCadastro').submit(function(event){
    event.preventDefault();

    //Entrada
    console.log("Formulario de cadaastro ativdado.");

    var nome = $("#txtNome").val();
    console.log("Nome: " + nome);
    var email = $("#txtEmail").val();
    console.log("E-mail: " + email);
    
    //limpa o formulário
    //$('#frmCadastro')[0].reset();


    ///Processamento
    ///Verificar o comprimento do array(vetor) e criar o objeto aluno
    //var | let | const
    //Criar o objeto aluno
    let aluno = { "id": 0, "nome": nome, "email": email};

    //Verficar o ID do aluno
    //1. Recuperar a informação do localstorage
    //11.1 Verificar se o localStorage em informação
    if(localStorage.getItem('alunos') === null || 
    localStorage.getItem('alunos') === '' ||
     localStorage.getItem('alunos') === undefined) {
        var data = [];
        localStorage.setItem('alunos', JSON.stringify(data));
    }

    //Para recuperar informação contida no localstorage, na chave (key): alunos;
    let alunos = JSON.parse(localStorage.alunos);

    //2. Atribuir no novo ID
    let id = alunos.length+1;
    aluno.id = id;

    ///Saída
    //Persistir a nova informação
    alunos.push(aluno);

    let key = 'alunos';
    let value = JSON.stringify(alunos);

    localStorage.setItem(key,value);

});

$('#btnListar').click(function(){
    alert('cliquei no botão listar');
   //Para recuperar informação contida no localstorage, na chave (key): alunos;
   let alunos = JSON.parse(localStorage.alunos);
   console.log(alunos);
});

$('#btnNovo').click(function(){
    alert('teste');

});    

function excluir(id){
    alert('O id selecionado é: '+ id);
}

function editar(id){
    alert('O id selecionado para edição é: '+ id);
}

$('#btnEditar').click(function(){
    alert('Editando registro');
    
    //https://www.w3schools.com/jquery/jquery_dom_get.asp
    alert("O valor encontrado é" + $("#item_1").attr("data-xpto"));
});

$('#btnExcluir').click(function(){
    alert('Excluindo registro selecionado.');
});

//Exemplo para imprimir o conteúdo de uma lista
/*for(id=0;id<17;id++){
    console.log(`<tr id="item_${id}" data-xpto="${id}">
        <td>${id}</td>
        <td>Faculdade IPOG</td>
        <td>front${id}@ipog.com.br</td>
        <td>Rua X</td>
        <td>
            <img onclick="excluir(${id})" src="./imagens/edit_icon.png" height="20">
            <img onclick="editar(${id})" src="./imagens/remove_icon.png" height="20">
        </td>
    </tr>`);
}*/
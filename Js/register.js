//Função para fazer registrar o usuario

//Toda essa função executará ao apertar "Registrar-se"
function registerUser(email, password){
    //Pegar os usuários armazenados no localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    //''parse'' está convertendo o JSON para ARRAY

    /* JSON trabalha com chave e valor, aqui o email e password são chaves que terão seu
    valor atribuído depois..*/

    //Verificar se o usuário já existe
    const userExists = users.some(user => user.email === email);

    //''some'' verifica se algum usuário no array tem o mesmo email que foi digitado

    if(userExists){
        alert('Usuário já registrado');
    }else{
        //Adicionar o novo usuário
        users.push({ email, password });

        //Salvar de volta no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Cadastro realizado com sucesso');
    }
}



//Pegar os dados do formulário e chamar a função de registro

document.getElementById('registerButton').addEventListener('click', (event) =>{

    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    //Verificar se as senhas são iguais

    if(password !== confirmPassword){
        alert('Senhas não são iguais');
    }else{
        //Chamar a função de registro caso as senhas sejam iguais
        registerUser(email, password);
    }

} );


/*
'document' acessa o documento HTML inteiro

'.addEventListener' está aguardando um click do usuário

'event.preventDefault()'  previne o formulario de submeter e recarregar a página


*/
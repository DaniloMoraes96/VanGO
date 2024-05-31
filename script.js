let divAluno = document.getElementById("cadastroAluno")
let divMotorista = document.getElementById("cadastroMotorista")
let btnCadastro = document.getElementById("btnCadastro")
let btnLogin = document.getElementById("btnLogin")

// atualizar tela de cadastro de acordo com o select
function atualizarSelect() {

    let selectUsuario = document.getElementById("categoriaUsuario")
    let optionValue = selectUsuario.options[selectUsuario.selectedIndex];

    let value = optionValue.value;

    if (value == 1) {
        divMotorista.style.display = "none"
        divAluno.style.display = "contents";
        btnCadastro.href = "telaAluno.html"

    } if (value == 2) {
        divMotorista.style.display = "contents"
        divAluno.style.display = "none";
        btnCadastro.href = "telaMotorista.html"

    } else if (value == 0) {
        divMotorista.style.display = "none"
        divAluno.style.display = "none"; 
    }
}

// função que preenche o endereço atraves do CEP
(function(){ 
 
    const cep = document.querySelector("#cep");
 
    cep.addEventListener('blur', e=> {
         const value = cep.value.replace(/[^0-9]+/, '');
         const url = `https://viacep.com.br/ws/${value}/json/`;
 
       fetch(url)
      .then( response => response.json())
      .then( json => {
                 
          if( json.logradouro ) {
            document.querySelector('input[id=endereco]').value = json.logradouro;
            document.querySelector('input[id=cidade]').value = json.localidade;
            document.querySelector('input[id=estado]').value = json.uf;

            document.querySelector('input[id=endereco]').disabled = true;
            document.querySelector('input[id=cidade]').disabled = true;
            document.querySelector('input[id=estado]').disabled = true;
          }
         
       
      });
   });
 
 })();

//  async function cadastrarUsuario() {
//     let url1 = 'https://65f0d7afda8c6584131c7fb2.mockapi.io/api/v/Usuario';
//     let url2 = 'https://65f0d7afda8c6584131c7fb2.mockapi.io/api/v/aluno';
//     let url3 = 'https://65f0d7d1da8c6584131c805f.mockapi.io/Motorista';
//     let url4 = 'https://65f0d7d1da8c6584131c805f.mockapi.io/Cronograma';
//     let url5 = 'https://65f0dc11da8c6584131c87ed.mockapi.io/veiculo';
//     let url6 = 'https://65f0dc11da8c6584131c87ed.mockapi.io/viagem';

//     let resposta = await Promise.all([
//         fetch(url1),
//         fetch(url2),
//         fetch(url3),
//         fetch(url4),
//         fetch(url5),
//         fetch(url6)
//     ])

//     let usuario = await resposta[0].json()
//     let aluno = await resposta[1].json()
//     let motorista = await resposta[2].json()
//     let cronograma = await resposta[3].json()
//     let veiculo = await resposta[4].json()
//     let viagem = await resposta[5].json()
//  }
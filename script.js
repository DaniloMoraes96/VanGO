let divAluno = document.getElementById("cadastroAluno")
let divMotorista = document.getElementById("cadastroMotorista")

// atualizar tela de cadastro de acordo com o select
function atualizarSelect() {

    let selectUsuario = document.getElementById("categoriaUsuario")
    let optionValue = selectUsuario.options[selectUsuario.selectedIndex];

    let value = optionValue.value;

    if (value == 1) {
        divMotorista.style.display = "none"
        divAluno.style.display = "contents";
    } if (value == 2) {
        divMotorista.style.display = "contents"
        divAluno.style.display = "none";
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
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

atualizarSelect()
const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');

form.addEventListener('submit', () =>{


    checkInputs();
})

function checkInputs() {
    const userNameValue = firstName.value.trim();
    const lasNameValue = lastName.value.trim();

    if(userNameValue === ''){
        //mostrar erro
        //adicionar a classe erro
        errorValidation(firstName, 'Preencha esse campo')
    } else {
        //adicionar a classe de sucesso
        successValidation(firstName)
    }

    if(lasNameValue === ''){

        errorValidation(lastName, 'Preencha esse campo')

    } else {

        successValidation(lastName)
    }
}

function errorValidation(input, message){
    const formControl1 = input.parentElement;
    const formControl2 = input.parentElement;
    const small = formControl1.querySelector('small')

    small.innerText = message

    formControl1.className = 'nome erro'
    formControl2.className = 'sobrenome erro'
}

function successValidation(input){
    const formControl1 = input.parentElement;
    const formControl2 = input.parentElement;

    formControl1.className = 'nome sucesso'
    formControl2.className = 'sobrenome sucesso'

}


function atualizouSelect (){
    let select = document.querySelector('.selecao');
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;

    console.log(value)
    document.querySelector('#tipodevisita').innerHTML = value;
}

atualizouSelect()



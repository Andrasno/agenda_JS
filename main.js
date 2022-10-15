
let formulario = document.getElementById('form')
let linhas = ``;
let arrayContact = [];
let arrayPhone = [];


formulario.addEventListener('submit', function(event){
    event.preventDefault()

    addLine()
    updateLine()

    

})


function addLine(){
    let inputContact = document.getElementById('nomeContato');
    let inputPhone = document.getElementById('telefone');
    


    

    if(arrayContact.includes(inputContact.value)){
        let confirmation = confirm('Contato existente. Deseja adicionar mesmo assim?');
    
        if(confirmation == true){

            arrayContact.push(inputContact.value);
            arrayPhone.push(inputPhone.value);

            let linha = '<tr>';
            linha += `<td> ${inputContact.value}`
            linha += `<td> ${inputPhone.value}`
            linha += '</tr>'

            linhas += linha;
        }else{
            arrayContact.pop
            arrayPhone.pop
        }
    }else{
        arrayContact.push(inputContact.value);
        arrayPhone.push(inputPhone.value);
        
        let linha = '<tr>';
    linha += `<td> ${inputContact.value}`
    linha += `<td> ${inputPhone.value}`
    linha += '</tr>'

    linhas += linha;

    }

    

    inputContact.value = ''
    inputPhone.value = ''
}

function updateLine(){
    let tableContact = document.getElementById('tbody')
    tableContact.innerHTML = linhas;

}
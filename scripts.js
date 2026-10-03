
function generateNumber(){
    const min = Math.ceil(document.querySelector(".inputmin").value)
    const max = Math.ceil(document.querySelector(".inputmax").value)

    if( min >= max){
        alert("O valor mínimo tem que ser maior que o valor máximo!")
    }
    else {

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert("o resultado é: " + result)

    }



}

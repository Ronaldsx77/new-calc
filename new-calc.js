function soma(a, b){
    return a + b;
} 

function sub(a, b){
    return a - b;
} 

function mult(a, b){
    return a * b;
}

// A2 - Função de divisão e adicionar no module.exports
function div(a, b){
    return a / b;
} 

module.exports = {
    soma,
    sub,
    mult,
    div
}
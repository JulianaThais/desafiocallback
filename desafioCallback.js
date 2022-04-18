/* Cria uma função chamada acaoCarro(), que receberá uma callback como
parâmetro. Após isso crie duas funções de nome andar() - que deve exibir uma mensagem 
dizendo que o carro está andando e outra de nome parar() - que deve exibir uma mensagem dizendo que o 
carro está parado.

Execute ambas ações utilizando a função acaoCarro(), passando suas ações como callbacks. */


function acaoCarro(callback){
    callback ();
}

let andar = ()=>
console.log(`O carro está andando!`);
let parar=()=>{
    console.log(`O carro está parado!`);
}
   

acaoCarro(andar);
acaoCarro(parar);
   


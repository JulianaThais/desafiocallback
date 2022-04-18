/*nao faz sentido andar e parar ao mesmo tempo, mas nao achei outra forma de declarar */




function acaoCarro(callback){
    callback ();
}

let andar = ()=>
console.log(`O carro está andando!`);

let parar = () => console.log("O carro está parado!");
setTimeout (parar,5000);
acaoCarro(andar);  

    
    
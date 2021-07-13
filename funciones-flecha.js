const sumar = (x, y) => x + y;
const restar = (x, y) => x - y;
const multiplicar = (x, y) => x * y;
const dividir = (x, y) => {
    if(y === 0) throw Error ('No se puede dividir por 0')
    else return x / y;
}


console.log(sumar(1, 1));
console.log(restar(2, 1));
console.log(multiplicar(2, 1));
console.log(dividir(3, 0));
function simpleFunction() {
    console.log('Wywołano simpleFunction');
}

simpleFunction();

function rewriteIt(text) {
    console.log(text);
}

rewriteIt(text = 'Jakiś tekst');

function sumOfTwo(a, b) {
    let sum = a + b;
    console.log(a + ' + ' + b + ' = ' + sum);
}

sumOfTwo(a =2, b =3);

function functionWithReturn() {
    return 'Zwracamy tekst';
}

console.log(functionWithReturn());




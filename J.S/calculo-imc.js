
// obter o elemento
// tratar os dados (converter, exibir os dados de forma correra )

// variavel global
const inputPeso = document.getElementById('Weight');
const inputAltura = document.getElementById('height');
const textResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');



function mostarResultado (mensagem) {
    textoResultado.textContent = mensagem;
}



function classificaIMC(){   
    const imc = peso / (altura*altura);
if (imc < 18.5) {
    console.log('Abaixo do peso');
}else if (imc >= 18.5 && imc <25) {
    console.log ('Peso normal'); 
}else if (imc >= 25 && imc <30) {
    console.log ('Sobrepeso');
}else {
    console.log('Obesidade');
}
};



function calcularIMC(){
console.log(`Este é o valor do IMC calculado: ${imc.toFixed(2)}.`);
classificaIMC();
};





 


let classificacao













function imc() {
    var imc = peso.value / (altura.value * altura.value)
    if (nome.value == '' || altura.value == '' || peso.value == '') {
        alert('Preencha todos os campos')
    }
        else if (imc < 20) {
        result.innerHTML = `${nome.value}, seu IMC é ${imc.toString().substring(0,4)} e você está abaixo do peso.`
    }   else if (imc < 25) {
        result.innerHTML = `${nome.value}, seu IMC é ${imc.toString().substring(0,4)} e você está no peso ideal.`
    }   else if (imc < 30) {
        result.innerHTML = `${nome.value}, seu IMC é ${imc.toString().substring(0,4)} e você está acima do peso.`
    }   else if (imc < 35) {
        result.innerHTML = `${nome.value}, seu IMC é ${imc.toString().substring(0,4)} e você está com obesidade leve.`
    }   else if (imc < 40) {
        result.innerHTML = `${nome.value}, seu IMC é ${imc.toString().substring(0,4)} e você está com obesidade moderada.`
    }   else {
        result.innerHTML = `${nome.value}, seu IMC é ${imc.toString().substring(0,4)} e você está com obesidade mórbida. Chama o Quilos Mortais xD`
    }
}
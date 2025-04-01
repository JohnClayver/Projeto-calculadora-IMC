const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const calcular = document.getElementById('calcular');
const mostrar = document.getElementById('resultado');

function res(){
    let p = peso.value;
    let a = altura.value;
    let somar = p / (a * a);
    

    if(p,a === ''){
        alert('Digite os dados para continuar!')
    }else if(somar <= 18.5){
        mostrar.innerHTML = `<h4>IMC ${somar.toFixed(2)} - Abaixo do normal</h4><p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem.</p>`;

    }else if(somar >= 18.6 && somar <= 24.9){
        mostrar.innerHTML = `<h4>IMC ${somar.toFixed(2)} - Normal</h4><p>Que bom que você está com o peso normal! </p>`

    }else if(somar >= 25.0 && somar <= 29.9){
        mostrar.innerHTML = `<h4>IMC ${somar.toFixed(2)} - Sobrepeso</h4><p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão.</p>`;

    }else if(somar >= 30.0 && somar <= 34.9){
        mostrar.innerHTML = `<h4>IMC ${somar.toFixed(2)} - Obesidade grau I</h4><p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje!</p>`;
        
    }else if(somar >= 35 && somar <= 39.9){
        mostrar.innerHTML = `<h4>IMC ${somar.toFixed(2)} - Obesidade grau II</h4><p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida.</p>`;

    }else{
        mostrar.innerHTML = `<h4>IMC ${somar.toFixed(2)} - Obesidade grau III</h4><p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas.</p>`;
    };
};

calcular.addEventListener('click', res);
// Função que irá executar quando clicar no botão btn-gerar.
function gerarTabuada(){
    // Pegar o valor do campo input no HTML.
    const numeroInput = document.getElementById('numero-Input')

    // Converte o texto que veio do HTML para o número inteiro.
    let numero = parseInt(numeroInput.value)

    // Pega o elemento onde a tabuada será exibida no HTML e associa a uma constante
    const resultadoDiv = document.getElementById('resultado-aqui')

    // Limpa o conteúdo anterior no campo onde o resultado será exibido.
    resultadoDiv.innerHTML = ''
    
    // Adixiona o título da tabuada com tag h2.
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`
    
    // Laço de repetição para gerar tabuada de 1 até 10.
    for (let i = 1; i <= 20; i++){
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}

// Pega o elemento onde a tabuada será exibida no HTML e associa a uma constante.
const btngerar = document.getElementById('btn-gerar')
btngerar.addEventListener('click', gerarTabuada)
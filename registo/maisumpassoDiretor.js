// Valores para testes
let nomeClube = "clube";

// Variáveis
let inputClube = document.getElementById("input-nomeClube");
let inputs = Array.from(document.querySelectorAll("input"));
let mensagemCamposVazios = document.getElementById("erro-vazios");
let mensagemClubeRepetido = document.getElementById("erro-clube");

// Botão de criar conta
document.querySelector("button").addEventListener("click", function()
{
    // Reset
    mensagemCamposVazios.classList.add("escondido");
    mensagemClubeRepetido.classList.add("escondido");
    inputs.map(function(item){ item.style.borderColor = "black"; });

    // Verificar se existem campos vazios
    let inputsVazios = inputs.filter(input => input.value === "");

    // Existem campos vazios
    if (inputsVazios.length > 0) 
    {
        mensagemCamposVazios.classList.remove("escondido");
        // Marcar campos vazios
        inputsVazios.map(function(item){ item.style.borderColor = "red"; });
    }
    // Todos os campos estão preenchidos
    else 
    {
        // Verificar se o username escolhido já está em uso
        if (inputClube.value === nomeClube)
        {
            inputClube.style.borderColor = "red";
            mensagemClubeRepetido.classList.remove("escondido");
        }
        // Todos os campos válidos: direcionar para o login
        else
        {
            alert("Conta criada com sucesso!");
            window.location.href = "../login/login.html";
        }
    }
});
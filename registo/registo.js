// Valores para testes
let username = "default";
let email = "default@hotmail.com";

// Variáveis
let inputUsername = document.querySelector(".inputUsername");
let inputEmail = document.querySelector(".inputEmail");
let inputPass = document.querySelector(".inputPass");
let inputTipoUser = document.querySelector(".input-tipoUser");
let mensagemUsernameRepetido = document.getElementById("erro-username");
let mensagemEmailRepetido = document.getElementById("erro-email");
let mensagemPassCurta = document.getElementById("erro-pass");
let inputs = Array.from(document.querySelectorAll("input"));
let mensagemCamposVazios = document.getElementById("erro-vazios");

// Botão de criar conta
document.querySelector("button").addEventListener("click", function()
{
    // Reset
    mensagemCamposVazios.classList.add("escondido");
    mensagemUsernameRepetido.classList.add("escondido");
    mensagemEmailRepetido.classList.add("escondido");
    mensagemPassCurta.classList.add("escondido");
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
        if (inputUsername.value === username)
        {
            inputUsername.style.borderColor = "red";
            mensagemUsernameRepetido.classList.remove("escondido");
        }
        // Verificar se a palavra passe tem no mínimo 8 caracteres
        else if (inputPass.value.length < 8)
        {
            inputPass.style.borderColor = "red";
            mensagemPassCurta.classList.remove("escondido");
        }
        // Verificar se o email escolhido já está em uso
        else if (inputEmail.value === email)
        {
            inputEmail.style.borderColor = "red";
            mensagemEmailRepetido.classList.remove("escondido");
        }
        // Todos os campos válidos: direcionar para a próxima página ou terminar criação de conta
        else
        {
            if (inputTipoUser.value == "Diretor") window.location.href = "maisumpassoDiretor.html";
            else if (inputTipoUser.value == "Funcionário") window.location.href = "maisumpassoFuncionario.html";
            else if (inputTipoUser.value == "Treinador") window.location.href = "maisumpassoTreinador.html";
            else 
            {
                alert("Conta criada com sucesso!");
                window.location.href = "../login/login.html";
            }
        }
    }
});
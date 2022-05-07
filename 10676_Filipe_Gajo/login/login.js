// Valores para testes
let username = "default";
let pass = "123456";

// Variáveis
let inputUsername = document.querySelector(".inputUsername");
let inputPass = document.querySelector(".inputPass");
let mensagemUsernameErrado = document.getElementById("erro-username");
let mensagemPassErrada = document.getElementById("erro-pass");

// Botão de login
document.querySelector("button").addEventListener("click", function()
{
    // Comparar usernames----------
    // username errado
    if (inputUsername.value != username) 
    {
        inputUsername.value = "";
        inputUsername.style.borderColor = "red";
        inputPass.value = "";
        mensagemUsernameErrado.classList.remove("escondido");

        mensagemPassErrada.classList.add("escondido");
    }
    // username correto
    else 
    {
        inputUsername.style.borderColor = "black";
        mensagemUsernameErrado.classList.add("escondido");

        // Comparar passwords----------
        // pass errada
        if (inputPass.value != pass)
        {
            inputPass.value = "";
            mensagemPassErrada.classList.remove("escondido");
        } 
        // pass correta
        else 
        {
            mensagemPassErrada.classList.add("escondido");
            alert("Login efetuado com sucesso!");
        }
    }
});
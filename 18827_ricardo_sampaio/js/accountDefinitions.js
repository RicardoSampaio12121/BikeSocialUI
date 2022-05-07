const submitButton = document.getElementById("btnSubmit")
const revertButton = document.getElementById("btnRevert")

const name = document.getElementById("txtName")
const surname = document.getElementById("txtSurname")
const email = document.getElementById("txtEmail")
const genders = document.getElementById("genders")
const gender = document.getElementById("txtGender")
const password = document.getElementById("txtPassword")
const confirmPassword = document.getElementById("txtConfirmPassword")

submitButton.addEventListener("click", function () {
    checkFields()
})

genders.addEventListener("change", function () {
    if (genders.value.length == 5) {
        gender.disabled = false
    }
    else{
        gender.disabled = true
        gender.placeholder = "Outro..."
    }
})

function checkFields() {
    if (name.value.length == 0) {
        name.focus()
        name.placeholder = "Insira o seu nome..."
    }

    if (surname.value.length == 0) {
        surname.focus()
        surname.placeholder = "Insira o seu sobrenome..."
    }

    if (email.value.length == 0) {
        email.focus()
        email.placeholder = "Insira o seu email..."
    }

    if (genders.value.length == 5) {
        if (gender.value.length == 0) {
            gender.focus()
            gender.placeholder = "Preencha este campo..."
        }
    }

    if(password.value.length == 0){
        password.focus()
        password.placeholder = "Insira a sua password..."
    }
    
    if(confirmPassword.value.length == 0){
        confirmPassword.focus()
        confirmPassword.placeholder = "Confirme a sua password..."
    }
}

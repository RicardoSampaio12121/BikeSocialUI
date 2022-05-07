const rbPVPublic = document.getElementById("rbPVPublic")
const rbPVFriends = document.getElementById("rbPVFriends")
const rbPVPrivate = document.getElementById("rbPVPrivate")

const rvPCAll = document.getElementById("rbPCAll")
const rvPCFriends = document.getElementById("rbPCFriends")
const rvPCPrivate = document.getElementById("rbPCPrivate")

const btnSubmit = document.getElementById("btnSumbit")
const btnDeleteAccount = document.getElementById("btnDeleteAccount")


rbPVPublic.addEventListener("click", function () {
    rbPVFriends.checked = false
    rbPVPublic.checked = true
    rbPVPrivate.checked = false
})

rbPVFriends.addEventListener("click", function () {
    rbPVFriends.checked = true
    rbPVPublic.checked = false
    rbPVPrivate.checked = false
})

rbPVPrivate.addEventListener("click", function () {
    rbPVFriends.checked = false
    rbPVPublic.checked = false
    rbPVPrivate.checked = true
})

rvPCAll.addEventListener("click", function () {
    rvPCAll.checked = true
    rvPCFriends.checked = false
    rvPCPrivate.checked = false
})

rvPCFriends.addEventListener("click", function () {
    rvPCAll.checked = false
    rvPCFriends.checked = true
    rvPCPrivate.checked = false
})

rvPCPrivate.addEventListener("click", function () {
    rvPCAll.checked = false
    rvPCFriends.checked = false
    rvPCPrivate.checked = true
})

btnSubmit.addEventListener("click", function() {
})

btnDeleteAccount.addEventListener("click", function() {
})
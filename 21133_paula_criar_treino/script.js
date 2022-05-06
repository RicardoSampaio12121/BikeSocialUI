'use strict';
//Autor: 21133 Paula Rodrigues
const criar = document.querySelector(".criar"); 

function EscreveFile(data) {

    // (A) Criar objeto Blob
    var myBlob = new Blob([data], {type: "text/plain"});

    // (B) Criar link download
    var url = window.URL.createObjectURL(myBlob);
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "info.txt";
    
    // (C) "Forçar download"
    anchor.click();
    window.URL.revokeObjectURL(url);
    document.removeChild(anchor);

}

var escolher_prova = document.querySelector(".scroll");
var nome = document.querySelector(".nome1");
var localidade = document.querySelector(".localidade1");
var distancia = document.querySelector(".distancia1");
var data = document.querySelector(".data1");
var tempo = document.querySelector(".tempo1");
var inicio = document.querySelector(".tempo2");
var descricao = document.querySelector(".descricao2");
var conviteEquipa = document.querySelector("#one");
var conviteAtleta = document.querySelector("#two");

criar.addEventListener("click",function() {

    var dados = "";
    dados = dados + "Tipo de prova: ";
    dados = dados + escolher_prova.value + "\n";
    dados = dados + "Nome: ";
    dados = dados + nome.value + "\n";
    dados = dados + "Localidade: ";
    dados = dados + localidade.value + "\n";
    dados = dados + "Distância: ";
    dados = dados + distancia.value + "\n";
    dados = dados + "Data: ";
    dados = dados + data.value + "\n";
    dados = dados + "Tempo previsto: ";
    dados = dados + tempo.value + "\n";
    dados = dados + "Início: ";
    dados = dados + inicio.value + "\n";
    dados = dados + "Descrição: ";
    dados = dados + descricao.value + "\n";
    dados = dados + "Convites: \n";
    dados = dados + "\tEquipas: ";
    var testEquipas = conviteEquipa.checked ? "Sim" : "Não";
    dados = dados + testEquipas + "\n";
    dados = dados + "\tAtletas: ";
    var testAtletas = conviteAtleta.checked ? "Sim" : "Não";
    dados = dados + testAtletas + "\n";
    

    if(escolher_prova.value != "" && nome.value != "" && localidade.value != "" &&
        distancia.value != "" && data.value != "" && tempo.value != "" && inicio.value != "")
        {
            alert(dados);
            EscreveFile(dados);
        }
        else{
            alert("Preencha todos os campos necessários com *");
        }
})
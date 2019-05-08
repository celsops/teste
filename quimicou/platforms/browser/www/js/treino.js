var elementos = [
    'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si',
    'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni',
    'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo',
    'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba',
    'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb',
    'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po',
    'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf',
    'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg','Cn',
    'Nh','Fl','Mc','Lv','Ts','Og','Uue','Ubn'
];
var dic = {
    "1s": "2s","2s": "2p","2p": "3s","3s": "3p","3p": "4s","4s": "3d",
    "3d": "4p","4p": "5s","5s": "4d","4d": "5p","5p": "6s","6s": "4f",
    "4f": "5d","5d": "6p","6p": "7s","7s": "5f","5f": "6d","6d": "7p",
    "7p": "fim"
};

var naEscolhido=4;
function sortear(){
    let i = Math.floor(Math.random() * 100);
    let elemeto_quimico = elementos[i-1];
    naEscolhido = i;
    document.getElementById("elemento").innerHTML = "<sup>"+(i)+"</sup>"+"<h3>"+elemeto_quimico+"</h3>";
    limpar();
    //return elemeto_quimico;
}
function limpar(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resposta").innerHTML = "";
    document.getElementById("respostaUserDiv").innerHTML = "";
    document.getElementById("respostaUser").value = "";
    document.getElementById("info").innerHTML = "";

}
function escolher(){
    let n = prompt("Digite o nº atômico do elemento:",1);
    if (n==undefined){n=1}
    let elemeto_quimico = elementos[n-1];
    naEscolhido = n;
    document.getElementById("elemento").innerHTML = "<sup>"+(n)+"</sup>"+"<h3>"+elemeto_quimico+"</h3>";
    limpar();
    //return elementos[n];
}
function verificar(){
    //document.getElementById("menu").style.position = "static";
    let respostaUser = document.getElementById("respostaUser").value.trim();
    let respostaCorreta = resposta(naEscolhido).trim();
    let listaDados = comparaStrings(respostaCorreta,respostaUser);

    console.log(nivelMaisEnergetico(respostaCorreta));
    console.log(nivelMaisExterno(respostaCorreta));
    document.getElementById("resultado").innerHTML = "";
    if (listaDados[2]){
        // document.getElementById("resultado").innerHTML += "<img src=../img/correta.png class='icon' >"+"<br>";
        document.getElementById("resultado").innerHTML += "<img src=../img/correta.svg class='icon' >";//+"<br>";
        document.getElementById("resultado").innerHTML += "<p style='display:inline'>LOL Muito bem!Escolha outros elementos</p>";
    }
    else{
        // document.getElementById("resultado").innerHTML = "<img src=../img/errada.png class='icon' >"+"<br>";
        document.getElementById("resposta").innerHTML ="<span> Resposta correta: </span>"+ listaDados[0];
        document.getElementById('respostaUserDiv').innerHTML ="<span>Sua resposta:</span/>"+ listaDados[1];

        document.getElementById("resultado").innerHTML = "<img src=../img/errada.svg class='icon' >";//+"<br>";
        document.getElementById("resultado").innerHTML += "<p style='display:inline'>OPSLOL...</p><p>Não desanime!Revise o diagrama</p>";

    }
    document.getElementById("info").innerHTML = "<br>"+
    "<h4 class='title'>Infomações adicionais</h4>"+
    "<p>Sub nível mais energético: "+nivelMaisEnergetico(respostaCorreta).slice(0,2)+"</p>"+
    "<p>Sub nível mais externo: "+ nivelMaisExterno(respostaCorreta).slice(0,2)+"</p>";
}
function nivelMaisEnergetico(respostaCorreta){
    respostaCorreta = respostaCorreta.trim().split(" ");
    return respostaCorreta[respostaCorreta.length-1]
}
function nivelMaisExterno(respostaCorreta){
    respostaCorreta = respostaCorreta.trim().split(" ");
    let maisExterno = respostaCorreta[0];
    for (let i=0;i<respostaCorreta.length;i++){
        if (maisExterno[0]<respostaCorreta[i][0]){
            maisExterno = respostaCorreta[i];
        }
    }
    return maisExterno;
}
function comparaStrings(string1,string2){
    //String 1 é a correta
    let dados = [];
    let string1Formatada = "";
    let string2Formatada = "";
    let s1,s2,iguais=true;
    string1 = string1.split(" ");
    string2 = string2.split(" ");
    let t = string1.length>string2.length ? string1.length: string2.length;
    for (let i=0;i<t;i++){
        s1 = string1[i];
        s2 = string2[i];
        if (s2!= undefined){
            if (s1!=s2){
                string2Formatada += "<span class='spanIncorreto'> "+s2+" </span>";
                iguais=false;
            }
            else{
                string2Formatada += "<span class='spanCorreto'> "+s2+" </span>";
            }
        }
        if (s1!=undefined){
            string1Formatada += "<span> "+s1+" </span>";
        }
        if (s2==undefined && s1!=undefined){
            iguais=false;
        }

    }
    dados.push(string1Formatada,string2Formatada,iguais);
    return dados;
}
function resposta(n) {
    let aux = 0;
    let inicio = "1s";
    let string1 = "";
    let falta = "1";
    while (falta != 0) {
        falta = n - aux;
        let capacidade = this.defineCapacidade(inicio[1]);
        if (falta >= capacidade) {
            string1 += inicio + capacidade + " ";
            inicio = dic[inicio];
            aux += capacidade;
        } else if (falta == 0) {
        } else {
            string1 += inicio + falta + " ";
            aux += falta;
        }
    }
    return string1;
}
function distribuir(n,tipo,id="") {
    /*
    tipos:
    1>>>Neutro
    2>>Ânio
    3>>Cátion
    */
    let inicio = "1s";
    let string="";
    let falta=n;
    let capacidade;
    while (falta!=0) {
        capacidade = defineCapacidade(inicio[1]);
        if (falta>capacidade){
            string += " <span>"+inicio+"</span>"+"<sup>"+capacidade+"</sup> ";
            inicio = dic[inicio];
            falta-=capacidade;
        }
        else{
            if (tipo==1){
                string = "<sup>"+n+"</sup>"+ elementos[n-1]+" - "+(string+"<span>"+inicio+"</span>"+"<sup>"+falta+"</sup>");
            }
            else if(tipo==2){
                string = "<sup>"+n+"</sup>"+ elementos[n-1]+"<sup>-"+(capacidade-falta)+"</sup>"+" - "+ string+"<span>"+inicio+"</span>"+"<sup>"+capacidade+"</sup>";
            }
            else{
                string = "<sup>"+n+"</sup>"+ elementos[n-1]+"<sup>+"+falta+"</sup>"+" - "+ string;
            }
            falta=0;
        }
    }
    document.getElementById(id).innerHTML = string;
    return string;
}
function defineCapacidade(s) {
    if (s == "s") {
        return 2;
    } else if (s == "p") {
        return 6;
    } else if (s == "d") {
        return 10;
    } else if (s == "f") {
        return 14;
    }
}
//distribuir(1,'ex1');
function distribuicaoCompacta(respostaCerta){
 let externo = nivelMaisExterno(respostaCorreta)


}

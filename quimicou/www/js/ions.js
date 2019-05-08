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

var naEscolhido;
var carga;
var letra;
function comparaStrings(string1,string2){
    //String 1 é a correta
    let dados = [];
    let string1Formatada = "";
    let string2Formatada = "";
    let s1,s2,iguais=true;
    string1 = string1.trim().split(" ");
    string2 = string2.trim().split(" ");
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
function limpar(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resposta").innerHTML = "";
    document.getElementById("respostaUserDiv").innerHTML = "";
    document.getElementById("respostaUser").value = "";
    document.getElementById("info").innerHTML = "";

}
function verificarIons(){
    if (naEscolhido==undefined){
      return;
    }
    //document.getElementById("menu").style.position = "static";
    let respostaUser = document.getElementById("respostaUser").value.trim();

    naIon = parseInt(naEscolhido)-parseInt(carga);
    // console.log(naIon);
    // console.log(letra);
    if (letra!="d"){
      var respostaCorreta = resposta(naIon).trim();
      // console.log("respostaCorreta: "+respostaCorreta);
    }
    else{
      let respostaCorretaAux = resposta(naEscolhido).trim();
      let list = respostaCorretaAux.trim().split(" ");
      // console.log(list)
      var respostaCorreta="";
      tam = list.length;
      for (let i=0;i<tam;i++){
        if (i!=(tam-2)){
          respostaCorreta += list[i]+" "
        }
      }
    }

    // console.log("respostaCorreta: "+respostaCorreta);
    let listaDados = comparaStrings(respostaCorreta,respostaUser);

    // console.log(nivelMaisEnergetico(respostaCorreta));
    // console.log(nivelMaisExterno(respostaCorreta));
    limpar();
    // document.getElementById("resultado").innerHTML = "";
    if (listaDados[2]){
        // document.getElementById("resultado").innerHTML += "<img src=../img/correta.png class='icon' >"+"<br>";
        // document.getElementById("resultado").innerHTML = "";
        // document.getElementById("resposta").innerHTML ="";
        // document.getElementById('respostaUserDiv').innerHTML ="";

        document.getElementById("resultado").innerHTML = "<img src=../img/correta.svg class='icon' >";//+"<br>";
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
function sortearIons(){
    let i = Math.floor(Math.random() * 100);
    let elemeto_quimico = elementos[i-1];
    naEscolhido = i;
    // document.getElementById("elemento").innerHTML = "<sup>"+(i)+"</sup>"+"<h3>"+elemeto_quimico+"</h3>";
    defineIon(n);
    limpar();
    //return elemeto_quimico;
}
function nivelMaisEnergetico(respostaCorreta){
    respostaCorreta = respostaCorreta.trim().split(" ");
    return respostaCorreta[respostaCorreta.length-1]
}
function nivelMaisExterno(respostaCorreta){
    respostaCorretaAux = respostaCorreta.trim();//.split(" ");
    respostaCorreta = ordenaNivel(respostaCorretaAux).trim().split(" ");
    let maisExterno = respostaCorreta[respostaCorreta.length-1];
    // for (let i=0;i<respostaCorreta.length;i++){
    //     if (maisExterno[0]<=respostaCorreta[i][0]){
    //         maisExterno = respostaCorreta[i];
    //     }
    // }
    return maisExterno;
}
function escolherIons(){
    let n = prompt("Digite o nº atômico do elemento:",1);
    if (n==undefined){n=1}
    let elemeto_quimico = elementos[n-1];
    naEscolhido = n;
    defineIon(n)
    limpar();
    //return elementos[n];
}
function defineIon(n){
  let distribuicaoElemento = ordenaNivel(distribuirElemento(n));
  // console.log(distribuirElemento(n));
  // console.log(distribuirElemento(n).length)
  // console.log(distribuicaoElemento);
  // console.log(distribuicaoElemento.length)
  document.getElementById("numeroAtomico").innerHTML = n;
  document.getElementById("elementoQuimico").innerHTML = elementos[n-1];
  let energetico =  nivelMaisEnergetico(distribuicaoElemento)
  let externo = nivelMaisExterno(distribuicaoElemento)

  // console.log(energetico)
  // console.log(externo)
  let ultimaLetra = energetico[1]
  let ultimoNumero = parseInt(energetico[2])

  let letraExterna = externo[1]
  let numeroExterno = parseInt(externo[2])

  let tipo;
  if (ultimaLetra=="s"){
    document.getElementById("sinal").innerHTML = "+"+ultimoNumero;
    carga = ultimoNumero;
    letra="s";
  }
  else if (ultimaLetra=="p" && ultimoNumero==1){
    console.log("-----------------------------");
    if (energetico==externo){
      document.getElementById("sinal").innerHTML = "+"+(ultimoNumero);
      carga = ultimoNumero

    }
    else{
      document.getElementById("sinal").innerHTML = "+"+(ultimoNumero+numeroExterno);
      carga = ultimoNumero+numeroExterno;
    }
    letra="p";
  }
  else if (ultimaLetra=="p" && ultimoNumero>1 && ultimoNumero<=5){
    document.getElementById("sinal").innerHTML = ""+(ultimoNumero-6);
    carga = ultimoNumero-6;
    letra="p";
  }
  else{
    document.getElementById("sinal").innerHTML = "+"+(2);
    carga =2;
    letra="d";
    // tipo = "+";
  }
  // return carga
}
function distribuirElemento(n){
  var aux=0;
  var inicio = "1s";
  // var string=elementos[n-1]+'-';
  string = "";
  let falta="1";
  while (falta!=0) {
      falta = n-aux;
      let capacidade = defineCapacidade(inicio[1]);
      if (falta>=capacidade){
          string += inicio+capacidade+" ";
          inicio = dic[inicio];
          aux+=capacidade;
      }
      else if(falta==0){}
      else{
          string += inicio+falta;
          aux+=falta;
      }
  }
  return string
}
function ordenaNivel(distribicaoEletronica){
  let lista = distribicaoEletronica.trim().split(" ");
  let ordenamento=[];
  let menor="9";
  let ordenado="";
  let aux;
  let tam = lista.length
  // console.log("tam:"+tam);
  // console.log(lista)
  for (let i=0;i<tam;i++){
    for (let j=0;j<tam;j++){
      if (lista[j][0]<menor && ordenamento.indexOf(lista[j])==-1){
        // console.log(lista[j][0])

        menor=lista[j][0];
        aux = lista[j]
      }
    }
    ordenamento.push(aux);
    menor="9";
  }
  console.log("lista: "+lista)
  console.log("orede: "+ ordenamento)

  // console.log("lista: "+tamanho(lista))
  // console.log("orede: "+ tamanho(ordenamento))


  for (let y=0;y<ordenamento.length;y++){
    ordenado +=ordenamento[y]+" "
  }
  return ordenado;
}

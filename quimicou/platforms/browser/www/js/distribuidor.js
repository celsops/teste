var dic = {
    "1s": "2s",
    "2s": "2p",
    "2p": "3s",
    "3s": "3p",
    "3p": "4s",
    "4s": "3d",
    "3d": "4p",
    "4p": "5s",
    "5s": "4d",
    "4d": "5p",
    "5p": "6s",
    "6s": "4f",
    "4f": "5d",
    "5d": "6p",
    "6p": "7s",
    "7s": "5f",
    "5f": "6d",
    "6d": "7p",
    "7p": "fim"
};
var elementosQuimicos = [
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


function mostrar() {
    var n = document.getElementById("natomico").value;
    var aux=0;
    var inicio = "1s";
    var string=elementosQuimicos[n-1]+'-';
    let falta="1";
    while (falta!=0) {
        falta = n-aux;
        let capacidade = defineCapacidade(inicio[1]);
        if (falta>=capacidade){
            string += " <span>"+inicio+"</span>"+"<sup>"+capacidade+"</sup> ";
            inicio = dic[inicio];
            aux+=capacidade;
        }
        else if(falta==0){}
        else{
            string += "<span>"+inicio+"</span>"+"<sup>"+falta+"</sup>";
            aux+=falta;
        }
        
    }
    document.getElementById("resposta").innerHTML = string;

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

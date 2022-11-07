class Contas {
    constructor(luz, gas, cartao,) {
        this.luz = luz;
        this.gas = gas;
        this.cartao = cartao;
    }
}

function totalMes(luz, gas, cartao) {
    return luz + gas + cartao;
}
    /*let luz = luz.value;
    let gas = gas.value;
    let cartao = cartao.value;
    
    return parseInt; this.luz + this.gas + this.cartao;
}*/

const janeiro = new Contas(150, 150, 380);
document.getElementById("contas0").innerHTML = "Janeiro:" + " " + 
    janeiro.luz + " " + janeiro.gas + " " + janeiro.cartao;

    //const soma0 = parseInt("luz" + "gas");
//janeiro.totalMes();
console.log(janeiro);

const fevereiro = new Contas(180, 180, 380);
document.getElementById("contas1").innerHTML = "Fevereiro:" + " " + 
    fevereiro.luz + " " + fevereiro.gas + " " + fevereiro.cartao;
console.log(fevereiro);

const marco = new Contas(180, 180, 380);
document.getElementById("contas2").innerHTML = "Março:" + " " + 
    marco.luz + " " + marco.gas + " " + marco.cartao;
console.log(marco);

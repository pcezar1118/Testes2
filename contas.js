class Contas {
    constructor(luz, gas, cartao, internet, saude, carro, seguro, apartamento, condominio) {
        this.luz = luz;
        this.gas = gas;
        this.cartao = cartao;
        this.internet = internet;
        this.saude = saude;
        this.carro = carro;
        this.seguro = seguro;
        this.apartamento = apartamento;
        this.condominio = condominio;
    }
}

function totalMes() {
    let luz = luz.value;
    let gas = gas.value;
    let cartao = cartao.value;
    let internet = internet.value;
    let saude = saude.value;
    let carro = carro.value;
    let seguro = seguro.value;
    let apartamento = apartamento.value;
    let condominio = condominio.value;
    return this.luz + this.gas + this.cartao + this.internet + this.saude + this.carro +
        this.seguro + this.apartamento + this.condominio;
}

const janeiro = new Contas(150, 150, 380, 180, 250, 1325, 245, 1100, 400);
document.getElementById("contas0").innerHTML = "Janeiro:" + " " + 
    janeiro.luz + " " + janeiro.gas + " " + janeiro.cartao + " " + janeiro.internet +
    " " + janeiro.saude + " " + janeiro.carro + " " + janeiro.seguro + " " + janeiro.apartamento + 
    " " + janeiro.condominio;
console.log(janeiro);


const fevereiro = new Contas(180, 180, 380, 170, 250, 1325, 245, 1110, 405);
document.getElementById("contas1").innerHTML = "Fevereiro:" + " " + 
    fevereiro.luz + " " + fevereiro.gas + " " + fevereiro.cartao + " " + fevereiro.internet +
    " " + fevereiro.saude + " " + fevereiro.carro + " " + fevereiro.seguro + " " + fevereiro.apartamento +
    " " + fevereiro.condominio;
console.log(fevereiro);

const marco = new Contas(180, 180, 380, 170, 250, 1325, 245, 1110, 405);
document.getElementById("contas2").innerHTML = "Março:" + " " + 
    marco.luz + " " + marco.gas + " " + marco.cartao + " " + marco.internet +
    " " + marco.saude + " " + marco.carro + " " + marco.seguro + " " + marco.apartamento +
    " " + marco.condominio;
console.log(marco);
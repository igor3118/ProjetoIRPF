function calcularIR(salario){
    let ir = 0;
    if (salario > 4664.68) {
        ir = (salario * 0.275) - 896.01;
    } else if (salario >= 3751.06) {
        ir = (salario * 0.225) - 662.77;
    } else if (salario >= 2826.66) {
        ir = (salario * 0.15) - 381.44;
    } else if (salario >= 2259.21) {
        ir = (salario * 0.075) - 169.44;
    }
    return ir;
}

function porcentageAliquota(salario, ir){
    if (ir === 0) {
        return 0;
    }
    return (ir / salario) * 100;
}

function Calcular(){
    const salarioStr = document.getElementById("salario").value;

    if (salarioStr === "" || isNaN(salarioStr)) {
        alert("Por favor, insira um valor numérico válido para o salário.");
        return;
    }
    const salario = parseFloat(salarioStr);
    const ir = calcularIR(salario);
    const aliquota = porcentageAliquota(salario, ir);

    document.getElementById("resultado").innerHTML = "O valor do IR é: R$ " + ir.toFixed(2);
    document.getElementById("aliquota").innerHTML = "A alíquota efetiva é: " + aliquota.toFixed(2) + "%";
}

function Limpar(){
    document.getElementById("salario").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("aliquota").innerHTML = "";
}
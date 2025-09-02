// Funções matemáticas básicas
function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Erro: divisão por zero";
    return a / b;
}

function percentual(a, b) {
    return (a / 100) * b;
}

// Decide a operação com base no operador
function operacao(n1, n2, op) {
    switch (op) {
        case '+': return soma(n1, n2);
        case '-': return subtrai(n1, n2);
        case '*': return multiplica(n1, n2);
        case '/': return divide(n1, n2);
        case '%': return percentual(n1, n2);
        default: return 'operação inválida';
    }
}

// Adiciona valor ao visor
function adicionarNoVisor(valor) {
    document.getElementById('visor').value += valor;
    //document.getElementById('visor').value = document.getElementById('visor').value + valor;
}

// Limpa todo o visor (C)
function limparVisor() {
    document.getElementById('visor').value = '';
}

// CE: apaga a última entrada (número ou operador completo)
function limparEntrada() {
    let visor = document.getElementById('visor');
    visor.value = visor.value.replace(/(\d+\.?\d*|\D)$/, '');
}

function calcularResultado() {
    const visor = document.getElementById('visor');
    const expressao = visor.value;
    const operadores = ['+', '-', '*', '/', '%'];

    const operador = operadores.find(op => expressao.includes(op));
    if (!operador) return visor.value = "Expressão inválida";

    const partes = expressao.split(operador);
    if (partes.length !== 2) return visor.value = "Expressão inválida";

    const [n1, n2] = partes.map(Number);
    if (isNaN(n1) || isNaN(n2)) return visor.value = "Expressão inválida";

    visor.value = operacao(n1, n2, operador);
}
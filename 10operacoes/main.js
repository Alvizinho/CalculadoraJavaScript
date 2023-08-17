function calculadora() {
  var num1 = parseFloat(prompt("Digite o primeiro número: "));
  var num2 = parseFloat(prompt("Digite o segundo número: "));
  var operacao = prompt("Digite a operação (+, -, *, /): ");

  if (operacao == "+") {
    alert(num1 + num2);
  } else if (operacao == "-") {
    alert(num1 - num2);
  } else if (operacao == "*") {
    alert(num1 * num2);
  } else if (operacao == "/") {
    alert(num1 / num2);
  } else {
    alert("Operação inválida!");
  }
}
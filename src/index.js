const lista = ["banana", "morango", "abacaxi"];

function adicionarFruta(fruta) {
  lista.push(fruta);
}

function imprimirFrutas() {
  lista.forEach((fruta) => {
    console.log(fruta);
  });
}

function excluirFruta(fruta) {
  const posicao = lista.findIndex((item) => item === fruta);

  lista.splice(posicao, 1);
}

adicionarFruta("laranja");

excluirFruta("morango");

imprimirFrutas();

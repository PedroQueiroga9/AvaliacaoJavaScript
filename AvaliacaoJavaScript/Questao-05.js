function tabelaMultiplicacao(numero) {
    
    if (numero <= 0) {
      console.log("insira um número positivo.");
      return;
    }
  
    console.log(`Tabela de multiplicação de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  tabelaMultiplicacao(5);   
  tabelaMultiplicacao(-3);  
  
let aluno = {
    nome: "Paulo",          
    notas: [8, 7, 10],  
     
    media: function() {
      let soma = 0;
  
      for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i];
      }
  
      let media = soma / this.notas.length;
      return media;
    }
  };
  
  console.log(`O aluno ${aluno.nome} tem a média: ${aluno.media().toFixed(2)}`);
  
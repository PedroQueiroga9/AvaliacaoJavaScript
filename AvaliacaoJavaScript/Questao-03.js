let tarefas = [];

for (let i = 1; i <= 5; i++) {
  let tarefa = prompt(`Digite a tarefa ${i}:`);
  tarefas.push(tarefa); 
}

console.log("Suas tarefas:");
for (let i = 0; i < tarefas.length; i++) {
  console.log(`${i + 1}. ${tarefas[i]}`);
}

let indice = prompt("Digite o número da tarefa que você concluiu:");
tarefas.splice(indice - 1, 1); 

console.log("Tarefas restantes:");
for (let i = 0; i < tarefas.length; i++) {
  console.log(`${i + 1}. ${tarefas[i]}`);
}

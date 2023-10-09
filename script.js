const github = require("@actions/github");

const context = github.context;


if (context.eventName === "push" && context.payload.pull_request) {
  console.log("Este evento é o resultado da mesclagem de um pull request.");
} else {
  console.log("Este evento é um push regular.");
}



console.log(`O nome do evento é: ${context.payload.pull_request}`);
console.log(`O nome do evento é: ${JSON.stringify(context,null,2)}`);

console.log(`O nome do evento é: ${context.eventName}`);


if (context.payload.pull_request && context.payload.pull_request.merged) {
  console.log("A solicitação de pull request foi mesclada com sucesso.22");
} else {
  console.log("A solicitação de pull request não foi mesclada.22");
}



const github = require("@actions/github");
const { context } = require("@actions/github");

const context = github.context;

if (context.eventName === "push" && context.payload.pull_request) {
  console.log("Este evento é o resultado da mesclagem de um pull request.");
} else {
  console.log("Este evento é um push regular.");
}


const eventName = context.eventName;
console.log(`O nome do evento é: ${eventName}`);

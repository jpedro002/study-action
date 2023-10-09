const { getOctokit, context, } = require('@actions/github');
const github = require("@actions/github");


console.log(`O nome do evento é: ${JSON.stringify(github.context.payload.issue.body,null,2)}`);

async function run() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const octokit = getOctokit(token);

    const issueNumber = context.payload.issue.number;

    // Faz uma solicitação para obter detalhes da issue
    const { data: issue } = await octokit.issues.get({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: issueNumber,
    });

    const issueContent = issue.body;
    console.log(`Conteúdo da issue: ${issueContent}`);
  } catch (error) {
    console.error(`Erro ao acessar a issue: ${error.message}`);
  }
}

run();

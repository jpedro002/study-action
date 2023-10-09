const github = require('@actions/github');

async function run() {
  try {
    const octokit = new github.getOctokit(process.env.GITHUB_TOKEN);

    const issueNumber = github.context.payload.issue.number;

    // Faz uma solicitação para obter detalhes da issue
    const { data: issue } = await octokit.issues.get({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number: issueNumber,
    });

    const issueContent = issue.body;
    console.log(`Conteúdo da issue: ${issueContent}`);
  } catch (error) {
    console.error(`Erro ao acessar a issue: ${error.message}`);
  }
}

run();

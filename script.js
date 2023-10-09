 const github = require('@actions/github');
          const context = github.context;

          if (context.eventName === 'push' && context.payload.pull_request) {
            console.log('Este evento é o resultado da mesclagem de um pull request.');
          } else {
            console.log('Este evento é um push regular.');
          }

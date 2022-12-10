import inquirer from 'inquirer';
import path from 'path';
import cloneRepositoryIntoFolder from '../utils/cloneRepositoryIntoFolder';
import createAppFolder from '../utils/createAppFolder';
import validateAppName from '../utils/validators/validateAppName';

function createApp() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        message: 'Enter app name: ',
        name: 'appName',
        validateAppName,
      },
      {
        type: 'list',
        choices: ['yarn', 'npm'],
        message: 'Choose your package manager: (yarn) ',
        name: 'packageManager'
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      const { appName, packageManager } = answers;
      const cwd = process.cwd();
      const dir = path.join(cwd, `/${answers.appName}`);
      createAppFolder(dir);
      cloneRepositoryIntoFolder(dir, appName, packageManager);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

export default createApp;

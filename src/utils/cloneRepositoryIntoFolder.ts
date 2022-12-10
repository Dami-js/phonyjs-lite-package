import helperFunctions from '../utils';
import { exec } from 'child_process';
import { repository } from '../config/constants';
import installPackages from './installPackages';

const { log } = helperFunctions;

function cloneRepositoryIntoFolder(
  dir: string,
  appName: string,
  packageManager: string,
) {
  log({
    message: '- Fetching files...',
    color: 'INFO',
    title: 'Info',
  });
  exec(`git clone ${repository} ${dir}`, () => {
    installPackages({ packageManager, appName, dir });
  });
}

export default cloneRepositoryIntoFolder;

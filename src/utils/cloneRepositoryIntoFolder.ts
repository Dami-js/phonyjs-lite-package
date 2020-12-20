import helperFunctions from '../utils';
import { exec } from 'child_process';
import { repository } from '../config/constants';
import updatePackageJson from './updatePackageJson';

const { log } = helperFunctions;

function cloneRepositoryIntoFolder(dir: string, appName: string) {
  log({
    message: '- Fetching files...',
    color: 'INFO',
    title: 'Info',
  });
  exec(`git clone ${repository} ${dir}`, () => {
    updatePackageJson(dir, appName);
  });
}

export default cloneRepositoryIntoFolder;

import helperFunctions from '.';
import { exec } from 'child_process';
import { repository } from '../config/constants';
import updatePackageJson from './updatePackageJson';

const { log } = helperFunctions;

interface Props {
  packageManager: string;
  dir: string;
  appName: string;
}

function installPackages({ packageManager, dir, appName }: Props) {
  log({
    message: '- Installing packages ...',
    color: 'INFO',
    title: 'Info',
  });
  exec(`${packageManager} install --cwd ${dir}`, () => {
    updatePackageJson(dir, appName);
  });
}

export default installPackages;

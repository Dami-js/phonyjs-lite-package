import fs from 'fs';
import path from 'path';
import log from './customLog';

export default function updatePackageJson(dir: string, appName: string) {
  if (!fs.existsSync(dir)) {
    log({
      message:
        '- An Error Updating package.json file [Cannot find app folder] ',
      color: 'ERROR',
      title: 'Error',
    });
    process.exit();
  }

  const jsonFile = path.join(dir, '/package.json');

  let data = JSON.parse(fs.readFileSync(jsonFile).toString());
  data.name = appName;
  fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2));
  console.log('Updated package.json file');
}

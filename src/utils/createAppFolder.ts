import fs from 'fs';
import helperFunctions from '.';

const { log } = helperFunctions;

function createAppFolder(dir: string) {
  // check if folder name exist
  if (fs.existsSync(dir)) {
    log({
      message:
        '- A folder with the app name exists, please choose another name',
      color: 'ERROR',
      title: 'Error',
    });
    return;
  }
  // create folder if it does not exist
  fs.mkdirSync(dir);
  log({
    message: '- Creating app...',
    color: 'INFO',
    title: 'Info',
  });

  log({
    message: 'App folder created',
  });
}

export default createAppFolder;

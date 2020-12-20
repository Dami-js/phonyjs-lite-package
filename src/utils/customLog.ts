type COLOR = 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS';

export interface ILog {
  message?: string;
  color?: COLOR;
  title?: string;
}

export default function log({ message, color, title = '' }: ILog): void {
  switch (color) {
    case 'INFO':
      console.info('\x1b[36m%s\x1b[0m', title, message);
      break;
    case 'WARNING':
      console.warn('\x1b[33m%s\x1b[0m', title, message);
      break;
    case 'ERROR':
      console.error('\x1b[31m%s\x1b[0m', title, message);
      break;
    case 'SUCCESS':
      console.log('\x1b[32m%s\x1b[0m', title, message);
      break;
    default:
      console.log(title, message);
      break;
  }
}

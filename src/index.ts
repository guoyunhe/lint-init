import { spawn } from 'child_process';

export interface Options {
  repeat?: number;
}

export function action(word: string, { repeat = 1 }: Options) {
  for (let i = 0; i < Number(repeat); i++) {
    console.log(word);
  }
}

export async function runCommand(command: string) {
  return new Promise<number | null>((resolve) => {
    const child = spawn(command, {
      shell: true,
    });

    const handleCancel = () => {
      // child.kill();
    };

    child.on('exit', (code) => {
      resolve(code);
      ['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((signal) => process.off(signal, handleCancel));
    });
    ['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((signal) => process.on(signal, handleCancel));
  });
}

console.log('hello world');

type ShellType  = 'zsh' | 'bash'


let gShellType: ShellType;

export function setup(options: {
  shellType: ShellType,
}) {
  gShellType = options.shellType
}


export function openTerminalHorizontal(command: string) {
  vim.api.nvim_command(`belowright split term://${gShellType}`);
  vim.opt.number = false;
  vim.opt.bufhidden = 'hide';
  vim.api.nvim_command('startinsert'),
}


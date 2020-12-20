function validateAppName(input: string) {
  const regex = /\s/g;
  const hasUpperCase = /[A-Z]/.test(input);
  if (input.match(regex) || hasUpperCase) {
    return 'App name cannot contain space or uppercase value';
  }
  return true;
}

export default validateAppName;

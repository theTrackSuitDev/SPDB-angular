import { ValidatorFn } from '@angular/forms';

export function passMatchValidator(
  password: string,
  rePassword: string
): ValidatorFn {
  return (control) => {
    const passwordField = control.get(password);
    const rePasswordField = control.get(rePassword);

    const areMatched = passwordField?.value === rePasswordField?.value;

    if (areMatched) {
      return null;
    }

    return { passMatchValidator: true };
  };
}

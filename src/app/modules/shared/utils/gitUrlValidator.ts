import { ValidatorFn } from "@angular/forms";

export function gitUrlValidator(): ValidatorFn {
    const pattern = /^https?:\/\/github\.com\//;

    return (control) => {
        const isValid = control.value === '' || pattern.test(control.value);

        if (isValid) {
            return null;
        }

        return { gitUrlValidator: true}
    }
}
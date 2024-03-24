import { ValidatorFn } from "@angular/forms";

export function imageUrlValidator(): ValidatorFn {
    const pattern = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg|webp))/i;

    return (control) => {
        const isValid = control.value === '' || pattern.test(control.value);

        if (isValid) {
            return null;
        }

        return { imageUrlValidator: true}
    }
}
import { ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
    const pattern = /(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/g;

    return (control) => {
        const isValid = control.value === '' || pattern.test(control.value);

        if (isValid) {
            return null;
        }

        return { emailValidator: true}
    }
}
import { ValidatorFn } from "@angular/forms";

export function videoUrlValidator(): ValidatorFn {
    const pattern = /^(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})$/;

    return (control) => {
        const isValid = control.value === '' || pattern.test(control.value);

        if (isValid) {
            return null;
        }

        return { videoUrlValidator: true}
    }
}
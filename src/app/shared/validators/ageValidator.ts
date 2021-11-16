import { AbstractControl } from '@angular/forms';

export const ageValidator = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  if (
    control.value !== null &&
    (isNaN(control.value) || control.value < 1 || control.value > 120)
  ) {
    return { ageValidator: true };
  }
  return null;
};

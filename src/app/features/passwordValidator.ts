import { AbstractControl } from "@angular/forms";

export function passwordValidator(control: AbstractControl) {
 const password = control.get('password')
 const confirmPassword = control.get('confirmPassword')
 if (password?.value !== confirmPassword?.value){
 return {notMatch: true}
}
return null
}
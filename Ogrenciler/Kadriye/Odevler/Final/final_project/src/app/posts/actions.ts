'use server'
import { redirect } from 'next/navigation'
import { changePasswordFirebase, loginFirebase, registerFirebase } from '../../../firebase/authControl'


export async function register(formData: FormData) {
    console.log(formData)
    registerFirebase(formData)
    //   redirect(`/profile`)
}
export async function login(formData: FormData) {
    loginFirebase(formData);
}
export async function changePassword(formData: FormData) {
    changePasswordFirebase(formData);
}
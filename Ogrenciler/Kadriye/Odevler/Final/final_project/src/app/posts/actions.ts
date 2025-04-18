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

export async function getFilteredData(formData: FormData) {
    const query = new URLSearchParams()

    for (const key of ['price_min', 'price_max', 'market_cap_min', 'market_cap_max', 'sort', 'sort_dir']) {
        const value = formData.get(key)
        if (value) query.append(key, value.toString())
    }

    redirect(`/market?${query.toString()}`)
}
